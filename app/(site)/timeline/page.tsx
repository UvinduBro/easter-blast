import type { Metadata } from "next";
import PageBody from "@/components/site/PageBody";
import PageHeader from "@/components/site/PageHeader";
import TimelinePhase from "@/components/site/TimelinePhase";
import { TIMELINE_INTRO, TIMELINE_PHASES, TIMELINE_SEO } from "@/lib/site-content/timeline";

export const metadata: Metadata = {
  title: TIMELINE_SEO.title.en,
  description: TIMELINE_SEO.description.en,
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader title={{ en: "Timeline", si: "කාල රාමුව" }} intro={TIMELINE_INTRO} />
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
