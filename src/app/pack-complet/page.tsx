import type { Metadata } from "next";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CheckoutButton } from "./CheckoutButton";

export const metadata: Metadata = {
  title: "Pack Affichage Obligatoire Restaurant – À partir de 9,90 €",
  description:
    "Téléchargez ou recevez par la poste le pack complet des affichages obligatoires pour restaurant et bar. Documents officiels conformes, prêts à afficher.",
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
    offers: [
      {
        "@type": "Offer",
        name: "Pack Numérique",
        price: "9.90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://affichage-obligatoire-restaurant.fr/pack-complet",
      },
      {
        "@type": "Offer",
        name: "Pack Imprimé",
        price: "19.90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://affichage-obligatoire-restaurant.fr/pack-complet",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Pack complet" },
            ]}
          />

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Tous les affichages obligatoires pour votre restaurant
          </h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
            <strong>{DOCUMENTS.length} documents officiels</strong> conformes à la réglementation
            française en vigueur. Choisissez la formule qui vous convient.
          </p>

          {/* Two pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Digital offer */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="text-center mb-6">
                <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                  Pack Numérique
                </span>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-gray-900">9,90</span>
                  <span className="text-2xl font-bold text-gray-500 ml-1">€</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Paiement unique · Téléchargement immédiat
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {DOCUMENTS.length} documents PDF au format A4
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Documents officiels conformes
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Téléchargement immédiat après paiement
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  À imprimer vous-même
                </li>
              </ul>

              <CheckoutButton offerType="digital" label="Acheter le pack numérique – 9,90 €" />

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Paiement sécurisé par Stripe
              </div>
            </div>

            {/* Physical offer */}
            <div className="bg-white border-2 border-brand rounded-2xl p-8 shadow-xl flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Recommandé
                </span>
              </div>

              <div className="text-center mb-6">
                <span className="text-sm font-medium text-brand bg-brand/10 px-3 py-1 rounded-full">
                  Pack Imprimé
                </span>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-gray-900">19,90</span>
                  <span className="text-2xl font-bold text-gray-500 ml-1">€</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Paiement unique · Livraison incluse
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-1">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {DOCUMENTS.length} documents imprimés format A4
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Papier épais plastifié, prêt à afficher
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Envoi par la poste sous 48-72h
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  + Téléchargement PDF immédiat inclus
                </li>
              </ul>

              <CheckoutButton offerType="physical" label="Commander le pack imprimé – 19,90 €" />

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Paiement sécurisé par Stripe
              </div>
            </div>
          </div>

          {/* Document list */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Les {DOCUMENTS.length} documents inclus dans le pack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {CATEGORIES.map((cat) => {
                const docs = DOCUMENTS.filter((d) => d.category === cat.id);
                if (docs.length === 0) return null;
                return (
                  <div key={cat.id} className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span aria-hidden="true">{cat.icon}</span> {cat.label}
                    </h3>
                    <ul className="space-y-1">
                      {docs.map((doc) => (
                        <li key={doc.id} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {doc.shortTitle}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Pourquoi choisir nos documents ?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Documents officiels conformes à la réglementation en vigueur
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Mis à jour régulièrement selon les évolutions législatives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Paiement 100% sécurisé par Stripe (CB, Visa, Mastercard)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Soyez en conformité en quelques minutes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
