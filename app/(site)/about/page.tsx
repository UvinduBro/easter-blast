import type { Metadata } from "next";
import AboutContent from "@/components/site/AboutContent";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import StructuredData from "@/components/site/StructuredData";
import { BookOpenIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("about");
  return buildMetadata({
    path: "/about",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function AboutPage() {
  const content = await getPageContent("about");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "About & Sources", path: "/about" },
        ])}
      />
      <PageHeader title={content.pageTitle} icon={<BookOpenIcon className="h-5 w-5" />} />
      <PageBody>
        <AboutContent content={content} />
      </PageBody>
    </>
  );
}
