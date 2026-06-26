"use client";

import { STATUS_STYLES } from "@/lib/status-styles";
import type { Status } from "@/lib/types";
import { useLanguageStore } from "@/store/language-store";

export default function StatusTag({
  status,
  note,
}: {
  status: Status;
  /** Optional short bilingual qualifier, e.g. "(arrest)" rendered after the label. */
  note?: { si: string; en: string };
}) {
  const lang = useLanguageStore((s) => s.lang);
  const style = STATUS_STYLES[status];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${style.className}`}
    >
      <span aria-hidden>{style.icon}</span>
      {style.label[lang]}
      {note && <span className="font-normal lowercase opacity-80">{note[lang]}</span>}
    </span>
  );
}
