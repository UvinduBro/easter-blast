"use client";

import { useMemo } from "react";
import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphNode } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";
import { useUIStore } from "@/store/ui-store";

interface TimelineViewProps {
  nodes: GraphNode[];
}

export default function TimelineView({ nodes }: TimelineViewProps) {
  const lang = useLanguageStore((s) => s.lang);
  const selectNode = useUIStore((s) => s.selectNode);

  const groups = useMemo(() => {
    const dated = nodes.filter((n) => n.date);
    const undated = nodes.filter((n) => !n.date);
    dated.sort((a, b) => a.date!.localeCompare(b.date!));

    const byDate = new Map<string, GraphNode[]>();
    for (const n of dated) {
      if (!byDate.has(n.date!)) byDate.set(n.date!, []);
      byDate.get(n.date!)!.push(n);
    }
    const entries: { date: string | null; nodes: GraphNode[] }[] = [
      ...[...byDate.entries()].map(([date, ns]) => ({ date, nodes: ns })),
    ];
    if (undated.length > 0) entries.push({ date: null, nodes: undated });
    return entries;
  }, [nodes]);

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="relative mx-auto max-w-2xl border-l border-zinc-700 pl-6">
        {groups.map((group) => (
          <div key={group.date ?? "undated"} className="relative pb-8">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-400" />
            <h2 className="mb-2 text-sm font-semibold text-zinc-300">
              {group.date ?? (lang === "si" ? "දිනය නොදන්නා" : "Undated")}
            </h2>
            <div className="flex flex-col gap-2">
              {group.nodes.map((n) => {
                const style = KIND_STYLES[n.kind];
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => selectNode(n.id)}
                    className="flex items-start gap-2 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-left hover:border-zinc-500"
                  >
                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full ${style.accent}`}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-zinc-100">
                        {n.name[lang]}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {n.role[lang]}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
