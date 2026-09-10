export interface PhotoItem {
  url: string;
  caption?: string;
}

export interface VideoItem {
  youtubeId: string;
  caption?: string;
}

export interface GalleryYearItem {
  year: string;
  title: string;
  photos: PhotoItem[];
  videos: VideoItem[];
}

export const GALLERY_DATA: GalleryYearItem[] = [
  {
    year: "2021",
    title: "2021 Yagna & Mandir Darshan",
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
    videos: []
  },
  {
    year: "2019",
    title: "2019 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2018",
    title: "2018 Jinnodhar & Yagna",
    photos: [
      {
        url: "/DEV_0528.JPG",
        caption: "નૂતન મંદિર નિર્માણ અને મંડપ દર્શન",
      },
      {
        url: "/Mataji%20Sihasan%20Madh%20Horizontal.jpg",
        caption: "શ્રી માતાજી સુવર્ણ સિંહાસન પ્રતિષ્ઠા",
      },
    ],
    videos: []
  },
  {
    year: "2017",
    title: "2017 Silanyas & Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2016",
    title: "2016 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2015",
    title: "2015 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2014",
    title: "2014 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2013",
    title: "2013 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2012",
    title: "2012 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "2011",
    title: "2011 Yagna",
    photos: [],
    videos: []
  },
  {
    year: "1995-96",
    title: "1995-96 Jinnodhar",
    photos: [],
    videos: []
  }
];
