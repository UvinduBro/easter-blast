"use client";

import { useMemo } from "react";
import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphEdge, GraphNode } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";
import { useUIStore } from "@/store/ui-store";

interface DetailDrawerProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export default function DetailDrawer({ nodes, edges }: DetailDrawerProps) {
  const lang = useLanguageStore((s) => s.lang);
  const selectedNodeId = useUIStore((s) => s.selectedNodeId);
  const selectNode = useUIStore((s) => s.selectNode);

  const node = useMemo(
    () => nodes.find((n) => n.id === selectedNodeId) ?? null,
    [nodes, selectedNodeId]
  );

  const connections = useMemo(() => {
    if (!node) return [];
    const ids = new Set<string>();
    for (const edge of edges) {
      if (edge.source === node.id) ids.add(edge.target);
      if (edge.target === node.id) ids.add(edge.source);
    }
    return [...ids]
      .map((id) => nodes.find((n) => n.id === id))
      .filter((n): n is NonNullable<typeof n> => Boolean(n));
  }, [node, edges, nodes]);

  const isOpen = node !== null;
  const style = node ? KIND_STYLES[node.kind] : null;

  return (
    <>
      <div
        onClick={() => selectNode(null)}
        aria-hidden
        className={`fixed inset-0 z-30 bg-black/50 motion-safe:transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Node details"
        className={`fixed inset-x-0 bottom-0 z-40 max-h-[80vh] overflow-y-auto rounded-t-2xl border-t border-zinc-700 bg-zinc-900 p-5 shadow-2xl motion-safe:transition-transform sm:inset-y-0 sm:left-auto sm:right-0 sm:bottom-auto sm:h-full sm:max-h-none sm:w-[420px] sm:rounded-none sm:rounded-l-2xl sm:border-l sm:border-t-0 ${
          isOpen
            ? "translate-y-0 sm:translate-x-0"
            : "translate-y-full sm:translate-x-full sm:translate-y-0"
        }`}
      >
        {node && style && (
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${style.tag}`}
                >
                  {style.label[lang]}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-zinc-50">
                  {node.name[lang]}
                </h2>
                <p className="text-sm text-zinc-400">{node.role[lang]}</p>
              </div>
              <button
                type="button"
                onClick={() => selectNode(null)}
                aria-label="Close"
                className="shrink-0 rounded p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              >
                ✕
              </button>
            </div>

            {node.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={node.image}
                alt={node.name[lang]}
                className="h-40 w-full rounded-lg border border-zinc-700 object-cover"
              />
            )}

            {node.video && (
              <div className="space-y-1">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {lang === "si" ? "වීඩියෝ" : "Video"}
                </h3>
                <video
                  src={node.video}
                  controls
                  className="w-full rounded-lg border border-zinc-700"
                />
              </div>
            )}

            <div className="space-y-1">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                සිංහල
              </h3>
              <p className="text-sm leading-relaxed text-zinc-200">
                {node.si}
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                English
              </h3>
              <p className="text-sm leading-relaxed text-zinc-200">
                {node.en}
              </p>
            </div>

            {node.sources && node.sources.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {lang === "si" ? "මූලාශ්‍ර" : "Sources"}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {node.sources.map((source, i) => (
                    <li key={`${source.url}-${i}`}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-sky-400 hover:border-zinc-500 hover:bg-zinc-800 hover:underline"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {connections.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {lang === "si" ? "සම්බන්ධිත" : "Connected to"}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {connections.map((conn) => {
                    const connStyle = KIND_STYLES[conn.kind];
                    return (
                      <li key={conn.id}>
                        <button
                          type="button"
                          onClick={() => selectNode(conn.id)}
                          className="flex w-full items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-left text-sm text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
                        >
                          <span
                            className={`h-2 w-2 shrink-0 rounded-full ${connStyle.accent}`}
                          />
                          <span className="truncate">{conn.name[lang]}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
