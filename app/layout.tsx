import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roman Khan | Digital Marketer, Video Creator & CS Graduate",
  description:
    "Portfolio of Roman Khan, a digital marketer, video creator and computer science graduate from Peshawar, Pakistan. Shopify, ad copy, motion animation and customer profiling.",
  metadataBase: new URL("https://romankhan.dev"),
  openGraph: {
    title: "Roman Khan | Digital Marketer & Video Creator",
    description:
      "I turn market research into stores, campaigns and videos that convert.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-noise" />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
