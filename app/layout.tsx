import type { Metadata } from "next";
import { Noto_Sans_Sinhala } from "next/font/google";
import { SITE_CONFIG } from "@/lib/site/config";
import "./globals.css";

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.brandName} — The 2019 Sri Lanka Easter Sunday Attacks`,
  description:
    "An independent, continuously updated record of the 21 April 2019 Easter Sunday bombings — who died, who did it, who failed to stop it, and the long, unfinished search for accountability.",
  openGraph: {
    siteName: SITE_CONFIG.brandName,
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="si"
      className={`${notoSansSinhala.variable} dark h-full antialiased`}
    >
      <body className="flex h-full min-h-screen flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
