import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { DOCUMENTS } from "@/lib/documents";
import { getDocumentPdfInfo } from "@/lib/pdf";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const documents = DOCUMENTS.map((doc) => {
    const pdfInfo = getDocumentPdfInfo(doc.id);
    return {
      id: doc.id,
      title: doc.shortTitle,
      icon: doc.icon,
      category: doc.categoryLabel,
      pdf: pdfInfo,
    };
  });

  return NextResponse.json({ documents });
}
