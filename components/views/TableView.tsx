"use client";

import { useMemo, useState } from "react";
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

interface TableViewProps {
  nodes: GraphNode[];
}

export default function TableView({ nodes }: TableViewProps) {
  const lang = useLanguageStore((s) => s.lang);
  const selectNode = useUIStore((s) => s.selectNode);
  const [search, setSearch] = useState("");
  const [kindFilter, setKindFilter] = useState<NodeKind | "all">("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return nodes
      .filter((n) => kindFilter === "all" || n.kind === kindFilter)
      .filter(
        (n) =>
          !q ||
          n.name.en.toLowerCase().includes(q) ||
          n.name.si.includes(q) ||
          n.role.en.toLowerCase().includes(q)
      )
      .sort((a, b) => a.name.en.localeCompare(b.name.en));
  }, [nodes, search, kindFilter]);

  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden p-4">
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "si" ? "සොයන්න..." : "Search..."}
          className="w-full max-w-xs rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 outline-none focus:border-zinc-500"
        />
        <select
          value={kindFilter}
          onChange={(e) => setKindFilter(e.target.value as NodeKind | "all")}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 outline-none focus:border-zinc-500"
        >
          <option value="all">{lang === "si" ? "සියල්ල" : "All kinds"}</option>
          {ORDER.map((k) => (
            <option key={k} value={k}>
              {KIND_STYLES[k].label[lang]}
            </option>
          ))}
        </select>
        <span className="text-xs text-zinc-500">
          {filtered.length} / {nodes.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto rounded-lg border border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-3 py-2">{lang === "si" ? "නම" : "Name"}</th>
              <th className="px-3 py-2">{lang === "si" ? "භූමිකාව" : "Role"}</th>
              <th className="px-3 py-2">{lang === "si" ? "වර්ගය" : "Kind"}</th>
              <th className="px-3 py-2">{lang === "si" ? "දිනය" : "Date"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filtered.map((n) => {
              const style = KIND_STYLES[n.kind];
              return (
                <tr
                  key={n.id}
                  onClick={() => selectNode(n.id)}
                  className="cursor-pointer hover:bg-zinc-900/60"
                >
                  <td className="px-3 py-2 text-zinc-100">{n.name[lang]}</td>
                  <td className="px-3 py-2 text-zinc-400">{n.role[lang]}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${style.tag}`}
                    >
                      {style.label[lang]}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-zinc-500">{n.date ?? "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
