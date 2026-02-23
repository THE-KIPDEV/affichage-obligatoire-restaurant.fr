import type { Metadata } from "next";
import { DOCUMENTS } from "@/lib/documents";
import { DownloadSection } from "./DownloadSection";

export const metadata: Metadata = {
  title: "Paiement confirmé – Téléchargez vos documents",
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            Merci pour votre achat !
          </h1>
          <p className="text-lg text-gray-600">
            Votre paiement a été confirmé. Vous pouvez maintenant télécharger vos documents.
          </p>
        </div>

        <DownloadSection documents={DOCUMENTS.map((d) => ({ id: d.id, title: d.shortTitle, icon: d.icon }))} />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
          <h2 className="font-bold text-amber-800 mb-2">Conseils d&apos;impression</h2>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Imprimez en format A4 pour un affichage conforme</li>
            <li>• Utilisez un papier de grammage 120g minimum pour une meilleure durabilité</li>
            <li>• Plastifiez les documents exposés à l&apos;humidité (cuisine, extérieur)</li>
            <li>• Complétez les champs à remplir (horaires, adresse, etc.) avant d&apos;afficher</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
