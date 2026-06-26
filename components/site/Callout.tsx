"use client";

import type { LocalizedText } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

export default function Callout({
  tone = "warning",
  title,
  body,
}: {
  tone?: "warning" | "info";
  title: LocalizedText;
  body: LocalizedText;
}) {
  const lang = useLanguageStore((s) => s.lang);
  const toneClasses =
    tone === "warning"
      ? "border-amber-900/40 bg-amber-950/40 text-amber-100"
      : "border-sky-900/40 bg-sky-950/40 text-sky-100";

  return (
    <div className={`flex items-start gap-3 rounded-lg border px-4 py-3 ${toneClasses}`}>
      <span className="mt-0.5 text-base" aria-hidden>
        {tone === "warning" ? "⚠️" : "ℹ️"}
      </span>
      <div className="min-w-0 flex-1 text-sm leading-relaxed">
        <p className="font-semibold">{title[lang]}</p>
        <p className="mt-1 opacity-90">{body[lang]}</p>
      </div>
    </div>
  );
}
