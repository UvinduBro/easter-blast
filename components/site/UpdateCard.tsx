"use client";

import StatusTag from "@/components/site/StatusTag";
import type { UpdateEntry } from "@/lib/site-content/updates";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: { context: "පසුබිම", source: "මූලාශ්‍රය", affects: "බලපායි" },
  en: { context: "Context", source: "Source", affects: "Affects" },
};

export default function UpdateCard({ entry }: { entry: UpdateEntry }) {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];

  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold text-zinc-400">{entry.date[lang]}</span>
        <div className="flex flex-wrap gap-1.5">
          {entry.statuses.map((s, i) => (
            <StatusTag key={i} status={s.status} note={s.note} />
          ))}
        </div>
      </div>
      <h3 className="mt-1.5 font-semibold text-zinc-100">{entry.headline[lang]}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{entry.summary[lang]}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        <span className="font-semibold text-zinc-300">{copy.context}:</span> {entry.context[lang]}
      </p>
      <p className="mt-2 text-xs text-zinc-500">
        <span className="font-semibold">{copy.source}:</span> {entry.source}
        <span className="mx-2">·</span>
        <span className="font-semibold">{copy.affects}:</span> {entry.affects[lang]}
      </p>
    </article>
  );
}
