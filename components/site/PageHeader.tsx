"use client";

import type { ReactNode } from "react";
import type { LocalizedText } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

export default function PageHeader({
  title,
  intro,
  icon,
}: {
  title: LocalizedText;
  intro?: LocalizedText;
  icon?: ReactNode;
}) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <div className="border-b border-zinc-900 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-red-400">
              {icon}
            </span>
          )}
          <h1 className="text-2xl font-bold text-zinc-50 sm:text-3xl">{title[lang]}</h1>
        </div>
        {intro && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {intro[lang]}
          </p>
        )}
      </div>
    </div>
  );
}
