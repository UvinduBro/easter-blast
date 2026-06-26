import type { Metadata } from "next";
import Callout from "@/components/site/Callout";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import {
  CRITICAL_FRAMING,
  INVESTIGATION_SECTIONS,
  INVESTIGATION_SEO,
} from "@/lib/site-content/investigation";

export const metadata: Metadata = {
  title: INVESTIGATION_SEO.title.en,
  description: INVESTIGATION_SEO.description.en,
};

export default function InvestigationPage() {
  return (
    <>
      <PageHeader title={{ en: "Investigation & Controversy", si: "විමර්ශන හා මතභේද" }} />
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
