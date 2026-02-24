import { NextRequest, NextResponse } from "next/server";
import {
  getStripe,
  DIGITAL_PRICE_CENTS,
  PHYSICAL_PRICE_CENTS,
  SITE_URL,
} from "@/lib/stripe";
import { DOCUMENTS } from "@/lib/documents";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const offerType = body.offerType as "digital" | "physical";

    if (!offerType || !["digital", "physical"].includes(offerType)) {
      return NextResponse.json(
        { error: "Type d'offre invalide." },
        { status: 400 }
      );
    }

    const isPhysical = offerType === "physical";
    const priceCents = isPhysical ? PHYSICAL_PRICE_CENTS : DIGITAL_PRICE_CENTS;
    const productName = isPhysical
      ? "Pack Imprimé – Affichages Obligatoires Restaurant (envoi postal)"
      : "Pack Numérique – Affichages Obligatoires Restaurant (PDF)";
    const productDescription = isPhysical
      ? `${DOCUMENTS.length} documents imprimés sur papier A4 épais, plastifiés, envoyés par la poste.`
      : `${DOCUMENTS.length} documents PDF conformes à la réglementation française, prêts à imprimer.`;

    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: productName,
              description: productDescription,
            },
            unit_amount: priceCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${SITE_URL}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/paiement/annule`,
      metadata: {
        product: isPhysical ? "pack-physical" : "pack-digital",
        documents_count: String(DOCUMENTS.length),
      },
    };

    if (isPhysical) {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ["FR"],
      };
      sessionConfig.phone_number_collection = {
        enabled: true,
      };
    }

    const session = await getStripe().checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement." },
      { status: 500 }
    );
  }
}
