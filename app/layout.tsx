import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kokovit | Visokokvaliteten naravni substrat",
  description: "Visokokvaliteten naravni substrat iz mešanice kokosovih vlaken, šote in drugih organskih snovi, za visoke grede, vrtove, rastlinjake, okrasne grede, ločnice itd.",
  keywords: "Kokovit, naravni substrat, kokovit, kokosova vlakna, kokos, vlakna, visoke grede, grede, vrt, rastlinjaki, rastlinjak, vrtičkanje, substrat za vrt, organski substrat, substrat za rastlinjake, substrat za visoke grede, ekološki substrat, prodaja substrata Slovenija, kokos substrat"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
