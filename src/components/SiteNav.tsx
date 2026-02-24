"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand text-white sticky top-0 z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-lg whitespace-nowrap">
            Affichage Obligatoire Restaurant
          </Link>

          <ul className="hidden md:flex items-center gap-5 text-sm flex-1">
            <li>
              <Link href="/affichages" className="hover:text-highlight transition-colors">
                Les affichages
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-highlight transition-colors">
                FAQ
              </Link>
            </li>
          </ul>

          <Link
            href="/pack-complet"
            className="hidden md:inline-block bg-highlight hover:bg-highlight-dark text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Le pack complet
          </Link>

          <button
            className="md:hidden p-2 rounded hover:bg-brand-light transition-colors ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-brand-deep border-t border-brand-light">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm">
            <li>
              <Link
                href="/affichages"
                className="block py-2 hover:text-highlight transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Les affichages
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block py-2 hover:text-highlight transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/pack-complet"
                className="block bg-highlight hover:bg-highlight-dark text-gray-900 font-semibold px-4 py-2 rounded-lg text-center transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Le pack complet
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
