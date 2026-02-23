import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paiement annulé",
  robots: { index: false, follow: false },
};

export default function PaymentCancelledPage() {
  return (
    <main className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Paiement annulé
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Votre paiement n&apos;a pas été effectué. Aucun montant n&apos;a été débité de votre compte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pack-complet"
            className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Réessayer l&apos;achat
          </Link>
          <Link
            href="/"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
