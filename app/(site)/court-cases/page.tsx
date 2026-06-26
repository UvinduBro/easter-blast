import type { Metadata } from "next";
import CourtCaseCard from "@/components/site/CourtCaseCard";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { GavelIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("court-cases");
  return buildMetadata({
    path: "/court-cases",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function CourtCasesPage() {
  const content = await getPageContent("court-cases");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Court Cases", path: "/court-cases" },
        ])}
      />
      <PageHeader
        title={content.pageTitle}
        intro={content.intro}
        icon={<GavelIcon className="h-5 w-5" />}
      />
      <PageBody>
        <div className="space-y-4">
          {content.cases.map((c, i) => (
            <CourtCaseCard key={i} courtCase={c} />
          ))}
        </div>
      </PageBody>
    </>
  );
}
