import type { LocalizedText, Status } from "./types";

interface StatusStyle {
  label: LocalizedText;
  icon: string;
  className: string;
}

export const STATUS_STYLES: Record<Status, StatusStyle> = {
  fact: {
    label: { si: "සත්‍යය", en: "Fact" },
    icon: "🟢",
    className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  allegation: {
    label: { si: "චෝදනාව", en: "Allegation" },
    icon: "🟡",
    className: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  developing: {
    label: { si: "සිදුවෙමින්", en: "Developing" },
    icon: "🔵",
    className: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  disputed: {
    label: { si: "විවාදාත්මකයි", en: "Disputed" },
    icon: "⚪",
    className: "bg-zinc-400/15 text-zinc-300 border-zinc-400/30",
  },
};
