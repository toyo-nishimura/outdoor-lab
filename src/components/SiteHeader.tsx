import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-fog/80 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-pine sm:text-xl"
        >
          outdoor-lab
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-moss sm:gap-5">
          <Link href="/#gallery" className="hover:text-pine">
            素材
          </Link>
          <Link href="/terms" className="hover:text-pine">
            利用条件
          </Link>
          <a
            href="mailto:hello@outdoor-lab.example?subject=撮影の相談"
            className="hover:text-pine"
          >
            相談
          </a>
        </nav>
      </div>
    </header>
  );
}
