import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { MapPinIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("attacks");
  return buildMetadata({
    path: "/attacks",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function AttacksPage() {
  const content = await getPageContent("attacks");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "The Attacks", path: "/attacks" },
        ])}
      />
      <PageHeader
        title={content.pageTitle}
        intro={content.intro}
        icon={<MapPinIcon className="h-5 w-5" />}
      />
      <PageBody>
        {content.sections.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
