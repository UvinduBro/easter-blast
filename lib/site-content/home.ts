import type { LocalizedText } from "@/lib/types";
import type { PageImage, StatusMark } from "@/lib/site/types";
import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/site-content/faq";

export const HOME_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "The 2019 Sri Lanka Easter Sunday Bombings — Facts, Timeline & Accountability | Easter Blast",
    si: "2019 ශ්‍රී ලංකා පාස්කු ඉරිදා බෝම්බ ප්‍රහාරය — සත්‍යය, කාල රාමුව සහ වගකීම | Easter Blast",
  },
  description: {
    en: "A clear, continuously updated record of Sri Lanka's 21 April 2019 Easter attacks: the victims, the perpetrators, the intelligence failure, and the ongoing fight for justice.",
    si: "ශ්‍රී ලංකාවේ 2019 අප්‍රේල් 21 පාස්කු ප්‍රහාරයේ පැහැදිලි, අඛණ්ඩ යාවත්කාලීන වාර්තාවක්: විපතට පත් වූවෝ, ප්‍රහාරකයෝ, බුද්ධි අසාර්ථකත්වය, සහ යුක්තිය සඳහා අඛණ්ඩ සටන.",
  },
};

export const HERO: {
  tag: LocalizedText;
  kicker: LocalizedText;
  body: LocalizedText;
  status: LocalizedText;
  note: LocalizedText;
  ctaTimeline: LocalizedText;
  ctaVictims: LocalizedText;
  image: PageImage;
} = {
  tag: { en: "Investigation Record — Easter Sunday 2019", si: "විමර්ශන වාර්තාව — 2019 පාස්කු ඉරිදා" },
  kicker: { en: "Easter Sunday, 21 April 2019.", si: "පාස්කු ඉරිදා, 2019 අප්‍රේල් 21." },
  body: {
    en: "In the space of about twenty minutes, coordinated suicide bombings tore through three churches and three luxury hotels in Sri Lanka. At least 269 people were killed and around 500 wounded. Years later, the central questions — who was truly behind it, and why repeated warnings were ignored — are still being fought over in courtrooms and Parliament.",
    si: "මිනිත්තු විස්සක් පමණ කාලයක් තුළ, සංවිධානාත්මක මරාගෙන මැරෙන බෝම්බ ප්‍රහාර ශ්‍රී ලංකාවේ පල්ලි තුනක් සහ සුඛෝපභෝගී හෝටල් තුනක් විනාශ කළේය. අවම වශයෙන් 269 දෙනෙකු මිය ගිය අතර 500ක් පමණ තුවාල ලැබූහ. වසර ගණනාවකට පසුවත් — එහි සැබවින්ම සිටියේ කවුරුන්ද, සහ නැවත නැවතත් කරන ලද අනතුරු ඇඟවීම් නොසලකා හරින ලද්දේ මන්ද යන ප්‍රධාන ප්‍රශ්න — අධිකරණවල සහ පාර්ලිමේන්තුවේ තවමත් සටන් වදිමින් පවතී.",
  },
  status: {
    en: "Investigation ongoing. Full accountability still unresolved.",
    si: "විමර්ශනය ක්‍රියාත්මකව පවතී. සම්පූර්ණ වගකීම තවමත් විසඳී නැත.",
  },
  note: {
    en: "This site keeps the record straight: what is proven, what is alleged, and what is still unfolding.",
    si: "මෙම අඩවිය වාර්තාව නිවැරදිව තබා ගනී: ඔප්පු වූයේ කුමක්ද, චෝදනා කරන ලද්දේ කුමක්ද, සහ තවමත් දිග හැරෙමින් පවතින්නේ කුමක්ද යනුවෙන්.",
  },
  ctaTimeline: { en: "Explore the Timeline", si: "කාල රාමුව බලන්න" },
  ctaVictims: { en: "Remember the Victims", si: "විපතට පත් වූවන් සිහිපත් කරන්න" },
  image: {
    url: "/images/attacks/st-sebastians-negombo-interior-1.webp",
    alt: {
      en: "Damage inside St. Sebastian's Church, Katuwapitiya, after the bombing",
      si: "බෝම්බ ප්‍රහාරයෙන් පසු ශාන්ත සෙබස්තියන් දේවස්ථානය, කටුවාපිටිය, ඇතුළත සිදුවූ හානිය",
    },
  },
};

