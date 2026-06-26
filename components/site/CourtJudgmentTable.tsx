"use client";

import StatusTag from "@/components/site/StatusTag";
import type { AccountabilityContentData } from "@/lib/site-content/accountability";
import { useLanguageStore } from "@/store/language-store";

export default function CourtJudgmentTable({
  judgment,
}: {
  judgment: AccountabilityContentData["courtJudgment"];
}) {
  const lang = useLanguageStore((s) => s.lang);

  return (
    <section className="border-t border-zinc-900 py-8">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">
          {judgment.heading[lang]}
        </h2>
        <StatusTag status="fact" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {judgment.intro[lang]}
      </p>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-zinc-900/80 text-zinc-400">
            <tr>
              <th className="px-3 py-2 font-medium">
                {lang === "si" ? "නිලධාරියා" : "Official"}
              </th>
              <th className="px-3 py-2 font-medium">
                {lang === "si" ? "එවකට තනතුර" : "Role at the time"}
              </th>
              <th className="px-3 py-2 font-medium">
                {lang === "si" ? "ගෙවීමට නියම කළ ප්‍රමාණය" : "Ordered to pay"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {judgment.rows.map((row, i) => (
              <tr key={i} className="text-zinc-200">
                <td className="px-3 py-2 font-medium text-zinc-100">{row.official[lang]}</td>
                <td className="px-3 py-2 text-zinc-300">{row.role[lang]}</td>
                <td className="px-3 py-2 text-zinc-300">{row.amount[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{judgment.closing[lang]}</p>
    </section>
  );
}
