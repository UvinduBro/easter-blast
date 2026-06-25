"use client";

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import Image from "next/image";
import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphNode } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";
import { useUIStore } from "@/store/ui-store";

export type CardNodeType = Node<GraphNode & Record<string, unknown>, "card">;

export default function CardNode({ id, data }: NodeProps<CardNodeType>) {
  const lang = useLanguageStore((s) => s.lang);
  const selectedNodeId = useUIStore((s) => s.selectedNodeId);
  const selectNode = useUIStore((s) => s.selectNode);
  const style = KIND_STYLES[data.kind];
  const isSelected = selectedNodeId === id;

  return (
    <button
      type="button"
      onClick={() => selectNode(id)}
      className={`group w-56 overflow-hidden rounded-xl border bg-zinc-900 text-left shadow-lg transition-colors ${
        isSelected
          ? "border-zinc-300 ring-2 ring-zinc-300"
          : "border-zinc-700 hover:border-zinc-500"
      }`}
    >
      <Handle type="target" position={Position.Top} className="!bg-zinc-500" />
      <Handle type="source" position={Position.Bottom} className="!bg-zinc-500" />
      <div className={`h-1.5 w-full ${style.accent}`} />
      <div className="flex items-start gap-3 p-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-700 text-sm font-semibold text-zinc-100">
          {data.image ? (
            <Image
              src={data.image}
              alt={data.name[lang]}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            data.initials
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-50">
            {data.name[lang]}
          </p>
          <p className="truncate text-xs text-zinc-400">{data.role[lang]}</p>
        </div>
      </div>
      <div className="px-3 pb-2.5">
        <span
          className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${style.tag}`}
        >
          {style.label[lang]}
        </span>
      </div>
    </button>
  );
}
