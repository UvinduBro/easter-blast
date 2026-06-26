import type { LocalizedText } from "@/lib/types";
import type { StatusMark } from "@/lib/site/types";

export const UPDATES_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "Latest News & Developments — Sri Lanka Easter Attacks Case | Easter Blast",
    si: "නවතම පුවත් සහ වර්ධනයන් — ශ්‍රී ලංකා පාස්කු ප්‍රහාර නඩුව | Easter Blast",
  },
  description: {
    en: "Ongoing updates on the Easter attacks investigation, trials, and accountability — each tagged as fact, allegation, or developing.",
    si: "පාස්කු ප්‍රහාර විමර්ශනය, නඩු විභාග සහ වගකීම පිළිබඳ අඛණ්ඩ යාවත්කාලීන කිරීම් — සෑම එකක්ම සත්‍යය, චෝදනාව, හෝ සිදුවෙමින් පවතින ලෙස ටැග් කර ඇත.",
  },
};

export const UPDATES_HOW_THIS_WORKS: LocalizedText = {
  en: "This is a reverse-chronological log of developments. Each entry has a date, a status tag, a one-line summary, a short context paragraph, and a source link. We update this page as the courts and Parliament act. When an allegation becomes a court finding, we change its tag and say so.",
  si: "මෙය වර්ධනයන්හි ආපසු-කාලානුක්‍රමික සටහනකි. සෑම ඇතුළත් කිරීමකටම දිනයක්, තත්ත්ව ටැගයක්, එක-පෙළ සාරාංශයක්, කෙටි පසුබිම් වචනයක්, සහ මූලාශ්‍ර සබැඳියක් ඇත. අධිකරණ සහ පාර්ලිමේන්තුව ක්‍රියා කරන විට අපි මෙම පිටුව යාවත්කාලීන කරමු. චෝදනාවක් අධිකරණ සොයාගැනීමක් බවට පත් වූ විට, අපි එහි ටැගය වෙනස් කර එය සඳහන් කරමු.",
};

export interface UpdateEntry {
  date: LocalizedText;
  headline: LocalizedText;
  statuses: StatusMark[];
  summary: LocalizedText;
  context: LocalizedText;
  /** Literal source placeholder from the working content doc — must never be replaced with a guessed URL. */
  source: string;
  affects: LocalizedText;
}

