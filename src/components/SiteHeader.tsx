import Link from "next/link";
import { Shell } from "@/components/Shell";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-fog/70 bg-paper/95 backdrop-blur-sm">
      <Shell className="flex h-[56px] items-center justify-between gap-6 sm:h-[64px]">
        <Link
          href="/"
          className="font-display text-[22px] font-bold leading-none tracking-tight text-pine"
        >
          outdoor-lab
        </Link>
        <nav className="flex items-center gap-5 text-[15px] font-medium text-moss sm:gap-8 sm:text-[16px]">
          <Link href="/#gallery" className="hover:text-pine">
            写真一覧
          </Link>
          <Link href="/terms" className="hover:text-pine">
            利用条件
          </Link>
          <Link href="/#contact" className="hover:text-pine">
            撮影依頼・ご相談
          </Link>
        </nav>
      </Shell>
    </header>
  );
}
