import type { LocalizedText } from "@/lib/types";
import type { ContentSection } from "@/lib/site/types";

export const ATTACKS_SEO: { title: LocalizedText; description: LocalizedText } = {
  title: {
    en: "What Happened on 21 April 2019 — The Easter Sunday Attack Sites | Easter Blast",
    si: "2019 අප්‍රේල් 21 සිදු වූයේ කුමක්ද — පාස්කු ඉරිදා ප්‍රහාරයට ලක් වූ ස්ථාන | Easter Blast",
  },
  description: {
    en: "A site-by-site account of the six churches and hotels bombed on Easter Sunday 2019 in Sri Lanka, plus the later Dehiwala and Dematagoda blasts.",
    si: "2019 පාස්කු ඉරිදා ශ්‍රී ලංකාවේ බෝම්බ ප්‍රහාරයට ලක් වූ පල්ලි හා හෝටල් හය පිළිබඳ ස්ථානයෙන් ස්ථානයට වූ වාර්තාවක්, දෙහිවල සහ දෙමටගොඩ පසුකාලීන පිපිරීම් ද ඇතුළුව.",
  },
};

export const ATTACKS_INTRO: LocalizedText = {
  en: "On Easter Sunday morning, six near-simultaneous suicide bombings struck between roughly 8:45 and 9:05 a.m., followed by two more explosions during police operations.",
  si: "පාස්කු ඉරිදා උදෑසන, පැය 8:45 සිට 9:05 පමණ අතර කාලයේ, එකිනෙකට ඉතා සමීපව මරාගෙන මැරෙන බෝම්බ ප්‍රහාර හයක් එල්ල විය. පසුව පොලිස් මෙහෙයුම් අතරතුර තවත් පිපිරීම් දෙකක් සිදු විය.",
};

export const ATTACKS_PAGE_TITLE: LocalizedText = { en: "The Attacks", si: "ප්‍රහාරය" };

