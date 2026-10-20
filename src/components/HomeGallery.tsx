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

type Filter = PhotoCategory | "すべて";

const categoryThumbs: Record<PhotoCategory, string> = {
  キャンプ:
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=120&h=120&q=80",
  山: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=120&h=120&q=80",
  水辺: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=120&h=120&q=80",
  森: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=120&h=120&q=80",
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
      {/* Hero band — ~360px Pexels-style: headline + search, optional promo */}
      <section className="border-b border-fog/60 bg-paper">
        <Shell className="flex min-h-[320px] flex-col justify-center gap-8 py-10 sm:min-h-[360px] sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:py-12">
          <div className="max-w-xl flex-1 animate-hero-fade">
            <h1 className="font-display text-[28px] font-bold leading-[1.25] tracking-tight text-pine sm:text-[36px] lg:text-[40px]">
              自然の息吹を、そのまま手元に。アウトドアに特化したフリー写真素材。
            </h1>
            <form
              className="mt-6 flex h-[56px] items-center gap-2 rounded-xl bg-[#f0f3f1] px-3 sm:h-[64px] sm:px-4"
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <span className="hidden shrink-0 rounded-lg bg-white px-3 py-2 text-sm font-medium text-moss sm:inline">
                写真
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="フリー写真を検索"
                className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-sage sm:text-[17px]"
                aria-label="写真を検索"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-moss hover:bg-white hover:text-pine"
                aria-label="検索"
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          {/* Thin outdoor promo — keeps Pexels left/right balance without ad cards */}
          <div className="relative hidden h-[220px] w-[280px] shrink-0 overflow-hidden rounded-2xl sm:block lg:h-[240px] lg:w-[320px]">
            <Image
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&h=600&q=80"
              alt="キャンプの夜明け"
              fill
              sizes="320px"
              className="object-cover animate-ken-burns"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine/75 to-transparent px-4 pb-4 pt-10">
              <p className="text-sm font-medium text-white">アウトドアの空気を、そのまま。</p>
            </div>
          </div>
        </Shell>
      </section>

      {/* Category pills — Pexels trending row with circular thumbs */}
      <section className="border-b border-fog/50 bg-paper py-5">
        <Shell>
          <div className="mb-3 flex items-end justify-between gap-4">
            <h2 className="font-display text-lg font-semibold text-pine sm:text-xl">
              無料の写真素材
            </h2>
            <p className="text-sm text-sage">{items.length} 点</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                      ? "flex shrink-0 items-center gap-2.5 rounded-full border border-pine bg-pine py-1.5 pl-1.5 pr-4 text-sm font-medium text-white"
                      : "flex shrink-0 items-center gap-2.5 rounded-full border border-fog bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium text-moss hover:border-sage hover:text-pine"
                  }
                >
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : null}
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
        </Shell>
      </section>

      {/* Masonry: 4 cols desktop, rounded thumbs, 12–16px gutters */}
      <section id="gallery" className="scroll-mt-20 bg-paper py-4 sm:py-5">
        <Shell>
          {items.length === 0 ? (
            <p className="py-16 text-center text-moss">
              該当する写真がありません。検索語やカテゴリを変えてみてください。
            </p>
          ) : (
            <ul className="columns-2 gap-[14px] md:columns-3 xl:columns-4">
              {items.map((photo, index) => (
                <li
                  key={photo.id}
                  className="animate-grid-in mb-[14px] break-inside-avoid"
                  style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
                >
                  <Link
                    href={`/photos/${photo.id}`}
                    className="group relative block overflow-hidden rounded-[10px] bg-mist"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    {photo.mediaType === "video" ? (
                      <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-pine/85 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white">
                        動画
                      </span>
                    ) : null}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine/80 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{photo.title}</p>
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
