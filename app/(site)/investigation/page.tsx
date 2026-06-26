import type { Metadata } from "next";
import Callout from "@/components/site/Callout";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { SearchIcon } from "@/components/site/icons";
import {
  CRITICAL_FRAMING,
  INVESTIGATION_SECTIONS,
  INVESTIGATION_SEO,
} from "@/lib/site-content/investigation";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/investigation",
  title: INVESTIGATION_SEO.title.en,
  description: INVESTIGATION_SEO.description.en,
});

export default function InvestigationPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Investigation & Controversy", path: "/investigation" },
        ])}
      />
      <PageHeader
        title={{ en: "Investigation & Controversy", si: "විමර්ශන හා මතභේද" }}
        icon={<SearchIcon className="h-5 w-5" />}
      />
      <PageBody>
        <div className="mb-6">
          <Callout tone="warning" title={CRITICAL_FRAMING.title} body={CRITICAL_FRAMING.body} />
        </div>
        {INVESTIGATION_SECTIONS.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
