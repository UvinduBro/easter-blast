"use client";

import UpdateCard from "@/components/site/UpdateCard";
import type { UpdatesContentData } from "@/lib/site-content/updates";
import { useLanguageStore } from "@/store/language-store";

export default function UpdatesContent({ content }: { content: UpdatesContentData }) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <>
      <p className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 text-sm leading-relaxed text-zinc-300">
        {content.howThisWorks[lang]}
      </p>
      <div className="mt-6 space-y-4">
        {content.items.map((entry, i) => (
          <UpdateCard key={i} entry={entry} />
        ))}
      </div>
    </>
  );
}
