import type { Metadata } from "next";
import { DOCUMENTS, CATEGORIES } from "@/lib/documents";
import { DocumentCard } from "@/components/DocumentCard";
import { CTABanner } from "@/components/CTABanner";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Liste de tous les affichages obligatoires restaurant et bar",
  description:
    "Liste complète des affichages obligatoires pour restaurant et bar en France. Découvrez chaque obligation, la réglementation applicable et les sanctions.",
  alternates: {
    canonical: "/affichages",
  },
};

export default function AffichagesPage() {
  return (
    <main className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Tous les affichages obligatoires" },
          ]}
        />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Tous les affichages obligatoires pour restaurant et bar
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Voici la liste complète des {DOCUMENTS.length} affichages que tout restaurateur
            ou gérant de bar doit obligatoirement afficher dans son établissement.
            Cliquez sur chaque affichage pour découvrir la réglementation détaillée.
          </p>
        </header>

        {CATEGORIES.map((category) => {
          const docs = DOCUMENTS.filter((d) => d.category === category.id);
          if (docs.length === 0) return null;
          return (
            <section key={category.id} className="mb-12" id={category.id}>
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
                <span aria-hidden="true">{category.icon}</span>
                {category.label}
                <span className="text-sm font-normal text-gray-400 ml-2">
                  ({docs.length} document{docs.length > 1 ? "s" : ""})
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                  <DocumentCard key={doc.id} doc={doc} />
                ))}
              </div>
            </section>
          );
        })}

        <CTABanner />
      </div>
    </main>
  );
}
