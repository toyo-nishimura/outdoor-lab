export type PhotoCategory = "キャンプ" | "山" | "水辺" | "森";

/** photo = still; video = externally hosted (YouTube/Vimeo/etc.), never on Firebase Hosting */
export type MediaType = "photo" | "video";

export type MediaItem = {
  id: string;
  title: string;
  category: PhotoCategory;
  location: string;
  mediaType: MediaType;
  /** Still image or video poster/thumbnail (remote URL only). */
  src: string;
  /**
   * External watch/embed page for videos (not self-hosted).
   * Omit for photos. Prefer YouTube/Vimeo/etc. links later.
   */
  externalUrl?: string;
  credit: string;
  creditUrl: string;
  width: number;
  height: number;
};

/** @deprecated Prefer MediaItem — kept for existing imports */
export type Photo = MediaItem;

export const categories: PhotoCategory[] = ["キャンプ", "山", "水辺", "森"];

export const photos: MediaItem[] = [
  {
    id: "camp-dawn",
    title: "夜明けのテント",
    category: "キャンプ",
    location: "山間キャンプ場",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&h=1067&q=80",
    credit: "Christopher Burns / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/man-sitting-on-hammock-in-front-of-campfire-WLUHO9A_xik",
    width: 1600,
    height: 1067,
  },
  {
    id: "camp-fire",
    title: "焚き火の残り火",
    category: "キャンプ",
    location: "林縁",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&h=1600&q=80",
    credit: "Toa Heftiba / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/people-sitting-beside-bonfire-during-night-time-0rlfiRSb9kg",
    width: 1200,
    height: 1600,
  },
  {
    id: "mountain-ridge",
    title: "稜線の霧",
    category: "山",
    location: "高原トレイル",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=900&q=80",
    credit: "Kalen Emsley / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/aerial-photography-of-mountain-range-covered-with-snow-under-white-clouds-during-daytime-Bkci_8qcdvQ",
    width: 1600,
    height: 900,
  },
  {
    id: "mountain-hike",
    title: "尾根を歩く",
    category: "山",
    location: "早朝ハイク",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=1800&q=80",
    credit: "Neil Thomas / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/person-walking-on-hill-during-daytime-flNTjvtFtN4",
    width: 1200,
    height: 1800,
  },
  {
    id: "water-lake",
    title: "湖面の静けさ",
    category: "水辺",
    location: "高原の湖",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&h=1200&q=80",
    credit: "Luca Bravo / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/body-of-water-surrounded-by-pine-trees-during-daytime-2EGuIR00nbE",
    width: 1600,
    height: 1200,
  },
  {
    id: "water-stream",
    title: "渓流の光",
    category: "水辺",
    location: "森の小川",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=1600&q=80",
    credit: "Eberhard Grossgasteiger / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/landscape-photography-of-mountains-covered-in-snow-S-2Ukb_VqpA",
    width: 1200,
    height: 1600,
  },
  {
    id: "forest-path",
    title: "苔むす小径",
    category: "森",
    location: "原生林",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&h=1500&q=80",
    credit: "Jay Mantri / Unsplash",
    creditUrl: "https://unsplash.com/photos/green-leafed-trees-TFyi0EPVj7U",
    width: 1200,
    height: 1500,
  },
  {
    id: "forest-mist",
    title: "霧の針葉樹",
    category: "森",
    location: "朝靄の森",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&h=1000&q=80",
    credit: "Sebastian Unrau / Unsplash",
    creditUrl: "https://unsplash.com/photos/forest-trees-photo-sp-p_amXckQ",
    width: 1600,
    height: 1000,
  },
  {
    id: "camp-lantern",
    title: "ランタンのあかり",
    category: "キャンプ",
    location: "夜のサイト",
    mediaType: "photo",
    src: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=1400&h=1400&q=80",
    credit: "Caleb Jones / Unsplash",
    creditUrl:
      "https://unsplash.com/photos/gray-tent-on-grass-field-during-daytime-vnayKq1neKE",
    width: 1400,
    height: 1400,
  },
];

export function getPhotoById(id: string): MediaItem | undefined {
  return photos.find((item) => item.id === id);
}

export function getPhotosByCategory(
  category: PhotoCategory | "すべて",
): MediaItem[] {
  if (category === "すべて") return photos;
  return photos.filter((item) => item.category === category);
}

export function isVideo(item: MediaItem): boolean {
  return item.mediaType === "video";
}

/** Prefer external host for videos; fall back to still URL for photos. */
export function getMediaOpenUrl(item: MediaItem): string {
  if (item.mediaType === "video" && item.externalUrl) return item.externalUrl;
  return item.src;
}
