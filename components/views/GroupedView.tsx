"use client";

import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphNode, NodeKind } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";
import { useUIStore } from "@/store/ui-store";

const ORDER: NodeKind[] = [
  "person",
  "event",
  "allegation",
  "counter-argument",
  "committee",
  "legal",
];

interface GroupedViewProps {
  nodes: GraphNode[];
}

export default function GroupedView({ nodes }: GroupedViewProps) {
  const lang = useLanguageStore((s) => s.lang);
  const selectNode = useUIStore((s) => s.selectNode);

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="flex flex-col gap-6">
        {ORDER.map((kind) => {
          const group = nodes
            .filter((n) => n.kind === kind)
            .sort((a, b) => a.name.en.localeCompare(b.name.en));
          if (group.length === 0) return null;
          const style = KIND_STYLES[kind];
          return (
            <section key={kind}>
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <span className={`h-2.5 w-2.5 rounded-full ${style.accent}`} />
                {style.label[lang]}
                <span className="text-xs font-normal text-zinc-500">
                  ({group.length})
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {group.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => selectNode(n.id)}
                    className="rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-left hover:border-zinc-500"
                  >
                    <p className="truncate text-sm font-medium text-zinc-100">
                      {n.name[lang]}
                    </p>
                    <p className="truncate text-xs text-zinc-500">
                      {n.role[lang]}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
