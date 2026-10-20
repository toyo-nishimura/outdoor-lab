import { notFound } from "next/navigation";
import { PhotoDetail } from "@/components/PhotoDetail";
import { getPhotoById, photos } from "@/data/photos";

export function generateStaticParams() {
  return photos.map((photo) => ({ id: photo.id }));
}

export default async function PhotoDetailPage({
  params,
}: PageProps<"/photos/[id]">) {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) notFound();
  return <PhotoDetail photo={photo} />;
}
