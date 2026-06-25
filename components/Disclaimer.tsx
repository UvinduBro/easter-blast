"use client";

import { useState } from "react";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: {
    title: "වැදගත් සටහනක්",
    body: "මෙම මානසික සිතියම දසුන් සමීර වීරසිංහ විසින් සකස් කරන ලද, තමන් විසින්ම පෞද්ගලිකව රචනා කරන ලද අර්ධ වශයෙන් සම්පූර්ණ පර්යේෂණයකි. මෙහි ඇතුළත් චෝදනා සහ ප්‍රකාශ බොහොමයක් තවමත් සනාථ වී නැති, විවාදාත්මක මතයන් වන අතර, මෙය යුක්තිය හෝ අධිකරණමය නිගමනයක් ලෙස නොසලකන්න.",
  },
  en: {
    title: "Important disclaimer",
    body: "This mind map reflects the author Dasun Sameera Weerasinghe's own self-described, partial and independently compiled research. Many of the claims and allegations shown here remain unproven and contested — this should not be treated as a factual or judicial conclusion.",
  },
};

export default function Disclaimer() {
  const lang = useLanguageStore((s) => s.lang);
  const [dismissed, setDismissed] = useState(false);
  const copy = TEXT[lang];

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={() => setDismissed(false)}
        className="border-b border-amber-900/40 bg-amber-950/40 px-4 py-1 text-left text-xs text-amber-300 hover:bg-amber-950/60"
      >
        ⚠ {copy.title}
      </button>
    );
  }

  return (
    <div className="flex items-start gap-3 border-b border-amber-900/40 bg-amber-950/40 px-4 py-2.5 text-amber-100">
      <span className="mt-0.5 text-base" aria-hidden>
        ⚠
      </span>
      <div className="min-w-0 flex-1 text-xs leading-relaxed sm:text-sm">
        <p className="font-semibold text-amber-200">{copy.title}</p>
        <p className="text-amber-100/90">{copy.body}</p>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss disclaimer"
        className="shrink-0 rounded p-1 text-amber-300/80 hover:bg-amber-900/40 hover:text-amber-100"
      >
        ✕
      </button>
    </div>
  );
}
