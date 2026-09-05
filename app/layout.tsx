import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";

const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "../fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Berth", template: "%s · Berth" },
  description: "Fix by Berth. Agents for every desk in maritime trade.",
  metadataBase: new URL("https://berth.ai"),
  openGraph: { siteName: "Berth", type: "website", images: ["/assets/hero-1200.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Nav />
        {children}
        <Effects />
      </body>
    </html>
  );
}
