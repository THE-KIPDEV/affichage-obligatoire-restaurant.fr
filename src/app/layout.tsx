import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    "Tous les documents d'affichage obligatoire pour restaurant et bar en France. Interdiction de fumer, allergènes, licence, prix, hygiène. Téléchargement immédiat.",
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
      "Téléchargez tous les affichages obligatoires pour votre restaurant ou bar. Documents conformes, prêts à imprimer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affichage Obligatoire Restaurant & Bar",
    description:
      "Tous les documents d'affichage obligatoire pour restaurant et bar. Téléchargement immédiat.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
