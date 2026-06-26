"use client";

import Image from "next/image";
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
      <section className="relative -mx-4 overflow-hidden rounded-2xl border border-zinc-800 sm:-mx-6">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
          <Image
            src={hero.image.url}
            alt={hero.image.alt[lang]}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-3 hidden sm:block">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-red-500/60" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-red-500/60" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-red-500/60" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-red-500/60" />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-8 sm:pb-9">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-zinc-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-red-400 backdrop-blur-sm">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              {hero.tag[lang]}
            </span>
            <h1 className="mt-3 text-2xl font-bold text-zinc-50 sm:text-4xl">{hero.kicker[lang]}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base">{hero.body[lang]}</p>
            <p className="mt-2 max-w-2xl font-mono text-[11px] uppercase tracking-wide text-red-300/90 sm:text-xs">
              {hero.status[lang]}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/timeline"
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-950/40 transition-colors hover:bg-red-500"
              >
                {hero.ctaTimeline[lang]}
              </Link>
              <Link
                href="/victims"
                className="rounded-full border border-zinc-600 bg-zinc-950/60 px-4 py-2 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:border-zinc-400 hover:bg-zinc-900"
              >
                {hero.ctaVictims[lang]}
              </Link>
            </div>
          </div>
        </div>
        <p className="border-t border-zinc-800 bg-zinc-950 px-4 py-3 text-xs italic leading-relaxed text-zinc-400 sm:px-8">
          {hero.note[lang]}
        </p>
      </section>

      <Reveal>
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {atAGlance.map((stat, i) => {
            const Icon = AT_A_GLANCE_ICONS[i];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 text-center transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-red-600/70" />
                {Icon && <Icon className="mx-auto h-5 w-5 text-red-400" />}
                <div className="mt-2 font-mono text-xl font-bold text-zinc-50 sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-xs text-zinc-400">{stat.label[lang]}</div>
              </div>
            );
          })}
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-zinc-900 pt-8">
          <div className="relative -mx-4 overflow-hidden rounded-2xl border border-zinc-800 sm:-mx-6">
            <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
              <Image
                src={memorialGallery.backgroundImage.url}
                alt={memorialGallery.backgroundImage.alt[lang]}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-8 sm:pb-6">
                <h2 className="text-lg font-semibold text-zinc-50 sm:text-xl">{memorialGallery.heading[lang]}</h2>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-200 sm:text-base">
                  {memorialGallery.intro[lang]}
                </p>
              </div>
            </div>

            <div className="relative border-t border-zinc-800 bg-zinc-950 p-4 sm:p-6">
              <Image
                src={memorialGallery.accentImage.url}
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-[0.08] grayscale"
              />
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-red-400">
                  {memorialGallery.sensitiveNote[lang]}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:max-w-md">
                  {memorialGallery.sensitiveImages.map((image, i) => (
                    <GraphicImage key={i} image={image} />
                  ))}
                </div>
              </div>
              <Link
                href="/attacks"
                className="relative mt-4 inline-block text-sm font-medium text-red-400 hover:text-red-300"
              >
                {memorialGallery.link[lang]}
              </Link>
            </div>
          </div>
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
