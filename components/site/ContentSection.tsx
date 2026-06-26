"use client";

import GraphicImage from "@/components/site/GraphicImage";
import Reveal from "@/components/site/Reveal";
import StatusTag from "@/components/site/StatusTag";
import type { ContentSection as ContentSectionData } from "@/lib/site/types";
import { useLanguageStore } from "@/store/language-store";

export default function ContentSection({ section }: { section: ContentSectionData }) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <section className="border-t border-zinc-900 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
        {section.heading[lang]}
      </h2>
      {section.intro && (
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {section.intro[lang]}
        </p>
      )}

      <div className="mt-4 space-y-4">
        {section.entries.map((entry, i) => (
          <Reveal key={i} delay={Math.min(i, 4) * 60}>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
              <div className="flex flex-wrap items-center justify-between gap-2">
                {entry.title && (
                  <h3 className="font-semibold text-zinc-100">{entry.title[lang]}</h3>
                )}
                {entry.statuses && entry.statuses.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.statuses.map((s, j) => (
                      <StatusTag key={j} status={s.status} note={s.note} />
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                {entry.body[lang]}
              </p>
              {entry.images && entry.images.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {entry.images.map((image, k) => (
                    <GraphicImage key={k} image={image} />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
