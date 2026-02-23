import { NextResponse } from "next/server";
import { getStripe, PACK_PRICE_CENTS, SITE_URL } from "@/lib/stripe";
import { DOCUMENTS } from "@/lib/documents";

export async function POST() {
  try {
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Pack Complet – Affichages Obligatoires Restaurant",
              description: `${DOCUMENTS.length} documents PDF conformes à la réglementation française, prêts à imprimer pour votre restaurant ou bar.`,
            },
            unit_amount: PACK_PRICE_CENTS,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${SITE_URL}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/paiement/annule`,
      metadata: {
        product: "pack-complet",
        documents_count: String(DOCUMENTS.length),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement." },
      { status: 500 }
    );
  }
}
