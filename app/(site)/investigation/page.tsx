import type { Metadata } from "next";
import Callout from "@/components/site/Callout";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { SearchIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("investigation");
  return buildMetadata({
    path: "/investigation",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function InvestigationPage() {
  const content = await getPageContent("investigation");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Investigation & Controversy", path: "/investigation" },
        ])}
      />
      <PageHeader title={content.pageTitle} icon={<SearchIcon className="h-5 w-5" />} />
      <PageBody>
        <div className="mb-6">
          <Callout
            tone="warning"
            title={content.criticalFraming.title}
            body={content.criticalFraming.body}
          />
        </div>
        {content.sections.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
