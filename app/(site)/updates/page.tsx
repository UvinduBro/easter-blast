import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import UpdatesContent from "@/components/site/UpdatesContent";
import StructuredData from "@/components/site/StructuredData";
import { NewsIcon } from "@/components/site/icons";
import { UPDATES_SEO } from "@/lib/site-content/updates";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/updates",
  title: UPDATES_SEO.title.en,
  description: UPDATES_SEO.description.en,
});

export default function UpdatesPage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Updates", path: "/updates" },
        ])}
      />
      <PageHeader title={{ en: "Updates", si: "යාවත්කාලීන කිරීම්" }} icon={<NewsIcon className="h-5 w-5" />} />
      <PageBody>
        <UpdatesContent />
      </PageBody>
    </>
  );
}
