"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import FaqSection from "@/components/site/FaqSection";
import GraphicImage from "@/components/site/GraphicImage";
import HomeMindMap from "@/components/site/HomeMindMap";
import Reveal from "@/components/site/Reveal";
import StatusTag from "@/components/site/StatusTag";
import UpdateCard from "@/components/site/UpdateCard";
import {
  CandleIcon,
  HeartIcon,
  MapPinIcon,
  NewsIcon,
  ScalesIcon,
  UsersIcon,
  type IconProps,
} from "@/components/site/icons";
import type { HomeContentData } from "@/lib/site-content/home";
import type { UpdateEntry } from "@/lib/site-content/updates";
import { useLanguageStore } from "@/store/language-store";

const TEXT = {
  si: { whatHeading: "සිදු වූයේ කුමක්ද", threeHeading: "තේරුම් ගත යුතු කරුණු තුනක්" },
  en: { whatHeading: "What happened", threeHeading: "Three things to understand" },
};

const AT_A_GLANCE_ICONS: Array<(props: IconProps) => ReactElement> = [
  CandleIcon,
  HeartIcon,
  MapPinIcon,
  UsersIcon,
  ScalesIcon,
];

export default function HomeContent({
  content,
  latestUpdates,
}: {
  content: HomeContentData;
  latestUpdates: UpdateEntry[];
}) {
  const lang = useLanguageStore((s) => s.lang);
  const copy = TEXT[lang];
  const {
    hero,
    atAGlance,
    whatHappened,
    whatHappenedLink,
    threeThings,
    latestUpdatesHeading,
    latestUpdatesLink,
    featuredVictims,
    memorialGallery,
    mindMapSection,
    faqHeading,
    faqItems,
  } = content;

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-bold text-zinc-50 sm:text-3xl">{hero.kicker[lang]}</h1>
        <p className="mt-3 text-base leading-relaxed text-zinc-200 sm:text-lg">{hero.body[lang]}</p>
        <p className="mt-3 text-sm italic leading-relaxed text-zinc-400">{hero.note[lang]}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/timeline"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-500"
          >
            {hero.ctaTimeline[lang]}
          </Link>
          <Link
            href="/victims"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            {hero.ctaVictims[lang]}
          </Link>
        </div>
      </section>

      <Reveal>
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {atAGlance.map((stat, i) => {
            const Icon = AT_A_GLANCE_ICONS[i];
            return (
              <div
                key={i}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 text-center transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                {Icon && <Icon className="mx-auto h-5 w-5 text-red-400" />}
                <div className="mt-2 text-xl font-bold text-zinc-50 sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-xs text-zinc-400">{stat.label[lang]}</div>
              </div>
            );
          })}
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{memorialGallery.heading[lang]}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">{memorialGallery.intro[lang]}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {memorialGallery.images.map((image, i) => (
              <GraphicImage key={i} image={image} />
            ))}
          </div>
          <Link href="/attacks" className="mt-3 inline-block text-sm font-medium text-red-400 hover:text-red-300">
            {memorialGallery.link[lang]}
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-50 sm:text-xl">
            <MapPinIcon className="h-5 w-5 text-red-400" />
            {copy.whatHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{whatHappened[lang]}</p>
          <Link href="/attacks" className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300">
            {whatHappenedLink[lang]}
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-50 sm:text-xl">
            <ScalesIcon className="h-5 w-5 text-red-400" />
            {copy.threeHeading}
          </h2>
          <ol className="mt-4 space-y-4">
            {threeThings.map((item, i) => (
              <li
                key={i}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-zinc-100">
                    {i + 1}. {item.heading[lang]}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.statuses.map((s, j) => (
                      <StatusTag key={j} status={s.status} note={s.note} />
                    ))}
                  </div>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{item.body[lang]}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-50 sm:text-xl">
              <NewsIcon className="h-5 w-5 text-red-400" />
              {latestUpdatesHeading[lang]}
            </h2>
            <Link href="/updates" className="text-sm font-medium text-red-400 hover:text-red-300">
              {latestUpdatesLink[lang]}
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {latestUpdates.map((entry, i) => (
              <UpdateCard key={i} entry={entry} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-zinc-50 sm:text-xl">
            <HeartIcon className="h-5 w-5 text-red-400" />
            {featuredVictims.heading[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{featuredVictims.body[lang]}</p>
          <Link href="/victims" className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300">
            {featuredVictims.link[lang]}
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <HomeMindMap section={mindMapSection} />
      </Reveal>

      <Reveal>
        <FaqSection heading={faqHeading} items={faqItems} />
      </Reveal>
    </div>
  );
}