export const AT_A_GLANCE: { value: string; label: LocalizedText }[] = [
  { value: "269+", label: { en: "people killed", si: "මරණ" } },
  { value: "500+", label: { en: "injured", si: "තුවාල ලැබූවෝ" } },
  { value: "6", label: { en: "primary attack sites + 2 later blasts", si: "ප්‍රධාන ස්ථාන 6 + පසුකාලීන පිපිරීම් 2" } },
  { value: "8–9", label: { en: "suicide bombers", si: "මරාගෙන මැරෙන ප්‍රහාරකයෝ" } },
  { value: "4", label: { en: "governments, still no full accountability", si: "රජයන්, තවමත් සම්පූර්ණ වගකීමක් නැත" } },
];

export const WHAT_HAPPENED: LocalizedText = {
  en: "On the morning of Easter Sunday 2019, eight or nine suicide bombers from a local ISIS-inspired group, the National Thowheeth Jama'ath (NTJ), struck Catholic and evangelical churches packed for Easter services and luxury hotels serving breakfast. ISIS claimed responsibility two days later. The bombings were not a bolt from the blue — Indian intelligence had warned Sri Lankan officials repeatedly in the weeks before, and those warnings went unheeded.",
  si: "2019 පාස්කු ඉරිදා උදෑසන, ISIS ආභාසය ලද දේශීය කණ්ඩායමක් වන National Thowheeth Jama'ath (NTJ) හි මරාගෙන මැරෙන ප්‍රහාරකයින් අට හෝ නවදෙනෙක්, පාස්කු නමස්කාරයෙන් පූර්ණව සිටි කතෝලික හා එවැන්ජලිකල් පල්ලිවලටත්, උදෑසන ආහාර වේලාව සපයමින් සිටි සුඛෝපභෝගී හෝටල්වලටත් ප්‍රහාර එල්ල කළහ. ISIS සංවිධානය දින දෙකකට පසු වරද ගැනීම ප්‍රකාශ කළේය. මෙම බෝම්බ ප්‍රහාර හදිසියේ පැමිණි ඒවා නොවේ — ඉන්දියානු බුද්ධි අංශය, ප්‍රහාරයට පෙර සති ගණනාව තුළ ශ්‍රී ලාංකික නිලධාරීන්ට නැවත නැවතත් අනතුරු ඇඟවූ අතර, එම අනතුරු ඇඟවීම් නොසලකා හරිනු ලැබීය.",
};
export const WHAT_HAPPENED_LINK: LocalizedText = {
  en: "Read the full account →",
  si: "සම්පූර්ණ විස්තරය කියවන්න →",
};

