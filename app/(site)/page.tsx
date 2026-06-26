import type { Metadata } from "next";
import HomeContent from "@/components/site/HomeContent";
import PageBody from "@/components/site/PageBody";
import { HOME_SEO } from "@/lib/site-content/home";

export const metadata: Metadata = {
  title: HOME_SEO.title.en,
  description: HOME_SEO.description.en,
};

export default function HomePage() {
  return (
    <PageBody>
      <HomeContent />
    </PageBody>
  );
}
