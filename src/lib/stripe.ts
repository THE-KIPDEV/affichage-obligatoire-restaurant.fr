import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-01-28.clover",
    });
  }
  return _stripe;
}

export const PACK_PRICE_CENTS = parseInt(process.env.PACK_PRICE_CENTS || "1490", 10);
export const PACK_PRICE_EUR = (PACK_PRICE_CENTS / 100).toFixed(2).replace(".", ",");
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