export const THREE_THINGS: { heading: LocalizedText; statuses: StatusMark[]; body: LocalizedText }[] = [
  {
    heading: { en: "It was preventable.", si: "එය වළක්වා ගත හැකි විය." },
    statuses: [{ status: "fact" }],
    body: {
      en: "Sri Lanka's Supreme Court and multiple inquiries found that the President and his top security chiefs failed to act on specific, credible warnings.",
      si: "ශ්‍රී ලංකා ශ්‍රේෂ්ඨාධිකරණය සහ විමර්ශන කිහිපයක්ම, ජනාධිපතිවරයා සහ ඔහුගේ ඉහළම ආරක්ෂක ප්‍රධානීන් නිශ්චිත, විශ්වසනීය අනතුරු ඇඟවීම් මත ක්‍රියා කිරීමට අසමත් වූ බව සොයාගෙන ඇත.",
    },
  },
  {
    heading: {
      en: "The \"mastermind\" question is unsettled.",
      si: "\"ප්‍රධාන සැලසුම්කරු\" ප්‍රශ්නය විසඳී නැත.",
    },
    statuses: [{ status: "disputed" }],
    body: {
      en: "Authorities have pointed at the operational leader Zahran Hashim, an ideologue, and — in a contested conspiracy narrative — state intelligence figures. No court has resolved it.",
      si: "බලධාරීන් මෙහෙයුම් නායකයා සහරාන් හෂීම්ව, මතවාදියෙකුව, සහ — මතභේදාත්මක කුමන්ත්‍රණ කතාවේ — රාජ්‍ය බුද්ධි අංශයේ පුද්ගලයින් වෙත අවධානය යොමු කර ඇත. කිසිදු අධිකරණයක් මෙය විසඳා නැත.",
    },
  },
  {
    heading: { en: "Justice is still unfinished.", si: "යුක්තිය තවමත් සම්පූර්ණ වී නැත." },
    statuses: [{ status: "developing" }],
    body: {
      en: "The main criminal trial only reached the evidence stage in 2026. New arrests and reinvestigations continue.",
      si: "ප්‍රධාන අපරාධ නඩු විභාගය 2026 දී පමණක් සාක්ෂි අවධියට පැමිණියේය. නව අත්අඩංගුවට ගැනීම් සහ නැවත විමර්ශන අඛණ්ඩව සිදු වෙමින් පවතී.",
    },
  },
];

export const LATEST_UPDATES_HEADING: LocalizedText = {
  en: "Latest updates",
  si: "නවතම යාවත්කාලීන කිරීම්",
};
export const LATEST_UPDATES_LINK: LocalizedText = {
  en: "See all updates →",
  si: "සියලුම යාවත්කාලීන කිරීම් බලන්න →",
};

export const FEATURED_VICTIMS = {
  heading: { en: "The Victims", si: "විපතට පත් වූවෝ" },
  body: {
    en: "Behind every figure is a person. Many were children attending Easter services.",
    si: "සෑම ගණනයක් පිටුපසම පුද්ගලයෙකි. බොහෝ දෙනෙක් පාස්කු නමස්කාරයට පැමිණි දරුවෝ වූහ.",
  },
  link: { en: "Read the Victims page →", si: "විපතට පත් වූවන් පිටුව කියවන්න →" },
};

