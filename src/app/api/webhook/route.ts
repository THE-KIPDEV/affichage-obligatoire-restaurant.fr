import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  createOrder,
  createShippingAddress,
  createInvoice,
  getNextInvoiceNumber,
  getOrderBySessionId,
} from "@/lib/db";
import { generateInvoicePdf } from "@/lib/generate-invoice";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    const event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const product = session.metadata?.product;

        // Avoid duplicate processing
        const existing = getOrderBySessionId(session.id);
        if (existing) {
          console.log(`Order already exists for session ${session.id}`);
          break;
        }

        const isPhysical = product === "pack-physical";
        const type = isPhysical ? "physical" : "digital";

        const orderId = createOrder({
          stripe_session_id: session.id,
          type,
          email: session.customer_details?.email || null,
          amount_cents: session.amount_total || 0,
          status: isPhysical ? "pending_shipment" : "paid",
        });

        console.log(
          `Order created: #${orderId} – Type: ${type} – Amount: ${session.amount_total}c – Email: ${session.customer_details?.email}`
        );

        // Store shipping address for physical orders
        // Use type assertion as shipping_details exists on completed sessions with shipping
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const shipping = (session as any).shipping_details as {
          name?: string;
          address?: {
            line1?: string;
            line2?: string;
            city?: string;
            postal_code?: string;
            country?: string;
          };
        } | null;

        // Generate invoice PDF
        try {
          const invoiceNumber = getNextInvoiceNumber();
          const billingAddr = session.customer_details?.address;
          const billingName = session.customer_details?.name || "";
          const billingEmail = session.customer_details?.email || "";
          const addressParts = [billingAddr?.line1, billingAddr?.line2, `${billingAddr?.postal_code} ${billingAddr?.city}`].filter(Boolean);
          const billingAddressStr = addressParts.join(", ");

          const dateStr = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
          const description = isPhysical
            ? "Pack Imprime - Affichages Obligatoires Restaurant"
            : "Pack Numerique - Affichages Obligatoires Restaurant (PDF)";

          const pdfBytes = await generateInvoicePdf({
            invoiceNumber,
            date: dateStr,
            customerEmail: billingEmail,
            customerName: billingName || billingEmail,
            customerAddress: billingAddressStr || undefined,
            description,
            amountCents: session.amount_total || 0,
            stripeSessionId: session.id,
          });

          createInvoice({
            order_id: orderId,
            invoice_number: invoiceNumber,
            billing_name: billingName || null,
            billing_email: billingEmail || null,
            billing_address: billingAddressStr || null,
            amount_cents: session.amount_total || 0,
            pdf_data: Buffer.from(pdfBytes),
          });
          console.log(`Invoice ${invoiceNumber} created for order #${orderId}`);
        } catch (invErr) {
          console.error("Invoice generation error:", invErr);
        }

        if (isPhysical && shipping?.address) {
          const addr = shipping.address;
          createShippingAddress({
            order_id: orderId,
            full_name: shipping.name || "",
            address_line1: addr.line1 || "",
            address_line2: addr.line2 || undefined,
            city: addr.city || "",
            postal_code: addr.postal_code || "",
            country: addr.country || "FR",
            phone: session.customer_details?.phone || undefined,
          });
          console.log(
            `Shipping address stored for order #${orderId}: ${shipping.name}, ${addr.city}`
          );
        }

        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook signature verification failed." },
      { status: 400 }
    );
  }
}
