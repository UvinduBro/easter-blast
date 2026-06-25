import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/lib/types";

interface LanguageState {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: "si",
      toggleLang: () =>
        set((state) => ({ lang: state.lang === "si" ? "en" : "si" })),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "easter-blast-lang",
    }
  )
);
