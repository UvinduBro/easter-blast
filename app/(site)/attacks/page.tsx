import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { MapPinIcon } from "@/components/site/icons";
import { ATTACKS_INTRO, ATTACKS_SECTIONS, ATTACKS_SEO } from "@/lib/site-content/attacks";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/attacks",
  title: ATTACKS_SEO.title.en,
  description: ATTACKS_SEO.description.en,
});

export default function AttacksPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "The Attacks", path: "/attacks" },
        ])}
      />
      <PageHeader
        title={{ en: "The Attacks", si: "ප්‍රහාරය" }}
        intro={ATTACKS_INTRO}
        icon={<MapPinIcon className="h-5 w-5" />}
      />
      <PageBody>
        {ATTACKS_SECTIONS.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
