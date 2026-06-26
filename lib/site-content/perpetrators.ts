import type { LocalizedText } from "@/lib/types";
import type { ContentSection } from "@/lib/site/types";

export const PERPETRATORS_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "Who Carried Out the 2019 Easter Attacks — NTJ, Zahran Hashim & the Bombers | Easter Blast",
    si: "2019 පාස්කු ප්‍රහාරය සිදු කළේ කවුද — NTJ, සහරාන් හෂීම් සහ ප්‍රහාරකයෝ | Easter Blast",
  },
  description: {
    en: "The groups and individuals behind Sri Lanka's Easter bombings: the NTJ, ringleader Zahran Hashim, the Ibrahim brothers, and the ISIS connection.",
    si: "ශ්‍රී ලංකාවේ පාස්කු ප්‍රහාරය පිටුපස සිටි කණ්ඩායම් සහ පුද්ගලයින්: NTJ, ප්‍රධාන සැලසුම්කරු සහරාන් හෂීම්, ඉබ්‍රාහිම් සහෝදරයින් සහ ISIS සම්බන්ධතාව.",
  },
};

export const PERPETRATORS_INTRO: LocalizedText = {
  en: "The attack was carried out by a small, locally radicalised, ISIS-inspired network.",
  si: "මෙම ප්‍රහාරය, දේශීයව රැඩිකල්කරණයට ලක් වූ, ISIS ආභාසය ලද කුඩා ජාලයක් විසින් සිදු කරන ලදී.",
};

