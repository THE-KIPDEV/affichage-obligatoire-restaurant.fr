"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  offerType: "digital" | "physical";
  label: string;
}

export function CheckoutButton({ offerType, label }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offerType }),
      });

      const data = await response.json();

      if (data.url) {
        if ((window as any).kipstats?.event) {
          (window as any).kipstats.event("checkout_started", { offer_type: offerType });
        }
        window.location.href = data.url;
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
        setLoading(false);
      }
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl cursor-pointer"
    >
      {loading ? "Redirection vers le paiement..." : label}
    </button>
  );
}
