import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCUMENTS, getDocumentBySlug } from "@/lib/documents";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PackPromo } from "@/components/PackPromo";
import { TrackedCta } from "@/components/TrackedCta";

export async function generateStaticParams() {
  return DOCUMENTS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);
  if (!doc) return {};

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    alternates: {
      canonical: `/affichages/${doc.slug}`,
    },
    openGraph: {
      title: doc.metaTitle,
      description: doc.metaDescription,
      type: "article",
    },
  };
}

export default async function AffichageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);
  if (!doc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    description: doc.description,
    author: {
      "@type": "Organization",
      name: "Affichage Obligatoire Restaurant",
    },
    publisher: {
      "@type": "Organization",
      name: "Affichage Obligatoire Restaurant",
      url: "https://affichage-obligatoire-restaurant.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://affichage-obligatoire-restaurant.fr/affichages/${doc.slug}`,
    },
  };

  const otherDocs = DOCUMENTS.filter((d) => d.id !== doc.id).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="py-8 px-4">
        <article className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Affichages obligatoires", href: "/affichages" },
              { label: doc.shortTitle },
            ]}
          />

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" aria-hidden="true">{doc.icon}</span>
              <span className="text-sm font-medium bg-brand/10 text-brand px-3 py-1 rounded-full">
                {doc.categoryLabel}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {doc.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">{doc.content.intro}</p>
          </header>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8">
            <p className="font-semibold text-amber-800 mb-1">Base légale</p>
            <p className="text-sm text-amber-700">{doc.legalBasis}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {doc.content.sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </section>
            ))}
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-8">
            <p className="font-semibold text-red-800 mb-1">Sanctions encourues</p>
            <p className="text-sm text-red-700">{doc.penalties}</p>
          </div>

          {/* CTA in article */}
          <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 md:p-8 text-center my-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Téléchargez ce document et tous les autres
            </h2>
            <p className="text-gray-600 mb-6">
              Obtenez le pack complet de {DOCUMENTS.length} affichages obligatoires
              au format PDF, prêts à imprimer pour votre établissement.
            </p>
            <TrackedCta
              href="/pack-complet"
              cta="article_inline"
              className="inline-block bg-highlight hover:bg-highlight-dark text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              Obtenir le pack complet – à partir de 9,90 €
            </TrackedCta>
          </div>
        </article>

        {/* Related documents */}
        <aside className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Autres affichages obligatoires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherDocs.map((d) => (
              <Link
                key={d.id}
                href={`/affichages/${d.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-brand/30 transition-all"
              >
                <span className="text-2xl mb-2 block" aria-hidden="true">{d.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{d.shortTitle}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{d.description}</p>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}
