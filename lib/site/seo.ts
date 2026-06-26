import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site/config";

/** Builds BreadcrumbList JSON-LD for a content page (Home is always the first crumb). */
export function buildBreadcrumbList(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function buildMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Builds FAQPage JSON-LD from question/answer pairs (used for AEO/rich-result eligibility). */
export function buildFaqPage(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
