"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const titleId = useId();
  const isVideo = photo.mediaType === "video";

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

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
                {isVideo ? t("videoBadge") : t("photoLabel")} · {category} ·{" "}
                {location}
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-pine sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-moss">
                {t("detailBody")}
                {isVideo ? t("detailBodyVideo") : null}
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
              {isVideo ? (
                <a
                  href={getMediaOpenUrl(photo)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
                >
                  {t("playExternal")}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
                >
                  {t("openMedia")}
                </button>
              )}
              <Link
                href="/terms"
                className="inline-flex items-center justify-center border border-fog px-5 py-3 text-sm font-semibold text-pine transition hover:border-sage"
              >
                {t("navTerms")}
              </Link>
            </div>
          </div>
        </article>

        <div className="mx-auto mt-12 max-w-5xl border-t border-fog/80 pt-10">
          <Link
            href="/#gallery"
            className="inline-flex items-center justify-center rounded-[8px] border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-chip"
          >
            {t("backToGallery")}
          </Link>
        </div>
      </main>
      <SiteFooter />

      {lightboxOpen && !isVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-sm hover:bg-white sm:right-6 sm:top-6"
            aria-label={t("closeMedia")}
            onClick={() => setLightboxOpen(false)}
          >
            <CloseIcon />
          </button>
          <div
            className="relative max-h-[min(92vh,1200px)] max-w-[min(96vw,1400px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {title}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element -- lightbox needs full asset, not optimized sizes */}
            <img
              src={photo.src}
              alt={title}
              width={photo.width}
              height={photo.height}
              className="max-h-[min(92vh,1200px)] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
