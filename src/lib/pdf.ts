import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { DOCUMENTS } from "./documents";
import path from "path";
import fs from "fs";

const DOCUMENTS_DIR = path.join(process.cwd(), "data", "documents");

const PRIMARY_COLOR = rgb(30 / 255, 58 / 255, 95 / 255);
const ACCENT_COLOR = rgb(245 / 255, 158 / 255, 11 / 255);
const TEXT_COLOR = rgb(31 / 255, 41 / 255, 55 / 255);

export function getDocumentsDir(): string {
  fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
  return DOCUMENTS_DIR;
}

export function getDocumentPdfPath(docId: string): string {
  return path.join(getDocumentsDir(), `${docId}.pdf`);
}

export function documentPdfExists(docId: string): boolean {
  return fs.existsSync(getDocumentPdfPath(docId));
}

export function getDocumentPdfInfo(docId: string): {
  exists: boolean;
  size?: number;
  modifiedAt?: string;
} {
  const filePath = getDocumentPdfPath(docId);
  if (!fs.existsSync(filePath)) {
    return { exists: false };
  }
  const stats = fs.statSync(filePath);
  return {
    exists: true,
    size: stats.size,
    modifiedAt: stats.mtime.toISOString(),
  };
}

export function getDocumentPdf(docId: string): Buffer | null {
  const filePath = getDocumentPdfPath(docId);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath);
}

export function saveDocumentPdf(docId: string, data: Buffer): void {
  const filePath = getDocumentPdfPath(docId);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, data);
}

export function deleteDocumentPdf(docId: string): boolean {
  const filePath = getDocumentPdfPath(docId);
  if (!fs.existsSync(filePath)) {
    return false;
  }
  fs.unlinkSync(filePath);
  return true;
}

export async function getPackPdf(): Promise<Uint8Array> {
  const mergedPdf = await PDFDocument.create();

  // Add each document's PDF
  for (const doc of DOCUMENTS) {
    const pdfBuffer = getDocumentPdf(doc.id);
    if (!pdfBuffer) continue;

    const docPdf = await PDFDocument.load(pdfBuffer);
    const pages = await mergedPdf.copyPages(docPdf, docPdf.getPageIndices());
    for (const page of pages) {
      mergedPdf.addPage(page);
    }
  }

  if (mergedPdf.getPageCount() === 0) {
    throw new Error("Aucun document PDF n'a été uploadé.");
  }

  // Add a cover page
  const coverPdf = await PDFDocument.create();
  const coverPage = coverPdf.addPage([595.28, 841.89]);
  const { height } = coverPage.getSize();
  const fontBold = await coverPdf.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await coverPdf.embedFont(StandardFonts.Helvetica);
  const margin = 50;

  // Cover header
  coverPage.drawRectangle({
    x: 0,
    y: height - 200,
    width: 595.28,
    height: 200,
    color: PRIMARY_COLOR,
  });

  coverPage.drawText("PACK COMPLET", {
    x: margin,
    y: height - 80,
    size: 36,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  coverPage.drawText("Affichages Obligatoires", {
    x: margin,
    y: height - 120,
    size: 24,
    font: fontBold,
    color: ACCENT_COLOR,
  });

  coverPage.drawText("Restaurant & Bar", {
    x: margin,
    y: height - 155,
    size: 20,
    font: fontRegular,
    color: rgb(200 / 255, 210 / 255, 230 / 255),
  });

  coverPage.drawText("affichage-obligatoire-restaurant.fr", {
    x: margin,
    y: height - 185,
    size: 11,
    font: fontRegular,
    color: rgb(150 / 255, 170 / 255, 200 / 255),
  });

  let y = height - 250;

  coverPage.drawText("Contenu du pack :", {
    x: margin,
    y,
    size: 16,
    font: fontBold,
    color: PRIMARY_COLOR,
  });
  y -= 30;

  const docsWithPdf = DOCUMENTS.filter((doc) => documentPdfExists(doc.id));
  for (let i = 0; i < docsWithPdf.length; i++) {
    const doc = docsWithPdf[i];
    coverPage.drawText(`${i + 1}. ${doc.shortTitle}`, {
      x: margin + 10,
      y,
      size: 11,
      font: fontRegular,
      color: TEXT_COLOR,
    });
    y -= 20;
  }

  y -= 20;
  coverPage.drawText(
    "Documents conformes à la réglementation française en vigueur.",
    {
      x: margin,
      y,
      size: 10,
      font: fontRegular,
      color: rgb(107 / 255, 114 / 255, 128 / 255),
    }
  );
  y -= 15;
  coverPage.drawText(
    "Format A4 – Prêts à imprimer et à afficher dans votre établissement.",
    {
      x: margin,
      y,
      size: 10,
      font: fontRegular,
      color: rgb(107 / 255, 114 / 255, 128 / 255),
    }
  );

  // Footer accent bar
  coverPage.drawRectangle({
    x: 0,
    y: 0,
    width: 595.28,
    height: 5,
    color: ACCENT_COLOR,
  });

  // Insert cover as first page
  const coverPages = await mergedPdf.copyPages(coverPdf, [0]);
  mergedPdf.insertPage(0, coverPages[0]);

  return mergedPdf.save();
}