export const MEMORIAL_GALLERY: {
  heading: LocalizedText;
  intro: LocalizedText;
  link: LocalizedText;
  backgroundImage: PageImage;
  accentImage: PageImage;
  sensitiveNote: LocalizedText;
  sensitiveImages: PageImage[];
} = {
  heading: {
    en: "From St. Sebastian's Church, Katuwapitiya",
    si: "කටුවාපිටිය, ශාන්ත සෙබස්තියන් දේවස්ථානයෙන්",
  },
  intro: {
    en: "Photographs from the deadliest single site of the attack, in Negombo.",
    si: "ප්‍රහාරයේ වඩාත්ම මරණ ගණන වැඩි වූ එකම ස්ථානයේ, නිගොම්බෝ, ඡායාරූප.",
  },
  link: {
    en: "Read about all six attack sites →",
    si: "සියලුම ප්‍රහාරයට ලක් වූ ස්ථාන හය ගැන කියවන්න →",
  },
  backgroundImage: {
    url: "/images/attacks/st-sebastians-negombo-interior-3.jpeg",
    alt: {
      en: "Shrapnel and blast damage inside the church",
      si: "දේවස්ථානය ඇතුළත පතුරු සහ පිපිරීමේ හානිය",
    },
    caption: {
      en: "The church interior in the aftermath of the blast.",
      si: "පිපිරීමෙන් පසු දේවස්ථානයේ ඇතුළත දර්ශනයක්.",
    },
  },
  accentImage: {
    url: "/images/attacks/st-sebastians-negombo-interior-2.jpeg",
    alt: {
      en: "Security personnel inspecting the damaged church interior",
      si: "හානි වූ දේවස්ථානයේ ඇතුළත පරීක්ෂා කරන ආරක්ෂක නිලධාරීන්",
    },
  },
  sensitiveNote: {
    en: "The two photographs below show the church's Risen Christ statue, marked by shrapnel and blood from the blast.",
    si: "පහත ඡායාරූප දෙක, පිපිරීමේ පතුරු හා රුධිරයෙන් සලකුණු වූ දේවස්ථානයේ නැවත නැඟී සිටින ක්‍රිස්තුස් ප්‍රතිමාව පෙන්වයි.",
  },
  sensitiveImages: [
    {
      url: "/images/attacks/st-sebastians-negombo-statue-1.webp",
      alt: {
        en: "The statue of the Risen Christ at St. Sebastian's, marked by shrapnel and blood",
        si: "පතුරු හා රුධිරයෙන් සලකුණු වූ, ශාන්ත සෙබස්තියන් දේවස්ථානයේ නැවත නැඟී සිටින ක්‍රිස්තුස් ප්‍රතිමාව",
      },
      caption: {
        en: "The statue of the Risen Christ, struck by shrapnel during the blast, became one of the lasting images of the attack.",
        si: "පිපිරීමේදී පතුරුවලින් හානි වූ නැවත නැඟී සිටින ක්‍රිස්තුස් ප්‍රතිමාව, ප්‍රහාරයේ දිගටම මතකයේ රැඳුණු දර්ශන වලින් එකක් විය.",
      },
      graphic: true,
    },
    {
      url: "/images/attacks/st-sebastians-negombo-statue-2.jpeg",
      alt: {
        en: "Close-up of the Risen Christ statue showing blast damage",
        si: "පිපිරීමේ හානිය පෙන්නුම් කරන නැවත නැඟී සිටින ක්‍රිස්තුස් ප්‍රතිමාවේ සමීප දර්ශනය",
      },
      caption: {
        en: "A closer view of the same statue, widely shared in the days after the attack.",
        si: "ප්‍රහාරයෙන් පසු දින කිහිපය තුළ බෙහෙවින් බදා හරිනු ලැබූ එම ප්‍රතිමාවේම සමීප දර්ශනයක්.",
      },
      graphic: true,
    },
  ],
};

export const MIND_MAP_SECTION = {
  heading: { en: "Explore the relationship map", si: "සම්බන්ධතා සිතියම බලන්න" },
  body: {
    en: "People, places, organisations and events from the case, connected. Drag, zoom, and click a node for detail — or open the full mind map for every view and filter.",
    si: "මෙම නඩුවේ පුද්ගලයින්, ස්ථාන, සංවිධාන සහ සිදුවීම් එකිනෙකට සම්බන්ධිතව. ඇද ගෙන, විශාල කර, විස්තර සඳහා නෝඩයක් මත ක්ලික් කරන්න — හෝ සියලුම දසුන් සහ පෙරහන් සඳහා සම්පූර්ණ මානසික සිතියම විවෘත කරන්න.",
  },
  link: { en: "Open the full mind map →", si: "සම්පූර්ණ මානසික සිතියම විවෘත කරන්න →" },
};

export const HOME_CONTENT = {
  seo: HOME_SEO,
  hero: HERO,
  atAGlance: AT_A_GLANCE,
  whatHappened: WHAT_HAPPENED,
  whatHappenedLink: WHAT_HAPPENED_LINK,
  threeThings: THREE_THINGS,
  latestUpdatesHeading: LATEST_UPDATES_HEADING,
  latestUpdatesLink: LATEST_UPDATES_LINK,
  featuredVictims: FEATURED_VICTIMS,
  memorialGallery: MEMORIAL_GALLERY,
  mindMapSection: MIND_MAP_SECTION,
  faqHeading: FAQ_HEADING,
  faqItems: FAQ_ITEMS,
};
export type HomeContentData = typeof HOME_CONTENT;
