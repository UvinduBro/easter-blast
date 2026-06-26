"use client";

import Image from "next/image";
import { useState } from "react";
import type { PageImage } from "@/lib/site/types";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: { warning: "චිත්තරූපී අන්තර්ගතය", reveal: "බැලීමට ටැප් කරන්න" },
  en: { warning: "Graphic content", reveal: "Tap to view" },
};

/** Renders a photo at a fixed aspect ratio. Graphic images stay blurred behind a warning until clicked. */
export default function GraphicImage({ image }: { image: PageImage }) {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];
  const [revealed, setRevealed] = useState(false);
  const gated = Boolean(image.graphic) && !revealed;

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      <Image
        src={image.url}
        alt={image.alt[lang]}
        fill
        sizes="(min-width: 640px) 33vw, 50vw"
        className={`object-cover transition-all duration-500 ${gated ? "scale-105 blur-xl" : ""}`}
      />
      {gated && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-zinc-950/60 text-center text-zinc-100 transition-colors hover:bg-zinc-950/50"
        >
          <span aria-hidden className="text-base">
            ⚠️
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wide">{copy.warning}</span>
          <span className="text-[10px] text-zinc-300">{copy.reveal}</span>
        </button>
      )}
      {!gated && image.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5 text-[11px] leading-snug text-zinc-100">
          {image.caption[lang]}
        </figcaption>
      )}
    </figure>
  );
}
