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

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  kind: NodeKind;
  initials: string;
  /** Optional photo URL. Falls back to an initials avatar when absent. */
  image?: string;
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
