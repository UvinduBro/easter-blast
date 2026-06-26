"use client";

import StatusTag from "@/components/site/StatusTag";
import type { VictimsContentData } from "@/lib/site-content/victims";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: {
    whoHeading: "ඔවුන් කවුරුන්ද",
    vaticanHeading: "වැටිකන් පිළිගැනීම",
    numbersHeading: "ගණන් පිළිබඳ සටහනක්",
    aftermathHeading: "ඉවතහැරීම සමඟ ජීවත් වීම",
  },
  en: {
    whoHeading: "Who they were",
    vaticanHeading: "Vatican recognition",
    numbersHeading: "A note on the numbers",
    aftermathHeading: "Living with the aftermath",
  },
};

export default function VictimsContent({ content }: { content: VictimsContentData }) {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
        {content.opening[lang]}
      </p>

      <section>
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.whoHeading}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.whoTheyWere.map((item, i) => (
            <p key={i}>{item[lang]}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.vaticanHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.vaticanRecognition[lang]}
        </p>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.numbersHeading}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <StatusTag status="disputed" />
          <StatusTag status="fact" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.noteOnNumbers[lang]}
        </p>
      </section>

      <section className="border-t border-zinc-900 pt-8">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{copy.aftermathHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          {content.livingWithAftermath[lang]}
        </p>
      </section>
    </div>
  );
}
