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

export const DIGITAL_PRICE_CENTS = parseInt(process.env.DIGITAL_PRICE_CENTS || "990", 10);
export const PHYSICAL_PRICE_CENTS = parseInt(process.env.PHYSICAL_PRICE_CENTS || "1990", 10);
export const DIGITAL_PRICE_EUR = (DIGITAL_PRICE_CENTS / 100).toFixed(2).replace(".", ",");
export const PHYSICAL_PRICE_EUR = (PHYSICAL_PRICE_CENTS / 100).toFixed(2).replace(".", ",");
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
