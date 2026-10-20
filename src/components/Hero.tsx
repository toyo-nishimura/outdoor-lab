import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt="霧のかかった森と水辺の風景"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,31,24,0.45) 0%, rgba(15,31,24,0.35) 45%, rgba(15,31,24,0.72) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="animate-hero-fade max-w-xl text-2xl font-medium leading-snug text-white sm:text-3xl md:text-4xl">
            アウトドアの空気を、そのまま使える素材棚。
          </h1>
          <p className="animate-hero-fade-delay mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            キャンプ・山・水辺。撮影と制作で困ったときの、現場寄りの写真ラボ。
          </p>
          <div className="animate-hero-fade-delay-2 mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@outdoor-lab.example?subject=撮影の相談"
              className="inline-flex items-center justify-center bg-ember px-5 py-3 text-sm font-semibold text-white transition hover:bg-ember-deep"
            >
              撮影の相談
            </a>
            <Link
              href="/#gallery"
              className="inline-flex items-center justify-center border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              素材を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
