"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  categories,
  getPhotosByCategory,
  type PhotoCategory,
} from "@/data/photos";

type Filter = PhotoCategory | "すべて";

export function PhotoGrid() {
  const [filter, setFilter] = useState<Filter>("すべて");
  const items = getPhotosByCategory(filter);
  const filters: Filter[] = ["すべて", ...categories];

  return (
    <section id="gallery" className="scroll-mt-14">
      {/* Compact filter strip — same side inset as header/grid (Pexels ~30px) */}
      <div className="border-b border-fog/80 px-4 py-1.5 sm:px-[30px]">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xs leading-snug text-moss sm:text-[13px]">
            自然の息吹を、そのまま手元に。アウトドアに特化したフリー写真素材。
          </p>
          <div className="flex flex-wrap gap-1">
            {filters.map((item) => {
              const active = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={
                    active
                      ? "bg-pine px-2.5 py-1 text-xs font-medium text-white"
                      : "bg-transparent px-2.5 py-1 text-xs font-medium text-moss hover:bg-mist hover:text-pine"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-bleed masonry: no max-width; modest side pad; tight gutters */}
      <div className="px-4 pt-1.5 pb-1.5 sm:px-[30px] sm:pt-2 sm:pb-2">
        <ul className="columns-2 gap-2 sm:columns-3 lg:columns-4 xl:columns-5">
          {items.map((photo, index) => (
            <li
              key={photo.id}
              className="animate-grid-in mb-2 break-inside-avoid"
              style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
            >
              <Link
                href={`/photos/${photo.id}`}
                className="group relative block overflow-hidden bg-mist"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                {photo.mediaType === "video" ? (
                  <span className="pointer-events-none absolute left-2 top-2 bg-pine/85 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white">
                    動画
                  </span>
                ) : null}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine/80 to-transparent px-2.5 pb-2.5 pt-8 opacity-0 transition group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{photo.title}</p>
                  <p className="text-xs text-white/80">{photo.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
