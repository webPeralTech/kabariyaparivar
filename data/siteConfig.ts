export interface SocialLinks {
  whatsapp: string;
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
}

export interface NavLink {
  href: string;
  labelEn: string;
  labelGu: string;
  key: string;
}

export const SITE_CONFIG = {
  name: "Kabariya Parivar",
  nameGu: "કાબરીયા પરિવાર",
  tagline: "Mataji Madh · Randal Maa – Khodal Mataji",
  taglineGu: "માતાજી મઢ · રાંદલ મા – ખોડલ માતાજી",
  place: "Savarkundla, Dist. Amreli, Gujarat",
  placeGu: "સાવરકુંડલા, જિ. અમરેલી, ગુજરાત",
  phone: "+91 777 900 7111",
  email: "kabariyaparivar@gmail.com",
  mapsUrl: "https://maps.google.com/maps?q=21.3417404,71.3148435&hl=en&z=17&output=embed",
  directionsUrl: "https://maps.app.goo.gl/BXdiL5AhZHVYQmRj8",
  socials: {
    whatsapp: "https://wa.me/message/CRL6SHPH62UDN1",
    facebook: "https://www.facebook.com/kabariya.parivar.1",
    instagram: "https://instagram.com/kabariyaparivar",
    youtube: "https://www.youtube.com/channel/UCSGJfxancBnpFoGxyVpVVhA",
    twitter: "https://twitter.com/ParivarKabariya",
  },
  bankDetails: {
    accountName: "Kabariya Parivar Madh Trust",
    accountNumber: "0000 0000 0000",
    ifscCode: "XXXX0000000",
    bankAndBranch: "Add bank name, Savarkundla",
    paytmUrl: "https://paytm.me/D5He-Kg",
  },
  darshan: {
    channelId: "UCSGJfxancBnpFoGxyVpVVhA",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCSGJfxancBnpFoGxyVpVVhA",
    morningAarti: "6:30 AM",
    morningAartiGu: "સવારે 6:30",
    eveningAarti: "7:00 PM",
    eveningAartiGu: "સાંજે 7:00",
  },
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", labelEn: "Home", labelGu: "હોમ", key: "nav_home" },
  { href: "/darshan", labelEn: "Live Darshan", labelGu: "લાઈવ દર્શન", key: "nav_darshan" },
  { href: "/donation", labelEn: "Donation", labelGu: "દાન", key: "nav_donation" },
  { href: "/event", labelEn: "Event", labelGu: "કાર્યક્રમો", key: "nav_event" },
  { href: "/prayers", labelEn: "Prayers", labelGu: "પ્રાર્થના", key: "nav_prayers" },
  { href: "/trustee", labelEn: "Trustee", labelGu: "ટ્રસ્ટી", key: "nav_trustee" },
  { href: "/gallery", labelEn: "Photo Gallery", labelGu: "ફોટો ગેલેરી", key: "nav_gallery" },
  { href: "/location", labelEn: "Location", labelGu: "લોકેશન", key: "nav_location" },
];
