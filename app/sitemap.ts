import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site/config";
import { SITE_NAV } from "@/lib/site/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_CONFIG.lastReviewed);

  return [
    ...SITE_NAV.map((item) => ({
      url: `${SITE_CONFIG.url}${item.href}`,
      lastModified,
    })),
    {
      url: `${SITE_CONFIG.url}/mind-map`,
      lastModified,
    },
  ];
}
