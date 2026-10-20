"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import {
  categoryLabels,
  getMediaOpenUrl,
  tLocal,
  type MediaItem,
} from "@/data/photos";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function PhotoDetail({ photo }: { photo: MediaItem }) {
  const { locale, t } = useI18n();
  const title = tLocal(photo.title, locale);
  const location = tLocal(photo.location, locale);
  const category = tLocal(categoryLabels[photo.category], locale);

  return (
    <>
      <header className="border-b border-fog/80 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-pine"
          >
            {site.name}
          </Link>
          <Link
            href="/#gallery"
            className="text-sm font-medium text-moss hover:text-pine"
          >
            {t("backToGrid")}
          </Link>
        </div>
      </header>

      <main className="px-5 py-10 sm:px-8 sm:py-14">
        <article className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden bg-mist">
            <Image
              src={photo.src}
              alt={title}
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
                {photo.mediaType === "video" ? t("videoBadge") : t("photoLabel")}{" "}
                · {category} · {location}
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-pine sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-moss">
                {t("detailBody")}
                {photo.mediaType === "video" ? t("detailBodyVideo") : null}
              </p>
              <p className="mt-3 text-sm text-sage">
                {t("creditLabel")}
                <a
                  href={photo.creditUrl}
                  className="underline decoration-fog underline-offset-2 hover:text-pine"
                >
                  {photo.credit}
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:min-w-52">
              <a
                href={getMediaOpenUrl(photo)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
              >
                {photo.mediaType === "video"
                  ? t("playExternal")
                  : t("openMedia")}
              </a>
              <Link
                href="/terms"
                className="inline-flex items-center justify-center border border-fog px-5 py-3 text-sm font-semibold text-pine transition hover:border-sage"
              >
                {t("navTerms")}
              </Link>
              <a
                href={site.inquiryFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-fog px-5 py-3 text-sm font-semibold text-moss transition hover:border-sage hover:text-pine"
              >
                {t("consultPhoto")}
              </a>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
