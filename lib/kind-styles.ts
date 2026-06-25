import type { LocalizedText, NodeKind } from "./types";

interface KindStyle {
  label: LocalizedText;
  /** Tailwind classes for the accent strip / dot. */
  accent: string;
  /** Tailwind classes for the small category tag. */
  tag: string;
  /** Hex used for React Flow edge/handle accents. */
  hex: string;
}

export const KIND_STYLES: Record<NodeKind, KindStyle> = {
  person: {
    label: { si: "පුද්ගලයා", en: "Person" },
    accent: "bg-blue-500",
    tag: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    hex: "#3b82f6",
  },
  event: {
    label: { si: "සිදුවීම", en: "Event" },
    accent: "bg-zinc-400",
    tag: "bg-zinc-400/15 text-zinc-300 border-zinc-400/30",
    hex: "#a1a1aa",
  },
  allegation: {
    label: { si: "චෝදනාව", en: "Allegation" },
    accent: "bg-red-500",
    tag: "bg-red-500/15 text-red-300 border-red-500/30",
    hex: "#ef4444",
  },
  "counter-argument": {
    label: { si: "ප්‍රතිවාදය", en: "Counter-argument" },
    accent: "bg-emerald-500",
    tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    hex: "#10b981",
  },
  committee: {
    label: { si: "කමිටුව", en: "Committee" },
    accent: "bg-amber-500",
    tag: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    hex: "#f59e0b",
  },
  legal: {
    label: { si: "නෛතික", en: "Legal" },
    accent: "bg-purple-500",
    tag: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    hex: "#a855f7",
  },
};
