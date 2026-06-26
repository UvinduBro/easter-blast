import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import CourtJudgmentTable from "@/components/site/CourtJudgmentTable";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { ScalesIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("accountability");
  return buildMetadata({
    path: "/accountability",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function AccountabilityPage() {
  const content = await getPageContent("accountability");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Accountability", path: "/accountability" },
        ])}
      />
      <PageHeader
        title={content.pageTitle}
        intro={content.intro}
        icon={<ScalesIcon className="h-5 w-5" />}
      />
      <PageBody>
        <ContentSection section={content.intelligenceFailure} />
        <CourtJudgmentTable judgment={content.courtJudgment} />
        <ContentSection section={content.dismissal} />
        <ContentSection section={content.officialInquiries} />
      </PageBody>
    </>
  );
}