export const UPDATES: UpdateEntry[] = [
  {
    date: { en: "10 June 2026", si: "2026 ජූනි 10" },
    headline: {
      en: "Minister tells Parliament Sallay \"strategically directed\" extremists",
      si: "සලේ අන්තවාදීන්ට \"උපායමාර්ගිකව මඟ පෙන්වූ\" බව අමාත්‍යවරයා පාර්ලිමේන්තුවට පවසයි",
    },
    statuses: [{ status: "allegation" }],
    summary: {
      en: "The Public Security Minister stated in Parliament that investigators believe former spy chief Suresh Sallay directed the attackers and concealed evidence.",
      si: "පොදු ආරක්ෂක අමාත්‍යවරයා පාර්ලිමේන්තුවේ ප්‍රකාශ කළේ, විමර්ශකයින් විශ්වාස කරන්නේ හිටපු බුද්ධි ප්‍රධානී සුරේෂ් සලේ ප්‍රහාරකයින්ට මඟ පෙන්වූ අතර සාක්ෂි සඟවූ බවය.",
    },
    context: {
      en: "This is the strongest official statement of the conspiracy theory to date, but it was made under parliamentary privilege and is not a court finding. Sallay denies all allegations and has not been indicted on Easter charges.",
      si: "මෙය මේ දක්වා කුමන්ත්‍රණ කතාව සම්බන්ධයෙන් ලබා දුන් වඩාත් ශක්තිමත් නිල ප්‍රකාශයයි, නමුත් එය පාර්ලිමේන්තු වරප්‍රසාද යටතේ සිදු කරන ලද එකක් වන අතර අධිකරණ සොයාගැනීමක් නොවේ. සලේ සියලුම චෝදනා ප්‍රතික්ෂේප කරන අතර පාස්කු චෝදනා මත නඩු පවරා නැත.",
    },
    source: "[add link]",
    affects: {
      en: "Investigation & Controversy; Court Cases.",
      si: "විමර්ශන හා මතභේද; නඩු විභාග.",
    },
  },
  {
    date: { en: "3 June 2026", si: "2026 ජූනි 3" },
    headline: {
      en: "Travel ban on former President Gotabaya Rajapaksa",
      si: "හිටපු ජනාධිපති ගෝඨාභය රාජපක්ෂට විදේශ ගමන් තහනමක්",
    },
    statuses: [{ status: "fact" }],
    summary: {
      en: "A magistrate barred former President Rajapaksa from leaving the country, the first time he has been directly drawn into the case.",
      si: "මහේස්ත්‍රාත්වරයෙක් හිටපු ජනාධිපති රාජපක්ෂට රට හැරයාම තහනම් කළේය — ඔහු මෙම නඩුවට කෙළින්ම සම්බන්ධ කරනු ලබන ප්‍රථම අවස්ථාවයි.",
    },
    context: {
      en: "Two former military-intelligence officers were also restricted. The CID stopped short of naming Rajapaksa a suspect.",
      si: "හිටපු හමුදා බුද්ධි නිලධාරීන් දෙදෙනෙකුට ද සීමා පනවන ලදී. CID අංශය රාජපක්ෂ සැකකරුවෙකු ලෙස නම් කිරීමෙන් වැළකී සිටියේය.",
    },
    source: "[add link]",
    affects: {
      en: "Timeline; Court Cases.",
      si: "කාල රාමුව; නඩු විභාග.",
    },
  },
  {
    date: { en: "19 March 2026", si: "2026 මාර්තු 19" },
    headline: {
      en: "Main trial reaches evidence stage",
      si: "ප්‍රධාන නඩු විභාගය සාක්ෂි අවධියට පැමිණේ",
    },
    statuses: [{ status: "fact" }],
    summary: {
      en: "Almost seven years after the attack, the main Trial-at-Bar began hearing evidence, with victims testifying.",
      si: "ප්‍රහාරයෙන් වසර හතකට ආසන්න කාලයකට පසු, ප්‍රධාන නඩු විභාගය සාක්ෂි අසා බැලීම ආරම්භ කළ අතර, විපතට පත් වූවෝ සාක්ෂි දුන්හ.",
    },
    context: {
      en: "The case had been called 159 times before reaching this point. Most defence lawyers had withdrawn weeks earlier, raising fair-trial concerns.",
      si: "මෙම අවධියට පැමිණෙන්නට පෙර නඩුව වාර 159ක් කැඳවා තිබුණි. බොහෝ විත්තිකරුවන්ගේ නීතිඥයින් සති කිහිපයකට පෙර ඉවත් වී තිබූ අතර, මෙය සාධාරණ නඩු විභාගයක් සම්බන්ධ ගැටළු මතු කළේය.",
    },
    source: "[add link]",
    affects: {
      en: "Court Cases.",
      si: "නඩු විභාග.",
    },
  },
  {
    date: { en: "25 February 2026", si: "2026 පෙබරවාරි 25" },
    headline: {
      en: "Former spy chief Suresh Sallay arrested",
      si: "හිටපු බුද්ධි ප්‍රධානී සුරේෂ් සලේ අත්අඩංගුවට",
    },
    statuses: [
      { status: "fact", note: { en: "(arrest)", si: "(අත්අඩංගුව)" } },
      { status: "allegation", note: { en: "(underlying claims)", si: "(මූලික චෝදනා)" } },
    ],
    summary: {
      en: "Sallay was arrested under the PTA on suspicion of conspiracy and misdirecting the investigation.",
      si: "කුමන්ත්‍රණය හා විමර්ශනය වැරදි මඟ පැත්තා කිරීම සැකකරමින් සලේ PTA පනත යටතේ අත්අඩංගුවට ගනු ලැබීය.",
    },
    context: {
      en: "He denies the allegations and says he was abroad at the relevant time. As of mid-2026 he has not been indicted on Easter-specific charges.",
      si: "ඔහු චෝදනා ප්‍රතික්ෂේප කරන අතර, අදාළ කාලයේ විදේශගතව සිටි බව පවසයි. 2026 මැද භාගය වන විටත් ඔහුට පාස්කු-විශේෂිත චෝදනා මත නඩු පවරා නැත.",
    },
    source: "[add link]",
    affects: {
      en: "Investigation & Controversy; Court Cases; Timeline.",
      si: "විමර්ශන හා මතභේද; නඩු විභාග; කාල රාමුව.",
    },
  },
  {
    date: { en: "17 July 2025", si: "2025 ජූලි 17" },
    headline: {
      en: "Former intelligence chief Nilantha Jayawardena dismissed",
      si: "හිටපු බුද්ධි ප්‍රධානී නිලන්ත ජයවර්ධන සේවයෙන් පහ කරයි",
    },
    statuses: [{ status: "fact" }],
    summary: {
      en: "A police disciplinary inquiry found Jayawardena guilty on all charges and he was dismissed from the service.",
      si: "පොලිස් විනය විමර්ශනයක් ජයවර්ධන සියලුම චෝදනාවලට වැරදිකරු කළ අතර, ඔහු සේවයෙන් පහ කරනු ලැබීය.",
    },
    context: {
      en: "He is the most senior officer formally held to account for the intelligence failure, separate from his Supreme Court compensation order.",
      si: "ඔහුගේ ශ්‍රේෂ්ඨාධිකරණ වන්දි නියෝගයෙන් වෙනස්ව, බුද්ධි අසාර්ථකත්වය සම්බන්ධයෙන් විධිමත් ලෙස වගකිව යුතු ලෙස සලකනු ලැබූ ඉහළම නිලධාරියා ඔහුය.",
    },
    source: "[add link]",
    affects: {
      en: "Accountability; Timeline.",
      si: "වගකීම; කාල රාමුව.",
    },
  },
];
