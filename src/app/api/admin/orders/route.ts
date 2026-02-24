import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getOrders } from "@/lib/db";

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const type = request.nextUrl.searchParams.get("type") || undefined;
  const status = request.nextUrl.searchParams.get("status") || undefined;

  const orders = getOrders({ type, status });

  return NextResponse.json({ orders });
}
