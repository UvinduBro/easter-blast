"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import Disclaimer from "@/components/Disclaimer";
import Legend from "@/components/Legend";
import DetailDrawer from "@/components/DetailDrawer";
import ViewSwitcher from "@/components/ViewSwitcher";
import GroupedView from "@/components/views/GroupedView";
import TableView from "@/components/views/TableView";
import TimelineView from "@/components/views/TimelineView";
import TreeView from "@/components/views/TreeView";
import { useGraphData } from "@/lib/hooks/useGraphData";
import { useLanguageStore } from "@/store/language-store";
import { useViewStore } from "@/store/view-store";

const FlowMap = dynamic(() => import("@/components/FlowMap"), {
  ssr: false,
});

export default function MindMapPage() {
  const lang = useLanguageStore((s) => s.lang);
  const toggleLang = useLanguageStore((s) => s.toggleLang);
  const view = useViewStore((s) => s.view);
  const { nodes, edges, loading, error } = useGraphData();

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Disclaimer />

      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-950 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="shrink-0 text-xs font-medium text-zinc-400 hover:text-zinc-100"
          >
            {lang === "si" ? "← මුල් පිටුවට" : "← Back to site"}
          </Link>
          <h1 className="truncate text-sm font-semibold text-zinc-50 sm:text-base">
            {lang === "si"
              ? "පාස්කු ප්‍රහාරය — මානසික සිතියම"
              : "Easter Sunday Attacks — Mind Map"}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ViewSwitcher lang={lang} />
          <button
            type="button"
            onClick={toggleLang}
            className="shrink-0 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
          >
            {lang === "si" ? "English" : "සිංහල"}
          </button>
        </div>
      </header>

      <main className="relative min-h-0 flex-1">
        {loading ? (
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">
            {lang === "si" ? "පූරණය වෙමින්..." : "Loading..."}
          </div>
        ) : error ? (
          <div className="flex h-full items-center justify-center text-sm text-red-400">
            {error}
          </div>
        ) : (
          <>
            {view === "mindmap" && <FlowMap nodes={nodes} edges={edges} />}
            {view === "timeline" && <TimelineView nodes={nodes} />}
            {view === "table" && <TableView nodes={nodes} />}
            {view === "grouped" && <GroupedView nodes={nodes} />}
            {view === "tree" && <TreeView nodes={nodes} edges={edges} />}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3 sm:justify-start sm:p-4">
              <div className="pointer-events-auto">
                <Legend />
              </div>
            </div>
            <DetailDrawer nodes={nodes} edges={edges} />
          </>
        )}
      </main>
    </div>
  );
}
