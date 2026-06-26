import type { LocalizedText } from "@/lib/types";

export interface NavItem {
  href: string;
  label: LocalizedText;
}

export const SITE_NAV: NavItem[] = [
  { href: "/", label: { si: "මුල් පිටුව", en: "Home" } },
  { href: "/timeline", label: { si: "කාල රාමුව", en: "Timeline" } },
  { href: "/attacks", label: { si: "ප්‍රහාරය", en: "The Attacks" } },
  { href: "/victims", label: { si: "විපතට පත්වූවෝ", en: "Victims" } },
  { href: "/perpetrators", label: { si: "ප්‍රහාරකයින්", en: "Perpetrators" } },
  { href: "/accountability", label: { si: "වගකීම", en: "Accountability" } },
  {
    href: "/investigation",
    label: { si: "විමර්ශන හා මතභේද", en: "Investigation & Controversy" },
  },
  { href: "/court-cases", label: { si: "නඩු විභාග", en: "Court Cases" } },
  { href: "/updates", label: { si: "නවතම තොරතුරු", en: "Updates" } },
  { href: "/about", label: { si: "අප සහ මූලාශ්‍ර", en: "About & Sources" } },
];
