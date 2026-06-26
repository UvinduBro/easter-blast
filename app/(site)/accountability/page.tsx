import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import CourtJudgmentTable from "@/components/site/CourtJudgmentTable";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import {
  ACCOUNTABILITY_INTRO,
  ACCOUNTABILITY_SEO,
  DISMISSAL,
  INTELLIGENCE_FAILURE,
  OFFICIAL_INQUIRIES,
} from "@/lib/site-content/accountability";

export const metadata: Metadata = {
  title: ACCOUNTABILITY_SEO.title.en,
  description: ACCOUNTABILITY_SEO.description.en,
};

export default function AccountabilityPage() {
  return (
    <>
      <PageHeader
        title={{ en: "Accountability", si: "වගකීම" }}
        intro={ACCOUNTABILITY_INTRO}
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
