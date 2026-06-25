"use client";

import { useParams } from "next/navigation";
import NodeForm from "@/components/admin/NodeForm";
import { useGraphData } from "@/lib/hooks/useGraphData";

export default function EditNodePage() {
  const { id } = useParams<{ id: string }>();
  const { nodes, loading } = useGraphData();
  const node = nodes.find((n) => n.id === id);

  if (loading) {
    return <p className="text-sm text-zinc-500">Loading...</p>;
  }

  if (!node) {
    return <p className="text-sm text-red-400">Node not found.</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-xl font-semibold text-zinc-50">
        Edit node — {node.name.en}
      </h1>
      <NodeForm initial={node} />
    </div>
  );
}
