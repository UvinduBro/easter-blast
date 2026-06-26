"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useGraphData } from "@/lib/hooks/useGraphData";
import { MIND_MAP_SECTION } from "@/lib/site-content/home";
import { useLanguageStore } from "@/store/language-store";

const FlowMap = dynamic(() => import("@/components/FlowMap"), { ssr: false });

export default function HomeMindMap() {
  const lang = useLanguageStore((s) => s.lang);
  const { nodes, edges, loading, error } = useGraphData();

  return (
    <section className="border-t border-zinc-900 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {MIND_MAP_SECTION.heading[lang]}
        </h2>
        <Link href="/mind-map" className="text-sm font-medium text-red-400 hover:text-red-300">
          {MIND_MAP_SECTION.link[lang]}
        </Link>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
        {MIND_MAP_SECTION.body[lang]}
      </p>
      <div className="mt-4 h-[420px] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
        {loading ? (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            {lang === "si" ? "පූරණය වෙමින්..." : "Loading..."}
          </div>
        ) : error ? (
          <div className="flex h-full items-center justify-center text-sm text-red-400">{error}</div>
        ) : (
          <FlowMap nodes={nodes} edges={edges} />
        )}
      </div>
    </section>
  );
}
