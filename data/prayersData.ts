export interface PrayerSection {
  id: string;
  titleEn: string;
  titleGu: string;
  categoryEn: string;
  categoryGu: string;
  versesGu: string[];
  versesEn: string[];
  timingEn: string;
  timingGu: string;
}

export const PRAYERS_DATA: PrayerSection[] = [
  {
    id: "morning-aarti",
    titleEn: "Jay Adhya Shakti (Morning Aarti)",
    titleGu: "જય આદ્ય શક્તિ (સવારની આરતી)",
    categoryEn: "Daily Morning Aarti",
    categoryGu: "દૈનિક સવારની આરતી",
    timingEn: "6:30 AM Daily",
    timingGu: "દરરોજ સવારે 6:30",
    versesGu: [
      "જય આદ્ય શક્તિ મા જય આદ્ય શક્તિ,",
      "અખંડ બ્રહ્માંડ દીપાવ્યા, પડવે પ્રગટ્યાં મા.",
      "ઓમ જયો જયો મા જગદંબે...",
      "",
      "દ્વિતીયા બેય સ્વરૂપ શિવશક્તિ જાણો,",
      "બ્રહ્મા ગણપતિ ગાયે, હર ગાયે હરખે.",
      "ઓમ જયો જયો મા જગદંબે...",
      "",
      "તૃતીયા ત્રણ રે સ્વરૂપ ત્રિભુવનમાં બેઠા,",
      "દયા કરી વરદાન દીધાં, દુઃખ હર્યાં મા.",
      "ઓમ જયો જયો મા જગદંબે...",
      "",
      "ચોથે ચતુરા મહાલક્ષ્મી સચરાચર વ્યાપ્યા,",
      "ચાર ભૂજા ચોકટમાં, દર્શન મા આપ્યા.",
      "ઓમ જયો જયો મા જગદંબે...",
      "",
      "સૂર્ય તણી જે પટરાણી રાંદલ મા કહેવાયા,",
      "ખોડલ મા સંગે બિરાજે, કાબરીયા પરિવાર ધન્ય થયા.",
      "ઓમ જયો જયો મા જગદંબે..."
    ],
    versesEn: [
      "Jay Aadhya Shakti Maa Jay Aadhya Shakti,",
      "Akhand brahmaand deepavya, padve pragatya maa.",
      "Om Jayo Jayo Maa Jagdambe...",
      "",
      "Dwitiya bey swaroop Shiv-Shakti jaano,",
      "Brahma Ganpati gaaye, Har gaaye harkhe.",
      "Om Jayo Jayo Maa Jagdambe...",
      "",
      "Tritiya tran re swaroop tribhuvan maa betha,",
      "Daya kari vardaan deedha, dukh harya maa.",
      "Om Jayo Jayo Maa Jagdambe...",
      "",
      "Chothe Chatura Mahalakshmi sacharachar vyapya,",
      "Chaar bhuja chokat maa, darshan maa aapya.",
      "Om Jayo Jayo Maa Jagdambe...",
      "",
      "Surya tani je patranee Randal Maa kahevaaya,",
      "Khodal Maa sange biraaje, Kabariya Parivar dhanya thaya.",
      "Om Jayo Jayo Maa Jagdambe..."
    ]
  },
  {
    id: "evening-aarti",
    titleEn: "Vishwambhari Stuti & Evening Aarti",
    titleGu: "વિશ્વંભરી સ્તુતિ અને સાંજની આરતી",
    categoryEn: "Daily Evening Aarti",
    categoryGu: "દૈનિક સાંજની આરતી",
    timingEn: "7:00 PM Daily",
    timingGu: "દરરોજ સાંજે 7:00",
    versesGu: [
      "વિશ્વંભરી અખિલ વિશ્વ તણી જનેતા,",
      "વિદ્યાધરી વદનમાં વસજો સદાય.",
      "જૂદાં કહ્યાં નવરૂપ જગદંબ તારાં,",
      "શ્રી ખોડલ મા કરુણા કરજો અમો પર.",
      "",
      "સાંજ સમે દીપક જ્યોત પ્રગટે,",
      "રાંદલ મા ના દ્વારે ઘંટારવ ગાજે.",
      "સુખ સંપત્તિ પરિવારને આપો,",
      "કાબરીયા કુળના વિઘ્નો નિવારો.",
      "",
      "માત પિતા ગુરુ સગાં સંબંધી,",
      "સૌના હૃદયે ભક્તિ રસ ભરો.",
      "જય ખોડિયાર માત કી જય,",
      "જય રાંદલ માત કી જય."
    ],
    versesEn: [
      "Vishwambhari akhil vishwa tani janeta,",
      "Vidyadhari vadan maa vasjo saday.",
      "Jooda kahya navroop jagadamb tara,",
      "Shree Khodal Maa karuna karjo amo par.",
      "",
      "Sanj same deepak jyot pragate,",
      "Randal Maa na dware ghantaarav gaaje.",
      "Sukh sampatti parivar ne aapo,",
      "Kabariya kul na vighno nivaaro.",
      "",
      "Maat pita guru saga sambandhi,",
      "Sauna hradaye bhakti ras bharo.",
      "Jay Khodiyar Maat Ki Jay,",
      "Jay Randal Maat Ki Jay."
    ]
  },
  {
    id: "randal-stuti",
    titleEn: "Ma Randal Devi Stuti",
    titleGu: "મા રાંદલ દેવી સ્તુતિ",
    categoryEn: "Devotional Stuti",
    categoryGu: "ભક્તિમય સ્તુતિ",
    timingEn: "Recited at the start of celebrations",
    timingGu: "ઉત્સવો અને મિલન સમયે સ્તુતિ",
    versesGu: [
      "સૂર્ય નારાયણ સંગે શોભતી, રાંદલ માત મહારાણી,",
      "ઘોડે અસવાર થઈને આવ્યાં, દાદો રવિરાજ આણી.",
      "કાબરીયા લેઉવા પટેલના કુળદેવી, સદાય રાખો ટેક,",
      "આંગણે તમારા દીવડા બળે, પુરો અમારા નેક.",
      "બોલો શ્રી રાંદલ માત કી જય!"
    ],
    versesEn: [
      "Surya Narayan sange shobhati, Randal Maat Maharani,",
      "Ghode aswaar thaine aavya, Dado Raviraj aani.",
      "Kabariya Lauva Patel na Kuldevi, saday raakho tek,",
      "Aangane tamara deevda bale, puro amara nek.",
      "Bolo Shree Randal Maat Ki Jay!"
    ]
  }
];
