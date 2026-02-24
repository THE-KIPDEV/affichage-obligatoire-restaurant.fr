import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DOCUMENTS } from "@/lib/documents";

export const metadata: Metadata = {
  title: "FAQ – Questions fréquentes sur l'affichage obligatoire restaurant",
  description:
    "Réponses aux questions fréquentes sur les affichages obligatoires en restaurant et bar. Réglementation, sanctions, documents nécessaires.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "Quels sont les affichages obligatoires dans un restaurant ?",
    answer: `Un restaurant doit obligatoirement afficher : l'interdiction de fumer, la protection des mineurs (vente d'alcool), l'origine des viandes bovines, les 14 allergènes alimentaires, les prix des consommations, la licence de débit de boissons, les horaires d'ouverture, les numéros d'urgence, les informations de droit du travail (inspection du travail, médecine du travail, convention collective), l'accessibilité PMR, les règles d'hygiène HACCP, et le panneau de vidéosurveillance le cas échéant. L'affiche de lutte contre le gaspillage alimentaire (doggy bag) et la mise à disposition d'éthylotests sont également obligatoires sous conditions.`,
  },
  {
    question: "Quels sont les affichages obligatoires dans un bar ?",
    answer: `Les obligations d'affichage d'un bar sont similaires à celles d'un restaurant : interdiction de fumer, protection des mineurs, affichage des prix (au minimum 5 consommations courantes visibles de l'extérieur), licence de débit de boissons (III ou IV), horaires d'ouverture, numéros d'urgence, informations de droit du travail, accessibilité PMR. Les bars fermant après 2h du matin doivent en plus mettre des éthylotests à disposition. L'affichage des allergènes et de l'origine des viandes s'applique si le bar sert de la nourriture.`,
  },
  {
    question: "Quelles sont les sanctions en cas de non-affichage ?",
    answer: `Les sanctions varient selon l'affichage manquant. Voici les principales : interdiction de fumer (68 à 135 €), protection des mineurs / vente d'alcool (7 500 €), affichage des prix (1 500 €), origine des viandes (450 à 1 500 €), allergènes (1 500 à 3 000 €), licence de débit de boissons (3 750 €), droit du travail (1 500 € par salarié), accessibilité PMR (45 000 €), vidéosurveillance (45 000 €), hygiène HACCP (1 500 à 15 000 € + fermeture administrative), gaspillage alimentaire (1 500 €), éthylotests (750 €). La fermeture administrative est possible pour les manquements graves.`,
  },
  {
    question: "Comment se passe un contrôle en restaurant ?",
    answer: `Les contrôles peuvent être effectués par la DGCCRF (Direction générale de la concurrence, de la consommation et de la répression des fraudes), l'inspection du travail, les services vétérinaires (DDPP), ou la police municipale. Le contrôleur vérifie la présence et la conformité de tous les affichages obligatoires, les conditions d'hygiène, les documents administratifs (licence, PMS, registre du personnel). En cas de manquement, un procès-verbal est dressé et peut donner lieu à une amende. Pour les manquements graves en matière d'hygiène, une fermeture administrative peut être immédiate.`,
  },
  {
    question: "Dois-je afficher les prix à l'extérieur de mon restaurant ?",
    answer: `Oui, c'est une obligation légale. Les menus et cartes doivent être affichés à l'extérieur pendant toute la durée du service, avec les prix TTC. Pour les bars et cafés, les prix d'au moins 5 consommations couramment servies doivent être affichés à l'extérieur : un café, un demi de bière, un jus de fruit, un soda et une eau minérale. Les prix doivent être TTC, service compris. Le non-respect est passible d'une amende de 1 500 €.`,
  },
  {
    question: "Que contient le pack complet ?",
    answer: `Le pack complet contient ${DOCUMENTS.length} documents PDF au format A4, prêts à imprimer : interdiction de fumer, protection des mineurs (alcool), origine des viandes bovines, allergènes alimentaires (les 14 allergènes), affichage des prix, licence de débit de boissons, horaires d'ouverture, numéros d'urgence, droit du travail (inspection, médecine du travail, convention collective), accessibilité PMR, hygiène HACCP (lavage des mains, températures), vidéosurveillance, éthylotests, et lutte contre le gaspillage alimentaire (doggy bag).`,
  },
  {
    question: "Les documents sont-ils conformes à la réglementation ?",
    answer: `Oui, nos documents sont rédigés en conformité avec les textes de loi en vigueur (Code de la santé publique, Code du travail, Code de la consommation, Code de l'environnement, réglements européens). Chaque document mentionne la base légale applicable. Cependant, la réglementation pouvant évoluer, nous vous recommandons de vérifier régulièrement les mises à jour réglementaires.`,
  },
  {
    question: "Comment télécharger mes documents après le paiement ?",
    answer: `Après votre paiement par carte bancaire (sécurisé par Stripe), vous êtes automatiquement redirigé vers une page de téléchargement. Vous pouvez télécharger le pack complet en un seul PDF ou chaque document individuellement. Conservez votre lien de téléchargement (ajoutez-le en favori). Si vous rencontrez un problème, contactez-nous avec votre numéro de transaction.`,
  },
  {
    question: "Puis-je utiliser les documents pour plusieurs établissements ?",
    answer: `Le pack est prévu pour un usage dans un établissement. Certains documents sont à compléter avec les informations propres à votre établissement (adresse, horaires, numéro de licence, etc.). Si vous gérez plusieurs établissements, vous devrez compléter chaque document avec les informations de chaque lieu. Un seul achat suffit, vous pouvez imprimer les documents autant de fois que nécessaire.`,
  },
  {
    question: "La formation hygiène HACCP est-elle obligatoire ?",
    answer: `Oui, depuis le 1er octobre 2012, au moins une personne dans chaque établissement de restauration commerciale doit avoir suivi une formation en hygiène alimentaire de 14 heures minimum. Cette obligation concerne les restaurants traditionnels, les fast-foods, les traiteurs, les cafétérias et les bars servant de la nourriture. L'attestation de formation doit être conservée dans l'établissement et présentée en cas de contrôle.`,
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Questions fréquentes" },
            ]}
          />

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Ce que les restaurateurs nous demandent
            </h1>
            <p className="text-lg text-gray-600">
              Vous avez un doute sur une obligation d&apos;affichage ?
              Voici les réponses aux questions les plus courantes.
            </p>
          </header>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 group"
                open={index === 0}
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="bg-brand/5 border border-brand/20 rounded-xl p-8 text-center mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Prêt à vous mettre en conformité ?
            </h2>
            <p className="text-gray-600 mb-4">
              Le pack complet contient les {DOCUMENTS.length} documents obligatoires en PDF.
              Vous imprimez, vous affichez, c&apos;est fait.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              En complément, pensez aussi à préparer votre{" "}
              <a href="https://tableau-allergenes.fr" className="text-brand underline">tableau des allergènes</a>,
              vos{" "}
              <a href="https://fiche-haccp.fr" className="text-brand underline">fiches HACCP</a> et
              votre{" "}
              <a href="https://origine-viande.fr" className="text-brand underline">affichage origine des viandes</a>.
            </p>
            <Link
              href="/pack-complet"
              className="inline-block bg-highlight hover:bg-highlight-dark text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Obtenir le pack complet – à partir de 9,90 €
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
