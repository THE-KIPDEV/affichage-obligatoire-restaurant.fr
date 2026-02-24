import Link from "next/link";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Affichage Obligatoire Restaurant
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Les documents que la DGCCRF et l&apos;inspection du travail
              exigent lors d&apos;un contrôle en restaurant ou bar. Conformes
              aux textes en vigueur, au format PDF.
            </p>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-2">Outils pour restaurateurs</p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="https://tableau-allergenes.fr" className="hover:text-white transition-colors">
                    Tableau des allergènes restaurant
                  </a>
                </li>
                <li>
                  <a href="https://fiche-haccp.fr" className="hover:text-white transition-colors">
                    Fiches HACCP obligatoires
                  </a>
                </li>
                <li>
                  <a href="https://origine-viande.fr" className="hover:text-white transition-colors">
                    Affichage origine des viandes
                  </a>
                </li>
                <li>
                  <a href="https://creer-menu-restaurant.fr" className="hover:text-white transition-colors">
                    Créer un menu de restaurant
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Par catégorie</h4>
              <ul className="space-y-1.5 text-sm">
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={`/affichages#${cat.id}`}
                      className="hover:text-white transition-colors"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Les plus consultés</h4>
              <ul className="space-y-1.5 text-sm">
                {DOCUMENTS.slice(0, 5).map((doc) => (
                  <li key={doc.id}>
                    <Link
                      href={`/affichages/${doc.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {doc.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} affichage-obligatoire-restaurant.fr</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/pack-complet" className="hover:text-white transition-colors">Pack complet</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          Ce site ne remplace pas un avocat. En cas de doute, consultez un juriste
          spécialisé en droit de la restauration.
        </p>
      </div>
    </footer>
  );
}
