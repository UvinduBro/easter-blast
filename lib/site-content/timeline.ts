import type { LocalizedText } from "@/lib/types";
import type { StatusMark } from "@/lib/site/types";

export const TIMELINE_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "Easter Attacks Timeline (2019–2026): From the Bombings to the Trials | Easter Blast",
    si: "පාස්කු ප්‍රහාර කාල රාමුව (2019–2026): බෝම්බ ප්‍රහාරයේ සිට නඩු විභාග දක්වා | Easter Blast",
  },
  description: {
    en: "A complete, dated timeline of the 2019 Sri Lanka Easter bombings — the warnings, the attack, the inquiries, the Supreme Court ruling, and the arrests that followed.",
    si: "2019 ශ්‍රී ලංකා පාස්කු බෝම්බ ප්‍රහාරයේ සම්පූර්ණ, දින සටහන් කරන ලද කාල රාමුවක් — අනතුරු ඇඟවීම්, ප්‍රහාරය, විමර්ශන, ශ්‍රේෂ්ඨාධිකරණ තීන්දුව, සහ ඉන් පසු සිදු වූ අත්අඩංගුවට ගැනීම්.",
  },
};

export const TIMELINE_INTRO: LocalizedText = {
  en: "This is the master chronological record. Each entry is tagged fact, allegation, developing, or disputed.",
  si: "මෙය ප්‍රධාන කාල අනුක්‍රමික වාර්තාවයි. සෑම ඇතුළත් කිරීමක්ම සත්‍යය, චෝදනාව, සිදුවෙමින් පවතින, හෝ මතභේදාත්මක ලෙස ටැග් කර ඇත.",
};

export interface TimelineEntry {
  date: LocalizedText;
  statuses: StatusMark[];
  body: LocalizedText;
}

export interface TimelinePhase {
  heading: LocalizedText;
  entries: TimelineEntry[];
}

