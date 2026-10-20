"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import {
  categories,
  photos,
  type PhotoCategory,
} from "@/data/photos";
import { site } from "@/data/site";

type Filter = PhotoCategory | "すべて";

const categoryThumbs: Record<PhotoCategory, string> = {
  山: "/photos/river-dawn.jpg",
  水辺: "/photos/sunset-bay.jpg",
  森: "/photos/river-mist.jpg",
  里: "/photos/camp-morning.jpg",
};

export function HomeGallery() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("すべて");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return photos.filter((photo) => {
      if (filter !== "すべて" && photo.category !== filter) return false;
      if (!q) return true;
      return (
        photo.title.toLowerCase().includes(q) ||
        photo.category.toLowerCase().includes(q) ||
        photo.location.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  const filters: Filter[] = ["すべて", ...categories];

  return (
    <>
      {/* Hero — Pexels: h≈360, pad 30 30 0, left copy + search */}
      <section className="bg-bg">
        <Shell className="flex min-h-[320px] flex-col justify-center gap-8 pb-0 pt-[30px] sm:min-h-[360px] sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="max-w-[728px] flex-1">
            <h1 className="font-display text-[28px] font-bold leading-[1.3] tracking-tight text-ink sm:text-[34px] lg:text-[38px]">
              {site.headline}
            </h1>
            <p className="mt-3 max-w-[40rem] text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {site.supportingLine}
            </p>
            {/* SearchInput_container: 72h, #f7f7f7, radius 12, pad 12 */}
            <form
              className="mt-[30px] flex h-[56px] items-center gap-2 rounded-[12px] bg-search p-3 sm:h-[72px]"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <span className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[15px] font-medium text-ink sm:inline-flex">
                写真
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={site.searchPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-muted-2 sm:text-[17px]"
                aria-label="写真を検索"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-muted hover:text-ink"
                aria-label="検索"
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          {/* Right visual — Pexels challenge-card slot; one outdoor still, no promo stickers */}
          <div className="relative mb-[30px] hidden h-[260px] w-[280px] shrink-0 overflow-hidden rounded-[16px] sm:block lg:h-[300px] lg:w-[300px]">
            <Image
              src="/photos/camp-morning.jpg"
              alt=""
              fill
              sizes="300px"
              className="object-cover"
              priority
            />
          </div>
        </Shell>
      </section>

      {/* Category pills — SearchTermPill: circle 38 + label, radius full */}
      <section className="border-t border-line bg-bg py-6">
        <Shell>
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-[20px] font-semibold text-ink sm:text-[22px]">
              {site.galleryHeading}
            </h2>
            <p className="text-[14px] text-muted-2">{items.length} 点</p>
          </div>
          <div className="flex gap-[10px] overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((item) => {
              const active = item === filter;
              const thumb =
                item === "すべて"
                  ? photos[0]?.src
                  : categoryThumbs[item as PhotoCategory];
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
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
        </Shell>
      </section>

      {/* Masonry — gap 24; 2 → 3 → 4 cols; not full-bleed (inside Shell 1600) */}
      <section id="gallery" className="scroll-mt-[80px] mb-[50px] bg-bg py-2 sm:py-4">
        <Shell>
          {items.length === 0 ? (
            <p className="py-16 text-center text-muted">
              該当する写真がありません。検索語やカテゴリを変えてみてください。
            </p>
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
                      alt={photo.title}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="h-auto w-full object-cover"
                    />
                    {photo.mediaType === "video" ? (
                      <span className="pointer-events-none absolute left-2 top-2 rounded bg-ink/85 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white">
                        動画
                      </span>
                    ) : null}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">
                        {photo.title}
                      </p>
                      <p className="text-xs text-white/80">{photo.category}</p>
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
