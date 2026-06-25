import { create } from "zustand";

export type ViewMode = "mindmap" | "timeline" | "table" | "grouped" | "tree";

interface ViewState {
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: "mindmap",
  setView: (view) => set({ view }),
}));
