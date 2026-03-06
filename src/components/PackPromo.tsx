import { TrackedCta } from "@/components/TrackedCta";

export function PackPromo() {
  return (
    <section className="bg-brand text-white py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Vous préférez tout recevoir d&apos;un coup ?
        </h2>
        <p className="text-lg text-blue-100 mb-6">
          Le pack regroupe les 14 documents obligatoires en PDF, prêts à imprimer.
          À partir de 9,90&nbsp;€.
        </p>
        <TrackedCta
          href="/pack-complet"
          cta="pack_promo"
          className="inline-block bg-highlight hover:bg-highlight-dark text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Voir le pack complet
        </TrackedCta>
        <p className="mt-3 text-sm text-blue-200">
          Paiement par carte · Livraison par email dans la minute
        </p>
      </div>
    </section>
  );
}
