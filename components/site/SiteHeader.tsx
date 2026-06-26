"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site/config";
import { SITE_NAV } from "@/lib/site/nav";
import { useLanguageStore } from "@/store/language-store";

export default function SiteHeader() {
  const lang = useLanguageStore((s) => s.lang);
  const toggleLang = useLanguageStore((s) => s.toggleLang);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 rounded bg-red-600/90 px-1.5 py-0.5 text-xs font-bold tracking-tight text-white">
            EB
          </span>
          <span className="truncate text-sm font-semibold text-zinc-50 sm:text-base">
            {SITE_CONFIG.brandName}
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 overflow-x-auto text-xs lg:flex">
          {SITE_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-2.5 py-1.5 font-medium transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                }`}
              >
                {item.label[lang]}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
          >
            {lang === "si" ? "English" : "සිංහල"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 text-zinc-200 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-zinc-800 bg-zinc-950 px-4 py-2 text-sm lg:hidden">
          {SITE_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-2 font-medium ${
                  active ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {item.label[lang]}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
