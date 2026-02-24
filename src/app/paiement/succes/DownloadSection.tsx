"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface DocInfo {
  id: string;
  title: string;
  icon: string;
}

function DownloadContent({ documents }: { documents: DocInfo[] }) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [productType, setProductType] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) return;
    // Fetch session info to determine product type
    fetch(`/api/download/info?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.product) setProductType(data.product);
      })
      .catch(() => {});
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <p className="text-red-700 font-semibold">
          Session de paiement introuvable. Si vous avez effectué un paiement,
          vérifiez votre email ou contactez-nous.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Physical order notice */}
      {productType === "pack-physical" && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-bold text-blue-800 mb-1">Envoi postal confirmé</h3>
              <p className="text-sm text-blue-700">
                Vos {documents.length} documents imprimés sur papier A4 épais et plastifiés seront envoyés
                à l&apos;adresse indiquée lors du paiement sous <strong>48 à 72h ouvrées</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Download section - available for both offers */}
      <div>
        <h2 className="font-bold text-gray-900 mb-2">
          {productType === "pack-physical"
            ? "En attendant la réception, téléchargez vos documents :"
            : "Téléchargez vos documents :"}
        </h2>
      </div>

      {/* Download all */}
      <a
        href={`/api/download?session_id=${sessionId}`}
        className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg w-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Télécharger le pack complet (PDF)
      </a>

      {/* Individual downloads */}
      <div>
        <h2 className="font-bold text-gray-900 mb-4">
          Ou téléchargez document par document :
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href={`/api/download?session_id=${sessionId}&doc=${doc.id}`}
              className="flex items-center gap-3 bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md rounded-lg p-4 transition-all text-sm"
            >
              <span className="text-xl" aria-hidden="true">{doc.icon}</span>
              <span className="flex-1 font-medium text-gray-800">{doc.title}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DownloadSection({ documents }: { documents: DocInfo[] }) {
  return (
    <Suspense
      fallback={
        <div className="text-center py-8 text-gray-500">
          Chargement des liens de téléchargement...
        </div>
      }
    >
      <DownloadContent documents={documents} />
    </Suspense>
  );
}
