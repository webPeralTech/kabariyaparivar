export interface EventItem {
  id: string;
  titleEn: string;
  titleGu: string;
  dateEn: string;
  dateGu: string;
  timeEn?: string;
  timeGu?: string;
  locationEn: string;
  locationGu: string;
  descriptionEn: string;
  descriptionGu: string;
  badgeEn?: string;
  badgeGu?: string;
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "annual-yagna",
    titleEn: "Annual Yagna & Mahaprasad",
    titleGu: "વાર્ષિક યજ્ઞ અને મહાપ્રસાદ",
    dateEn: "Date to be announced soon",
    dateGu: "તારીખ ટૂંક સમયમાં જાહેર થશે",
    timeEn: "8:00 AM onwards",
    timeGu: "સવારે 8:00 થી",
    locationEn: "Kabariya Parivar Madh, Savarkundla",
    locationGu: "કાબરીયા પરિવાર મઢ, સાવરકુંડલા",
    descriptionEn: "The sacred yearly Hawan and Yagna ceremony invoking blessings of Ma Randal and Khodal Mataji, attended by parivar members from across Gujarat and worldwide.",
    descriptionGu: "મા રાંદલ અને ખોડલ માતાજી ના આશીર્વાદ અર્થે યોજાતો પવિત્ર વાર્ષિક હવન અને યજ્ઞ સમારોહ.",
    badgeEn: "Main Annual Event",
    badgeGu: "મુખ્ય વાર્ષિક ઉત્સવ",
  },
  {
    id: "navratri-aarti",
    titleEn: "Navratri Mahotsav & Garba",
    titleGu: "નવરાત્રી મહોત્સવ અને રાસ-ગરબા",
    dateEn: "Aso Sud 1 to 9 (Navratri)",
    dateGu: "આસો સુદ એકમ થી નોમ (નવરાત્રી)",
    timeEn: "Every evening 7:30 PM",
    timeGu: "દરરોજ સાંજે 7:30 વાગ્યે",
    locationEn: "Madh Courtyard, Savarkundla",
    locationGu: "મઢ પરિસર, સાવરકુંડલા",
    descriptionEn: "Nine auspicious nights of continuous devotional aarti, traditional raas-garba, and daily Mataji darshan with devotion and joy.",
    descriptionGu: "મઢ પરિસરમાં નવ રાત્રિ ભક્તિભાવપૂર્વક આરતી, પરંપરાગત રાસ-ગરબા અને માતાજી ના દર્શન.",
    badgeEn: "Festival",
    badgeGu: "મહોત્સવ",
  },
  {
    id: "parivar-milan",
    titleEn: "Sneh Milan & General Assembly",
    titleGu: "સ્નેહ મિલન અને સામાન્ય સભા",
    dateEn: "Post-Diwali / New Year",
    dateGu: "દિવાળી / નૂતન વર્ષ સ્નેહમિલન",
    timeEn: "10:00 AM - 4:00 PM",
    timeGu: "સવારે 10:00 થી સાંજે 4:00",
    locationEn: "Kabariya Parivar Madh, Savarkundla",
    locationGu: "કાબરીયા પરિવાર મઢ, સાવરકુંડલા",
    descriptionEn: "An annual gathering for the extended Kabariya parivar families to meet, discuss community initiatives, and honor our heritage.",
    descriptionGu: "વિસ્તૃત કાબરીયા પરિવાર ના કુટુંબો માટે વાર્ષિક સ્નેહમિલન સમારંભ, વિચારોનું આદાન-પ્રદાન અને સામાજિક એકતા.",
    badgeEn: "Community",
    badgeGu: "પરિવાર મિલન",
  },
];
