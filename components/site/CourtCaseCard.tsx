"use client";

import StatusTag from "@/components/site/StatusTag";
import type { CourtCase } from "@/lib/site-content/court-cases";
import { useLanguageStore } from "@/store/language-store";

export default function CourtCaseCard({ courtCase }: { courtCase: CourtCase }) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold text-zinc-100">{courtCase.title[lang]}</h3>
        <div className="flex flex-wrap gap-1.5">
          {courtCase.decided && (
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-500/30 bg-zinc-500/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-200">
              <span aria-hidden>✅</span>
              {lang === "si" ? "තීන්දු වී ඇත" : "Decided"}
            </span>
          )}
          {courtCase.statuses.map((s, i) => (
            <StatusTag key={i} status={s.status} note={s.note} />
          ))}
        </div>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{courtCase.body[lang]}</p>
    </div>
  );
}
