import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import VictimsContent from "@/components/site/VictimsContent";
import { VICTIMS_SEO } from "@/lib/site-content/victims";

export const metadata: Metadata = {
  title: VICTIMS_SEO.title.en,
  description: VICTIMS_SEO.description.en,
};

export default function VictimsPage() {
  return (
    <>
      <PageHeader title={{ en: "Victims", si: "විපතට පත් වූවෝ" }} />
      <PageBody>
        <VictimsContent />
      </PageBody>
    </>
  );
}
