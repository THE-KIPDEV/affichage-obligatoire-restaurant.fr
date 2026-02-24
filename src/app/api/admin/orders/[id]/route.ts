import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getOrderById, updateOrderStatus } from "@/lib/db";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const orderId = parseInt(id, 10);

  if (isNaN(orderId)) {
    return NextResponse.json({ error: "ID invalide." }, { status: 400 });
  }

  const order = getOrderById(orderId);
  if (!order) {
    return NextResponse.json(
      { error: "Commande introuvable." },
      { status: 404 }
    );
  }

  const { status } = await request.json();

  if (!["paid", "pending_shipment", "shipped", "cancelled"].includes(status)) {
    return NextResponse.json(
      { error: "Statut invalide." },
      { status: 400 }
    );
  }

  const shippedAt = status === "shipped" ? new Date().toISOString() : undefined;
  updateOrderStatus(orderId, status, shippedAt);

  return NextResponse.json({ success: true });
}
