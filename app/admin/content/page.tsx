"use client";

import Link from "next/link";
import { PAGE_SLUGS, PAGE_SLUG_LABELS } from "@/lib/site/page-content-registry";

export default function AdminContentIndexPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-xl font-semibold text-zinc-50">Page content</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Edit the bilingual text shown on each public page.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {PAGE_SLUGS.map((slug) => (
          <Link
            key={slug}
            href={`/admin/content/${slug}`}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-600"
          >
            <p className="font-medium text-zinc-100">{PAGE_SLUG_LABELS[slug]}</p>
            <p className="mt-0.5 text-xs text-zinc-500">/{slug === "home" ? "" : slug}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
