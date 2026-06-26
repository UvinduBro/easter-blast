import type { Metadata } from "next";
import HomeContent from "@/components/site/HomeContent";
import PageBody from "@/components/site/PageBody";
import StructuredData from "@/components/site/StructuredData";
import { getPageContent } from "@/lib/site/page-content";
import { buildFaqPage, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("home");
  return buildMetadata({
    path: "/",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function HomePage() {
  const content = await getPageContent("home");
  const latestUpdates = await getPageContent("updates");

  return (
    <PageBody>
      <StructuredData
        data={buildFaqPage(
          content.faqItems.map((item) => ({ question: item.question.en, answer: item.answer.en })),
        )}
      />
      <HomeContent content={content} latestUpdates={latestUpdates.items.slice(0, 3)} />
    </PageBody>
  );
}
