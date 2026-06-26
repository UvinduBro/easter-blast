import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import VictimsContent from "@/components/site/VictimsContent";
import StructuredData from "@/components/site/StructuredData";
import { HeartIcon } from "@/components/site/icons";
import { VICTIMS_SEO } from "@/lib/site-content/victims";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/victims",
  title: VICTIMS_SEO.title.en,
  description: VICTIMS_SEO.description.en,
});

export default function VictimsPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Victims", path: "/victims" },
        ])}
      />
      <PageHeader title={{ en: "Victims", si: "විපතට පත් වූවෝ" }} icon={<HeartIcon className="h-5 w-5" />} />
      <PageBody>
        <VictimsContent />
      </PageBody>
    </>
  );
}
