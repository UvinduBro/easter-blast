import type { Metadata } from "next";
import { Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const notoSansSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pasku Map — Easter Sunday Attack Mind Map",
  description:
    "An interactive mind map exploring allegations and investigations around Sri Lanka's 2019 Easter Sunday attacks.",
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
