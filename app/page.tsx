"use client";

import dynamic from "next/dynamic";
import Disclaimer from "@/components/Disclaimer";
import Legend from "@/components/Legend";
import DetailDrawer from "@/components/DetailDrawer";
import { useLanguageStore } from "@/store/language-store";

const FlowMap = dynamic(() => import("@/components/FlowMap"), {
  ssr: false,
});

export default function Home() {
  const lang = useLanguageStore((s) => s.lang);
  const toggleLang = useLanguageStore((s) => s.toggleLang);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Disclaimer />

      <header className="flex items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-950 px-4 py-2.5">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-zinc-50 sm:text-base">
            {lang === "si"
              ? "පාස්කු ප්‍රහාරය — මානසික සිතියම"
              : "Easter Sunday Attacks — Mind Map"}
          </h1>
        </div>
        <button
          type="button"
          onClick={toggleLang}
          className="shrink-0 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
        >
          {lang === "si" ? "English" : "සිංහල"}
        </button>
      </header>

      <main className="relative min-h-0 flex-1">
        <FlowMap />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3 sm:justify-start sm:p-4">
          <div className="pointer-events-auto">
            <Legend />
          </div>
        </div>
        <DetailDrawer />
      </main>
    </div>
  );
}
