import type { LocalizedText } from "@/lib/types";
import type { ContentSection } from "@/lib/site/types";

export const ACCOUNTABILITY_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "Who Was Held Responsible for Failing to Stop the Easter Attacks | Easter Blast",
    si: "පාස්කු ප්‍රහාරය වැළැක්වීමට අසමත් වීම සම්බන්ධයෙන් වගකිව යුත්තේ කවුද | Easter Blast",
  },
  description: {
    en: "Sri Lanka's Supreme Court and multiple inquiries found President Sirisena and his security chiefs failed to act on warnings. Here's the accountability record.",
    si: "ශ්‍රී ලංකා ශ්‍රේෂ්ඨාධිකරණය හා විමර්ශන කිහිපයක්ම, ජනාධිපති සිරිසේන සහ ඔහුගේ ආරක්ෂක ප්‍රධානීන් අනතුරු ඇඟවීම් මත ක්‍රියා කිරීමට අසමත් වූ බව සොයාගෙන ඇත. මෙය ඒ සම්බන්ධ වගකීමේ වාර්තාවයි.",
  },
};

export const ACCOUNTABILITY_INTRO: LocalizedText = {
  en: "Separately from who carried out the attack is the question of who failed to prevent it. On this question there are clear, court-established findings.",
  si: "ප්‍රහාරය සිදු කළේ කවුරුන්ද යන්නෙන් වෙනස්ව, එය වැළැක්වීමට අසමත් වූයේ කවුරුන්ද යන ප්‍රශ්නය පවතී. මෙම ප්‍රශ්නය සම්බන්ධයෙන් පැහැදිලි, අධිකරණය මගින් තහවුරු කරන ලද සොයාගැනීම් පවතී.",
};

export const INTELLIGENCE_FAILURE: ContentSection = {
  heading: { en: "The intelligence failure, in brief", si: "බුද්ධි අසාර්ථකත්වය, කෙටියෙන්" },
  entries: [
    {
      statuses: [{ status: "fact" }],
      body: {
        en: "Specific Indian warnings arrived from 4 April 2019 onward. They were passed around the security apparatus but produced no preventive action. At the top, President Maithripala Sirisena (who also held the defence portfolio) and Prime Minister Ranil Wickremesinghe were in a bitter feud; the National Security Council met irregularly, and the PM was excluded from it. Sirisena was abroad in the days before the attack without appointing an acting defence minister.",
        si: "2019 අප්‍රේල් 4 වැනිදා සිට පැහැදිලි ඉන්දියානු අනතුරු ඇඟවීම් ලැබුණි. ඒවා ආරක්ෂක ක්‍රමවේදය තුළ බෙදා හරිනු ලැබුණද, කිසිදු වළක්වාගැනීමේ ක්‍රියාමාර්ගයක් ගත්තේ නැත. ඉහළින්ම, ආරක්ෂක අමාත්‍ය ධුරයද දැරූ ජනාධිපති මෛත්‍රීපාල සිරිසේන සහ අග්‍රාමාත්‍ය රනිල් වික්‍රමසිංහ අතර තියුණු ආරවුලක් පැවති අතර, ජාතික ආරක්ෂක මන්ත්‍රණ සභාව නිතිපතා රැස් නොවූ අතර, අග්‍රාමාත්‍යවරයා එයින් බැහැර කර තිබුණි. ප්‍රහාරයට පෙර දිනවල සිරිසේන, වැඩබලන ආරක්ෂක අමාත්‍යවරයෙකු පවා පත් නොකර විදේශගතව සිටියේය.",
      },
    },
  ],
};

export interface CompensationRow {
  official: LocalizedText;
  role: LocalizedText;
  amount: LocalizedText;
}

