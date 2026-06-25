"use client";

import EdgeForm from "@/components/admin/EdgeForm";
import { useGraphData } from "@/lib/hooks/useGraphData";

export default function NewEdgePage() {
  const { nodes, loading } = useGraphData();

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-4 text-xl font-semibold text-zinc-50">
        Add connection
      </h1>
      {loading ? (
        <p className="text-sm text-zinc-500">Loading...</p>
      ) : (
        <EdgeForm nodes={nodes} />
      )}
    </div>
  );
}
