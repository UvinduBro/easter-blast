"use client";

import type { LocalizedText } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

export default function PageHeader({
  title,
  intro,
}: {
  title: LocalizedText;
  intro?: LocalizedText;
}) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <div className="border-b border-zinc-900 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-zinc-50 sm:text-3xl">{title[lang]}</h1>
        {intro && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {intro[lang]}
          </p>
        )}
      </div>
    </div>
  );
}
