import type { GraphEdge, GraphNode } from "./types";

export interface TreeNode {
  node: GraphNode;
  children: TreeNode[];
}

export function buildForest(nodes: GraphNode[], edges: GraphEdge[]): TreeNode[] {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const childrenOf = new Map<string, string[]>();
  const hasIncoming = new Set<string>();

  for (const e of edges) {
    if (!byId.has(e.source) || !byId.has(e.target)) continue;
    if (!childrenOf.has(e.source)) childrenOf.set(e.source, []);
    childrenOf.get(e.source)!.push(e.target);
    hasIncoming.add(e.target);
  }

  const visited = new Set<string>();

  function build(id: string): TreeNode | null {
    if (visited.has(id)) return null;
    visited.add(id);
    const node = byId.get(id);
    if (!node) return null;
    const children = (childrenOf.get(id) ?? [])
      .map((childId) => build(childId))
      .filter((c): c is TreeNode => c !== null);
    return { node, children };
  }

  const roots = nodes.filter((n) => !hasIncoming.has(n.id));
  const forest = roots
    .map((r) => build(r.id))
    .filter((t): t is TreeNode => t !== null);

  for (const n of nodes) {
    if (!visited.has(n.id)) {
      const t = build(n.id);
      if (t) forest.push(t);
    }
  }

  return forest;
}
