import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID manquant." }, { status: 400 });
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Non payé." }, { status: 403 });
    }

    return NextResponse.json({
      product: session.metadata?.product || null,
    });
  } catch {
    return NextResponse.json({ error: "Session invalide." }, { status: 400 });
  }
}
