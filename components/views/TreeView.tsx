"use client";

import { useMemo } from "react";
import { KIND_STYLES } from "@/lib/kind-styles";
import { buildForest, type TreeNode } from "@/lib/tree";
import type { GraphEdge, GraphNode } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";
import { useUIStore } from "@/store/ui-store";

interface TreeViewProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

function TreeBranch({ tree, lang }: { tree: TreeNode; lang: "si" | "en" }) {
  const selectNode = useUIStore((s) => s.selectNode);
  const style = KIND_STYLES[tree.node.kind];

  return (
    <li>
      <button
        type="button"
        onClick={() => selectNode(tree.node.id)}
        className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 text-left text-sm hover:border-zinc-500"
      >
        <span className={`h-2 w-2 shrink-0 rounded-full ${style.accent}`} />
        <span className="truncate text-zinc-100">{tree.node.name[lang]}</span>
      </button>
      {tree.children.length > 0 && (
        <ul className="ml-3 mt-1.5 flex flex-col gap-1.5 border-l border-zinc-800 pl-4">
          {tree.children.map((child) => (
            <TreeBranch key={child.node.id} tree={child} lang={lang} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TreeView({ nodes, edges }: TreeViewProps) {
  const lang = useLanguageStore((s) => s.lang);
  const forest = useMemo(() => buildForest(nodes, edges), [nodes, edges]);

  return (
    <div className="h-full overflow-y-auto p-4">
      <ul className="mx-auto flex max-w-3xl flex-col gap-3">
        {forest.map((tree) => (
          <TreeBranch key={tree.node.id} tree={tree} lang={lang} />
        ))}
      </ul>
    </div>
  );
}