export const PERPETRATORS_SECTIONS: ContentSection[] = [
  {
    heading: { en: "The groups", si: "කණ්ඩායම්" },
    entries: [
      {
        title: { en: "National Thowheeth Jama'ath (NTJ)", si: "National Thowheeth Jama'ath (NTJ)" },
        statuses: [{ status: "fact" }],
        body: {
          en: "A small extremist splinter group, together with a second cell, Jammiyathul Millathu Ibrahim (JMI).",
          si: "කුඩා අන්තවාදී බෙදුම්වාදී කණ්ඩායමක් වන අතර, දෙවන සෛලය ලෙස Jammiyathul Millathu Ibrahim (JMI) ද එයට එක්ව සිටි.",
        },
      },
      {
        title: { en: "ISIS", si: "ISIS" },
        statuses: [{ status: "fact" }, { status: "disputed" }],
        body: {
          en: "ISIS claimed responsibility on 23 April 2019, releasing a video of the attackers pledging allegiance to its leader. The extent of ISIS's operational role versus inspirational role is debated, but the claim and the pledge are on record.",
          si: "ISIS සංවිධානය 2019 අප්‍රේල් 23 වැනිදා වැරැද්දට වැඩ ගත් අතර, ප්‍රහාරකයින් එහි නායකයාට පක්ෂපාතීත්වය පිළිගන්නා වීඩියෝවක් නිකුත් කළේය. ISIS ට මෙහි තිබූ සැබෑ මෙහෙයුම් සම්බන්ධතාවය හෝ පුද්ගලාභාසී සම්බන්ධතාවය පමණක් ද යනුවෙන් මතභේදයක් පවතින නමුත්, එම ප්‍රකාශය හා පක්ෂපාතීත්ව ප්‍රකාශය වාර්තාගතව පවතී.",
        },
      },
    ],
  },
  {
    heading: { en: "Key individuals", si: "ප්‍රධාන පුද්ගලයින්" },
    entries: [
      {
        title: { en: "Zahran Hashim", si: "සහරාන් හෂීම්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Founder of the NTJ and a radical preacher from Kattankudy, identified by Sri Lankan and international authorities as the on-the-ground ringleader. He radicalised followers online and died as one of the Shangri-La bombers.",
          si: "NTJ සංවිධානයේ ආරම්භකයා සහ කත්තන්කුඩි ප්‍රදේශයේ රැඩිකල් වංගුකාරයෙකි. ශ්‍රී ලාංකික හා ජාත්‍යන්තර බලධාරීන් ඔහුව බිම් මට්ටමේ ප්‍රධාන සැලසුම්කරු ලෙස හඳුනා ගත්හ. ඔහු අන්තර්ජාලය ඔස්සේ අනුගාමිකයින් රැඩිකල්කරණයට ලක් කළ අතර, ශැංග්‍රි-ලා හෝටල ප්‍රහාරකයින් අතර එක් අයෙකු ලෙස මියගියේය.",
        },
      },
      {
        title: { en: "The Ibrahim brothers — Inshaf and Ilham", si: "ඉබ්‍රාහිම් සහෝදරයෝ — ඉන්ෂාෆ් සහ ඉල්හාම්" },
        statuses: [{ status: "fact" }],
        body: {
          en: "Sons of a wealthy Colombo spice trader. Investigators believe family wealth helped finance the plot. Both died as bombers; their father was later arrested and prosecuted.",
          si: "කොළඹ පොහොසත් කුළු බඩු වෙළෙන්දෙකුගේ පුතුන් දෙදෙනා. පවුලේ ධනය මෙම සැලසුමට මුදල් සැපයීමට උපකාරී වූ බව විමර්ශකයින් විශ්වාස කරති. දෙදෙනාම ප්‍රහාරකයින් ලෙස මියගිය අතර, ඔහුන්ගේ පියා පසුව අත්අඩංගුවට ගෙන නඩු පවරනු ලැබීය.",
        },
      },
      {
        title: { en: "Naufer Moulavi", si: "නවුෆර් මෞලවි" },
        statuses: [{ status: "disputed" }],
        body: {
          en: "Described as the group's ideologue or \"spiritual leader,\" named by the Sri Lankan government and U.S. authorities (the U.S. called him a \"second emir\"). He is the first accused in the main trial. Officials have not consistently designated him \"the mastermind,\" and the \"second emir\" label implies an unnamed \"first emir\" — part of why the mastermind question stays open.",
          si: "කණ්ඩායමේ මතවාදියා හෝ \"ආත්මික නායකයා\" ලෙස විස්තර කරන අතර, ශ්‍රී ලංකා රජය හා එක්සත් ජනපද බලධාරීන් ඔහුව එලෙස නම් කර ඇත (එක්සත් ජනපදය ඔහුව \"දෙවන එමීර්\" ලෙස හැඳින්වීය). ප්‍රධාන නඩුවේ පළමු චෝදිතයා ඔහුය. නිලධාරීන් ඔහුව ස්ථාවරව \"ප්‍රධාන සැලසුම්කරු\" ලෙස නම් කර නැති අතර, \"දෙවන එමීර්\" යන නම නම් නොකළ \"පළමු එමීර්\" කෙනෙකු සිටින බව ඇඟවුම් කරයි — එයද ප්‍රධාන සැලසුම්කරු පිළිබඳ ප්‍රශ්නය විවෘතව පවතින එක් හේතුවකි.",
        },
      },
    ],
  },
  {
    heading: { en: "The bombers", si: "ප්‍රහාරකයෝ" },
    entries: [
      {
        statuses: [{ status: "fact" }, { status: "disputed" }],
        body: {
          en: "Eight or nine suicide bombers carried out the attacks (the ninth being the woman who detonated at the Dematagoda safehouse). Bomber-to-site assignments differ slightly across sources.",
          si: "ප්‍රහාරය සිදු කළේ මරාගෙන මැරෙන ප්‍රහාරකයින් අට හෝ නවදෙනෙකි (නවවැන්නා වූයේ දෙමටගොඩ ආරක්ෂිත නිවසේ බෝම්බය පිපිරවූ කාන්තාවයි). කවර ප්‍රහාරකයා කවර ස්ථානයට යෙදී සිටියේද යනුවෙන් මූලාශ්‍ර අතර සුළු වශයෙන් වෙනස්කම් පවතී.",
        },
      },
    ],
  },
  {
    heading: { en: "Arrests", si: "අත්අඩංගුවට ගැනීම්" },
    entries: [
      {
        statuses: [{ status: "fact" }],
        body: {
          en: "More than 1,000 people were arrested under the Prevention of Terrorism Act (PTA) in the aftermath; over 200 were held on remand, many for years. Several high-profile detainees were later released or acquitted (see Court Cases), raising concerns about wrongful detention.",
          si: "ප්‍රහාරයෙන් පසුව ත්‍රස්තවාදය වැළැක්වීමේ පනත (PTA) යටතේ 1,000කට වැඩි පිරිසක් අත්අඩංගුවට ගන්නා ලදී; 200කට වැඩි පිරිසක් වසර ගණනක් රිමාන්ඩ් බන්ධනාගාරගත වූහ. කැපී පෙනෙන රඳවාගත් අයුරින් කිහිප දෙනෙකු පසුව නිදහස් කරනු ලැබූ හෝ නිදොස්කරුවන් කරනු ලැබීය (නඩු විභාග පිටුව බලන්න), එමඟින් වරදවා රඳවා තැබීම් පිළිබඳ ගැටළු මතු කරයි.",
        },
      },
    ],
  },
];
