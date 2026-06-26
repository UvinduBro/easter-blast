import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import VictimsContent from "@/components/site/VictimsContent";
import StructuredData from "@/components/site/StructuredData";
import { HeartIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("victims");
  return buildMetadata({
    path: "/victims",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function VictimsPage() {
  const content = await getPageContent("victims");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Victims", path: "/victims" },
        ])}
      />
      <PageHeader title={content.pageTitle} icon={<HeartIcon className="h-5 w-5" />} />
      <PageBody>
        <VictimsContent content={content} />
      </PageBody>
    </>
  );
}
