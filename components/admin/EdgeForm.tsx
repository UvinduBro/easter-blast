"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { deleteEdge, saveEdge } from "@/lib/admin-actions";
import type { GraphEdge, GraphNode } from "@/lib/types";

interface EdgeFormProps {
  nodes: GraphNode[];
  initial?: GraphEdge;
}

export default function EdgeForm({ nodes, initial }: EdgeFormProps) {
  const router = useRouter();
  const [source, setSource] = useState(initial?.source ?? nodes[0]?.id ?? "");
  const [target, setTarget] = useState(initial?.target ?? nodes[0]?.id ?? "");
  const [labelSi, setLabelSi] = useState(initial?.label?.si ?? "");
  const [labelEn, setLabelEn] = useState(initial?.label?.en ?? "");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sortedNodes = [...nodes].sort((a, b) => a.name.en.localeCompare(b.name.en));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const data = {
        source,
        target,
        ...(labelSi || labelEn ? { label: { si: labelSi, en: labelEn } } : {}),
      };
      await saveEdge(initial?.id ?? null, data);
      router.push("/admin/edges");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save edge.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!initial) return;
    if (!confirm("Delete this connection? This cannot be undone.")) return;
    setDeleting(true);
    try {
      await deleteEdge(initial.id);
      router.push("/admin/edges");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete edge.");
      setDeleting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">From</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          >
            {sortedNodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name.en}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">To</label>
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          >
            {sortedNodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.name.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Label (Sinhala, optional)
          </label>
          <input
            value={labelSi}
            onChange={(e) => setLabelSi(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Label (English, optional)
          </label>
          <input
            value={labelEn}
            onChange={(e) => setLabelEn(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving || deleting}
          className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save connection"}
        </button>
        {initial && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={saving || deleting}
            className="rounded-lg border border-red-900 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-950 disabled:opacity-50"
          >
            {deleting ? "Deleting..." : "Delete connection"}
          </button>
        )}
      </div>
    </form>
  );
}
