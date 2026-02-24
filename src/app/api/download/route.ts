import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getDocumentPdf, getPackPdf } from "@/lib/pdf";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const docId = request.nextUrl.searchParams.get("doc");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Session ID manquant." },
      { status: 400 }
    );
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Le paiement n'a pas été confirmé." },
        { status: 403 }
      );
    }

    const product = session.metadata?.product;
    if (
      product !== "pack-digital" &&
      product !== "pack-physical" &&
      product !== "pack-complet"
    ) {
      return NextResponse.json(
        { error: "Session invalide." },
        { status: 400 }
      );
    }

    if (docId) {
      // Single document download
      const pdfBuffer = getDocumentPdf(docId);
      if (!pdfBuffer) {
        return NextResponse.json(
          { error: "Ce document n'est pas encore disponible." },
          { status: 404 }
        );
      }

      return new Response(new Uint8Array(pdfBuffer), {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="affichage-${docId}.pdf"`,
          "Cache-Control": "no-store",
        },
      });
    }

    // Full pack download
    const packBytes = await getPackPdf();

    return new Response(Buffer.from(packBytes) as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="pack-complet-affichages-obligatoires.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la vérification du paiement." },
      { status: 500 }
    );
  }
}
