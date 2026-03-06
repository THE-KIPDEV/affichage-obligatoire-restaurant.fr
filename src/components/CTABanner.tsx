import { TrackedCta } from "@/components/TrackedCta";

export function CTABanner() {
  return (
    <section className="bg-primary text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Téléchargez tous vos affichages obligatoires en un clic
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Pack complet de {14} documents conformes à la réglementation, prêts à imprimer
          pour votre restaurant ou bar. À partir de <strong>9,90 €</strong>.
        </p>
        <TrackedCta
          href="/pack-complet"
          cta="cta_banner"
          className="inline-block bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Obtenir le pack complet – à partir de 9,90 €
        </TrackedCta>
        <p className="mt-4 text-sm text-blue-200">
          Paiement sécurisé par Stripe · Téléchargement immédiat · Documents PDF
        </p>
      </div>
    </section>
  );
}
