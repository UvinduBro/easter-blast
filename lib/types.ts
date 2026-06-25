export type NodeKind =
  | "person"
  | "event"
  | "allegation"
  | "counter-argument"
  | "committee"
  | "legal";

export interface LocalizedText {
  si: string;
  en: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  kind: NodeKind;
  initials: string;
  /** Optional photo URL. Falls back to an initials avatar when absent. */
  image?: string;
  /** Optional video URL (YouTube/Vimeo/direct link) shown in the detail drawer. */
  video?: string;
  /** ISO date (YYYY-MM-DD or YYYY-MM) used for the Timeline view. Undated nodes sort last. */
  date?: string;
  /** Citations / further reading shown in the detail drawer. */
  sources?: SourceLink[];
  name: LocalizedText;
  role: LocalizedText;
  si: string;
  en: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  label?: LocalizedText;
}

export type Lang = "si" | "en";
