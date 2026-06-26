import type { LocalizedText } from "@/lib/types";
import type { ContentSection } from "@/lib/site/types";

export const INVESTIGATION_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "The Easter Attacks Conspiracy Allegations — What's Proven and What Isn't | Easter Blast",
    si: "පාස්කු ප්‍රහාරයේ කුමන්ත්‍රණ චෝදනා — ඔප්පු වූයේ කුමක්ද, නොවූයේ කුමක්ද | Easter Blast",
  },
  description: {
    en: "Channel 4's documentary, the \"mastermind\" question, the investigators removed from the case, and the contested claim of state involvement — sorted into fact and allegation.",
    si: "Channel 4 වාර්තා වැඩසටහන, \"ප්‍රධාන සැලසුම්කරු\" ප්‍රශ්නය, නඩුවෙන් ඉවත් කරන ලද විමර්ශකයින්, සහ රාජ්‍ය සම්බන්ධතාවය පිළිබඳ මතභේදාත්මක චෝදනාව — සත්‍යය හා චෝදනාව වශයෙන් වර්ග කර ඇත.",
  },
};

export const CRITICAL_FRAMING: { title: LocalizedText; body: LocalizedText } = {
  title: { en: "Read this first.", si: "මුලින්ම මෙය කියවන්න." },
  body: {
    en: "This page covers the most explosive claims in the Easter case — including the allegation that elements of the state were involved. These allegations are serious, widely discussed, and unproven in any court. We lay out what each side says and flag exactly where the evidence stands. Naming a person in connection with an allegation is not a statement that they are guilty.",
    si: "මෙම පිටුව පාස්කු නඩුවේ ඇති වඩාත්ම පුපුරණශීලී චෝදනා ආවරණය කරයි — රාජ්‍යයේ අංග ප්‍රහාරයට සම්බන්ධ වූ බවට චෝදනාව ද ඇතුළුව. මෙම චෝදනා බැරෑරුම්, පුළුල් ලෙස කතාබහට ලක්වන, සහ කිසිදු අධිකරණයක ඔප්පු නොකරන ලද ඒවාය. අපි එක් එක් පැත්ත පවසන දේ විස්තර කරන අතර, සාක්ෂි පවතින තත්ත්වය නිවැරදිව පෙන්වා දෙමු. චෝදනාවක් සම්බන්ධයෙන් පුද්ගලයෙකු නම් කිරීම, ඔහු හෝ ඇය වැරදිකරුවෙකු බව ප්‍රකාශයක් නොවේ.",
  },
};

