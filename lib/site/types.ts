import type { LocalizedText, Status } from "@/lib/types";

export interface StatusMark {
  status: Status;
  /** Optional short qualifier shown after the tag, e.g. "(arrest)". */
  note?: LocalizedText;
}

export interface PageImage {
  url: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  /** Marks genuinely graphic imagery (e.g. visible blood/injury) for a click-to-reveal gate. */
  graphic?: boolean;
}

export interface Entry {
  title?: LocalizedText;
  body: LocalizedText;
  statuses?: StatusMark[];
  images?: PageImage[];
}

export interface ContentSection {
  heading: LocalizedText;
  intro?: LocalizedText;
  entries: Entry[];
}
