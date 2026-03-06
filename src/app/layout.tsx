import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ConversionWidgets } from "@/components/ConversionWidgets";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://affichage-obligatoire-restaurant.fr"
  ),
  title: {
    default:
      "Affichage Obligatoire Restaurant & Bar – Documents Officiels à Télécharger",
    template: "%s | Affichage Obligatoire Restaurant",
  },
  description:
    "Les 14 documents d'affichage obligatoire pour restaurant et bar en France. Interdiction de fumer, allergènes, licence, prix, hygiène. PDF prêt en 2 minutes.",
  keywords: [
    "affichage obligatoire restaurant",
    "affichage obligatoire bar",
    "document obligatoire restaurant",
    "interdiction fumer restaurant",
    "allergènes restaurant",
    "licence débit boissons",
    "affichage prix restaurant",
    "hygiène restaurant",
    "HACCP restaurant",
    "protection mineurs alcool",
  ],
  authors: [{ name: "Affichage Obligatoire Restaurant" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Affichage Obligatoire Restaurant",
    title:
      "Affichage Obligatoire Restaurant & Bar – Documents Officiels",
    description:
      "Les documents exigés par la DGCCRF lors d'un contrôle en restaurant ou bar. PDF conformes, prêts à imprimer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affichage Obligatoire Restaurant & Bar",
    description:
      "Les 14 documents d'affichage obligatoire pour restaurant et bar. PDF prêt en 2 minutes.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <SiteNav />
        {children}
        <SiteFooter />
        <ConversionWidgets />
        <Script src="https://kipstats.com/tracker.js" data-site="kp_5a41928a" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
