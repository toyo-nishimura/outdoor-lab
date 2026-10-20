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
    <section id="gallery" className="scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
            Outdoor Shelf
          </h2>
          <p className="mt-3 text-base leading-relaxed text-moss sm:text-lg">
            カテゴリを選んで、制作に使えるアウトドア写真を眺める。
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={
                  active
                    ? "border border-pine bg-pine px-3.5 py-1.5 text-sm font-medium text-white"
                    : "border border-fog bg-transparent px-3.5 py-1.5 text-sm font-medium text-moss hover:border-sage hover:text-pine"
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((photo, index) => (
            <li
              key={photo.id}
              className="animate-grid-in mb-4 break-inside-avoid"
              style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
            >
              <Link
                href={`/photos/${photo.id}`}
                className="group relative block overflow-hidden"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine/80 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">
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
