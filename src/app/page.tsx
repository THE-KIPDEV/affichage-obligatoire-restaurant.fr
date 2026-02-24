import Link from "next/link";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";
import { DocumentCard } from "@/components/DocumentCard";
import { PackPromo } from "@/components/PackPromo";
import { AccordionFAQ } from "@/components/AccordionFAQ";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Affichage Obligatoire Restaurant",
    url: "https://affichage-obligatoire-restaurant.fr",
    description:
      "Les documents d'affichage exigés par la DGCCRF lors d'un contrôle en restaurant ou bar.",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://affichage-obligatoire-restaurant.fr/affichages?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqItems = [
    {
      question:
        "Quels sont les affichages obligatoires dans un restaurant ?",
      answer:
        "Un restaurant doit afficher l'interdiction de fumer, la protection des mineurs contre l'alcool, l'origine des viandes bovines, les 14 allergènes alimentaires, les prix des consommations, la licence de débit de boissons, les horaires d'ouverture, les numéros d'urgence, les informations de droit du travail, l'accessibilité PMR, les règles d'hygiène, et la vidéosurveillance si elle est installée.",
    },
    {
      question: "Combien coûte une amende en cas de contrôle ?",
      answer:
        "Ça dépend de l'affichage manquant. On va de 68 € pour l'interdiction de fumer à 7 500 € pour la protection des mineurs, et jusqu'à 45 000 € pour l'accessibilité PMR. Dans les cas les plus graves, l'administration peut ordonner la fermeture de l'établissement.",
    },
    {
      question: "Est-ce que le pack couvre tout ce qu'il faut ?",
      answer:
        "Oui, les 14 documents du pack couvrent l'ensemble des obligations d'un restaurant ou bar : sécurité, hygiène, droit du travail, information client et réglementation. Chaque document est au format PDF A4, il suffit de l'imprimer et de l'afficher.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand to-brand-deep text-white py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Les 14 affichages que la DGCCRF
              <br />
              <span className="text-highlight">
                vérifie en premier lors d&apos;un contrôle
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Vous ouvrez un restaurant ou passez bientôt un contrôle ?
              Voici les documents que l&apos;inspecteur vous demandera
              &mdash; au bon format, avec les bonnes mentions légales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pack-complet"
                className="bg-highlight hover:bg-highlight-dark text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
              >
                Obtenir le pack &mdash; à partir de 9,90&nbsp;€
              </Link>
              <Link
                href="/affichages"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/20"
              >
                Voir tous les documents
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              PDF prêt en 2 minutes. Vous imprimez, vous affichez, c&apos;est réglé.
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              68&nbsp;€ à 45&nbsp;000&nbsp;€ d&apos;amende : ce que risque un restaurant non conforme
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              La DGCCRF, l&apos;inspection du travail et les services vétérinaires
              contrôlent régulièrement les restaurants. Un affichage manquant,
              c&apos;est un PV quasi automatique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Contrôles fréquents</h3>
                <p className="text-sm text-gray-600">
                  La DGCCRF et l&apos;inspection du travail ciblent les restaurants.
                  Un contrôle sans affichage, c&apos;est une amende directe.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">À jour de la réglementation</h3>
                <p className="text-sm text-gray-600">
                  Chaque document est rédigé d&apos;après le texte de loi en vigueur,
                  avec les mentions exactes exigées.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Imprimez en 2 minutes</h3>
                <p className="text-sm text-gray-600">
                  Téléchargez le PDF, lancez l&apos;impression sur du A4.
                  C&apos;est aussi simple que ça.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents by category */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
              Les {DOCUMENTS.length} affichages que tout restaurateur doit avoir
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Cliquez sur un document pour voir la réglementation en détail,
              les sanctions encourues et le contenu attendu par les inspecteurs.
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

            {/* Cross-links */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">
                Vous cherchez d&apos;autres documents obligatoires ?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                En plus de ces affichages, un restaurateur doit aussi tenir à jour
                son{" "}
                <a
                  href="https://tableau-allergenes.fr"
                  className="text-brand font-medium underline"
                >
                  tableau des allergènes
                </a>{" "}
                avec la liste de ses plats, ses{" "}
                <a
                  href="https://fiche-haccp.fr"
                  className="text-brand font-medium underline"
                >
                  fiches de contrôle HACCP
                </a>{" "}
                (températures, nettoyage, traçabilité), et depuis février 2025,
                l&apos;
                <a
                  href="https://origine-viande.fr"
                  className="text-brand font-medium underline"
                >
                  affichage de l&apos;origine des viandes
                </a>{" "}
                pour chaque viande servie. Autant de documents que les inspecteurs
                sont en droit de vous réclamer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <PackPromo />

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
              Ce que les restaurateurs nous demandent le plus souvent
            </h2>

            <AccordionFAQ items={faqItems} />

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-brand hover:text-brand-light font-semibold transition-colors"
              >
                Toutes les questions et réponses →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
