import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site affichage-obligatoire-restaurant.fr.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Mentions légales</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Éditeur du site</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site <strong>affichage-obligatoire-restaurant.fr</strong> est édité par :<br />
              <strong>KIPDEV</strong> - SAS au capital de 500 €<br />
              Siège social : 4 Rue des Frênes, 33700 Mérignac<br />
              SIREN : 884 120 890 — SIRET : 884 120 890 00022<br />
              RCS Bordeaux — TVA : FR17884120890<br />
              Email : yohann@kipdev.io<br />
              Directeur de la publication : Yohann KIPFER, Président
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site est hébergé par Railway Corp.<br />
              Adresse : 548 Market St, PMB 68956, San Francisco, California 94104, US<br />
              Site : railway.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble du contenu du site (textes, images, documents, mise en page)
              est protégé par le droit de la propriété intellectuelle. Toute reproduction,
              même partielle, est interdite sans autorisation préalable de l&apos;éditeur.
              Les documents téléchargeables sont destinés à un usage personnel et
              professionnel dans le cadre de la mise en conformité de votre établissement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              Les informations fournies sur ce site le sont à titre indicatif et ne
              sauraient se substituer à un conseil juridique professionnel. L&apos;éditeur
              s&apos;efforce de fournir des informations exactes et à jour, mais ne garantit
              pas l&apos;exhaustivité ni l&apos;exactitude des contenus. La réglementation
              pouvant évoluer, il est recommandé de vérifier les textes en vigueur auprès
              des sources officielles (Légifrance, services de l&apos;État).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Paiement en ligne</h2>
            <p className="text-gray-700 leading-relaxed">
              Les paiements sont sécurisés par Stripe, prestataire de paiement certifié
              PCI-DSS niveau 1. Aucune donnée bancaire n&apos;est stockée sur nos serveurs.
              Le prix affiché est TTC. La TVA applicable est celle en vigueur au moment
              de l&apos;achat. Conformément à l&apos;article L221-28 du Code de la
              consommation, le droit de rétractation ne s&apos;applique pas à la fourniture
              de contenu numérique non fourni sur un support matériel dont l&apos;exécution
              a commencé avec l&apos;accord du consommateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Données personnelles</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute information relative au traitement de vos données personnelles,
              veuillez consulter notre{" "}
              <a href="/politique-confidentialite" className="text-primary hover:underline">
                politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Le présent site et ses mentions légales sont soumis au droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
