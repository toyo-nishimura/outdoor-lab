import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-white drop-shadow-sm sm:text-xl"
        >
          outdoor-lab
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-white/90">
          <Link href="/#gallery" className="hover:text-white">
            素材
          </Link>
          <Link href="/terms" className="hover:text-white">
            利用条件
          </Link>
          <a
            href="mailto:hello@outdoor-lab.example?subject=撮影の相談"
            className="hover:text-white"
          >
            相談
          </a>
        </nav>
      </div>
    </header>
  );
}
