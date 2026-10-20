"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import {
  categories,
  categoryLabels,
  formatDuration,
  photos,
  tLocal,
  type PhotoCategory,
} from "@/data/photos";
import { useI18n } from "@/lib/i18n";

type Filter = PhotoCategory | "すべて";

const categoryThumbs: Record<PhotoCategory, string> = {
  "街・路地裏": "/photos/stock-cb00bb30-2df1-4661-a934-9e425e4360c9.jpg",
  "寺社仏閣": "/photos/katsuoji-b0005016.jpg",
  "風景・花": "/photos/stock-c9a833fd-1d69-4615-88c3-84620c952045.jpg",
  "アウトドア": "/photos/river-dawn.jpg",
};

export function HomeGallery() {
  const { locale, t } = useI18n();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("すべて");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return photos.filter((photo) => {
      if (filter !== "すべて" && photo.category !== filter) return false;
      if (!q) return true;
      return (
        photo.title.ja.toLowerCase().includes(q) ||
        photo.title.en.toLowerCase().includes(q) ||
        photo.category.toLowerCase().includes(q) ||
        photo.location.ja.toLowerCase().includes(q) ||
        photo.location.en.toLowerCase().includes(q) ||
        categoryLabels[photo.category].en.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  const filters: Filter[] = ["すべて", ...categories];

  return (
    <>
      <section className="bg-bg">
        <Shell className="flex min-h-[320px] flex-col justify-center gap-8 pb-0 pt-[30px] sm:min-h-[360px] sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-[728px] flex-1">
            <h1 className="font-display text-[28px] font-bold leading-[1.3] tracking-tight text-ink sm:text-[34px] lg:text-[38px]">
              {t("headline")}
            </h1>
            <div className="mt-3 max-w-[40rem] space-y-1 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              <p>{t("support1")}</p>
              <p>{t("support2")}</p>
            </div>
            <form
              className="mt-[30px] flex h-[56px] items-center gap-2 rounded-[12px] bg-search p-3 sm:h-[72px]"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <span className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[15px] font-medium text-ink sm:inline-flex">
                {t("photoChip")}
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-muted-2 sm:text-[17px]"
                aria-label={t("searchAria")}
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-muted hover:text-ink"
                aria-label={t("searchSubmit")}
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          <div className="relative mb-[30px] hidden h-[260px] w-[280px] shrink-0 overflow-hidden rounded-[16px] sm:block lg:h-[300px] lg:w-[300px]">
            <Image
              src="/photos/katsuoji-b0005003.jpg"
              alt=""
              fill
              sizes="300px"
              className="object-cover"
              priority
            />
          </div>
        </Shell>
      </section>

      <section className="border-t border-line bg-bg py-[35px]">
        <Shell>
          <div className="mb-[30px] flex items-end justify-between gap-4">
            <div>
              <h2 className="mb-[10px] font-display text-[20px] font-semibold text-ink sm:text-[22px]">
                {t("galleryHeading")}
              </h2>
              <p className="mt-1 text-[14px] text-muted-2">
                {t("gallerySubtext")}
              </p>
              <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-muted">
                {t("galleryLead")}
              </p>
            </div>
            <p className="text-[14px] text-muted-2">
              {items.length} {t("countSuffix")}
            </p>
          </div>
          <div className="flex gap-[10px] overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((item) => {
              const active = item === filter;
              const thumb =
                item === "すべて"
                  ? photos[0]?.src
                  : categoryThumbs[item as PhotoCategory];
              const label =
                item === "すべて"
                  ? t("allFilter")
                  : tLocal(categoryLabels[item], locale);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={
                    active
                      ? "flex h-12 shrink-0 items-center gap-2.5 rounded-full bg-ink py-1.5 pl-1.5 pr-4 text-[15px] font-medium text-white"
                      : "flex h-12 shrink-0 items-center gap-2.5 rounded-full border border-line bg-bg py-1.5 pl-1.5 pr-4 text-[15px] font-medium text-ink hover:bg-chip"
                  }
                >
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt=""
                      width={38}
                      height={38}
                      className="h-[38px] w-[38px] rounded-full object-cover"
                    />
                  ) : null}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </Shell>
      </section>

      <section
        id="gallery"
        className="scroll-mt-[80px] mb-[50px] bg-bg py-2 sm:py-4"
      >
        <Shell>
          {items.length === 0 ? (
            <p className="py-16 text-center text-muted">{t("emptyGallery")}</p>
          ) : (
            <ul className="columns-2 gap-6 md:columns-3 xl:columns-4">
              {items.map((photo) => (
                <li key={photo.id} className="mb-6 break-inside-avoid">
                  <Link
                    href={`/photos/${photo.id}`}
                    className="group relative block overflow-hidden rounded-[8px] bg-chip"
                  >
                    <Image
                      src={photo.src}
                      alt={tLocal(photo.title, locale)}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="h-auto w-full object-cover"
                    />
                    {photo.mediaType === "video" &&
                    typeof photo.durationSeconds === "number" ? (
                      <span
                        className="pointer-events-none absolute left-2 top-2 rounded-full bg-[#f0f0f0]/95 px-2 py-0.5 text-[11px] font-medium tabular-nums leading-none text-ink shadow-sm"
                        aria-label={`${t("videoBadge")} ${formatDuration(photo.durationSeconds)}`}
                      >
                        {formatDuration(photo.durationSeconds)}
                      </span>
                    ) : null}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">
                        {tLocal(photo.title, locale)}
                      </p>
                      <p className="text-xs text-white/80">
                        {tLocal(categoryLabels[photo.category], locale)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Shell>
      </section>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20L16.5 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
