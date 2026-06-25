"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useGraphData } from "@/lib/hooks/useGraphData";

export default function AdminEdgesPage() {
  const { nodes, edges, loading, error } = useGraphData();

  const nodeNameById = useMemo(() => {
    const map = new Map<string, string>();
    for (const n of nodes) map.set(n.id, n.name.en);
    return map;
  }, [nodes]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-zinc-50">
          Connections ({edges.length})
        </h1>
        <Link
          href="/admin/edges/new"
          className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-300"
        >
          + Add connection
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Loading...</p>
      ) : error ? (
        <p className="text-sm text-red-400">{error}</p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-3 py-2">From</th>
                <th className="px-3 py-2">To</th>
                <th className="px-3 py-2">Label</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {edges.map((e) => (
                <tr key={e.id} className="hover:bg-zinc-900/60">
                  <td className="px-3 py-2 text-zinc-100">
                    {nodeNameById.get(e.source) ?? e.source}
                  </td>
                  <td className="px-3 py-2 text-zinc-100">
                    {nodeNameById.get(e.target) ?? e.target}
                  </td>
                  <td className="px-3 py-2 text-zinc-400">
                    {e.label?.en ?? "—"}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <Link
                      href={`/admin/edges/${e.id}`}
                      className="text-sky-400 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
