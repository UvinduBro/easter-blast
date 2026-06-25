"use client";

import { useParams } from "next/navigation";
import EdgeForm from "@/components/admin/EdgeForm";
import { useGraphData } from "@/lib/hooks/useGraphData";

export default function EditEdgePage() {
  const { id } = useParams<{ id: string }>();
  const { nodes, edges, loading } = useGraphData();
  const edge = edges.find((e) => e.id === id);

  if (loading) {
    return <p className="text-sm text-zinc-500">Loading...</p>;
  }

  if (!edge) {
    return <p className="text-sm text-red-400">Connection not found.</p>;
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-4 text-xl font-semibold text-zinc-50">
        Edit connection
      </h1>
      <EdgeForm nodes={nodes} initial={edge} />
    </div>
  );
}