export const TIMELINE_PAGE_TITLE: LocalizedText = { en: "Timeline", si: "කාල රාමුව" };

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    heading: { en: "Phase 1 — The Warnings (April 2019)", si: "අදියර 1 — අනතුරු ඇඟවීම් (2019 අප්‍රේල්)" },
    entries: [
      {
        date: { en: "4 April 2019", si: "2019 අප්‍රේල් 4" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Sri Lanka's State Intelligence Service (SIS) director Nilantha Jayawardena receives a warning from Indian intelligence that the NTJ leader and associates are planning suicide attacks on churches. Suspects named include Zahran Hashim.",
          si: "ශ්‍රී ලංකා රාජ්‍ය බුද්ධි අංශයේ (SIS) අධ්‍යක්ෂක නිලන්ත ජයවර්ධන, NTJ නායකයා සහ ඔහුගේ සහචරයින් පල්ලිවලට එරෙහිව මරාගෙන මැරෙන ප්‍රහාර සැලසුම් කරන බවට ඉන්දියානු බුද්ධි අංශයෙන් අනතුරු ඇඟවීමක් ලබා ගනී. සැකකරුවන් අතර සහරාන් හෂීම් ද නම් කර ඇත.",
        },
      },
      {
        date: { en: "11 April 2019", si: "2019 අප්‍රේල් 11" },
        statuses: [{ status: "fact" }],
        body: {
          en: "The warning is disseminated further; by this date, officials would later testify, awareness of a planned Zahran attack was widespread within the security apparatus.",
          si: "අනතුරු ඇඟවීම තවදුරටත් බෙදා හරිනු ලැබේ; මෙම දිනය වන විට, නිලධාරීන් පසුව සාක්ෂි දුන් පරිදි, සහරාන් විසින් සැලසුම් කරන ලද ප්‍රහාරයක් පිළිබඳ දැනුවත්භාවය ආරක්ෂක ක්‍රමවේදය තුළ පුළුල් ලෙස පැතිර තිබුණි.",
        },
      },
      {
        date: { en: "16 April 2019", si: "2019 අප්‍රේල් 16" },
        statuses: [{ status: "fact" }],
        body: {
          en: "A motorcycle \"dry run\" linked to the plot occurs in the east.",
          si: "මෙම කුමන්ත්‍රණයට සම්බන්ධ මෝටර් සයිකල් \"පූර්ව පරීක්ෂණයක්\" නැගෙනහිර පළාතේ සිදු වේ.",
        },
      },
      {
        date: { en: "20 April 2019, 4:12 p.m.", si: "2019 අප්‍රේල් 20, ප.ව. 4:12" },
        statuses: [{ status: "fact" }],
        body: {
          en: "SIS receives \"most vital, specific and reliable\" intelligence that an attack will come the next day, naming eight targets including a church and a hotel. No preventive security is ordered. A key warning reportedly sits unopened on a senior officer's desk.",
          si: "ඊළඟ දිනයේ ප්‍රහාරයක් එල්ල වන බව පවසන \"වඩාත් වැදගත්, නිශ්චිත හා විශ්වසනීය\" බුද්ධි තොරතුරක් SIS ලබා ගනී; පල්ලියක් හා හෝටලයක් ඇතුළු ඉලක්ක අටක් එහි නම් කර ඇත. කිසිදු වළක්වාගැනීමේ ආරක්ෂාවක් නියම නොකරයි. වැදගත් අනතුරු ඇඟවීමක් වාර්තා වන පරිදි ජ්‍යෙෂ්ඨ නිලධාරියෙකුගේ මේසය මත නොවිවෘතව පැවතුණි.",
        },
      },
    ],
  },
  {
    heading: { en: "Phase 2 — The Attack (21 April 2019)", si: "අදියර 2 — ප්‍රහාරය (2019 අප්‍රේල් 21)" },
    entries: [
      {
        date: { en: "~8:45 a.m.", si: "පෙ.ව. 8:45 පමණ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "First blast at St. Anthony's Shrine, Kochchikade, Colombo.",
          si: "උදෑසන වූ පළමු පිපිරීම ශාන්ත අන්තෝනි දේවස්ථානය, කොච්චිකඩේ, කොළඹ හි සිදු වේ.",
        },
      },
      {
        date: { en: "~8:45–8:50 a.m.", si: "පෙ.ව. 8:45–8:50 පමණ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Bombings at the Shangri-La, Cinnamon Grand, and Kingsbury hotels in Colombo.",
          si: "කොළඹ ශැංග්‍රි-ලා, සිනමන් ග්‍රෑන්ඩ් සහ කිංස්බරි හෝටල්වල බෝම්බ ප්‍රහාර සිදු වේ.",
        },
      },
      {
        date: { en: "~8:45–9:00 a.m.", si: "පෙ.ව. 8:45–9:00 පමණ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "St. Sebastian's Church, Katuwapitiya, Negombo — the deadliest single site.",
          si: "ශාන්ත සෙබස්තියන් දේවස්ථානය, කටුවාපිටිය, නිගොම්බෝ — වඩාත්ම මරණ ගණන වැඩි වූ එකම ස්ථානය.",
        },
      },
      {
        date: { en: "~9:05 a.m.", si: "පෙ.ව. 9:05 පමණ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Zion Church, Batticaloa, struck during Sunday school.",
          si: "ඉරිදා පාඨශාලාව පවත්වමින් සිටිය දී සියොන් පල්ලිය, බටිකලෝව, ප්‍රහාරයට ලක් වේ.",
        },
      },
      {
        date: { en: "~8:49 a.m. / later", si: "පෙ.ව. 8:49 පමණ / පසුව" },
        statuses: [{ status: "fact" }],
        body: {
          en: "A bomber fails to detonate at the Taj Samudra and later blows himself up at the Tropical Inn, Dehiwala.",
          si: "ප්‍රහාරකයෙක් තාජ් සමුද්‍ර හෝටලයේ බෝම්බය පිපිරවීමට අසමත් වී, පසුව ට්‍රොපිකල් ඉන්, දෙහිවල හි දී බෝම්බය පිපිරවයි.",
        },
      },
      {
        date: { en: "Afternoon", si: "දහවල් කාලයේ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "During a police raid on a Dematagoda safehouse, a bomber detonates, killing three police officers.",
          si: "දෙමටගොඩ ආරක්ෂිත නිවසට පොලිස් වැටලීමක් සිදු කරමින් සිටිය දී, ප්‍රහාරකයෙක් බෝම්බය පිපිරවූ අතර, පොලිස් නිලධාරීන් තිදෙනෙක් මියගියහ.",
        },
      },
    ],
  },
  {
    heading: {
      en: "Phase 3 — Immediate Aftermath (April 2019)",
      si: "අදියර 3 — ක්ෂණික ඉවතහැරීම (2019 අප්‍රේල්)",
    },
    entries: [
      {
        date: { en: "22 April 2019", si: "2019 අප්‍රේල් 22" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Island-wide curfew and social-media blackout; a bomb-rigged van is defused near St. Anthony's. A presidential committee (Malalgoda) is appointed.",
          si: "දිවයින පුරා ඇඳිරි නීතිය හා සමාජ මාධ්‍ය අවහිර කිරීමක් පනවනු ලැබේ; ශාන්ත අන්තෝනි දේවස්ථානය ආසන්නයේ බෝම්බ සවි කළ වෑන් රථයක් අක්‍රිය කරනු ලැබේ. ජනාධිපති කමිටුවක් (මලල්ගොඩ) පත් කරනු ලැබේ.",
        },
      },
      {
        date: { en: "23 April 2019", si: "2019 අප්‍රේල් 23" },
        statuses: [{ status: "fact" }],
        body: {
          en: "ISIS claims responsibility via its Amaq agency, releasing a video of the attackers.",
          si: "ISIS සංවිධානය එහි Amaq ඒජන්සිය ඔස්සේ වරද ගැනීම ප්‍රකාශ කරන අතර, ප්‍රහාරකයින්ගේ වීඩියෝවක් නිකුත් කරයි.",
        },
      },
      {
        date: { en: "26 April 2019", si: "2019 අප්‍රේල් 26" },
        statuses: [{ status: "fact" }, { status: "disputed" }],
        body: {
          en: "A siege at a Sainthamaruthu safehouse ends in multiple explosions; 15–17 die, including relatives of Zahran Hashim. This event later anchors the unresolved \"Sara Jasmin\" question.",
          si: "සයින්දමරුදු ආරක්ෂිත නිවසක සිදු කළ වැටලීමක් පිපිරීම් මාලාවකින් අවසන් වේ; සහරාන් හෂීම්ගේ ඥාතීන් ද ඇතුළුව 15-17 දෙනෙක් මියගියහ. මෙම සිදුවීම පසුව විසඳී නැති \"සහරා ජස්මින්\" ප්‍රශ්නයට පදනම සපයයි.",
        },
      },
    ],
  },
  {
    heading: {
      en: "Phase 4 — Inquiries & the Political Turn (2019–2021)",
      si: "අදියර 4 — විමර්ශන සහ දේශපාලන හැරවුම (2019–2021)",
    },
    entries: [
      {
        date: { en: "22 May 2019", si: "2019 මැයි 22" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Parliamentary Select Committee appointed.",
          si: "පාර්ලිමේන්තු තේරීම් කාරක සභාව පත් කරනු ලැබේ.",
        },
      },
      {
        date: { en: "September 2019", si: "2019 සැප්තැම්බර්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Presidential Commission of Inquiry (PCoI) appointed.",
          si: "ජනාධිපති විමර්ශන කොමිසම (PCoI) පත් කරනු ලැබේ.",
        },
      },
      {
        date: { en: "October 2019", si: "2019 ඔක්තෝබර්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "PSC report faults the SIS chief and President Sirisena.",
          si: "PSC වාර්තාව SIS ප්‍රධානියාට සහ ජනාධිපති සිරිසේනට වරද පවරයි.",
        },
      },
      {
        date: { en: "~23 April 2019 (and after)", si: "2019 අප්‍රේල් 23 පමණ (සහ පසුව)" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Gotabaya Rajapaksa announces his presidential run on a security platform.",
          si: "ගෝඨාභය රාජපක්ෂ ආරක්ෂක තේමාවක් මත ජනාධිපති අපේක්ෂකත්වය ප්‍රකාශ කරයි.",
        },
      },
      {
        date: { en: "16/18 November 2019", si: "2019 නොවැම්බර් 16/18" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Gotabaya Rajapaksa elected President.",
          si: "ගෝඨාභය රාජපක්ෂ ජනාධිපතිවරයා ලෙස තේරී පත් වෙයි.",
        },
      },
      {
        date: { en: "21 November 2019", si: "2019 නොවැම්බර් 21" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Lead investigator Shani Abeysekara is transferred out of the CID.",
          si: "ප්‍රධාන විමර්ශක ශානි අබේසේකර CID අංශයෙන් ස්ථාන මාරු කරනු ලැබේ.",
        },
      },
      {
        date: { en: "December 2019", si: "2019 දෙසැම්බර්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Suresh Sallay appointed SIS director; DIG Ravi Seneviratne retires.",
          si: "සුරේෂ් සලේ SIS අධ්‍යක්ෂක ලෙස පත් කරනු ලැබේ; නියෝජ්‍ය පොලිස්පති රවී සෙනවිරත්න විශ්‍රාම යයි.",
        },
      },
      {
        date: { en: "31 July 2020", si: "2020 ජූලි 31" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Abeysekara arrested in an unrelated case; spends ~10 months on remand.",
          si: "අබේසේකර සම්බන්ධ නැති නඩුවක් සම්බන්ධයෙන් අත්අඩංගුවට ගනු ලැබේ; මාස 10ක් පමණ රිමාන්ඩ් බන්ධනාගාරගතව සිටියි.",
        },
      },
      {
        date: { en: "1 February 2021", si: "2021 පෙබරවාරි 1" },
        statuses: [{ status: "fact" }],
        body: {
          en: "PCoI hands its final report to President Rajapaksa; recommends considering criminal proceedings against former President Sirisena.",
          si: "PCoI එහි අවසාන වාර්තාව ජනාධිපති රාජපක්ෂට භාර දෙයි; හිටපු ජනාධිපති සිරිසේනට එරෙහිව අපරාධ නඩු පැවරීම සලකා බැලීමට නිර්දේශ කරයි.",
        },
      },
    ],
  },
  {
    heading: {
      en: "Phase 5 — Court & Accountability (2021–2024)",
      si: "අදියර 5 — අධිකරණය සහ වගකීම (2021–2024)",
    },
    entries: [
      {
        date: { en: "September–November 2021", si: "2021 සැප්තැම්බර්–නොවැම්බර්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Main Trial-at-Bar against ~25 accused opens.",
          si: "චෝදිතයින් 25ක් පමණ සම්බන්ධ ප්‍රධාන නඩු විභාගය විවෘත වේ.",
        },
      },
      {
        date: { en: "18 February 2022", si: "2022 පෙබරවාරි 18" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Former IGP Pujith Jayasundara and former Defence Secretary Hemasiri Fernando acquitted (later set aside on appeal).",
          si: "හිටපු පොලිස්පති පූජිත් ජයසුන්දර සහ හිටපු ආරක්ෂක ලේකම් හේමසිරි ප්‍රනාන්දු නිදොස්කරුවන් කරනු ලැබේ (පසුව අභියාචනයේ දී එය අවලංගු කරනු ලැබේ).",
        },
      },
      {
        date: { en: "12 January 2023", si: "2023 ජනවාරි 12" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Supreme Court rules former President Sirisena and four security chiefs personally liable; orders compensation.",
          si: "හිටපු ජනාධිපති සිරිසේන සහ ආරක්ෂක ප්‍රධානීන් හතර දෙනෙකු පෞද්ගලිකව වැරදිකරුවන් බව ශ්‍රේෂ්ඨාධිකරණය තීන්දු කරයි; වන්දි ගෙවීමට නියම කරයි.",
        },
      },
      {
        date: { en: "5 September 2023", si: "2023 සැප්තැම්බර් 5" },
        statuses: [{ status: "allegation" }],
        body: {
          en: "Channel 4 airs a documentary alleging state-intelligence complicity; the allegations are denied, and the director later says he has no evidence of a key alleged meeting.",
          si: "Channel 4, රාජ්‍ය බුද්ධි අංශයේ සම්බන්ධතාවය චෝදනා කරන වාර්තා වැඩසටහනක් විකාශය කරයි; මෙම චෝදනා ප්‍රතික්ෂේප කරනු ලබන අතර, අධ්‍යක්ෂකවරයා පසුව ප්‍රධාන චෝදනා රැස්වීම සම්බන්ධයෙන් කිසිදු සාක්ෂියක් නොමැති බව පවසයි.",
        },
      },
      {
        date: { en: "25 August 2023", si: "2023 අගෝස්තු 25" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Abeysekara acquitted in the unrelated case.",
          si: "අබේසේකර එම සම්බන්ධ නැති නඩුවෙන් නිදොස්කරුවෙකු ලෙස නිදහස් කරනු ලැබේ.",
        },
      },
      {
        date: { en: "21 September 2024", si: "2024 සැප්තැම්බර් 21" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Anura Kumara Dissanayake (NPP) elected President, having pledged a full reinvestigation.",
          si: "සම්පූර්ණ නැවත විමර්ශනයක් පොරොන්දු වූ අනුර කුමාර දිසානායක (NPP) ජනාධිපතිවරයා ලෙස තේරී පත් වෙයි.",
        },
      },
      {
        date: { en: "Around 5 October 2024", si: "2024 ඔක්තෝබර් 5 පමණ" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Sallay removed as SIS chief; intelligence returned to police control.",
          si: "සලේ SIS ප්‍රධානී ධුරයෙන් ඉවත් කරනු ලැබේ; බුද්ධි අංශය නැවත පොලිස් පාලනය යටතට පත් කරනු ලැබේ.",
        },
      },
      {
        date: { en: "16 August 2024", si: "2024 අගෝස්තු 16" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Sirisena completes paying his Rs. 100 million compensation.",
          si: "සිරිසේන තමාට නියම කළ රු. මිලියන 100 වන්දි මුදල සම්පූර්ණයෙන් ගෙවා අවසන් කරයි.",
        },
      },
    ],
  },
  {
    heading: { en: "Phase 6 — The Reinvestigation (2025–2026)", si: "අදියර 6 — නැවත විමර්ශනය (2025–2026)" },
    entries: [
      {
        date: { en: "21 March 2024 → 17 July 2025", si: "2024 මාර්තු 21 → 2025 ජූලි 17" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Former SIS chief Nilantha Jayawardena is subjected to a disciplinary inquiry and ultimately dismissed from the police service after being found guilty on all charges — the most senior officer held to account.",
          si: "හිටපු SIS ප්‍රධානී නිලන්ත ජයවර්ධන විනය විමර්ශනයකට ලක් වන අතර, සියලුම චෝදනාවලට වැරදිකරු කරනු ලැබීමෙන් පසු අවසානයේ පොලිස් සේවයෙන් පහ කරනු ලැබේ — මෙම නඩුවේ වගකිව යුතු ලෙස සලකනු ලැබූ ඉහළම නිලධාරියා ඔහුය.",
        },
      },
      {
        date: { en: "8 April 2025", si: "2025 අප්‍රේල් 8" },
        statuses: [{ status: "fact" }, { status: "allegation" }],
        body: {
          en: "Sivanesathurai Chandrakanthan (\"Pillayan\") arrested under the PTA. Authorities allege an Easter link; his lawyer says the detention concerns a separate 2006 case. (Note: Pillayan was in prison from 2015–2020.)",
          si: "සිවනේසතුරේ චන්ද්‍රකාන්තන් (\"පිල්ලයාන්\") PTA පනත යටතේ අත්අඩංගුවට ගනු ලැබේ. බලධාරීන් පාස්කු සම්බන්ධතාවයක් ඇති බව චෝදනා කරන අතර, ඔහුගේ නීතිඥයා මෙම රඳවා තබාගැනීම වෙනස් 2006 නඩුවකට අදාළ බව පවසයි. (සටහන: පිල්ලයාන් 2015–2020 කාලය තුළ සිරගතව සිටියේය.)",
        },
      },
      {
        date: { en: "20 April 2025", si: "2025 අප්‍රේල් 20" },
        statuses: [{ status: "fact" }],
        body: {
          en: "President Dissanayake forwards the full PCoI report to the CID for further investigation.",
          si: "ජනාධිපති දිසානායක PCoI වාර්තාවේ සම්පූර්ණ පිටපත තවදුරටත් විමර්ශනය සඳහා CID අංශයට යවයි.",
        },
      },
      {
        date: { en: "September 2025", si: "2025 සැප්තැම්බර්" },
        statuses: [{ status: "allegation" }],
        body: {
          en: "Dissanayake tells the diaspora that former Army officials will be arrested and that evidence was \"erased and concealed.\"",
          si: "හිටපු හමුදා නිලධාරීන් අත්අඩංගුවට ගනු ලබන බවත්, සාක්ෂි \"මකා දමා සඟවා ඇති\" බවත් දිසානායක විදේශගත ශ්‍රී ලාංකිකයින්ට පවසයි.",
        },
      },
      {
        date: { en: "25 February 2026", si: "2026 පෙබරවාරි 25" },
        statuses: [{ status: "fact" }, { status: "allegation" }],
        body: {
          en: "Former SIS chief Suresh Sallay arrested under the PTA on suspicion of conspiracy and misdirecting the investigation. He denies all allegations. As of mid-2026 he has not been indicted on Easter charges.",
          si: "හිටපු SIS ප්‍රධානී සුරේෂ් සලේ, කුමන්ත්‍රණය හා විමර්ශනය වැරදි මඟ පැත්තා කිරීම සැකකරමින් PTA පනත යටතේ අත්අඩංගුවට ගනු ලැබේ. ඔහු සියලුම චෝදනා ප්‍රතික්ෂේප කරයි. 2026 මැද භාගය වන විටත් ඔහුට පාස්කු චෝදනා මත නඩු පවරා නැත.",
        },
      },
      {
        date: { en: "19 March 2026", si: "2026 මාර්තු 19" },
        statuses: [{ status: "fact" }],
        body: {
          en: "The main Trial-at-Bar finally reaches the evidence stage, with victims testifying — nearly seven years after the attack.",
          si: "ප්‍රහාරයෙන් වසර හතකට ආසන්න කාලයකට පසු, ප්‍රධාන නඩු විභාගය අවසානයේ සාක්ෂි ඉදිරිපත් කිරීමේ අවධියට පැමිණෙන අතර, විපතට පත් වූවෝ සාක්ෂි දෙති.",
        },
      },
      {
        date: { en: "3 June 2026", si: "2026 ජූනි 3" },
        statuses: [{ status: "fact" }],
        body: {
          en: "A court imposes an overseas travel ban on former President Gotabaya Rajapaksa, the first time he is directly drawn into the case; he is not named a suspect.",
          si: "අධිකරණයක් හිටපු ජනාධිපති ගෝඨාභය රාජපක්ෂට විදේශ ගමන් තහනමක් පනවයි — ඔහු මෙම නඩුවට කෙළින්ම සම්බන්ධ කරනු ලබන ප්‍රථම අවස්ථාවයි; ඔහු සැකකරුවෙකු ලෙස නම් කර නැත.",
        },
      },
      {
        date: { en: "10 June 2026", si: "2026 ජූනි 10" },
        statuses: [{ status: "allegation" }],
        body: {
          en: "A government minister tells Parliament (under privilege) that investigators believe Sallay \"strategically directed\" the extremists. This remains an allegation, not a court finding.",
          si: "රජයේ අමාත්‍යවරයෙක් පාර්ලිමේන්තු වරප්‍රසාද යටතේ, විමර්ශකයින් විශ්වාස කරන්නේ සලේ අන්තවාදීන්ට \"උපායමාර්ගිකව මඟ පෙන්වූ\" බව පවසයි. මෙය තවමත් චෝදනාවක් මිස අධිකරණ සොයාගැනීමක් නොවේ.",
        },
      },
    ],
  },
];

export const TIMELINE_CONTENT = {
  seo: TIMELINE_SEO,
  pageTitle: TIMELINE_PAGE_TITLE,
  intro: TIMELINE_INTRO,
  phases: TIMELINE_PHASES,
};
export type TimelineContentData = typeof TIMELINE_CONTENT;
