"use client";

import Link from "next/link";
import { useGraphData } from "@/lib/hooks/useGraphData";

export default function AdminDashboardPage() {
  const { nodes, edges, loading } = useGraphData();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-xl font-semibold text-zinc-50">Dashboard</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Manage map nodes and connections.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Link
          href="/admin/nodes"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-600"
        >
          <p className="text-2xl font-semibold text-zinc-50">
            {loading ? "—" : nodes.length}
          </p>
          <p className="text-sm text-zinc-400">Nodes</p>
        </Link>
        <Link
          href="/admin/edges"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-600"
        >
          <p className="text-2xl font-semibold text-zinc-50">
            {loading ? "—" : edges.length}
          </p>
          <p className="text-sm text-zinc-400">Connections</p>
        </Link>
      </div>
    </div>
  );
}
