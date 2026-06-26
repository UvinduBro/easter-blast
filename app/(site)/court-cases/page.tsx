import type { Metadata } from "next";
import CourtCaseCard from "@/components/site/CourtCaseCard";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { GavelIcon } from "@/components/site/icons";
import {
  COURT_CASES,
  COURT_CASES_INTRO,
  COURT_CASES_SEO,
} from "@/lib/site-content/court-cases";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/court-cases",
  title: COURT_CASES_SEO.title.en,
  description: COURT_CASES_SEO.description.en,
});

export default function CourtCasesPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Court Cases", path: "/court-cases" },
        ])}
      />
      <PageHeader
        title={{ en: "Court Cases", si: "නඩු විභාග" }}
        intro={COURT_CASES_INTRO}
        icon={<GavelIcon className="h-5 w-5" />}
      />
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
