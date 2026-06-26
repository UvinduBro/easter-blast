"use client";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase-client";
import {
  PAGE_CONTENT_DEFAULTS,
  type PageContentFor,
  type PageSlug,
} from "@/lib/site/page-content-registry";

export function usePageContent<K extends PageSlug>(slug: K) {
  const fallback = PAGE_CONTENT_DEFAULTS[slug];
  const [content, setContent] = useState<PageContentFor<K>>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getDoc(doc(db, "pageContent", slug))
      .then((snap) => {
        if (cancelled) return;
        setContent(
          snap.exists() ? ({ ...fallback, ...snap.data() } as PageContentFor<K>) : fallback
        );
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load content.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // fallback is derived from the static registry and is stable per slug.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return { content, setContent, loading, error };
}
