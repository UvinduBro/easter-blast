import type { Metadata } from "next";
import ContentSection from "@/components/site/ContentSection";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import { ATTACKS_INTRO, ATTACKS_SECTIONS, ATTACKS_SEO } from "@/lib/site-content/attacks";

export const metadata: Metadata = {
  title: ATTACKS_SEO.title.en,
  description: ATTACKS_SEO.description.en,
};

export default function AttacksPage() {
  return (
    <>
      <PageHeader
        title={{ en: "The Attacks", si: "ප්‍රහාරය" }}
        intro={ATTACKS_INTRO}
      />
      <PageBody>
        {ATTACKS_SECTIONS.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </PageBody>
    </>
  );
}
