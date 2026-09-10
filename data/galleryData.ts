export interface PhotoItem {
  url: string;
  caption?: string;
  captionGu?: string;
  thumbnailUrl?: string;
}

export interface VideoItem {
  youtubeId: string;
  caption?: string;
}

export interface GalleryFolderItem {
  id: string;
  name: string;
  nameGu: string;
  category: "yagna" | "sneh-milan" | "jinnodhar" | "darshan" | "other";
  year?: string;
  coverImage?: string;
  photoCount?: number;
  photos: PhotoItem[];
  videos?: VideoItem[];
}

// All albums directly corresponding to Google Drive folders
export const GALLERY_FOLDERS: GalleryFolderItem[] = [
  {
    id: "2026-yagna",
    name: "2026 Yagna",
    nameGu: "૨૦૨૬ યજ્ઞ મહોત્સવ",
    category: "yagna",
    year: "2026",
    coverImage: "/DEV_0528.JPG",
    photoCount: 15,
    photos: [
      { url: "/DEV_0528.JPG", caption: "શ્રી ખોડિયાર માતાજી મંદિર મંડપ દર્શન - ૨૦૨૬" },
      { url: "/DEV_0379.JPG", caption: "શ્રી મંદિર પરિસર પ્રવેશદ્વાર" },
    ],
  },
  {
    id: "2026-yagna-yajman",
    name: "2026 Yagna Yajman",
    nameGu: "૨૦૨૬ યજ્ઞ યજમાન પરિવાર",
    category: "yagna",
    year: "2026",
    coverImage: "/DEV_0431.JPG",
    photoCount: 12,
    photos: [
      { url: "/DEV_0431.JPG", caption: "શ્રી સુરા પૂરા દાદા અને માતાજી પાવન દર્શન" },
    ],
  },
  {
    id: "2025-yagna",
    name: "2025 Yagna",
    nameGu: "૨૦૨૫ યજ્ઞ મહોત્સવ",
    category: "yagna",
    year: "2025",
    coverImage: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
    photoCount: 22,
    photos: [
      { url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg", caption: "શ્રી માતાજી સિંહાસન મઢ દર્શન" },
      { url: "/DEV_0525.JPG", caption: "કાબરીયા પરિવાર ભવન" },
    ],
  },
  {
    id: "2024-yagna",
    name: "2024 Yagna",
    nameGu: "૨૦૨૪ યજ્ઞ મહોત્સવ",
    category: "yagna",
    year: "2024",
    coverImage: "/DEV_0528.JPG",
    photoCount: 28,
    photos: [
      { url: "/DEV_0528.JPG", caption: "મંદિર મંડપ દર્શન - સાવરકુંડલા" },
      { url: "/DEV_0379.JPG", caption: "મુખ્ય પ્રવેશદ્વાર અને પરિસર" },
    ],
  },
  {
    id: "2023-yagna",
    name: "2023 Yagna",
    nameGu: "૨૦૨૩ યજ્ઞ ઉત્સવ",
    category: "yagna",
    year: "2023",
    coverImage: "/DEV_0431.JPG",
    photoCount: 18,
    photos: [
      { url: "/DEV_0431.JPG", caption: "સુરા પૂરા દાદા પાવન સ્થાનક" },
    ],
  },
  {
    id: "2023-sneh-milan",
    name: "2023 Sneh Milan",
    nameGu: "૨૦૨૩ સ્નેહ મિલન સમારોહ",
    category: "sneh-milan",
    year: "2023",
    coverImage: "/DEV_0525.JPG",
    photoCount: 24,
    photos: [
      { url: "/DEV_0525.JPG", caption: "કાબરીયા પરિવાર ભવન - સ્નેહ મિલન" },
    ],
  },
  {
    id: "2022-yagna",
    name: "2022 Yagna",
    nameGu: "૨૦૨૨ યજ્ઞ દર્શન",
    category: "yagna",
    year: "2022",
    coverImage: "/DEV_0528.JPG",
    photoCount: 16,
    photos: [
      { url: "/DEV_0528.JPG", caption: "શ્રી મંદિર મંડપ દર્શન" },
    ],
  },
  {
    id: "2022-sneh-milan",
    name: "2022 Sneh Milan",
    nameGu: "૨૦૨૨ સ્નેહ મિલન",
    category: "sneh-milan",
    year: "2022",
    coverImage: "/DEV_0379.JPG",
    photoCount: 20,
    photos: [
      { url: "/DEV_0379.JPG", caption: "પરિસર દર્શન" },
    ],
  },
  {
    id: "2021-yagna",
    name: "2021 Yagna & Mandir Darshan",
    nameGu: "૨૦૨૧ યજ્ઞ & મંદિર દર્શન",
    category: "yagna",
    year: "2021",
    coverImage: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
    photoCount: 5,
    photos: [
      {
        url: "/DEV_0431.JPG",
        caption: "શ્રી સુરા પૂરા દાદા અને માતાજી પાવન દર્શન",
      },
      {
        url: "/DEV_0525.JPG",
        caption: "કાબરીયા પરિવાર ભવન અને કાર્યાલય - સાવરકુંડલા",
      },
      {
        url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
        caption: "શ્રી માતાજી પાવન સિંહાસન - સાવરકુંડલા મઢ",
      },
      {
        url: "/DEV_0528.JPG",
        caption: "શ્રી ખોડિયાર માતાજી મંદિર મંડપ - સાવરકુંડલા ધામ",
      },
      {
        url: "/DEV_0379.JPG",
        caption: "શ્રી મંદિર પરિસર અને મુખ્ય પ્રવેશદ્વાર",
      },
    ],
  },
  {
    id: "2020-yagna",
    name: "2020 Yagna",
    nameGu: "૨૦૨૦ યજ્ઞ ઉત્સવ",
    category: "yagna",
    year: "2020",
    coverImage: "/DEV_0528.JPG",
    photoCount: 14,
    photos: [
      { url: "/DEV_0528.JPG", caption: "યજ્ઞ મંડપ દર્શન" },
    ],
  },
  {
    id: "2019-yagna",
    name: "2019 Yagna",
    nameGu: "૨૦૧૯ યજ્ઞ",
    category: "yagna",
    year: "2019",
    coverImage: "/DEV_0379.JPG",
    photoCount: 19,
    photos: [
      { url: "/DEV_0379.JPG", caption: "મંદિર પરિસર - ૨૦૧૯" },
    ],
  },
  {
    id: "mandir-phota-2019",
    name: "Mandir Phota 2019",
    nameGu: "મંદિર ફોટા ૨૦૧૯",
    category: "darshan",
    year: "2019",
    coverImage: "/DEV_0528.JPG",
    photoCount: 15,
    photos: [
      { url: "/DEV_0528.JPG", caption: "મંદિર મંડપ દર્શન" },
    ],
  },
  {
    id: "2018-yagna",
    name: "2018 Yagna",
    nameGu: "૨૦૧૮ યજ્ઞ ઉત્સવ",
    category: "yagna",
    year: "2018",
    coverImage: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
    photoCount: 16,
    photos: [
      { url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg", caption: "માતાજી સિંહાસન દર્શન" },
    ],
  },
  {
    id: "2018-jinnodhar",
    name: "2018 Jinnodhar",
    nameGu: "૨૦૧૮ જીર્ણોદ્ધાર મહોત્સવ",
    category: "jinnodhar",
    year: "2018",
    coverImage: "/DEV_0528.JPG",
    photoCount: 25,
    photos: [
      { url: "/DEV_0528.JPG", caption: "નૂતન મંદિર નિર્માણ અને મંડપ દર્શન" },
      { url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg", caption: "શ્રી માતાજી સુવર્ણ સિંહાસન પ્રતિષ્ઠા" },
    ],
  },
  {
    id: "2017-yagna",
    name: "2017 Yagna",
    nameGu: "૨૦૧૭ યજ્ઞ",
    category: "yagna",
    year: "2017",
    coverImage: "/DEV_0528.JPG",
    photoCount: 18,
    photos: [
      { url: "/DEV_0528.JPG", caption: "૨૦૧૭ યજ્ઞ દર્શન" },
    ],
  },
  {
    id: "2017-shilanays-jal",
    name: "2017 Shilanays Jal Yatra",
    nameGu: "૨૦૧૭ શિલાન્યાસ જલ યાત્રા",
    category: "jinnodhar",
    year: "2017",
    coverImage: "/DEV_0379.JPG",
    photoCount: 30,
    photos: [
      { url: "/DEV_0379.JPG", caption: "શિલાન્યાસ પ્રવેશદ્વાર દર્શન" },
    ],
  },
  {
    id: "2017-sneh-milan",
    name: "2017 Sneh Milan",
    nameGu: "૨૦૧૭ સ્નેહ મિલન",
    category: "sneh-milan",
    year: "2017",
    coverImage: "/DEV_0525.JPG",
    photoCount: 20,
    photos: [
      { url: "/DEV_0525.JPG", caption: "કાબરીયા પરિવાર ભવન સ્નેહ મિલન" },
    ],
  },
  {
    id: "2016-yagna",
    name: "2016 Yagna",
    nameGu: "૨૦૧૬ યજ્ઞ",
    category: "yagna",
    year: "2016",
    coverImage: "/DEV_0528.JPG",
    photoCount: 14,
    photos: [
      { url: "/DEV_0528.JPG", caption: "૨૦૧૬ મંદિર દર્શન" },
    ],
  },
  {
    id: "2016-sneh-milan",
    name: "2016 Sneh Milan",
    nameGu: "૨૦૧૬ સ્નેહ મિલન",
    category: "sneh-milan",
    year: "2016",
    coverImage: "/DEV_0379.JPG",
    photoCount: 15,
    photos: [
      { url: "/DEV_0379.JPG", caption: "૨૦૧૬ પરિસર સ્નેહ મિલન" },
    ],
  },
  {
    id: "2015-yagna",
    name: "2015 Yagna",
    nameGu: "૨૦૧૫ યજ્ઞ",
    category: "yagna",
    year: "2015",
    coverImage: "/DEV_0431.JPG",
    photoCount: 16,
    photos: [
      { url: "/DEV_0431.JPG", caption: "૨૦૧૫ પાવન સ્થાનક દર્શન" },
    ],
  },
  {
    id: "2015-sneh-milan",
    name: "2015 Sneh Milan",
    nameGu: "૨૦૧૫ સ્નેહ મિલન",
    category: "sneh-milan",
    year: "2015",
    coverImage: "/DEV_0525.JPG",
    photoCount: 18,
    photos: [
      { url: "/DEV_0525.JPG", caption: "પરિવાર સ્નેહ મિલન" },
    ],
  },
  {
    id: "2014-yagna",
    name: "2014 Yagna",
    nameGu: "૨૦૧૪ યજ્ઞ",
    category: "yagna",
    year: "2014",
    coverImage: "/DEV_0528.JPG",
    photoCount: 14,
    photos: [
      { url: "/DEV_0528.JPG", caption: "૨૦૧૪ યજ્ઞ દર્શન" },
    ],
  },
  {
    id: "2014-sneh-milan",
    name: "2014 Sneh Milan",
    nameGu: "૨૦૧૪ સ્નેહ મિલન",
    category: "sneh-milan",
    year: "2014",
    coverImage: "/DEV_0379.JPG",
    photoCount: 17,
    photos: [
      { url: "/DEV_0379.JPG", caption: "૨૦૧૪ સ્નેહ મિલન પરિસર" },
    ],
  },
  {
    id: "2013-yagna",
    name: "2013 Yagna",
    nameGu: "૨૦૧૩ યજ્ઞ",
    category: "yagna",
    year: "2013",
    coverImage: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
    photoCount: 12,
    photos: [
      { url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg", caption: "૨૦૧૩ માતાજી દર્શન" },
    ],
  },
  {
    id: "2012-yagna",
    name: "2012 Yagna",
    nameGu: "૨૦૧૨ યજ્ઞ",
    category: "yagna",
    year: "2012",
    coverImage: "/DEV_0528.JPG",
    photoCount: 11,
    photos: [
      { url: "/DEV_0528.JPG", caption: "૨૦૧૨ યજ્ઞ દર્શન" },
    ],
  },
  {
    id: "2004-11-yagna",
    name: "2004-11 Yagna",
    nameGu: "૨૦૦૪-૧૧ યજ્ઞ સ્મૃતિ",
    category: "yagna",
    year: "2004-2011",
    coverImage: "/DEV_0431.JPG",
    photoCount: 35,
    photos: [
      { url: "/DEV_0431.JPG", caption: "પાવન સ્થાનક સ્મૃતિ" },
    ],
  },
  {
    id: "1995-96-jinnoddhar",
    name: "1995-96 Jinnoddhar",
    nameGu: "૧૯૯૫-૯૬ નૂતન જીર્ણોદ્ધાર",
    category: "jinnodhar",
    year: "1995-1996",
    coverImage: "/DEV_0528.JPG",
    photoCount: 22,
    photos: [
      { url: "/DEV_0528.JPG", caption: "પ્રથમ સ્થાપના & જીર્ણોદ્ધાર" },
    ],
  },
  {
    id: "mataji-photo-mandir",
    name: "Mataji Photo for Mandir",
    nameGu: "માતાજી ફોટા - મંદિર",
    category: "darshan",
    year: "Darshan",
    coverImage: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
    photoCount: 18,
    photos: [
      { url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg", caption: "શ્રી માતાજી પાવન સિંહાસન" },
    ],
  },
  {
    id: "mataji-photo-2023-24",
    name: "Mataji Photo 2023-24",
    nameGu: "માતાજી વિશેષ ફોટા ૨૦૨૩-૨૪",
    category: "darshan",
    year: "2023-2024",
    coverImage: "/DEV_0431.JPG",
    photoCount: 20,
    photos: [
      { url: "/DEV_0431.JPG", caption: "શ્રી સુરા પૂરા દાદા અને માતાજી દર્શન" },
    ],
  },
];

// Backward compatibility alias
export const GALLERY_DATA = GALLERY_FOLDERS.map((f) => ({
  year: f.year || f.name,
  title: f.name,
  photos: f.photos,
  videos: f.videos || [],
}));
