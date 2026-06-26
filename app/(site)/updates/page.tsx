import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import UpdatesContent from "@/components/site/UpdatesContent";
import { UPDATES_SEO } from "@/lib/site-content/updates";

export const metadata: Metadata = {
  title: UPDATES_SEO.title.en,
  description: UPDATES_SEO.description.en,
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader title={{ en: "Updates", si: "යාවත්කාලීන කිරීම්" }} />
      <PageBody>
        <UpdatesContent />
      </PageBody>
    </>
  );
}
