"use client";

import { SITE_CONFIG } from "@/lib/site/config";
import type { AboutContentData } from "@/lib/site-content/about";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: {
    whyHeading: "මෙම අඩවිය පවතින්නේ ඇයි",
    standardsHeading: "අපගේ සංස්කරණ ප්‍රමිතීන්",
    reliabilityHeading: "විශ්වසනීයත්වය පිළිබඳ සටහනක්",
    categoriesHeading: "මූලාශ්‍ර කාණ්ඩ",
    questionsHeading: "අප නිරීක්ෂණය කරන විවෘත ප්‍රශ්න",
    contactHeading: "සම්බන්ධතා සහ නිවැරදි කිරීම්",
    general: "සාමාන්‍ය",
    corrections: "නිවැරදි කිරීම් (මූලාශ්‍ර සබැඳියක් සමඟ, කරුණාකර)",
  },
  en: {
    whyHeading: "Why this site exists",
    standardsHeading: "Our editorial standards",
    reliabilityHeading: "A note on reliability",
    categoriesHeading: "Source categories",
    questionsHeading: "Open questions we are tracking",
    contactHeading: "Contact & corrections",
    general: "General",
    corrections: "Corrections (with source link, please)",
  },
};

export default function AboutContent({ content }: { content: AboutContentData }) {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.whyHeading}</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.whyExists[lang]}
        </p>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {copy.standardsHeading}
        </h2>
        <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.editorialStandards.map((item, i) => (
            <li key={i}>{item[lang]}</li>
          ))}
        </ol>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {copy.reliabilityHeading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.reliabilityNote[lang]}
        </p>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {copy.categoriesHeading}
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.sourceCategories.map((cat, i) => (
            <li key={i}>
              <span className="font-semibold text-zinc-100">{cat.title[lang]}:</span>{" "}
              {cat.body[lang]}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {copy.questionsHeading}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.openQuestions.map((q, i) => (
            <li key={i}>{q[lang]}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.contactHeading}</h2>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <li>
            {copy.general}: <a href={`mailto:${SITE_CONFIG.emailHello}`} className="text-sky-400 hover:underline">{SITE_CONFIG.emailHello}</a>
          </li>
          <li>
            {copy.corrections}:{" "}
            <a href={`mailto:${SITE_CONFIG.emailCorrections}`} className="text-sky-400 hover:underline">
              {SITE_CONFIG.emailCorrections}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
