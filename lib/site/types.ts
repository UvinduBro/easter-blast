import type { LocalizedText, Status } from "@/lib/types";

export interface StatusMark {
  status: Status;
  /** Optional short qualifier shown after the tag, e.g. "(arrest)". */
  note?: LocalizedText;
}

export interface Entry {
  title?: LocalizedText;
  body: LocalizedText;
  statuses?: StatusMark[];
}

export interface ContentSection {
  heading: LocalizedText;
  intro?: LocalizedText;
  entries: Entry[];
}
