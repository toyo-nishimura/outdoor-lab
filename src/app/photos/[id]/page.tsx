import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { getMediaOpenUrl, getPhotoById, photos } from "@/data/photos";

export function generateStaticParams() {
  return photos.map((photo) => ({ id: photo.id }));
}

export default async function PhotoDetailPage({
  params,
}: PageProps<"/photos/[id]">) {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) notFound();

  return (
    <>
      <header className="border-b border-fog/80 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-pine"
          >
            outdoor-lab
          </Link>
          <Link href="/#gallery" className="text-sm font-medium text-moss hover:text-pine">
            グリッドへ戻る
          </Link>
        </div>
      </header>

      <main className="px-5 py-10 sm:px-8 sm:py-14">
        <article className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden bg-mist">
            <Image
              src={photo.src}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <div>
              <p className="text-sm font-medium tracking-wide text-sage">
                {photo.mediaType === "video" ? "動画" : "写真"} ·{" "}
                {photo.category} · {photo.location}
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-pine sm:text-4xl">
                {photo.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-moss">
                素材利用の目安は利用条件をご確認ください。業務委託・撮影案件の相談も歓迎です。
                {photo.mediaType === "video"
                  ? " 動画は外部ホストで公開し、ここでは埋め込み／リンクのみ想定しています。"
                  : null}
              </p>
              <p className="mt-3 text-sm text-sage">
                クレジット：{" "}
                <a
                  href={photo.creditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-fog underline-offset-2 hover:text-pine"
                >
                  {photo.credit}
                </a>
                （MVPプレースホルダ）
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-52">
              <a
                href={getMediaOpenUrl(photo)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
              >
                {photo.mediaType === "video" ? "外部で再生" : "素材を開く"}
              </a>
              <Link
                href="/terms"
                className="inline-flex items-center justify-center border border-fog px-5 py-3 text-sm font-semibold text-pine transition hover:border-sage"
              >
                利用条件
              </Link>
              <a
                href={`mailto:hello@outdoor-lab.example?subject=素材について：${photo.title}`}
                className="inline-flex items-center justify-center border border-fog px-5 py-3 text-sm font-semibold text-moss transition hover:border-sage hover:text-pine"
              >
                この素材について相談
              </a>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
