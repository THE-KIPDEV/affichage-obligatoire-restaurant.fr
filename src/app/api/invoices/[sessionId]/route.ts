import { NextResponse } from "next/server";
import { getInvoiceByOrderSessionId } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;

    if (!sessionId || sessionId.length < 10) {
      return NextResponse.json({ error: "Session invalide." }, { status: 400 });
    }

    const invoice = getInvoiceByOrderSessionId(sessionId);
    if (!invoice || !invoice.pdf_data) {
      return NextResponse.json({ error: "Facture introuvable." }, { status: 404 });
    }

    return new NextResponse(invoice.pdf_data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="facture-${invoice.invoice_number}.pdf"`,
      },
    });
  } catch (err) {
    console.error("Invoice download error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
