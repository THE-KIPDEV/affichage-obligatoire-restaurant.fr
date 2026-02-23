import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { DOCUMENTS, getDocumentById } from "./documents";
import type { DocumentInfo } from "./documents";

const PRIMARY_COLOR = rgb(30 / 255, 58 / 255, 95 / 255);
const ACCENT_COLOR = rgb(245 / 255, 158 / 255, 11 / 255);
const TEXT_COLOR = rgb(31 / 255, 41 / 255, 55 / 255);
const LIGHT_GRAY = rgb(243 / 255, 244 / 255, 246 / 255);

async function generateSingleDocumentPdf(doc: DocumentInfo): Promise<PDFDocument> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const margin = 50;
  let y = height - margin;

  // Header bar
  page.drawRectangle({
    x: 0,
    y: height - 80,
    width: 595.28,
    height: 80,
    color: PRIMARY_COLOR,
  });

  // Site name in header
  page.drawText("affichage-obligatoire-restaurant.fr", {
    x: margin,
    y: height - 35,
    size: 10,
    font: fontRegular,
    color: rgb(1, 1, 1),
  });

  // Document title in header
  page.drawText(doc.pdfTitle, {
    x: margin,
    y: height - 60,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  y = height - 110;

  // Icon placeholder & category
  page.drawText(`${doc.categoryLabel}`, {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: PRIMARY_COLOR,
  });
  y -= 30;

  // Main content sections
  for (const section of doc.pdfSections) {
    if (section.heading) {
      // Section background
      page.drawRectangle({
        x: margin - 10,
        y: y - 5,
        width: 595.28 - 2 * margin + 20,
        height: 22,
        color: LIGHT_GRAY,
      });

      page.drawText(section.heading, {
        x: margin,
        y,
        size: 13,
        font: fontBold,
        color: PRIMARY_COLOR,
      });
      y -= 30;
    }

    for (const line of section.lines) {
      if (line === "") {
        y -= 10;
        continue;
      }

      page.drawText(line, {
        x: margin + 10,
        y,
        size: 11,
        font: fontRegular,
        color: TEXT_COLOR,
      });
      y -= 18;
    }

    y -= 15;
  }

  // Legal basis at bottom
  const legalY = 100;
  page.drawRectangle({
    x: 0,
    y: legalY - 15,
    width: 595.28,
    height: 1,
    color: LIGHT_GRAY,
  });

  page.drawText("Base légale :", {
    x: margin,
    y: legalY - 35,
    size: 8,
    font: fontBold,
    color: TEXT_COLOR,
  });

  // Wrap legal basis text if too long
  const legalText = doc.legalBasis;
  const maxCharsPerLine = 90;
  const legalLines: string[] = [];
  for (let i = 0; i < legalText.length; i += maxCharsPerLine) {
    legalLines.push(legalText.slice(i, i + maxCharsPerLine));
  }

  let legalLineY = legalY - 50;
  for (const ll of legalLines) {
    page.drawText(ll, {
      x: margin,
      y: legalLineY,
      size: 7,
      font: fontRegular,
      color: rgb(107 / 255, 114 / 255, 128 / 255),
    });
    legalLineY -= 12;
  }

  // Footer accent bar
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 595.28,
    height: 5,
    color: ACCENT_COLOR,
  });

  return pdfDoc;
}

export async function generatePackPdf(singleDocId?: string): Promise<Uint8Array> {
  if (singleDocId) {
    const doc = getDocumentById(singleDocId);
    if (!doc) throw new Error(`Document not found: ${singleDocId}`);
    const pdfDoc = await generateSingleDocumentPdf(doc);
    return pdfDoc.save();
  }

  // Generate all documents merged into one PDF
  const mergedPdf = await PDFDocument.create();

  for (const doc of DOCUMENTS) {
    const singlePdf = await generateSingleDocumentPdf(doc);
    const pages = await mergedPdf.copyPages(singlePdf, singlePdf.getPageIndices());
    for (const page of pages) {
      mergedPdf.addPage(page);
    }
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

  for (let i = 0; i < DOCUMENTS.length; i++) {
    const doc = DOCUMENTS[i];
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

  // Footer
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
