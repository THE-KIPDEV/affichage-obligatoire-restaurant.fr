"use client";

import { useState } from "react";

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.url) {
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
      className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl"
    >
      {loading ? "Redirection vers le paiement..." : "Acheter le pack – 14,90 €"}
    </button>
  );
}
