import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles du site affichage-obligatoire-restaurant.fr.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Politique de confidentialité" },
          ]}
        />

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Politique de confidentialité</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-gray-600">
            Dernière mise à jour : février 2026
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
            <p className="text-gray-700 leading-relaxed">
              Le responsable du traitement des données est Kipdev, éditeur du site
              affichage-obligatoire-restaurant.fr. Contact : yohann@kipdev.io
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous collectons uniquement les données nécessaires au traitement de votre
              commande via Stripe :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
              <li>Adresse email (via la session Stripe)</li>
              <li>Données de paiement (traitées exclusivement par Stripe)</li>
              <li>Adresse IP et données de navigation (logs serveur)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Nous ne stockons aucune donnée bancaire sur nos serveurs. Toutes les
              transactions sont gérées directement par Stripe (certifié PCI-DSS niveau 1).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalités du traitement</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Traitement des commandes et mise à disposition des documents</li>
              <li>Gestion de la relation client (support, réclamations)</li>
              <li>Respect des obligations légales (comptabilité, fiscalité)</li>
              <li>Amélioration du site et statistiques d&apos;utilisation anonymisées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Base légale</h2>
            <p className="text-gray-700 leading-relaxed">
              Le traitement de vos données repose sur : l&apos;exécution du contrat
              (traitement de la commande), les obligations légales (comptabilité), et
              l&apos;intérêt légitime (amélioration du service, sécurité).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Durée de conservation</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Données de transaction : 10 ans (obligations comptables)</li>
              <li>Logs serveur : 12 mois</li>
              <li>Cookies : selon leur durée respective (voir section cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site utilise uniquement des cookies strictement nécessaires au
              fonctionnement du service (session, sécurité). Aucun cookie publicitaire
              ou de tracking tiers n&apos;est utilisé. Aucun consentement n&apos;est donc
              requis pour ces cookies essentiels conformément à la directive ePrivacy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Partage des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données ne sont partagées qu&apos;avec les prestataires strictement
              nécessaires au fonctionnement du service :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
              <li>Stripe (paiement) – Politique de confidentialité : stripe.com/privacy</li>
              <li>Railway (hébergement) – Serveurs situés aux États-Unis</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits
              suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Pour exercer ces droits, contactez-nous à : yohann@kipdev.io.
              Vous disposez également du droit d&apos;introduire une réclamation auprès
              de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
              www.cnil.fr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données : chiffrement HTTPS, sécurisation
              des accès serveur, paiement sécurisé par Stripe. Aucune donnée bancaire
              ne transite par nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Cette politique de confidentialité peut être modifiée à tout moment.
              La date de dernière mise à jour est indiquée en haut de cette page.
              Nous vous recommandons de la consulter régulièrement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
