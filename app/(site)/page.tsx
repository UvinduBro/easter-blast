import type { Metadata } from "next";
import HomeContent from "@/components/site/HomeContent";
import PageBody from "@/components/site/PageBody";
import StructuredData from "@/components/site/StructuredData";
import { FAQ_ITEMS } from "@/lib/site-content/faq";
import { HOME_SEO } from "@/lib/site-content/home";
import { buildFaqPage, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: HOME_SEO.title.en,
  description: HOME_SEO.description.en,
});

export default function HomePage() {
  return (
    <PageBody>
      <StructuredData
        data={buildFaqPage(
          FAQ_ITEMS.map((item) => ({ question: item.question.en, answer: item.answer.en })),
        )}
      />
      <HomeContent />
    </PageBody>
  );
}
