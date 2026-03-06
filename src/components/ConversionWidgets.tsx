"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const PROMO_CODE = "RESTAURANT10";

function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).kipstats?.event) {
    (window as any).kipstats.event(name, data || {});
  }
}

/* ── Promo Banner ─────────────────────────────────────── */

function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("banner_dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText(PROMO_CODE);
    track("promo_code_copied", { source: "banner", code: PROMO_CODE });
  }

  function handleDismiss() {
    setVisible(false);
    sessionStorage.setItem("banner_dismissed", "1");
    track("banner_dismissed", {});
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-brand text-white px-4 py-3 flex items-center justify-center gap-4 text-sm shadow-lg">
      <p>
        <strong>-10%</strong> sur le pack complet avec le code{" "}
        <button
          onClick={handleCopy}
          className="font-mono bg-white/20 px-2 py-0.5 rounded cursor-pointer hover:bg-white/30 transition-colors"
        >
          {PROMO_CODE}
        </button>
      </p>
      <Link
        href="/pack-complet"
        className="bg-highlight hover:bg-highlight-dark text-gray-900 font-bold px-4 py-1.5 rounded-lg transition-colors text-xs"
      >
        En profiter
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer"
        aria-label="Fermer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

/* ── Exit Intent Popup ────────────────────────────────── */

function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem("exit_intent_shown")) {
      setVisible(true);
      sessionStorage.setItem("exit_intent_shown", "1");
      track("exit_intent_shown", {});
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, [handleMouseLeave]);

  function handleDismiss() {
    setVisible(false);
    track("exit_intent_dismissed", {});
  }

  function handleCopy() {
    navigator.clipboard.writeText(PROMO_CODE);
    track("promo_code_copied", { source: "exit_intent", code: PROMO_CODE });
  }

  function handleCtaClick() {
    track("exit_intent_cta_click", {});
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          aria-label="Fermer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          Attendez ! -10% avant de partir
        </h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Utilisez le code promo ci-dessous pour obtenir 10% de réduction sur le pack complet.
        </p>

        <button
          onClick={handleCopy}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-mono font-bold text-lg py-3 rounded-lg transition-colors cursor-pointer mb-4 text-center"
        >
          {PROMO_CODE}
          <span className="block text-xs font-sans font-normal text-gray-500 mt-1">
            Cliquez pour copier
          </span>
        </button>

        <Link
          href="/pack-complet"
          onClick={handleCtaClick}
          className="block w-full bg-highlight hover:bg-highlight-dark text-gray-900 font-bold py-3 rounded-xl text-center text-lg transition-colors shadow-lg"
        >
          Voir le pack complet
        </Link>
      </div>
    </div>
  );
}

/* ── Combined Export ──────────────────────────────────── */

export function ConversionWidgets() {
  return (
    <>
      <PromoBanner />
      <ExitIntentPopup />
    </>
  );
}
