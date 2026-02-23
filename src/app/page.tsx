import Link from "next/link";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";
import { DocumentCard } from "@/components/DocumentCard";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Affichage Obligatoire Restaurant",
    url: "https://affichage-obligatoire-restaurant.fr",
    description:
      "Tous les documents d'affichage obligatoire pour restaurant et bar en France.",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://affichage-obligatoire-restaurant.fr/affichages?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont les affichages obligatoires dans un restaurant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un restaurant doit afficher : l'interdiction de fumer, la protection des mineurs (vente d'alcool), l'origine des viandes bovines, les allergènes alimentaires, les prix des consommations, la licence de débit de boissons, les horaires d'ouverture, les numéros d'urgence, les informations de droit du travail, l'accessibilité PMR, les règles d'hygiène HACCP, et la vidéosurveillance le cas échéant.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles sont les sanctions en cas de non-affichage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les sanctions varient selon l'affichage manquant : de 68 € pour l'interdiction de fumer à 7 500 € pour la protection des mineurs, et jusqu'à 45 000 € pour l'accessibilité PMR. La fermeture administrative est possible pour les manquements les plus graves.",
        },
      },
      {
        "@type": "Question",
        name: "Où trouver les documents d'affichage obligatoire pour un restaurant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez télécharger tous les documents d'affichage obligatoire sur notre site. Nous proposons un pack complet de 14 documents conformes à la réglementation française, prêts à imprimer en format PDF.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Tous les affichages obligatoires
              <br />
              <span className="text-accent">pour votre restaurant ou bar</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Documents conformes à la réglementation française, prêts à imprimer.
              Interdiction de fumer, allergènes, licence, prix, hygiène, protection des mineurs…
              <strong> {DOCUMENTS.length} documents essentiels</strong> en un seul pack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pack-complet"
                className="bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                Télécharger le pack complet – 14,90 €
              </Link>
              <Link
                href="/affichages"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-white/20"
              >
                Voir tous les affichages
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              Paiement sécurisé par Stripe · Téléchargement immédiat · Format PDF imprimable
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              Pourquoi les affichages obligatoires sont essentiels ?
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              En France, tout restaurant ou bar doit respecter de nombreuses obligations
              d&apos;affichage. Le non-respect de ces règles expose l&apos;exploitant à des
              amendes pouvant aller de <strong>68 € à 45 000 €</strong> et à une
              fermeture administrative.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">⚠️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Évitez les amendes</h3>
                <p className="text-sm text-gray-600">
                  Les contrôles de la DGCCRF et de l&apos;inspection du travail sont fréquents
                  dans la restauration. Soyez en conformité.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">✅</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Documents conformes</h3>
                <p className="text-sm text-gray-600">
                  Nos documents respectent les textes de loi en vigueur et contiennent toutes
                  les mentions obligatoires.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-hidden="true">🖨️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Prêts à imprimer</h3>
                <p className="text-sm text-gray-600">
                  Format PDF A4, téléchargement immédiat après paiement. Imprimez et affichez
                  en quelques minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents by category */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              Les {DOCUMENTS.length} affichages obligatoires pour votre établissement
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Découvrez en détail chaque affichage obligatoire : réglementation applicable,
              contenu requis, emplacement et sanctions en cas de non-respect.
            </p>

            {CATEGORIES.map((category) => {
              const docs = DOCUMENTS.filter((d) => d.category === category.id);
              if (docs.length === 0) return null;
              return (
                <div key={category.id} className="mb-12" id={category.id}>
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span aria-hidden="true">{category.icon}</span>
                    {category.label}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docs.map((doc) => (
                      <DocumentCard key={doc.id} doc={doc} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <CTABanner />

        {/* FAQ Preview */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-xl border border-gray-200 p-6 group" open>
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Quels sont les affichages obligatoires dans un restaurant ?
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Un restaurant doit afficher obligatoirement : l&apos;interdiction de fumer,
                  la protection des mineurs (vente d&apos;alcool), l&apos;origine des viandes
                  bovines, les 14 allergènes alimentaires, les prix des consommations,
                  la licence de débit de boissons, les horaires d&apos;ouverture, les
                  numéros d&apos;urgence, les informations de droit du travail (inspection du
                  travail, médecine du travail, convention collective), l&apos;accessibilité
                  PMR, les règles d&apos;hygiène, et l&apos;information sur la
                  vidéosurveillance le cas échéant.
                </p>
              </details>

              <details className="bg-white rounded-xl border border-gray-200 p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Quelles sanctions en cas de non-affichage ?
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Les sanctions varient selon l&apos;obligation concernée : de 68 € d&apos;amende
                  pour l&apos;interdiction de fumer jusqu&apos;à 7 500 € pour la vente
                  d&apos;alcool aux mineurs, et jusqu&apos;à 45 000 € pour la non-conformité
                  en matière d&apos;accessibilité PMR. La fermeture administrative est possible
                  pour les manquements les plus graves.
                </p>
              </details>

              <details className="bg-white rounded-xl border border-gray-200 p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Le pack contient-il tous les documents nécessaires ?
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Oui, notre pack complet contient les {DOCUMENTS.length} documents d&apos;affichage
                  obligatoire couvrant toutes les obligations légales d&apos;un restaurant
                  ou bar : sécurité, hygiène, droit du travail, information client et
                  réglementation. Chaque document est au format PDF A4, prêt à imprimer.
                </p>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-primary hover:text-primary-light font-semibold transition-colors"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
