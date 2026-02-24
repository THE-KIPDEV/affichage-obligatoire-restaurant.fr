import Link from "next/link";
import type { DocumentInfo } from "@/lib/documents";

export function DocumentCard({ doc }: { doc: DocumentInfo }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand/30 transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-3xl" aria-hidden="true">{doc.icon}</span>
        <div className="flex-1">
          <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded mb-2">
            {doc.categoryLabel}
          </span>
          <h3 className="font-bold text-gray-900 leading-snug">{doc.shortTitle}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{doc.description}</p>
      <Link
        href={`/affichages/${doc.slug}`}
        className="text-brand hover:text-brand-light font-semibold text-sm inline-flex items-center gap-1 transition-colors"
      >
        En savoir plus
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
