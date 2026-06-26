import type { Metadata } from "next";
import AboutContent from "@/components/site/AboutContent";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { BookOpenIcon } from "@/components/site/icons";
import { ABOUT_SEO } from "@/lib/site-content/about";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: ABOUT_SEO.title.en,
  description: ABOUT_SEO.description.en,
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "About & Sources", path: "/about" },
        ])}
      />
      <PageHeader title={{ en: "About & Sources", si: "අප සහ මූලාශ්‍ර" }} icon={<BookOpenIcon className="h-5 w-5" />} />
      <PageBody>
        <AboutContent />
      </PageBody>
    </>
  );
}
