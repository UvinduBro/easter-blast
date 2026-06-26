"use client";

import { HelpCircleIcon } from "@/components/site/icons";
import StatusTag from "@/components/site/StatusTag";
import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/site-content/faq";
import { useLanguageStore } from "@/store/language-store";

export default function FaqSection() {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <section className="border-t border-zinc-900 pt-8">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-50 sm:text-xl">
        <HelpCircleIcon className="h-5 w-5 text-red-400" />
        {FAQ_HEADING[lang]}
      </h2>
      <div className="mt-4 space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <details
            key={i}
            className="group rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700 [&_summary]:list-none"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3">
              <span className="font-medium text-zinc-100">{item.question[lang]}</span>
              <span className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.statuses.map((s, j) => (
                <StatusTag key={j} status={s.status} note={s.note} />
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.answer[lang]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
