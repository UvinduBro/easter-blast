"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ContentEditor, { type JsonValue } from "@/components/admin/ContentEditor";
import { savePageContent } from "@/lib/admin-actions";
import { usePageContent } from "@/lib/hooks/usePageContent";
import { PAGE_SLUGS, PAGE_SLUG_LABELS, type PageSlug } from "@/lib/site/page-content-registry";

function isPageSlug(value: string): value is PageSlug {
  return (PAGE_SLUGS as readonly string[]).includes(value);
}

export default function EditPageContentPage() {
  const { slug: rawSlug } = useParams<{ slug: string }>();

  if (!isPageSlug(rawSlug)) {
    return <p className="text-sm text-red-400">Unknown page &quot;{rawSlug}&quot;.</p>;
  }

  return <PageContentForm key={rawSlug} slug={rawSlug} />;
}

function PageContentForm({ slug }: { slug: PageSlug }) {
  const { content, setContent, loading, error: loadError } = usePageContent(slug);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    setSaving(true);
    setSaveError(null);
    setSaved(false);
    try {
      await savePageContent(slug, content);
      setSaved(true);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Failed to save.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-zinc-50">{PAGE_SLUG_LABELS[slug]}</h1>
          <a
            href={slug === "home" ? "/" : `/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sky-400 hover:underline"
          >
            View live page →
          </a>
        </div>
        <Link href="/admin/content" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← All pages
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Loading...</p>
      ) : loadError ? (
        <p className="text-sm text-red-400">{loadError}</p>
      ) : (
        <>
          <ContentEditor
            value={content as unknown as Record<string, JsonValue>}
            onChange={(next) => setContent(next as unknown as typeof content)}
          />

          {saveError && <p className="mt-4 text-sm text-red-400">{saveError}</p>}
          {saved && <p className="mt-4 text-sm text-emerald-400">Saved.</p>}

          <div className="sticky bottom-0 mt-6 border-t border-zinc-900 bg-zinc-950 py-4">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
