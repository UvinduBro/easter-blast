import type { Metadata } from "next";
import { Noto_Sans_Sinhala } from "next/font/google";
import StructuredData from "@/components/site/StructuredData";
import { SITE_CONFIG } from "@/lib/site/config";
import "./globals.css";

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600", "700"],
});

const TITLE = `${SITE_CONFIG.brandName} — The 2019 Sri Lanka Easter Sunday Attacks`;
const DESCRIPTION =
  "An independent, continuously updated record of the 21 April 2019 Easter Sunday bombings — who died, who did it, who failed to stop it, and the long, unfinished search for accountability.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_CONFIG.brandName,
    url: SITE_CONFIG.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_CONFIG.brandName,
            url: SITE_CONFIG.url,
            email: SITE_CONFIG.emailHello,
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_CONFIG.brandName,
            url: SITE_CONFIG.url,
            inLanguage: ["en", "si"],
          }}
        />
        {children}
      </body>
    </html>
  );
}