export const COURT_JUDGMENT = {
  heading: {
    en: "The Supreme Court judgment (12 January 2023)",
    si: "ශ්‍රේෂ්ඨාධිකරණ තීන්දුව (2023 ජනවාරි 12)",
  },
  intro: {
    en: "A seven-judge bench found that named officials violated citizens' fundamental rights by failing to prevent the attacks despite credible intelligence, and ordered them to pay compensation from their own funds:",
    si: "විනිසුරුවන් හත් දෙනෙකුගෙන් සැදුම් විනිශ්චය මඩුල්ලක්, විශ්වසනීය බුද්ධි තොරතුරු තිබියදීත් ප්‍රහාරය වැළැක්වීමට අසමත් වීමෙන් නම් කරන ලද නිලධාරීන් පුරවැසියන්ගේ මූලික අයිතිවාසිකම් උල්ලංඝනය කළ බව තීන්දු කළ අතර, ඔවුන්ගේම පෞද්ගලික මුදලින් වන්දි ගෙවීමට නියම කළේය:",
  },
  rows: [
    {
      official: { en: "Maithripala Sirisena", si: "මෛත්‍රීපාල සිරිසේන" },
      role: { en: "President & Defence Minister", si: "ජනාධිපති සහ ආරක්ෂක අමාත්‍ය" },
      amount: { en: "Rs. 100 million", si: "රු. මිලියන 100" },
    },
    {
      official: { en: "Pujith Jayasundara", si: "පූජිත් ජයසුන්දර" },
      role: { en: "Inspector General of Police", si: "පොලිස්පති" },
      amount: { en: "Rs. 75 million", si: "රු. මිලියන 75" },
    },
    {
      official: { en: "Nilantha Jayawardena", si: "නිලන්ත ජයවර්ධන" },
      role: { en: "State Intelligence Service chief", si: "රාජ්‍ය බුද්ධි අංශයේ ප්‍රධානී" },
      amount: { en: "Rs. 75 million", si: "රු. මිලියන 75" },
    },
    {
      official: { en: "Hemasiri Fernando", si: "හේමසිරි ප්‍රනාන්දු" },
      role: { en: "Defence Secretary", si: "ආරක්ෂක ලේකම්" },
      amount: { en: "Rs. 50 million", si: "රු. මිලියන 50" },
    },
    {
      official: { en: "Sisira Mendis", si: "සිසිර මෙන්ඩිස්" },
      role: { en: "Chief of National Intelligence", si: "ජාතික බුද්ධි ප්‍රධානී" },
      amount: { en: "Rs. 10 million", si: "රු. මිලියන 10" },
    },
    {
      official: { en: "The State", si: "රාජ්‍යය" },
      role: { en: "—", si: "—" },
      amount: { en: "Rs. 1 million", si: "රු. මිලියන 1" },
    },
  ] satisfies CompensationRow[],
  closing: {
    en: "The court expressed \"shock and dismay\" at the inaction. Proceedings against Wickremesinghe could not continue because of presidential immunity. Sirisena completed his payment in August 2024.",
    si: "අධිකරණය මෙම නිෂ්ක්‍රියතාව සම්බන්ධයෙන් \"කම්පනය හා කලකිරීම\" ප්‍රකාශ කළේය. ජනාධිපති ප්‍රතිශක්තිය හේතුවෙන් වික්‍රමසිංහට එරෙහි නඩු විභාගය ඉදිරියට ගෙන යාමට නොහැකි විය. සිරිසේන 2024 අගෝස්තු මාසයේ දී තම ගෙවීම සම්පූර්ණ කළේය.",
  } as LocalizedText,
};

export const DISMISSAL: ContentSection = {
  heading: {
    en: "Nilantha Jayawardena — dismissed",
    si: "නිලන්ත ජයවර්ධන — සේවයෙන් පහ කිරීම",
  },
  entries: [
    {
      statuses: [{ status: "fact" }],
      body: {
        en: "The former intelligence chief was found guilty on all charges in a police disciplinary inquiry and dismissed from the service in July 2025 — the most senior officer formally held to account in the case.",
        si: "හිටපු බුද්ධි ප්‍රධානියා පොලිස් විනය විමර්ශනයකින් සියලුම චෝදනාවලට වැරදිකරු කරනු ලැබූ අතර, 2025 ජූලි මාසයේ සේවයෙන් පහ කරනු ලැබීය — මෙම නඩුවේ විධිමත් ලෙස වගකිව යුතු ලෙස සලකනු ලැබූ ඉහළම නිලධාරියා ඔහුය.",
      },
    },
  ],
};

export const ACCOUNTABILITY_PAGE_TITLE: LocalizedText = { en: "Accountability", si: "වගකීම" };

export const OFFICIAL_INQUIRIES: ContentSection = {
  heading: { en: "The official inquiries", si: "නිල විමර්ශන" },
  entries: [
    {
      title: { en: "Malalgoda Committee (April 2019)", si: "මලල්ගොඩ කමිටුව (2019 අප්‍රේල්)" },
      body: {
        en: "First rapid presidential review.",
        si: "ජනාධිපතිවරයා විසින් කරන ලද ප්‍රථම වහාම සමාලෝචනය.",
      },
    },
    {
      title: {
        en: "Parliamentary Select Committee (2019)",
        si: "පාර්ලිමේන්තු තේරීම් කාරක සභාව (2019)",
      },
      body: {
        en: "Faulted the SIS chief and the President.",
        si: "රාජ්‍ය බුද්ධි අංශයේ (SIS) ප්‍රධානියාට සහ ජනාධිපතිවරයාට වරද පැවරීය.",
      },
    },
    {
      title: {
        en: "Presidential Commission of Inquiry (PCoI) (2019–2021)",
        si: "ජනාධිපති කොමිසම (PCoI) (2019–2021)",
      },
      body: {
        en: "Recommended considering criminal proceedings against former President Sirisena; only partly made public.",
        si: "හිටපු ජනාධිපති සිරිසේනට එරෙහිව අපරාධ නඩු පැවරීම සලකා බැලීමට නිර්දේශ කළ අතර, එහි කොටසක් පමණක් ප්‍රසිද්ධ කරන ලදී.",
      },
    },
  ],
};

export const ACCOUNTABILITY_CONTENT = {
  seo: ACCOUNTABILITY_SEO,
  pageTitle: ACCOUNTABILITY_PAGE_TITLE,
  intro: ACCOUNTABILITY_INTRO,
  intelligenceFailure: INTELLIGENCE_FAILURE,
  courtJudgment: COURT_JUDGMENT,
  dismissal: DISMISSAL,
  officialInquiries: OFFICIAL_INQUIRIES,
};
export type AccountabilityContentData = typeof ACCOUNTABILITY_CONTENT;
