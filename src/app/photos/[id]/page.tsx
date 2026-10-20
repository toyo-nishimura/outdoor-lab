import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhotoDetail } from "@/components/PhotoDetail";
import { getPhotoById, photos } from "@/data/photos";
import { site } from "@/data/site";

export function generateStaticParams() {
  return photos.map((photo) => ({ id: photo.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/photos/[id]">): Promise<Metadata> {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) return { title: "写真が見つかりません" };

  const titleJa = photo.title.ja;
  const titleEn = photo.title.en;
  const locationJa = photo.location.ja;
  const isVideo = photo.mediaType === "video";
  const kindJa = isVideo ? "動画" : "無料写真素材";
  const kindEn = isVideo ? "video" : "free stock photo";

  const pageTitle = `${titleJa}（${locationJa}）｜日本の風景の${kindJa}`;
  const description = `${titleJa}（${locationJa}）。Japanphoto-lab の日本風景${isVideo ? "動画" : "無料ストック写真"}。${titleEn} — ${kindEn} from Japanphoto-lab. Personal and commercial use under our terms.`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: `${pageTitle}｜Japanphoto-lab`,
      description,
      url: `${site.url}/photos/${photo.id}`,
      images: [{ url: photo.src, width: photo.width, height: photo.height, alt: titleJa }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle}｜Japanphoto-lab`,
      description,
      images: [photo.src],
    },
  };
}

export default async function PhotoDetailPage({
  params,
}: PageProps<"/photos/[id]">) {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) notFound();
  return <PhotoDetail photo={photo} />;
}
