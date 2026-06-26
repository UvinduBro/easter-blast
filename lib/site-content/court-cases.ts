import type { LocalizedText } from "@/lib/types";
import type { StatusMark } from "@/lib/site/types";

export const COURT_CASES_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "Easter Attacks Court Cases & Trials — A Running Legal Tracker | Easter Blast",
    si: "පාස්කු ප්‍රහාර නඩු සහ විභාග — සජීවී නෛතික නිරීක්ෂණය | Easter Blast",
  },
  description: {
    en: "Track every major legal case from the 2019 Easter attacks: the main Trial-at-Bar, the Supreme Court ruling, the officials' criminal case, and PTA detentions.",
    si: "2019 පාස්කු ප්‍රහාරයේ ප්‍රධාන නෛතික නඩු සියල්ලම නිරීක්ෂණය කරන්න: ප්‍රධාන නඩු විභාගය, ශ්‍රේෂ්ඨාධිකරණ තීන්දුව, නිලධාරීන්ගේ අපරාධ නඩුව සහ PTA රඳවා තබාගැනීම්.",
  },
};

export const COURT_CASES_INTRO: LocalizedText = {
  en: "This page tracks the live legal status of every major case. Several remain unresolved.",
  si: "මෙම පිටුව සෑම ප්‍රධාන නඩුවකම සජීවී නෛතික තත්ත්වය නිරීක්ෂණය කරයි. ඉන් කිහිපයක් තවමත් විසඳී නැත.",
};

export interface CourtCase {
  title: LocalizedText;
  decided?: boolean;
  statuses: StatusMark[];
  body: LocalizedText;
}

export const COURT_CASES_PAGE_TITLE: LocalizedText = { en: "Court Cases", si: "නඩු විභාග" };