export const ATTACKS_SECTIONS: ContentSection[] = [
  {
    heading: { en: "The six primary sites", si: "ප්‍රධාන ස්ථාන හය" },
    entries: [
      {
        title: {
          en: "St. Anthony's Shrine — Kochchikade, Colombo (Catholic)",
          si: "ශාන්ත අන්තෝනි දේවස්ථානය — කොච්චිකඩේ, කොළඹ (කතෝලික)",
        },
        body: {
          en: "The first blast of the morning struck this historic, much-loved shrine during Easter Mass.",
          si: "උදෑසන වූ පළමු පිපිරීම, පාස්කු මහ පූජාව පවත්වමින් සිටිය දී, මෙම ඉතිහාසගත හා ජනප්‍රිය දේවස්ථානයට එල්ල විය.",
        },
      },
      {
        title: {
          en: "St. Sebastian's Church — Katuwapitiya, Negombo (Catholic)",
          si: "ශාන්ත සෙබස්තියන් දේවස්ථානය — කටුවාපිටිය, නිගොම්බෝ (කතෝලික)",
        },
        body: {
          en: "The deadliest single location. The congregation, in a town with a large Catholic population, was packed for Easter; many of the dead were children.",
          si: "වඩාත්ම මරණ ගණන වැඩි වූ එකම ස්ථානය. විශාල කතෝලික ජනකායක් සිටින මෙම නගරයේ, පාස්කු සමයේ දේවස්ථානය පූර්ණව සිටි අතර, මියගියවුන්ගෙන් බහුතරයක් දරුවෝ වූහ.",
        },
        images: [
          {
            url: "/images/attacks/st-sebastians-negombo-interior-1.webp",
            alt: {
              en: "Damage inside St. Sebastian's Church, Katuwapitiya, after the bombing",
              si: "බෝම්බ ප්‍රහාරයෙන් පසු ශාන්ත සෙබස්තියන් දේවස්ථානය, කටුවාපිටිය, ඇතුළත සිදුවූ හානිය",
            },
            caption: {
              en: "The church interior in the aftermath of the blast.",
              si: "පිපිරීමෙන් පසු දේවස්ථානයේ ඇතුළත දර්ශනයක්.",
            },
          },
          {
            url: "/images/attacks/st-sebastians-negombo-interior-2.jpeg",
            alt: {
              en: "Security personnel inspecting the damaged church interior",
              si: "හානි වූ දේවස්ථානයේ ඇතුළත පරීක්ෂා කරන ආරක්ෂක නිලධාරීන්",
            },
            caption: {
              en: "Security personnel at the site shortly after the attack.",
              si: "ප්‍රහාරයෙන් පසු ස්ථානයේ සිටි ආරක්ෂක නිලධාරීන්.",
            },
          },
          {
            url: "/images/attacks/st-sebastians-negombo-interior-3.jpeg",
            alt: {
              en: "Shrapnel and blast damage inside the church",
              si: "දේවස්ථානය ඇතුළත පතුරු සහ පිපිරීමේ හානිය",
            },
            caption: {
              en: "Shrapnel damage to the church's interior fittings.",
              si: "දේවස්ථානයේ ඇතුළත උපකරණවලට සිදු වූ පතුරු හානිය.",
            },
          },
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
      },
      {
        title: {
          en: "Zion Church — Batticaloa (evangelical)",
          si: "සියොන් පල්ලිය — බටිකලෝව (එවැන්ජලිකල්)",
        },
        body: {
          en: "Struck as children gathered for Sunday school, killing many of them.",
          si: "දරුවන් ඉරිදා පාඨශාලාව සඳහා රැස්ව සිටි අවස්ථාවේ ප්‍රහාරය එල්ල වූ අතර, එම දරුවන්ගෙන් බොහෝ දෙනෙක් මියගියහ.",
        },
      },
      {
        title: { en: "Shangri-La Hotel — Colombo", si: "ශැංග්‍රි-ලා හෝටලය — කොළඹ" },
        body: {
          en: "Bombed by two attackers, including ringleader Zahran Hashim.",
          si: "ප්‍රධාන සැලසුම්කරු සහරාන් හෂීම් ඇතුළු ප්‍රහාරකයින් දෙදෙනෙකු විසින් බෝම්බ තබනු ලැබිණි.",
        },
      },
      {
        title: { en: "Cinnamon Grand Hotel — Colombo", si: "සිනමන් ග්‍රෑන්ඩ් හෝටලය — කොළඹ" },
        body: {
          en: "A bomber checked in under a false name and detonated at the breakfast buffet.",
          si: "ප්‍රහාරකයෙක් ව්‍යාජ නමකින් හෝටලයට පැමිණ, උදෑසන ආහාර වේලාවේ බෝම්බය පිපිරවීය.",
        },
      },
      {
        title: { en: "The Kingsbury Hotel — Colombo", si: "කිංස්බරි හෝටලය — කොළඹ" },
        body: {
          en: "Struck during breakfast service.",
          si: "උදෑසන ආහාර වේලාව පවත්වමින් සිටිය දී ප්‍රහාරය එල්ල විය.",
        },
      },
    ],
  },
  {
    heading: { en: "The two later blasts", si: "පසුකාලීන පිපිරීම් දෙක" },
    entries: [
      {
        title: { en: "Tropical Inn, Dehiwala", si: "ට්‍රොපිකල් ඉන්, දෙහිවල" },
        body: {
          en: "A bomber who failed to detonate at his intended hotel target (the Taj Samudra) later blew himself up at this guesthouse, killing two.",
          si: "ඔහුගේ අරමුණු කරගත් ලාම්පු හෝටලයේ (තාජ් සමුද්‍ර) බෝම්බය පිපිරවීමට අසමත් වූ ප්‍රහාරකයෙක්, පසුව මෙම නේවාසිකාගාරයේ දී බෝම්බය පිපිරවූ අතර, එහි දෙදෙනෙක් මියගියහ.",
        },
      },
      {
        title: {
          en: "Dematagoda safehouse (Mahawila Gardens)",
          si: "දෙමටගොඩ ආරක්ෂිත නිවස (මහවිල ගාර්ඩන්ස්)",
        },
        body: {
          en: "As police closed in during the afternoon, a bomber detonated, killing three police officers. The bomber was the pregnant wife of one of the hotel attackers; her children also died.",
          si: "දහවල් කාලයේ පොලීසිය එම නිවසට පිවිසෙමින් සිටිය දී, එහි සිටි ප්‍රහාරකයෙක් බෝම්බය පිපිරවූ අතර, පොලිස් නිලධාරීන් තිදෙනෙක් මියගියහ. එම ප්‍රහාරකයා හෝටල් ප්‍රහාරකයෙකුගේ ගැබිනි බිරිඳ වූ අතර, ඇගේ දරුවෝ ද මියගියහ.",
        },
      },
    ],
  },
  {
    heading: {
      en: "The Sainthamaruthu siege (26 April 2019)",
      si: "සයින්දමරුදු සිදුවීම (2019 අප්‍රේල් 26)",
    },
    entries: [
      {
        statuses: [{ status: "disputed" }],
        body: {
          en: "Five days later, a security operation at an eastern safehouse ended in a series of explosions that killed 15–17 people, including relatives of Zahran Hashim. This event remains tied to one of the case's unresolved questions (see Investigation & Controversy).",
          si: "දින පහකට පසු, නැගෙනහිර පළාතේ ආරක්ෂිත නිවසක සිදු කළ ආරක්ෂක මෙහෙයුමක් අවසන් වූයේ පිපිරීම් මාලාවකින් වන අතර, සහරාන් හෂීම්ගේ ඥාතීන් ද ඇතුළුව 15-17 දෙනෙක් මියගියහ. මෙම සිදුවීම මෙම නඩුවේ විසඳී නැති ප්‍රශ්නයකට තවමත් සම්බන්ධව පවතී (විමර්ශන හා මතභේද පිටුව බලන්න).",
        },
      },
    ],
  },
];

export const ATTACKS_CONTENT = {
  seo: ATTACKS_SEO,
  pageTitle: ATTACKS_PAGE_TITLE,
  intro: ATTACKS_INTRO,
  sections: ATTACKS_SECTIONS,
};
export type AttacksContentData = typeof ATTACKS_CONTENT;
