import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "365 Dhuvas",
  description: "365 Dhuvas",
};

const aammuFK = localFont({
  src: "../public/assets/fonts/aammufkF.ttf",
  variable: "--font-aammuFK"
})
const utheemu = localFont({
  src: "../public/assets/fonts/mvutheemuREGULAR.ttf",
  variable: "--font-utheemu"
})
const waheed = localFont({
  src: "../public/assets/fonts/MVAWaheed.ttf",
  variable: "--font-waheed"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aammuFK.variable} ${utheemu.variable} ${waheed.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
