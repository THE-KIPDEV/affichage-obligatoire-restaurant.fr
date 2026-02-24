import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { DOCUMENTS } from "@/lib/documents";
import {
  getDocumentPdf,
  saveDocumentPdf,
  deleteDocumentPdf,
} from "@/lib/pdf";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const doc = DOCUMENTS.find((d) => d.id === id);
  if (!doc) {
    return NextResponse.json({ error: "Document introuvable." }, { status: 404 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file || file.type !== "application/pdf") {
    return NextResponse.json(
      { error: "Fichier PDF requis." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  saveDocumentPdf(id, buffer);

  return NextResponse.json({
    success: true,
    size: buffer.length,
  });
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const pdf = getDocumentPdf(id);

  if (!pdf) {
    return NextResponse.json(
      { error: "Aucun PDF uploadé pour ce document." },
      { status: 404 }
    );
  }

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${id}.pdf"`,
    },
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const { id } = await params;
  const deleted = deleteDocumentPdf(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Aucun PDF à supprimer." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
