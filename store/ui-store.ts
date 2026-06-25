import { create } from "zustand";

interface UIState {
  selectedNodeId: string | null;
  selectNode: (id: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedNodeId: null,
  selectNode: (id) => set({ selectedNodeId: id }),
}));
