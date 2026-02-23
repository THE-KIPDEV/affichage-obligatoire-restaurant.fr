import type { Metadata } from "next";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CheckoutButton } from "./CheckoutButton";

export const metadata: Metadata = {
  title: "Pack Complet Affichage Obligatoire Restaurant – 14,90 €",
  description:
    "Téléchargez le pack complet des affichages obligatoires pour restaurant et bar. 14 documents PDF conformes, prêts à imprimer. Paiement sécurisé, téléchargement immédiat.",
  alternates: {
    canonical: "/pack-complet",
  },
};

export default function PackCompletPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pack Complet Affichage Obligatoire Restaurant",
    description: `Pack de ${DOCUMENTS.length} documents d'affichage obligatoire pour restaurant et bar, conformes à la réglementation française.`,
    offers: {
      "@type": "Offer",
      price: "14.90",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://affichage-obligatoire-restaurant.fr/pack-complet",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Pack complet" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Product Info */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Pack complet – Tous les affichages obligatoires
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Recevez immédiatement les <strong>{DOCUMENTS.length} documents</strong> d&apos;affichage
                obligatoire pour votre restaurant ou bar. Format PDF A4, prêts à imprimer,
                conformes à la réglementation française en vigueur.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Contenu du pack ({DOCUMENTS.length} documents)
              </h2>

              {CATEGORIES.map((cat) => {
                const docs = DOCUMENTS.filter((d) => d.category === cat.id);
                if (docs.length === 0) return null;
                return (
                  <div key={cat.id} className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span aria-hidden="true">{cat.icon}</span> {cat.label}
                    </h3>
                    <ul className="space-y-1">
                      {docs.map((doc) => (
                        <li key={doc.id} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {doc.shortTitle}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="font-bold text-gray-900 mb-3">Ce que vous obtenez :</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    {DOCUMENTS.length} documents PDF au format A4, prêts à imprimer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    Conformes à la réglementation française en vigueur
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    Documents à compléter avec vos informations (horaires, adresse, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    Téléchargement immédiat après paiement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    Paiement sécurisé par Stripe (CB, Visa, Mastercard)
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-xl sticky top-24">
                <div className="text-center mb-6">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Pack complet
                  </span>
                  <div className="mt-4">
                    <span className="text-5xl font-extrabold text-gray-900">14,90</span>
                    <span className="text-2xl font-bold text-gray-500 ml-1">€</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Paiement unique · Pas d&apos;abonnement
                  </p>
                </div>

                <CheckoutButton />

                <div className="mt-6 space-y-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Paiement 100% sécurisé par Stripe
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Téléchargement immédiat
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {DOCUMENTS.length} documents PDF format A4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
