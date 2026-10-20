export type PhotoCategory =
  | "キャンプ"
  | "山"
  | "水辺"
  | "森"
  | "街歩き";

/** photo = still; video = externally hosted (YouTube/Vimeo/etc.), never on Firebase Hosting */
export type MediaType = "photo" | "video";

export type MediaItem = {
  id: string;
  title: string;
  category: PhotoCategory;
  location: string;
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

/** Primary visible set — stills from walks / location shoots */
export const photos: MediaItem[] = [
  {
    id: "sunset-bay",
    title: "夕暮れの入り江",
    category: "水辺",
    location: "海岸",
    mediaType: "photo",
    src: "/photos/sunset-bay.jpg",
    credit: "outdoor-lab",
    creditUrl: "/",
    width: 2304,
    height: 1536,
  },
  {
    id: "river-dawn",
    title: "川の夜明け",
    category: "山",
    location: "河畔",
    mediaType: "photo",
    src: "/photos/river-dawn.jpg",
    credit: "outdoor-lab",
    creditUrl: "/",
    width: 2304,
    height: 1536,
  },
  {
    id: "river-mist",
    title: "朝靄の川辺",
    category: "森",
    location: "河畔",
    mediaType: "photo",
    src: "/photos/river-mist.jpg",
    credit: "outdoor-lab",
    creditUrl: "/",
    width: 1536,
    height: 2304,
  },
  {
    id: "camp-morning",
    title: "朝のキャンプ",
    category: "キャンプ",
    location: "林縁",
    mediaType: "photo",
    src: "/photos/camp-morning.jpg",
    credit: "outdoor-lab",
    creditUrl: "/",
    width: 2304,
    height: 1536,
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
