export type Language = 'en' | 'gu';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_darshan: "Live Darshan",
    nav_donation: "Donation",
    nav_event: "Event",
    nav_prayers: "Prayers",
    nav_trustee: "Trustee",
    nav_gallery: "Photo Gallery",
    nav_location: "Location",
    tagline: "Mataji Madh · Randal Maa – Khodal Mataji",

    // Hero Section
    hero_eyebrow: "Savarkundla, Dist. Amreli, Gujarat",
    hero_title: "Kabariya Parivar",
    hero_lede: "Kuldevi Ma Randal Maa – Khodal Mataji Madh. A place of faith, family, and gathering for the Kabariya Lauva Patel parivar.",
    hero_btn_darshan: "Watch Live Darshan",
    hero_btn_donate: "Support the Madh",
    hero_established: "Tradition carried forward since 1995",

    // Welcome Section
    welcome_eyebrow: "Welcome",
    welcome_title: "Welcome to Kabariya Parivar",
    welcome_text: "Every year the parivar gathers for Yagna, Silanyas and Jinnodhar ceremonies at the Madh — a tradition carried forward since 1995. Browse the moments below, or visit the full gallery.",
    view_full_gallery: "View Full Gallery",

    // Bhuva Shree
    bhuva_eyebrow: "Bhuva Shree",
    bhuva_title: "Kabariya Parivar Bhuva Shree",
    bhuva_text: "The spiritual guides who carry forward the tradition and blessings of Randal Maa.",
    photo_coming_soon: "Photo coming soon",

    // Find Your Way / Feature Cards
    findway_title: "Find your way",
    findway_text: "Everything the parivar needs, in one place.",
    card_darshan_title: "Live Darshan",
    card_darshan_text: "Can't visit in person? Watch the Madh live, wherever you are.",
    card_donation_title: "Donation",
    card_donation_text: "Contribute to the upkeep and events of the Madh securely online.",
    card_gallery_title: "Photo Gallery",
    card_gallery_text: "Relive every Yagna and Jinnodhar from 1995 to today.",
    card_location_title: "Location",
    card_location_text: "Directions and contact details to plan your visit to Savarkundla.",

    // Footer
    footer_about: "Kuldevi Ma Randal Maa – Khodal Mataji Madh, Savarkundla, Dist. Amreli, Gujarat.",
    footer_explore: "Explore",
    footer_connect: "Connect",
    footer_property: "A Property of Kabariya.com",
    footer_rights: "All rights reserved.",

    // Gallery Page
    gallery_eyebrow: "1995 – Today",
    gallery_title: "Photo Gallery",
    gallery_text: "Every Yagna, Silanyas and Jinnodhar since 1995. Pick a year below.",
    gallery_empty: "No photos added yet",
    photos_count: "photos",
    videos_count: "videos",
    photo_single: "photo",
    video_single: "video",

    // Darshan Page
    darshan_eyebrow: "Streaming",
    darshan_title: "Live Darshan",
    darshan_text: "Watch the Madh live from wherever you are. If the stream is offline, check back during aarti timings below.",
    darshan_caption: "Live from the Madh — Savarkundla",
    darshan_morning_title: "Morning Aarti",
    darshan_morning_time: "6:30 AM",
    darshan_evening_title: "Evening Aarti",
    darshan_evening_time: "7:00 PM",
    darshan_trouble_title: "Trouble viewing?",
    darshan_trouble_text: "Message us on WhatsApp and we'll help.",

    // Donation Page
    donation_eyebrow: "Seva",
    donation_title: "Support the Madh",
    donation_text: "Every contribution helps maintain the Madh and fund the yearly Yagna and celebrations. Thank you for your seva.",
    donation_bank_title: "Bank Transfer Details",
    donation_label_acname: "Account Name",
    donation_label_acnum: "Account Number",
    donation_label_ifsc: "IFSC Code",
    donation_label_bank: "Bank & Branch",
    donation_receipt: "For receipts, message us on WhatsApp after transfer.",
    donation_whatsapp_btn: "Send Proof on WhatsApp",
    donation_qr_text: "Scan with any UPI app, or",
    donation_paytm_btn: "Pay via Paytm",
    donation_copy_btn: "Copy",
    donation_copied: "Copied to clipboard!",
    donation_qr_zoom_hint: "Click to expand & scan QR",
    donation_use_title: "How donations are used",
    donation_use_text: "Contributions go toward Madh upkeep, annual Yagna arrangements, prasad, and community facilities for visiting parivar members. The trustee committee publishes accounts each year — see the Trustee page for contact details.",

    // WhatsApp Group Community
    whatsapp_group_eyebrow: "Parivar Community",
    whatsapp_group_title: "Join Kabariya Parivar WhatsApp Group",
    whatsapp_group_text: "Join our official WhatsApp group to receive announcements about upcoming Yagna festivals, temple development, celebrations, and connect with parivar members.",
    whatsapp_group_btn: "Join WhatsApp Group",
    whatsapp_group_scan_text: "Scan with WhatsApp camera or click below to join",
    whatsapp_group_copy_btn: "Copy Group Link",
    whatsapp_group_copied: "WhatsApp link copied!",

    // Event Page
    event_eyebrow: "What's coming up",
    event_title: "Events",
    event_text: "Yagna, Silanyas, Jinnodhar and parivar gatherings — dates and details will be posted here as they're confirmed.",
    event_card1_title: "Annual Yagna",
    event_card1_text: "Date to be announced. Held at the Madh, Savarkundla.",
    event_card2_title: "Navratri Aarti",
    event_card2_text: "Nine nights of aarti and garba at the Madh grounds.",
    event_card3_title: "Parivar Milan",
    event_card3_text: "An annual gathering for the extended Kabariya parivar.",
    event_stay_title: "Stay updated",
    event_stay_text: "Follow announcements on WhatsApp or Facebook, and check the Photo Gallery afterward for highlights from past years.",
    event_stay_btn: "Join WhatsApp Updates",

    // Prayers Page
    prayers_eyebrow: "Aarti & Stuti",
    prayers_title: "Prayers",
    prayers_text: "Aarti and stuti of Randal Maa – Khodal Mataji, recited at the Madh every morning and evening.",
    prayers_quote: "May the divine blessings of Ma Randal and Khodal Mataji bring peace, prosperity, and unity to the entire Kabariya Parivar.",
    prayers_morning: "Morning Aarti (સવારની આરતી)",
    prayers_morning_text: "જય આદ્ય શક્તિ, મા જય આદ્ય શક્તિ... અખંડ બ્રહ્માંડ દીપાવ્યા, પડવે પ્રગટ્યાં મા... ઓમ જયો જયો મા જગદંબે.",
    prayers_evening: "Evening Aarti (સાંજની આરતી)",
    prayers_evening_text: "ઓમ નમો નારાયણાય, વિશ્વંભરી અખિલ વિશ્વ તણી જનેતા... મા તારું શરણું અમને સદાય સુખ આપે.",
    prayers_stuti: "Randal Maa Stuti (રાંદલ માં સ્તુતિ)",
    prayers_stuti_text: "સૂર્ય તણી જે પટરાણી, જગદંબા રવિ રાય... રાંદલ માં ના ચરણમાં, પ્રણામ વારંવાર થાય.",

    // Trustee Page
    trustee_eyebrow: "Seva Committee",
    trustee_title: "Trustee Committee",
    trustee_text: "The trustees who manage the Madh's upkeep, finances and annual events on behalf of the parivar.",

    // Location Page
    location_eyebrow: "Visit us",
    location_title: "Location",
    location_text: "Kuldevi Ma Randal Maa – Khodal Mataji Madh, Savarkundla, Dist. Amreli, Gujarat.",
    location_address_title: "Address",
    location_contact_title: "Contact",
    location_directions_btn: "Open in Google Maps",
  },
  gu: {
    // Navigation
    nav_home: "હોમ",
    nav_darshan: "લાઈવ દર્શન",
    nav_donation: "દાન",
    nav_event: "કાર્યક્રમો",
    nav_prayers: "પ્રાર્થના",
    nav_trustee: "ટ્રસ્ટી",
    nav_gallery: "ફોટો ગેલેરી",
    nav_location: "લોકેશન",
    tagline: "માતાજી મઢ · રાંદલ મા – ખોડલ માતાજી",

    // Hero Section
    hero_eyebrow: "સાવરકુંડલા, જિ. અમરેલી, ગુજરાત",
    hero_title: "કાબરીયા પરિવાર",
    hero_lede: "કુળદેવી મા રાંદલ મા – ખોડલ માતાજી મઢ. કાબરીયા લેઉવા પટેલ પરિવાર માટે શ્રદ્ધા, કુટુંબ અને મિલનનું સ્થાન.",
    hero_btn_darshan: "લાઈવ દર્શન જુઓ",
    hero_btn_donate: "મઢ ને સહયોગ કરો",
    hero_established: "1995 થી ચાલી આવતી પરંપરા",

    // Welcome Section
    welcome_eyebrow: "સ્વાગત",
    welcome_title: "કાબરીયા પરિવારમાં આપનું સ્વાગત છે",
    welcome_text: "દર વર્ષે પરિવાર મઢ ખાતે યજ્ઞ, શિલાન્યાસ અને જીર્ણોદ્ધાર માટે એકત્ર થાય છે — 1995 થી ચાલી આવતી પરંપરા. નીચે ક્ષણો જુઓ, અથવા સંપૂર્ણ ગેલેરી જુઓ.",
    view_full_gallery: "સંપૂર્ણ ગેલેરી જુઓ",

    // Bhuva Shree
    bhuva_eyebrow: "ભુવા શ્રી",
    bhuva_title: "કાબરીયા પરિવાર ભુવા શ્રી",
    bhuva_text: "રાંદલ મા ની પરંપરા અને આશીર્વાદ આગળ વધારનારા આધ્યાત્મિક માર્ગદર્શકો.",
    photo_coming_soon: "ટૂંક સમયમાં ફોટો",

    // Find Your Way / Feature Cards
    findway_title: "તમને જોઈતું શોધો",
    findway_text: "પરિવારને જોઈતું બધું, એક જ જગ્યાએ.",
    card_darshan_title: "લાઈવ દર્શન",
    card_darshan_text: "રૂબરૂ આવી ન શકો? જ્યાં હોવ ત્યાંથી મઢ ના લાઈવ દર્શન કરો.",
    card_donation_title: "દાન",
    card_donation_text: "મઢ ની જાળવણી અને કાર્યક્રમો માટે સુરક્ષિત રીતે ઓનલાઈન યોગદાન આપો.",
    card_gallery_title: "ફોટો ગેલેરી",
    card_gallery_text: "1995 થી આજ સુધીના દરેક યજ્ઞ અને જીર્ણોદ્ધાર ને ફરી જુઓ.",
    card_location_title: "લોકેશન",
    card_location_text: "સાવરકુંડલા ની મુલાકાત ના આયોજન માટે દિશા અને સંપર્ક વિગતો.",

    // Footer
    footer_about: "કુળદેવી મા રાંદલ મા – ખોડલ માતાજી મઢ, સાવરકુંડલા, જિ. અમરેલી, ગુજરાત.",
    footer_explore: "શોધો",
    footer_connect: "સંપર્ક",
    footer_property: "કાબરીયા.કોમ ની મિલકત",
    footer_rights: "સર્વાધિકાર સુરક્ષિત.",

    // Gallery Page
    gallery_eyebrow: "1995 – આજ સુધી",
    gallery_title: "ફોટો ગેલેરી",
    gallery_text: "1995 થી દરેક યજ્ઞ, શિલાન્યાસ અને જીર્ણોદ્ધાર. નીચે વર્ષ પસંદ કરો.",
    gallery_empty: "હજુ સુધી ફોટો ઉમેરાયા નથી",
    photos_count: "ફોટા",
    videos_count: "વીડિયો",
    photo_single: "ફોટો",
    video_single: "વીડિયો",

    // Darshan Page
    darshan_eyebrow: "લાઈવ સ્ટ્રીમિંગ",
    darshan_title: "લાઈવ દર્શન",
    darshan_text: "જ્યાં હોવ ત્યાંથી મઢ ના લાઈવ દર્શન કરો. જો સ્ટ્રીમ ચાલુ ન હોય, તો નીચેના આરતી સમય દરમિયાન ફરી જુઓ.",
    darshan_caption: "મઢ માંથી લાઈવ — સાવરકુંડલા",
    darshan_morning_title: "સવારની આરતી",
    darshan_morning_time: "સવારે 6:30",
    darshan_evening_title: "સાંજની આરતી",
    darshan_evening_time: "સાંજે 7:00",
    darshan_trouble_title: "જોવામાં તકલીફ?",
    darshan_trouble_text: "અમને WhatsApp પર સંદેશ મોકલો, અમે મદદ કરીશું.",

    // Donation Page
    donation_eyebrow: "સેવા",
    donation_title: "મઢ ને સહયોગ કરો",
    donation_text: "તમારું દરેક યોગદાન મઢ ની જાળવણી અને વાર્ષિક યજ્ઞ-ઉત્સવો માટે મદદરૂપ થાય છે. તમારી સેવા બદલ આભાર.",
    donation_bank_title: "બેંક ટ્રાન્સફર વિગતો",
    donation_label_acname: "ખાતાનું નામ",
    donation_label_acnum: "ખાતા નંબર",
    donation_label_ifsc: "IFSC કોડ",
    donation_label_bank: "બેંક અને શાખા",
    donation_receipt: "રસીદ માટે, ટ્રાન્સફર પછી WhatsApp પર સંદેશ મોકલો.",
    donation_whatsapp_btn: "WhatsApp પર પુરાવો મોકલો",
    donation_qr_text: "કોઈપણ UPI એપ થી સ્કેન કરો, અથવા",
    donation_paytm_btn: "Paytm થી ચૂકવો",
    donation_copy_btn: "કોપી કરો",
    donation_copied: "ક્લિપબોર્ડ પર કોપી થઈ ગયું!",
    donation_qr_zoom_hint: "મોટો QR કોડ જોવા ક્લિક કરો",
    donation_use_title: "દાનનો ઉપયોગ કેવી રીતે થાય છે",
    donation_use_text: "યોગદાન મઢ ની જાળવણી, વાર્ષિક યજ્ઞ આયોજન, પ્રસાદ અને મુલાકાતી પરિવારજનો માટેની સુવિધાઓ માટે વપરાય છે. ટ્રસ્ટી કમિટી દર વર્ષે હિસાબ પ્રકાશિત કરે છે — સંપર્ક વિગતો માટે ટ્રસ્ટી પેજ જુઓ.",

    // WhatsApp Group Community
    whatsapp_group_eyebrow: "પરિવાર સમુદાય",
    whatsapp_group_title: "કાબરીયા પરિવાર WhatsApp ગ્રુપમાં જોડાઓ",
    whatsapp_group_text: "આગામી યજ્ઞ મહોત્સવ, મઢ વિકાસ કાર્યો, વાર્ષિક ઉત્સવો અને પરિવારજનો સાથે જોડાયેલા રહેવા માટે અમારા સત્તાવાર WhatsApp ગ્રુપમાં જોડાવો.",
    whatsapp_group_btn: "WhatsApp ગ્રુપમાં જોડાઓ",
    whatsapp_group_scan_text: "WhatsApp કેમેરાથી સ્કેન કરો અથવા નીચે ક્લિક કરીને જોડાઓ",
    whatsapp_group_copy_btn: "ગ્રુપ લિંક કોપી કરો",
    whatsapp_group_copied: "WhatsApp લિંક કોપી થઈ ગઈ!",

    // Event Page
    event_eyebrow: "આગામી કાર્યક્રમો",
    event_title: "કાર્યક્રમો",
    event_text: "યજ્ઞ, શિલાન્યાસ, જીર્ણોદ્ધાર અને પરિવાર મિલન — તારીખ અને વિગતો નક્કી થતાં અહીં મુકાશે.",
    event_card1_title: "વાર્ષિક યજ્ઞ",
    event_card1_text: "તારીખ જાહેર કરવાની બાકી છે. મઢ, સાવરકુંડલા ખાતે યોજાશે.",
    event_card2_title: "નવરાત્રી આરતી",
    event_card2_text: "મઢ પરિસરમાં નવ રાત્રિ આરતી અને ગરબા.",
    event_card3_title: "પરિવાર મિલન",
    event_card3_text: "વિસ્તૃત કાબરીયા પરિવાર માટે વાર્ષિક મિલન સમારંભ.",
    event_stay_title: "અપડેટ મેળવો",
    event_stay_text: "WhatsApp અથવા Facebook પર જાહેરાતો ફોલો કરો, અને પછી ફોટો ગેલેરીમાં ગત વર્ષોની ઝલક જુઓ.",
    event_stay_btn: "WhatsApp અપડેટ્સ જોડાઓ",

    // Prayers Page
    prayers_eyebrow: "આરતી અને સ્તુતિ",
    prayers_title: "પ્રાર્થના",
    prayers_text: "રાંદલ મા – ખોડલ માતાજી ની આરતી અને સ્તુતિ, જે મઢ માં દરરોજ સવાર-સાંજ થાય છે.",
    prayers_quote: "મા રાંદલ અને ખોડલ માતાજી ના દિવ્ય આશીર્વાદ સમગ્ર કાબરીયા પરિવારમાં શાંતિ, સમૃદ્ધિ અને એકતા જાળવી રાખે.",
    prayers_morning: "સવારની આરતી",
    prayers_morning_text: "જય આદ્ય શક્તિ, મા જય આદ્ય શક્તિ... અખંડ બ્રહ્માંડ દીપાવ્યા, પડવે પ્રગટ્યાં મા... ઓમ જયો જયો મા જગદંબે.",
    prayers_evening: "સાંજની આરતી",
    prayers_evening_text: "ઓમ નમો નારાયણાય, વિશ્વંભરી અખિલ વિશ્વ તણી જનેતા... મા તારું શરણું અમને સદાય સુખ આપે.",
    prayers_stuti: "રાંદલ માં સ્તુતિ",
    prayers_stuti_text: "સૂર્ય તણી જે પટરાણી, જગદંબા રવિ રાય... રાંદલ માં ના ચરણમાં, પ્રણામ વારંવાર થાય.",

    // Trustee Page
    trustee_eyebrow: "સેવા સમિતિ",
    trustee_title: "ટ્રસ્ટી કમિટી",
    trustee_text: "પરિવાર વતી મઢ ની જાળવણી, નાણાં અને વાર્ષિક કાર્યક્રમો સંભાળતા ટ્રસ્ટીઓ.",

    // Location Page
    location_eyebrow: "અમારી મુલાકાત લો",
    location_title: "લોકેશન",
    location_text: "કુળદેવી મા રાંદલ મા – ખોડલ માતાજી મઢ, સાવરકુંડલા, જિ. અમરેલી, ગુજરાત.",
    location_address_title: "સરનામું",
    location_contact_title: "સંપર્ક",
    location_directions_btn: "ગૂગલ મેપ્સમાં જુઓ",
  }
};