export const INVESTIGATION_SECTIONS: ContentSection[] = [
  {
    heading: { en: "The investigators who were removed", si: "ඉවත් කරන ලද විමර්ශකයෝ" },
    entries: [
      {
        statuses: [
          { status: "fact", note: { en: "(events)", si: "(සිදුවීම්)" } },
          { status: "disputed", note: { en: "(motive)", si: "(චේතනාව)" } },
        ],
        body: {
          en: "The original CID team — led by DIG Ravi Seneviratne and CID Director Shani Abeysekara — ran the first Easter investigation. After Gotabaya Rajapaksa became president in late 2019, Abeysekara was transferred out and later arrested in an unrelated case, spending about ten months on remand before being acquitted. Seneviratne retired. Both later aligned with the NPP and returned to senior roles after the 2024 election. Supporters see political persecution of effective investigators; critics question their later political alignment.",
          si: "මුල් CID කණ්ඩායම — නියෝජ්‍ය පොලිස්පති රවී සෙනවිරත්න සහ CID අධ්‍යක්ෂක ශානි අබේසේකර විසින් මෙහෙයවනු ලැබූ — ප්‍රථම පාස්කු විමර්ශනය සිදු කළේය. 2019 අග භාගයේ ගෝඨාභය රාජපක්ෂ ජනාධිපති වීමත් සමඟ, අබේසේකර එම විමර්ශනවලින් ඉවත් කරනු ලැබූ අතර, පසුව සම්බන්ධ නැති නඩුවක් සම්බන්ධයෙන් අත්අඩංගුවට ගෙන මාස 10ක් පමණ රිමාන්ඩ් බන්ධනාගාරගතව, පසුව නිදොස්කරුවෙකු ලෙස නිදහස් කරනු ලැබීය. සෙනවිරත්න විශ්‍රාම ගියේය. දෙදෙනාම පසුව NPP පක්ෂයට සමීපව කටයුතු කළ අතර, 2024 මැතිවරණයෙන් පසු ඉහළ තනතුරුවලට නැවත පැමිණියහ. සහයෝගය දක්වන්නන් මෙය කාර්යක්ෂම විමර්ශකයන්ට එරෙහි දේශපාලන හිංසනයක් ලෙස දකින අතර, විවේචකයෝ ඔවුන්ගේ පසුකාලීන දේශපාලන සමීපත්වය ප්‍රශ්න කරති.",
        },
      },
    ],
  },
  {
    heading: {
      en: "Suresh Sallay and the intelligence service",
      si: "සුරේෂ් සලේ සහ බුද්ධි අංශය",
    },
    entries: [
      {
        statuses: [
          { status: "fact", note: { en: "(arrest)", si: "(අත්අඩංගුව)" } },
          { status: "allegation", note: { en: "(underlying claims)", si: "(මූලික චෝදනා)" } },
        ],
        body: {
          en: "Sallay, a former military-intelligence head, was appointed SIS director by Rajapaksa in December 2019 — the first such chief from military rather than police intelligence. He was removed after the 2024 election and arrested under the PTA in February 2026 on suspicion of conspiracy and of misdirecting the investigation. He denies all allegations, says he was abroad for training at the relevant time, and as of mid-2026 has not been indicted on Easter charges.",
          si: "හිටපු හමුදා බුද්ධි ප්‍රධානියෙකු වූ සලේ, 2019 දෙසැම්බර් මාසයේ රාජපක්ෂ විසින් SIS අධ්‍යක්ෂක ලෙස පත් කරනු ලැබීය — පොලිස් බුද්ධි අංශයෙන් නොව හමුදා බුද්ධි අංශයෙන් පැමිණි පළමු එවැනි ප්‍රධානියා ඔහුය. 2024 මැතිවරණයෙන් පසු ඉවත් කරනු ලැබූ ඔහු, 2026 පෙබරවාරි මාසයේ සැලසුම් සැකසීම සහ විමර්ශනය වැරදි මඟ පැත්තා කිරීම සැකකරමින් PTA පනත යටතේ අත්අඩංගුවට ගනු ලැබීය. ඔහු සියලුම චෝදනා ප්‍රතික්ෂේප කරන අතර, අදාළ කාලයේ පුහුණුවක් සඳහා විදේශගතව සිටි බව පවසන අතර, 2026 මැද භාගය වන විටත් පාස්කු චෝදනා මත නඩු පවරා නැත.",
        },
      },
    ],
  },
  {
    heading: { en: "The Channel 4 documentary (2023)", si: "Channel 4 වාර්තා වැඩසටහන (2023)" },
    entries: [
      {
        statuses: [{ status: "allegation" }],
        body: {
          en: "A 2023 Channel 4 documentary aired claims that state-intelligence figures were complicit and that the plot was meant to help Rajapaksa win power. Its central source was a former political aide seeking asylum abroad, who described an alleged 2018 meeting between Sallay and the bombers. Those named denied it. At a later screening, the film's director said he had no evidence of the specific alleged meeting. Critics also point to timeline problems. The film nonetheless reshaped public debate and fuelled demands for a fresh probe.",
          si: "2023 Channel 4 වාර්තා වැඩසටහනක්, රාජ්‍ය බුද්ධි අංශයේ පුද්ගලයින් සම්බන්ධ වූ බවත්, මෙම සැලසුම රාජපක්ෂට බලයට පැමිණීමට උපකාර කිරීම අරමුණු කරගත් බවත් චෝදනා කළේය. එහි ප්‍රධාන මූලාශ්‍රය වූයේ විදේශගත වී රැඳී සිටීමට ඉල්ලුම් කරන හිටපු දේශපාලන සහයකයෙකි; ඔහු සලේ සහ ප්‍රහාරකයින් අතර 2018 රැස්වීමක් ගැන චෝදනා කළේය. නම් කරන ලද අයවලුන් එය ප්‍රතික්ෂේප කළහ. පසුකාලීන ප්‍රදර්ශනයක් අතරතුර, චිත්‍රපට අධ්‍යක්ෂකවරයා එම චෝදනා රැස්වීම සම්බන්ධයෙන් කිසිදු සාක්ෂියක් නොමැති බව පැවසීය. විවේචකයෝ ද කාල රාමුවේ ගැටළු පෙන්වා දෙති. නමුත් මෙම චිත්‍රපටය ප්‍රසිද්ධ විවාදය හැඩගැස්වූ අතර, නැවත විමර්ශනයක් සඳහා ඉල්ලීම් වැඩි කළේය.",
        },
      },
    ],
  },
  {
    heading: { en: "The \"mastermind\" question", si: "\"ප්‍රධාන සැලසුම්කරු\" ප්‍රශ්නය" },
    entries: [
      {
        statuses: [{ status: "disputed" }],
        body: {
          en: "Authorities have at various times pointed to three different answers: Zahran Hashim (the operational leader), Naufer Moulavi (the ideologue), and — in the contested conspiracy narrative — state intelligence. No court has settled it. This unresolved question is the engine of much of the controversy.",
          si: "බලධාරීන් විවිධ අවස්ථාවල විසඳුම් තුනක් වෙත අවධානය යොමු කර ඇත: සහරාන් හෂීම් (මෙහෙයුම් නායකයා), නවුෆර් මෞලවි (මතවාදියා), සහ — මතභේදාත්මක කුමන්ත්‍රණ කතාවේ — රාජ්‍ය බුද්ධි අංශය. කිසිදු අධිකරණයක් මෙය විසඳා නැත. මෙම නිරාකරණයකින් තොර ප්‍රශ්නය මෙම මතභේදයේ බොහෝ කොටස් ක්‍රියාත්මක කරන මූලාශ්‍රයයි.",
        },
      },
    ],
  },
  {
    heading: {
      en: "The \"Sara Jasmin\" / Pulasthini Mahendran question",
      si: "\"සහරා ජස්මින්\" / පුලස්තිනි මහේන්ද්‍රන් ප්‍රශ්නය",
    },
    entries: [
      {
        statuses: [{ status: "developing" }],
        body: {
          en: "A bomber's wife believed killed in the Sainthamaruthu siege may, some claim, have survived and fled abroad. Early DNA tests did not confirm her death; a later test reportedly did; the current government has since cast doubt on that confirmation. The matter is unresolved.",
          si: "සයින්දමරුදු සිදුවීමේ දී මියගිය බව සිතන ප්‍රහාරකයෙකුගේ බිරිඳ, ඇතැම් චෝදනාවලට අනුව, ජීවත්ව සිට විදේශගත වී ඇතැයි කියනු ලැබේ. මුල් DNA පරීක්ෂණවලින් ඇගේ මරණය තහවුරු නොවූ අතර, පසුකාලීන පරීක්ෂණයකින් වාර්තා වූ පරිදි එය තහවුරු විය; වර්තමාන රජය එම තහවුරුව සැක කරයි. මෙම කරුණ තවමත් විසඳී නැත.",
        },
      },
    ],
  },
  {
    heading: {
      en: "What the current government alleges (2025–2026)",
      si: "වර්තමාන රජය චෝදනා කරන දේ (2025–2026)",
    },
    entries: [
      {
        statuses: [{ status: "allegation" }],
        body: {
          en: "Government ministers have stated in Parliament that investigators believe Sallay \"strategically directed\" the extremists and that evidence was concealed. These statements are made under parliamentary privilege and are allegations, not court findings. The site will update this section if and when a court rules.",
          si: "රජයේ අමාත්‍යවරු පාර්ලිමේන්තුවේ ප්‍රකාශ කර ඇත්තේ, විමර්ශකයින් විශ්වාස කරන්නේ සලේ අන්තවාදීන්ට \"උපායමාර්ගිකව මඟ පෙන්වූ\" බවත් සාක්ෂි සඟවන ලද බවත් ය. මෙම ප්‍රකාශ පාර්ලිමේන්තු වරප්‍රසාද යටතේ සිදු කරන ලද ඒවා වන අතර, ඒවා චෝදනා මිස අධිකරණ සොයාගැනීම් නොවේ. අධිකරණයක් තීන්දුවක් දුන් විට මෙම කොටස යාවත්කාලීන කරනු ලැබේ.",
        },
      },
    ],
  },
];
