"use client";

import StatusTag from "@/components/site/StatusTag";
import type { TimelinePhase as TimelinePhaseData } from "@/lib/site-content/timeline";
import { useLanguageStore } from "@/store/language-store";

export default function TimelinePhase({ phase }: { phase: TimelinePhaseData }) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <section className="border-t border-zinc-900 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{phase.heading[lang]}</h2>

      <ol className="mt-4 space-y-5 border-l border-zinc-800 pl-5">
        {phase.entries.map((entry, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-zinc-600" />
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-semibold text-zinc-100">{entry.date[lang]}</span>
              <div className="flex flex-wrap gap-1.5">
                {entry.statuses.map((s, j) => (
                  <StatusTag key={j} status={s.status} note={s.note} />
                ))}
              </div>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-zinc-300">{entry.body[lang]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
