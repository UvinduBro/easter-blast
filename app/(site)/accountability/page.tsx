import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import CourtJudgmentTable from "@/components/site/CourtJudgmentTable";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { ScalesIcon } from "@/components/site/icons";
import {
  ACCOUNTABILITY_INTRO,
  ACCOUNTABILITY_SEO,
  DISMISSAL,
  INTELLIGENCE_FAILURE,
  OFFICIAL_INQUIRIES,
} from "@/lib/site-content/accountability";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/accountability",
  title: ACCOUNTABILITY_SEO.title.en,
  description: ACCOUNTABILITY_SEO.description.en,
});

export default function AccountabilityPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Accountability", path: "/accountability" },
        ])}
      />
      <PageHeader
        title={{ en: "Accountability", si: "වගකීම" }}
        intro={ACCOUNTABILITY_INTRO}
        icon={<ScalesIcon className="h-5 w-5" />}
      />
      <PageBody>
        <ContentSection section={INTELLIGENCE_FAILURE} />
        <CourtJudgmentTable />
        <ContentSection section={DISMISSAL} />
        <ContentSection section={OFFICIAL_INQUIRIES} />
      </PageBody>
    </>
  );
}
