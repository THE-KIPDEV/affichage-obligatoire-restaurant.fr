import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { generatePackPdf } from "@/lib/generate-pdf";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const docId = request.nextUrl.searchParams.get("doc");

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID manquant." }, { status: 400 });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Le paiement n'a pas été confirmé." },
        { status: 403 }
      );
    }

    if (session.metadata?.product !== "pack-complet") {
      return NextResponse.json(
        { error: "Session invalide." },
        { status: 400 }
      );
    }

    const pdfBytes = await generatePackPdf(docId || undefined);
    const filename = docId
      ? `affichage-${docId}.pdf`
      : "pack-complet-affichages-obligatoires.pdf";

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
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
