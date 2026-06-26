import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import TimelinePhase from "@/components/site/TimelinePhase";
import StructuredData from "@/components/site/StructuredData";
import { ClockIcon } from "@/components/site/icons";
import { getPageContent } from "@/lib/site/page-content";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent("timeline");
  return buildMetadata({
    path: "/timeline",
    title: content.seo.title.en,
    description: content.seo.description.en,
  });
}

export default async function TimelinePage() {
  const content = await getPageContent("timeline");

  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Timeline", path: "/timeline" },
        ])}
      />
      <PageHeader
        title={content.pageTitle}
        intro={content.intro}
        icon={<ClockIcon className="h-5 w-5" />}
      />
      <PageBody>
        <div>
          {content.phases.map((phase, i) => (
            <TimelinePhase key={i} phase={phase} />
          ))}
        </div>
      </PageBody>
    </>
  );
}
