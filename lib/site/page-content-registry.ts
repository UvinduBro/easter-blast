import { ABOUT_CONTENT } from "@/lib/site-content/about";
import { ACCOUNTABILITY_CONTENT } from "@/lib/site-content/accountability";
import { ATTACKS_CONTENT } from "@/lib/site-content/attacks";
import { COURT_CASES_CONTENT } from "@/lib/site-content/court-cases";
import { HOME_CONTENT } from "@/lib/site-content/home";
import { INVESTIGATION_CONTENT } from "@/lib/site-content/investigation";
import { PERPETRATORS_CONTENT } from "@/lib/site-content/perpetrators";
import { TIMELINE_CONTENT } from "@/lib/site-content/timeline";
import { UPDATES_CONTENT } from "@/lib/site-content/updates";
import { VICTIMS_CONTENT } from "@/lib/site-content/victims";

export const PAGE_CONTENT_DEFAULTS = {
  home: HOME_CONTENT,
  attacks: ATTACKS_CONTENT,
  victims: VICTIMS_CONTENT,
  timeline: TIMELINE_CONTENT,
  updates: UPDATES_CONTENT,
  about: ABOUT_CONTENT,
  accountability: ACCOUNTABILITY_CONTENT,
  perpetrators: PERPETRATORS_CONTENT,
  investigation: INVESTIGATION_CONTENT,
  "court-cases": COURT_CASES_CONTENT,
};

export type PageSlug = keyof typeof PAGE_CONTENT_DEFAULTS;

export type PageContentFor<K extends PageSlug> = (typeof PAGE_CONTENT_DEFAULTS)[K];

export const PAGE_SLUGS = Object.keys(PAGE_CONTENT_DEFAULTS) as PageSlug[];

export const PAGE_SLUG_LABELS: Record<PageSlug, string> = {
  home: "Home",
  attacks: "The Attacks",
  victims: "Victims",
  timeline: "Timeline",
  updates: "Updates",
  about: "About & Sources",
  accountability: "Accountability",
  perpetrators: "Perpetrators",
  investigation: "Investigation & Controversy",
  "court-cases": "Court Cases",
};
