"use client";

import UpdateCard from "@/components/site/UpdateCard";
import { UPDATES, UPDATES_HOW_THIS_WORKS } from "@/lib/site-content/updates";
import { useLanguageStore } from "@/store/language-store";

export default function UpdatesContent() {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <>
      <p className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 text-sm leading-relaxed text-zinc-300">
        {UPDATES_HOW_THIS_WORKS[lang]}
      </p>
      <div className="mt-6 space-y-4">
        {UPDATES.map((entry, i) => (
          <UpdateCard key={i} entry={entry} />
        ))}
      </div>
    </>
  );
}
