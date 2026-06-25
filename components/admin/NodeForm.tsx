"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { deleteNode, saveNode } from "@/lib/admin-actions";
import { KIND_STYLES } from "@/lib/kind-styles";
import type { GraphNode, NodeKind, SourceLink } from "@/lib/types";

const KINDS: NodeKind[] = [
  "person",
  "event",
  "allegation",
  "counter-argument",
  "committee",
  "legal",
];

interface NodeFormProps {
  initial?: GraphNode;
}

export default function NodeForm({ initial }: NodeFormProps) {
  const router = useRouter();
  const [kind, setKind] = useState<NodeKind>(initial?.kind ?? "person");
  const [initials, setInitials] = useState(initial?.initials ?? "");
  const [nameSi, setNameSi] = useState(initial?.name.si ?? "");
  const [nameEn, setNameEn] = useState(initial?.name.en ?? "");
  const [roleSi, setRoleSi] = useState(initial?.role.si ?? "");
  const [roleEn, setRoleEn] = useState(initial?.role.en ?? "");
  const [si, setSi] = useState(initial?.si ?? "");
  const [en, setEn] = useState(initial?.en ?? "");
  const [date, setDate] = useState(initial?.date ?? "");
  const [imageUrl, setImageUrl] = useState(initial?.image ?? "");
  const [videoUrl, setVideoUrl] = useState(initial?.video ?? "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [sources, setSources] = useState<SourceLink[]>(initial?.sources ?? []);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateSource(i: number, patch: Partial<SourceLink>) {
    setSources((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s))
    );
  }

  function removeSource(i: number) {
    setSources((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const data = {
        kind,
        initials,
        x: initial?.x ?? 0,
        y: initial?.y ?? 0,
        name: { si: nameSi, en: nameEn },
        role: { si: roleSi, en: roleEn },
        si,
        en,
        ...(date ? { date } : {}),
        ...(imageUrl ? { image: imageUrl } : {}),
        ...(videoUrl ? { video: videoUrl } : {}),
        ...(sources.length > 0 ? { sources } : {}),
      };
      await saveNode(initial?.id ?? null, data, {
        image: imageFile ?? undefined,
        video: videoFile ?? undefined,
      });
      router.push("/admin/nodes");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save node.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!initial) return;
    if (!confirm(`Delete "${initial.name.en}"? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      await deleteNode(initial.id);
      router.push("/admin/nodes");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete node.");
      setDeleting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Kind</label>
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as NodeKind)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          >
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {KIND_STYLES[k].label.en}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Initials (avatar fallback)
          </label>
          <input
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
            maxLength={4}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Name (Sinhala)
          </label>
          <input
            value={nameSi}
            onChange={(e) => setNameSi(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Name (English)
          </label>
          <input
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Role (Sinhala)
          </label>
          <input
            value={roleSi}
            onChange={(e) => setRoleSi(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Role (English)
          </label>
          <input
            value={roleEn}
            onChange={(e) => setRoleEn(e.target.value)}
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">
          Body text (Sinhala)
        </label>
        <textarea
          value={si}
          onChange={(e) => setSi(e.target.value)}
          required
          rows={4}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">
          Body text (English)
        </label>
        <textarea
          value={en}
          onChange={(e) => setEn(e.target.value)}
          required
          rows={4}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-400">
          Date (optional, YYYY-MM-DD or YYYY-MM)
        </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="2019-04-21"
          className="w-full max-w-xs rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Photo URL (or upload below)
          </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            className="w-full text-xs text-zinc-400"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            Video URL (or upload below)
          </label>
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
            className="w-full text-xs text-zinc-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-zinc-400">Sources</label>
          <button
            type="button"
            onClick={() => setSources((prev) => [...prev, { label: "", url: "" }])}
            className="text-xs font-medium text-sky-400 hover:underline"
          >
            + Add source
          </button>
        </div>
        {sources.map((source, i) => (
          <div key={i} className="flex gap-2">
            <input
              value={source.label}
              onChange={(e) => updateSource(i, { label: e.target.value })}
              placeholder="Label"
              className="w-1/3 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
            />
            <input
              value={source.url}
              onChange={(e) => updateSource(i, { url: e.target.value })}
              placeholder="https://..."
              className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500"
            />
            <button
              type="button"
              onClick={() => removeSource(i)}
              aria-label="Remove source"
              className="rounded-lg border border-zinc-700 px-2 text-sm text-zinc-400 hover:border-red-700 hover:text-red-400"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving || deleting}
          className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save node"}
        </button>
        {initial && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={saving || deleting}
            className="rounded-lg border border-red-900 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-950 disabled:opacity-50"
          >
            {deleting ? "Deleting..." : "Delete node"}
          </button>
        )}
      </div>
    </form>
  );
}
