import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import TimelinePhase from "@/components/site/TimelinePhase";
import StructuredData from "@/components/site/StructuredData";
import { ClockIcon } from "@/components/site/icons";
import { TIMELINE_INTRO, TIMELINE_PHASES, TIMELINE_SEO } from "@/lib/site-content/timeline";
import { buildBreadcrumbList, buildMetadata } from "@/lib/site/seo";

export const metadata: Metadata = buildMetadata({
  path: "/timeline",
  title: TIMELINE_SEO.title.en,
  description: TIMELINE_SEO.description.en,
});

export default function TimelinePage() {
  return (
    <>
      <StructuredData
        data={buildBreadcrumbList([
          { name: "Home", path: "/" },
          { name: "Timeline", path: "/timeline" },
        ])}
      />
      <PageHeader
        title={{ en: "Timeline", si: "කාල රාමුව" }}
        intro={TIMELINE_INTRO}
        icon={<ClockIcon className="h-5 w-5" />}
      />
      <PageBody>
        <div>
          {TIMELINE_PHASES.map((phase, i) => (
            <TimelinePhase key={i} phase={phase} />
          ))}
        </div>
      </PageBody>
    </>
  );
}
