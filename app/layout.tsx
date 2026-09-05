import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";

// Newsreader, variable: optical size and weight axes, so it draws differently at 160px and at 20px.
const serif = localFont({
  src: [
    { path: "../fonts/newsreader-latin-opsz-normal.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/newsreader-latin-opsz-italic.woff2", weight: "200 800", style: "italic" },
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
  openGraph: { siteName: "Berth", type: "website" },
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
