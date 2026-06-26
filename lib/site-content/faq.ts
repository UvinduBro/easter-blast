import type { LocalizedText } from "@/lib/types";
import type { StatusMark } from "@/lib/site/types";

export const FAQ_HEADING: LocalizedText = {
  en: "Frequently asked questions",
  si: "නිතර අසන ප්‍රශ්න",
};

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
  statuses: StatusMark[];
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: {
      en: "How many people were killed in the Easter Sunday attacks?",
      si: "පාස්කු ඉරිදා ප්‍රහාරයේදී කී දෙනෙක් මරණයට පත් වුණාද?",
    },
    answer: {
      en: "At least 269 people were killed and around 500 were wounded when coordinated suicide bombings struck three churches and three luxury hotels in Sri Lanka on Easter Sunday, 21 April 2019.",
      si: "2019 අප්‍රේල් 21 පාස්කු ඉරිදා, ශ්‍රී ලංකාවේ පල්ලි තුනක් සහ සුඛෝපභෝගී හෝටල් තුනකට එල්ල වූ සංවිධානාත්මක මරාගෙන මැරෙන බෝම්බ ප්‍රහාරවලින් අවම වශයෙන් 269 දෙනෙකු මිය ගිය අතර 500ක් පමණ තුවාල ලැබූහ.",
    },
    statuses: [{ status: "fact" }],
  },
  {
    question: {
      en: "Who carried out the Easter Sunday bombings?",
      si: "පාස්කු ඉරිදා බෝම්බ ප්‍රහාර එල්ල කළේ කවුද?",
    },
    answer: {
      en: "Eight or nine suicide bombers from National Thowheeth Jama'ath (NTJ), a local ISIS-inspired group, carried out the bombings. ISIS claimed responsibility two days later.",
      si: "ISIS ආභාසය ලද දේශීය කණ්ඩායමක් වන National Thowheeth Jama'ath (NTJ) හි මරාගෙන මැරෙන ප්‍රහාරකයින් අට හෝ නවදෙනෙක් මෙම ප්‍රහාර එල්ල කළහ. ISIS සංවිධානය දින දෙකකට පසු වරද ගැනීම ප්‍රකාශ කළේය.",
    },
    statuses: [{ status: "fact" }],
  },
  {
    question: {
      en: "Could the attacks have been prevented?",
      si: "මෙම ප්‍රහාර වළක්වා ගත හැකි වීද?",
    },
    answer: {
      en: "According to Sri Lanka's Supreme Court and multiple inquiries, yes. Indian intelligence warned Sri Lankan officials repeatedly in the weeks before the attack, but President Sirisena and his top security chiefs failed to act on those specific, credible warnings.",
      si: "ශ්‍රී ලංකා ශ්‍රේෂ්ඨාධිකරණය සහ විමර්ශන කිහිපයක්ම අනුව, ඔව්. ප්‍රහාරයට පෙර සති ගණනාව තුළ ඉන්දියානු බුද්ධි අංශය ශ්‍රී ලාංකික නිලධාරීන්ට නැවත නැවතත් අනතුරු ඇඟවූ නමුත්, ජනාධිපති සිරිසේන සහ ඔහුගේ ඉහළම ආරක්ෂක ප්‍රධානීන් එම නිශ්චිත, විශ්වසනීය අනතුරු ඇඟවීම් මත ක්‍රියා කිරීමට අසමත් වූහ.",
    },
    statuses: [{ status: "fact" }],
  },
  {
    question: {
      en: "Who was the mastermind behind the attacks?",
      si: "ප්‍රහාරවල \"ප්‍රධාන සැලසුම්කරු\" කවුද?",
    },
    answer: {
      en: "That is unsettled. Authorities have pointed to the operational leader Zahran Hashim, an ideologue, and — in a contested conspiracy narrative — state intelligence figures. No court has resolved the question.",
      si: "එය තවමත් විසඳී නැත. බලධාරීන් මෙහෙයුම් නායකයා සහරාන් හෂීම්ව, මතවාදියෙකුව, සහ — මතභේදාත්මක කුමන්ත්‍රණ කතාවේ — රාජ්‍ය බුද්ධි අංශයේ පුද්ගලයින් වෙත අවධානය යොමු කර ඇත. කිසිදු අධිකරණයක් මෙම ප්‍රශ්නය විසඳා නැත.",
    },
    statuses: [{ status: "disputed" }],
  },
  {
    question: {
      en: "Has anyone been convicted over the Easter attacks?",
      si: "පාස්කු ප්‍රහාර සම්බන්ධයෙන් කිසිවෙකු වරදකරු කරනු ලැබුවාද?",
    },
    answer: {
      en: "Not as of mid-2026. The main criminal Trial-at-Bar — around 25 people charged — only reached its evidence stage in March 2026 and has reached no verdict. Separately, in January 2023 the Supreme Court found former President Sirisena and four security chiefs liable in a civil fundamental-rights case and ordered them to pay compensation; that is a finding of civil liability, not a criminal conviction.",
      si: "2026 මැද භාගය වන විටත් නැත. පුද්ගලයින් 25ක් පමණ චෝදනා කරන ලද ප්‍රධාන අපරාධ නඩු විභාගය 2026 මාර්තු මාසයේදී පමණක් සාක්ෂි අවධියට පැමිණි අතර, තවමත් තීන්දුවක් ලැබී නැත. වෙනමම, 2023 ජනවාරි මාසයේ ශ්‍රේෂ්ඨාධිකරණය හිටපු ජනාධිපති සිරිසේන සහ ආරක්ෂක ප්‍රධානීන් හතර දෙනෙකු මූලික අයිතිවාසිකම් නඩුවකින් වැරදිකරුවන් කර වන්දි ගෙවීමට නියම කළේය; එය සිවිල් වගකීමක් පිළිබඳ සොයාගැනීමක් මිස අපරාධ වරදකරුකමක් නොවේ.",
    },
    statuses: [{ status: "developing" }],
  },
  {
    question: {
      en: "Is Easter Blast's coverage independent and reliable?",
      si: "Easter Blast හි අන්තර්ගතය ස්වාධීන සහ විශ්වසනීයද?",
    },
    answer: {
      en: "This site separates fact from allegation, only upgrades an allegation to fact when a court or official finding establishes it, and weights sources with court judgments and official inquiries first, established news outlets next, and partisan outlets last and labelled as such. See the About page for our full editorial standards and source list.",
      si: "මෙම අඩවිය සත්‍යය සහ චෝදනාව අතර වෙනස පැහැදිලිව සටහන් කරයි, අධිකරණයක් හෝ නිල සොයාගැනීමක් එය තහවුරු කරන තුරු චෝදනාවක් සත්‍යයක් බවට පත් නොකරයි, සහ අධිකරණ තීන්දු හා නිල විමර්ශන මූලාශ්‍ර ප්‍රථමයෙන්, ප්‍රතිෂ්ඨාපිත මාධ්‍ය ඊළඟට, පක්ෂග්‍රාහී මාධ්‍ය අවසානයෙන් යනුවෙන් වැදගත්කමින් සලකයි. සම්පූර්ණ සංස්කරණ ප්‍රමිතීන් සහ මූලාශ්‍ර ලැයිස්තුව සඳහා අප පිළිබඳ පිටුව බලන්න.",
    },
    statuses: [{ status: "fact" }],
  },
];
