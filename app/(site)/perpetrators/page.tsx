import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import {
  PERPETRATORS_INTRO,
  PERPETRATORS_SECTIONS,
  PERPETRATORS_SEO,
} from "@/lib/site-content/perpetrators";

export const metadata: Metadata = {
  title: PERPETRATORS_SEO.title.en,
  description: PERPETRATORS_SEO.description.en,
};

export default function PerpetratorsPage() {
  return (
    <>
      <PageHeader
        title={{ en: "Perpetrators", si: "ප්‍රහාරකයින්" }}
        intro={PERPETRATORS_INTRO}
      />
      <PageBody>
        {PERPETRATORS_SECTIONS.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
