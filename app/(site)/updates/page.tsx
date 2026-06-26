import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import UpdatesContent from "@/components/site/UpdatesContent";
import StructuredData from "@/components/site/StructuredData";
import { NewsIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("updates");
  return buildMetadata({
    path: "/updates",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function UpdatesPage() {
  const content = await getPageContent("updates");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Updates", path: "/updates" },
        ])}
      />
      <PageHeader title={content.pageTitle} icon={<NewsIcon className="h-5 w-5" />} />
      <PageBody>
        <UpdatesContent content={content} />
      </PageBody>
    </>
  );
}
