import { cache } from "react";
import { adminDb } from "@/lib/firebase-admin";
import { PAGE_CONTENT_DEFAULTS, type PageSlug } from "@/lib/site/page-content-registry";

export { PAGE_CONTENT_DEFAULTS, PAGE_SLUGS, PAGE_SLUG_LABELS } from "@/lib/site/page-content-registry";
export type { PageSlug, PageContentFor } from "@/lib/site/page-content-registry";

async function fetchPageContent<K extends PageSlug>(
  slug: K
): Promise<(typeof PAGE_CONTENT_DEFAULTS)[K]> {
  const fallback = PAGE_CONTENT_DEFAULTS[slug];
  const snap = await adminDb.collection("pageContent").doc(slug).get();
  if (!snap.exists) return fallback;
  return { ...fallback, ...snap.data() } as (typeof PAGE_CONTENT_DEFAULTS)[K];
}

/** Cached per-request: Admin SDK reads aren't deduped by Next.js the way fetch() is. */
export const getPageContent = cache(fetchPageContent) as typeof fetchPageContent;