export const COURT_CASES: CourtCase[] = [
  {
    title: { en: "1. The main criminal Trial-at-Bar", si: "1. ප්‍රධාන අපරාධ නඩු විභාගය" },
    statuses: [{ status: "developing" }],
    body: {
      en: "Around 25 people were charged with tens of thousands of counts of conspiracy and aiding the attacks. The trial formally opened in late 2021 but was bogged down for years by the sheer volume of charges, more than 1,200 witnesses, and shortages of Tamil translation and Tamil-speaking lawyers. The evidence stage finally began in March 2026. One accused has died in custody. Most defence lawyers withdrew in early 2026, citing the schedule and access problems — raising fair-trial concerns. No verdict on guilt as of mid-2026.",
      si: "පුද්ගලයින් 25ක් පමණ කුමන්ත්‍රණය හා ප්‍රහාරයට සහාය වීම සම්බන්ධ චෝදනා දස දහස් ගණනක් යටතේ චෝදනා කරනු ලැබීය. නඩු විභාගය විධිමත් ලෙස 2021 අග භාගයේ විවෘත වූවද, චෝදනා ප්‍රමාණයේ විශාලත්වය, සාක්ෂිකරුවන් 1,200කට වැඩි සංඛ්‍යාවක් සහ දෙමළ භාෂා පරිවර්තන හා දෙමළ කතා නීතිඥයින්ගේ හිඟකම හේතුවෙන් වසර ගණනාවක් එය පමා විය. සාක්ෂි ඉදිරිපත් කිරීමේ අවධිය අවසානයේ 2026 මාර්තු මාසයේ ආරම්භ විය. චෝදිතයෙකු රඳවාගෙන සිටියදී මිය ගියේය. 2026 මුල් භාගයේ බොහෝ විත්තිකරුවන්ගේ නීතිඥයින් කාලසටහන සහ ප්‍රවේශ ගැටළු හේතුවෙන් ඉවත් වූහ — මෙය සාධාරණ නඩු විභාගයක් සම්බන්ධ ගැටළු මතු කරයි. 2026 මැද භාගය වන විටත් වරදකරුකම පිළිබඳ තීන්දුවක් ලැබී නැත.",
    },
  },
  {
    title: {
      en: "2. The Supreme Court fundamental-rights case (12 January 2023)",
      si: "2. ශ්‍රේෂ්ඨාධිකරණ මූලික අයිතිවාසිකම් නඩුව (2023 ජනවාරි 12)",
    },
    decided: true,
    statuses: [{ status: "fact" }],
    body: {
      en: "Former President Sirisena and four security chiefs found liable; ordered to pay compensation. (See Accountability.)",
      si: "හිටපු ජනාධිපති සිරිසේන සහ ආරක්ෂක ප්‍රධානීන් හතර දෙනෙකු වැරදිකරුවන් කරනු ලැබූ අතර, වන්දි ගෙවීමට නියම කරනු ලැබීය. (වගකීම පිටුව බලන්න.)",
    },
  },
  {
    title: {
      en: "3. The officials' criminal case (Pujith Jayasundara & Hemasiri Fernando)",
      si: "3. නිලධාරීන්ගේ අපරාධ නඩුව (පූජිත් ජයසුන්දර සහ හේමසිරි ප්‍රනාන්දු)",
    },
    statuses: [{ status: "developing" }],
    body: {
      en: "The former IGP and former Defence Secretary were acquitted in February 2022, but the Supreme Court set that acquittal aside on appeal and ordered the trial to resume with the accused called for their defence.",
      si: "හිටපු පොලිස්පතිවරයා සහ හිටපු ආරක්ෂක ලේකම්වරයා 2022 පෙබරවාරි මාසයේ නිදොස්කරුවන් කරනු ලැබූ නමුත්, අභියාචනයේ දී ශ්‍රේෂ්ඨාධිකරණය එම නිදොස්කිරීම අවලංගු කර, විත්තිකරුවන් ඔවුන්ගේ ප්‍රතිවාදය ඉදිරිපත් කිරීම සඳහා නඩු විභාගය නැවත ආරම්භ කිරීමට නියම කළේය.",
    },
  },
  {
    title: { en: "4. PTA detentions and rights rulings", si: "4. PTA රඳවා තබාගැනීම් සහ අයිතිවාසිකම් තීන්දු" },
    statuses: [{ status: "fact" }, { status: "developing" }],
    body: {
      en: "Many people detained under the Prevention of Terrorism Act after the attacks were later released or acquitted, and courts have found some arrests unlawful and ordered compensation. High-profile detainees including a lawyer, a poet, and a doctor were ultimately cleared. This thread speaks to the human-rights cost of the post-attack crackdown.",
      si: "ප්‍රහාරයෙන් පසු ත්‍රස්තවාදය වැළැක්වීමේ පනත (PTA) යටතේ රඳවාගෙන සිටි බොහෝ දෙනෙක් පසුව නිදහස් කරනු ලැබූ හෝ නිදොස්කරුවන් කරනු ලැබූ අතර, අධිකරණ ඇතැම් අත්අඩංගුවට ගැනීම් නීති විරෝධී බව සොයාගෙන වන්දි ගෙවීමට නියම කර ඇත. නීතිඥයෙකු, කවියෙකු සහ වෛද්‍යවරයෙකු ඇතුළු කැපී පෙනෙන රඳවාගත් අයවලුන් අවසානයේ නිදොස් කරනු ලැබීය. මෙම තේමාව ප්‍රහාරයෙන් පසු දරපත් මැඩලීමේ මානව හිමිකම් වෙළුම ගැන කථා කරයි.",
    },
  },
  {
    title: { en: "5. The Sallay / reinvestigation cases", si: "5. සලේ / නැවත විමර්ශන නඩු" },
    statuses: [{ status: "developing" }],
    body: {
      en: "Stemming from a complaint about the Channel 4 allegations, this strand led to the 2026 PTA arrest of Suresh Sallay and a travel ban on former President Rajapaksa. No Easter indictment has yet followed. The site tracks this closely.",
      si: "Channel 4 චෝදනා සම්බන්ධයෙන් කරන ලද පැමිණිල්ලකින් ආරම්භ වූ මෙම තේමාව, 2026දී සුරේෂ් සලේගේ PTA අත්අඩංගුවට ගැනීමට සහ හිටපු ජනාධිපති රාජපක්ෂට විදේශ ගමන් තහනමකට තුඩු දුන්නේය. තවමත් පාස්කු සම්බන්ධ චෝදනා පත්‍රයක් ඉදිරිපත් වී නැත. මෙම අඩවිය මෙය සමීපව අවධානයෙන් යුතුව සොයා බලයි.",
    },
  },
];

export const COURT_CASES_CONTENT = {
  seo: COURT_CASES_SEO,
  pageTitle: COURT_CASES_PAGE_TITLE,
  intro: COURT_CASES_INTRO,
  cases: COURT_CASES,
};
export type CourtCasesContentData = typeof COURT_CASES_CONTENT;
