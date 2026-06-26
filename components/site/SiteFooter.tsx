"use client";

import Link from "next/link";
import { STATUS_STYLES } from "@/lib/status-styles";
import { SITE_CONFIG } from "@/lib/site/config";
import type { Status } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

const LEGEND_ORDER: Status[] = ["fact", "allegation", "developing", "disputed"];

const TEXT = {
  si: {
    mission:
      "2019 අප්‍රේල් 21 පාස්කු ඉරිදා බෝම්බ ප්‍රහාරය පිළිබඳ ස්වාධීන, නිරන්තරයෙන් යවත්කාලීන කරන වාර්තාවකි.",
    standards: "සංස්කරණ ප්‍රමිතීන්",
    correctionsLabel: "වරදක් සොයා ගත්තාද?",
    corrections: `මූලාශ්‍ර වෙනස් වේ, නඩු විකාශනය වේ. මූලාශ්‍ර සබැඳියක් සමඟ ${SITE_CONFIG.emailCorrections} වෙත ලියන්න.`,
    memorial: "2019 අප්‍රේල් 21 වැනිදා මියගිය 269 කට වැඩි දෙනාගේ සිහිවටනය පිණිස.",
    lastReviewed: "මෙම වෙබ් අඩවිය නිරවද්‍යතාව සඳහා අවසන් වරට සමාලෝචනය කරන ලද්දේ",
    mindMapLink: "මානසික සිතියම",
  },
  en: {
    mission:
      "An independent, continuously updated record of the 21 April 2019 Easter Sunday bombings.",
    standards: "Editorial standards",
    correctionsLabel: "Found an error?",
    corrections: `Sources change and cases evolve. Email ${SITE_CONFIG.emailCorrections} with a source link.`,
    memorial: "In memory of the 269+ people killed on 21 April 2019.",
    lastReviewed: "This site was last reviewed for accuracy on",
    mindMapLink: "Mind Map",
  },
};

export default function SiteFooter() {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-8 text-sm text-zinc-400 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {LEGEND_ORDER.map((status) => {
            const style = STATUS_STYLES[status];
            return (
              <span key={status} className="flex items-center gap-1.5 text-xs">
                <span aria-hidden>{style.icon}</span>
                {style.label[lang]}
              </span>
            );
          })}
        </div>

        <p>{copy.mission}</p>

        <p>
          <span className="font-medium text-zinc-300">{copy.correctionsLabel}</span>{" "}
          {copy.corrections}
        </p>

        <p className="text-zinc-300">{copy.memorial}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/about" className="hover:text-zinc-300">
              {copy.standards}
            </Link>
            <Link href="/mind-map" className="hover:text-zinc-300">
              {copy.mindMapLink}
            </Link>
            <a href={`mailto:${SITE_CONFIG.emailHello}`} className="hover:text-zinc-300">
              {SITE_CONFIG.emailHello}
            </a>
          </div>
          <span>
            {copy.lastReviewed} {SITE_CONFIG.lastReviewed}.
          </span>
        </div>
      </div>
    </footer>
  );
}
