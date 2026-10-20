export type PhotoCategory =
  | "キャンプ"
  | "山"
  | "水辺"
  | "森"
  | "街歩き";

export type Locale = "ja" | "en";

export type LocalizedString = { ja: string; en: string };

/** photo = still; video = externally hosted (YouTube/Vimeo/etc.), never on Firebase Hosting */
export type MediaType = "photo" | "video";

export type MediaItem = {
  id: string;
  title: LocalizedString;
  category: PhotoCategory;
  location: LocalizedString;
  mediaType: MediaType;
  /** Still image or video poster/thumbnail */
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

export const categories: PhotoCategory[] = [
  "キャンプ",
  "山",
  "水辺",
  "森",
  "街歩き",
];

export const categoryLabels: Record<PhotoCategory, LocalizedString> = {
  キャンプ: { ja: "キャンプ", en: "Camping" },
  山: { ja: "山", en: "Mountains" },
  水辺: { ja: "水辺", en: "Water" },
  森: { ja: "森", en: "Forest" },
  街歩き: { ja: "街歩き", en: "City walks" },
};

const katsuojiLocation: LocalizedString = {
  ja: "箕面の勝尾寺",
  en: "Katsuo-ji, Minoh",
};

/** Primary visible set — stills from walks / location shoots */
export const photos: MediaItem[] = [
  {
    id: "sunset-bay",
    title: { ja: "夕暮れの入り江", en: "Sunset inlet" },
    category: "水辺",
    location: { ja: "海岸", en: "Coast" },
    mediaType: "photo",
    src: "/photos/sunset-bay.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 2304,
    height: 1536,
  },
  {
    id: "river-dawn",
    title: { ja: "川の夜明け", en: "River at dawn" },
    category: "山",
    location: { ja: "河畔", en: "Riverside" },
    mediaType: "photo",
    src: "/photos/river-dawn.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 2304,
    height: 1536,
  },
  {
    id: "river-mist",
    title: { ja: "朝靄の川辺", en: "Misty riverside" },
    category: "森",
    location: { ja: "河畔", en: "Riverside" },
    mediaType: "photo",
    src: "/photos/river-mist.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 1536,
    height: 2304,
  },
  {
    id: "katsuoji-b0005003",
    title: { ja: "勝尾寺のだるま", en: "Daruma at Katsuo-ji" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005003.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005007",
    title: { ja: "格子のだるま", en: "Daruma in the lattice" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005007.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005016",
    title: { ja: "勝だるまの群れ", en: "Crowd of winning daruma" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005016.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2000,
  },
  {
    id: "katsuoji-b0005019",
    title: { ja: "勝尾寺・だるまの塔", en: "Daruma tower at Katsuo-ji" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005019.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 2250,
    height: 3000,
  },
  {
    id: "katsuoji-b0005022",
    title: { ja: "木の股のだるま", en: "Daruma in a tree fork" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005022.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005025",
    title: { ja: "棚のだるま", en: "Daruma on the ledge" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005025.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005049",
    title: { ja: "樹皮に勝だるま", en: "Daruma in the bark" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005049.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005063",
    title: { ja: "枝のだるま列", en: "Daruma along a branch" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005063.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
  {
    id: "katsuoji-b0005072",
    title: { ja: "格子に並ぶだるま", en: "Daruma filling the lattice" },
    category: "街歩き",
    location: katsuojiLocation,
    mediaType: "photo",
    src: "/photos/katsuoji-b0005072.jpg",
    credit: "Japanphoto-lab",
    creditUrl: "/",
    width: 3000,
    height: 2250,
  },
];

export function tLocal(value: LocalizedString, locale: Locale): string {
  return value[locale];
}

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
