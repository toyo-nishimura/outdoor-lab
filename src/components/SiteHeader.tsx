import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-fog/80 bg-paper/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-[30px]">
        <Link
          href="/"
          className="font-display text-base font-bold tracking-tight text-pine sm:text-lg"
        >
          outdoor-lab
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium text-moss sm:gap-4">
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
      </div>
    </header>
  );
}
