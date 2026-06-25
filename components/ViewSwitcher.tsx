"use client";

import { useViewStore, type ViewMode } from "@/store/view-store";

const VIEWS: { id: ViewMode; si: string; en: string }[] = [
  { id: "mindmap", si: "මානසික සිතියම", en: "Mind Map" },
  { id: "timeline", si: "කාල රාමුව", en: "Timeline" },
  { id: "table", si: "ලැයිස්තුව", en: "Table" },
  { id: "grouped", si: "කාණ්ඩ", en: "Grouped" },
  { id: "tree", si: "ශ්‍රේණි", en: "Tree" },
];

export default function ViewSwitcher({ lang }: { lang: "si" | "en" }) {
  const view = useViewStore((s) => s.view);
  const setView = useViewStore((s) => s.setView);

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900 p-1 text-xs">
      {VIEWS.map((v) => (
        <button
          key={v.id}
          type="button"
          onClick={() => setView(v.id)}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            view === v.id
              ? "bg-zinc-100 text-zinc-900"
              : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          }`}
        >
          {v[lang]}
        </button>
      ))}
    </div>
  );
}
