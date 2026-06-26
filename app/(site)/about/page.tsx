import type { Metadata } from "next";
import AboutContent from "@/components/site/AboutContent";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import { ABOUT_SEO } from "@/lib/site-content/about";

export const metadata: Metadata = {
  title: ABOUT_SEO.title.en,
  description: ABOUT_SEO.description.en,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={{ en: "About & Sources", si: "අප සහ මූලාශ්‍ර" }} />
      <PageBody>
        <AboutContent />
      </PageBody>
    </>
  );
}
