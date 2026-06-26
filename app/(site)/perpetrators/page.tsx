import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { UsersIcon } from "@/components/site/icons";
import {
  PERPETRATORS_INTRO,
  PERPETRATORS_SECTIONS,
  PERPETRATORS_SEO,
} from "@/lib/site-content/perpetrators";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/perpetrators",
  title: PERPETRATORS_SEO.title.en,
  description: PERPETRATORS_SEO.description.en,
});

export default function PerpetratorsPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Perpetrators", path: "/perpetrators" },
        ])}
      />
      <PageHeader
        title={{ en: "Perpetrators", si: "ප්‍රහාරකයින්" }}
        intro={PERPETRATORS_INTRO}
        icon={<UsersIcon className="h-5 w-5" />}
      />
      <PageBody>
        {PERPETRATORS_SECTIONS.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
