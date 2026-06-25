"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useGraphData } from "@/lib/hooks/useGraphData";
import { KIND_STYLES } from "@/lib/kind-styles";

export default function AdminNodesPage() {
  const { nodes, loading, error } = useGraphData();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const sorted = [...nodes].sort((a, b) => a.name.en.localeCompare(b.name.en));
    if (!q) return sorted;
    return sorted.filter(
      (n) =>
        n.name.en.toLowerCase().includes(q) ||
        n.name.si.includes(q) ||
        n.id.toLowerCase().includes(q)
    );
  }, [nodes, search]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold text-zinc-50">
          Nodes ({nodes.length})
        </h1>
        <Link
          href="/admin/nodes/new"
          className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-300"
        >
          + Add node
        </Link>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="mb-4 w-full max-w-sm rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
      />

      {loading ? (
        <p className="text-sm text-zinc-500">Loading...</p>
      ) : error ? (
        <p className="text-sm text-red-400">{error}</p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900 text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Kind</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filtered.map((n) => {
                const style = KIND_STYLES[n.kind];
                return (
                  <tr key={n.id} className="hover:bg-zinc-900/60">
                    <td className="px-3 py-2 text-zinc-100">
                      <div>{n.name.en}</div>
                      <div className="text-xs text-zinc-500">{n.name.si}</div>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${style.tag}`}
                      >
                        {style.label.en}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-zinc-400">{n.date ?? "—"}</td>
                    <td className="px-3 py-2 text-right">
                      <Link
                        href={`/admin/nodes/${n.id}`}
                        className="text-sky-400 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
