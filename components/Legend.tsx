"use client";

import { KIND_STYLES } from "@/lib/kind-styles";
import type { NodeKind } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

const ORDER: NodeKind[] = [
  "person",
  "event",
  "allegation",
  "counter-argument",
  "committee",
  "legal",
];

export default function Legend() {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-200 backdrop-blur">
      {ORDER.map((kind) => {
        const style = KIND_STYLES[kind];
        return (
          <span key={kind} className="flex items-center gap-1.5">
            <span className={`h-2.5 w-2.5 rounded-full ${style.accent}`} />
            {style.label[lang]}
          </span>
        );
      })}
    </div>
  );
}
