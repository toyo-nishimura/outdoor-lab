export type PhotoCategory = "キャンプ" | "山" | "水辺" | "森";

export type Photo = {
  id: string;
  title: string;
  category: PhotoCategory;
  location: string;
  src: string;
  credit: string;
  creditUrl: string;
  width: number;
  height: number;
};

export const categories: PhotoCategory[] = ["キャンプ", "山", "水辺", "森"];

export const photos: Photo[] = [
  {
    id: "camp-dawn",
    title: "夜明けのテント",
    category: "キャンプ",
    location: "山間キャンプ場",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&q=80",
    credit: "Christopher Burns / Unsplash",
    creditUrl: "https://unsplash.com/photos/man-sitting-on-hammock-in-front-of-campfire-WLUHO9A_xik",
    width: 1600,
    height: 1067,
  },
  {
    id: "camp-fire",
    title: "焚き火の残り火",
    category: "キャンプ",
    location: "林縁",
    src: "https://images.unsplash.com/photo-1478131143081-80fbd22d3d6d?auto=format&fit=crop&w=1600&q=80",
    credit: "Toa Heftiba / Unsplash",
    creditUrl: "https://unsplash.com/photos/people-sitting-on-chairs-near-trees-during-daytime-0rlfiRSb9kg",
    width: 1600,
    height: 1067,
  },
  {
    id: "mountain-ridge",
    title: "稜線の霧",
    category: "山",
    location: "高原トレイル",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
    credit: "Kalen Emsley / Unsplash",
    creditUrl: "https://unsplash.com/photos/aerial-photography-of-mountain-range-covered-with-snow-under-white-clouds-during-daytime-Bkci_8qcdvQ",
    width: 1600,
    height: 1067,
  },
  {
    id: "mountain-hike",
    title: "尾根を歩く",
    category: "山",
    location: "早朝ハイク",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80",
    credit: "Neil Thomas / Unsplash",
    creditUrl: "https://unsplash.com/photos/person-walking-on-hill-during-daytime-flNTjvtFtN4",
    width: 1600,
    height: 1067,
  },
  {
    id: "water-lake",
    title: "湖面の静けさ",
    category: "水辺",
    location: "高原の湖",
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=80",
    credit: "Luca Bravo / Unsplash",
    creditUrl: "https://unsplash.com/photos/body-of-water-surrounded-by-pine-trees-during-daytime-2EGuIR00nbE",
    width: 1600,
    height: 1067,
  },
  {
    id: "water-stream",
    title: "渓流の光",
    category: "水辺",
    location: "森の小川",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    credit: "Eberhard Grossgasteiger / Unsplash",
    creditUrl: "https://unsplash.com/photos/landscape-photography-of-mountains-covered-in-snow-S-2Ukb_VqpA",
    width: 1600,
    height: 1067,
  },
  {
    id: "forest-path",
    title: "苔むす小径",
    category: "森",
    location: "原生林",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    credit: "Jay Mantri / Unsplash",
    creditUrl: "https://unsplash.com/photos/green-leafed-trees-TFyi0EPVj7U",
    width: 1600,
    height: 1067,
  },
  {
    id: "forest-mist",
    title: "霧の針葉樹",
    category: "森",
    location: "朝靄の森",
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
    credit: "Sebastian Unrau / Unsplash",
    creditUrl: "https://unsplash.com/photos/forest-trees-photo-sp-p_amXckQ",
    width: 1600,
    height: 1067,
  },
  {
    id: "camp-lantern",
    title: "ランタンのあかり",
    category: "キャンプ",
    location: "夜のサイト",
    src: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=1600&q=80",
    credit: "Caleb Jones / Unsplash",
    creditUrl: "https://unsplash.com/photos/gray-tent-on-grass-field-during-daytime-vnayKq1neKE",
    width: 1600,
    height: 1067,
  },
];

export const heroImage = {
  src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80",
  credit: "Jay Mantri / Unsplash",
  creditUrl: "https://unsplash.com/photos/trees-near-body-of-water-TFyi0EPVj7U",
};

export function getPhotoById(id: string): Photo | undefined {
  return photos.find((photo) => photo.id === id);
}

export function getPhotosByCategory(category: PhotoCategory | "すべて"): Photo[] {
  if (category === "すべて") return photos;
  return photos.filter((photo) => photo.category === category);
}
