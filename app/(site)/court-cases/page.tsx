import type { Metadata } from "next";
import CourtCaseCard from "@/components/site/CourtCaseCard";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import {
  COURT_CASES,
  COURT_CASES_INTRO,
  COURT_CASES_SEO,
} from "@/lib/site-content/court-cases";

export const metadata: Metadata = {
  title: COURT_CASES_SEO.title.en,
  description: COURT_CASES_SEO.description.en,
};

export default function CourtCasesPage() {
  return (
    <>
      <PageHeader title={{ en: "Court Cases", si: "නඩු විභාග" }} intro={COURT_CASES_INTRO} />
      <PageBody>
        <div className="space-y-4">
          {COURT_CASES.map((c, i) => (
            <CourtCaseCard key={i} courtCase={c} />
          ))}
        </div>
      </PageBody>
    </>
  );
}
