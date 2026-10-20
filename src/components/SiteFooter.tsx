import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fog/80 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-moss md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <p className="font-display text-base font-semibold leading-none text-pine">
            outdoor-lab
          </p>
          <nav
            aria-label="フッター"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <Link href="/#gallery" className="leading-none hover:text-pine">
              素材
            </Link>
            <Link href="/terms" className="leading-none hover:text-pine">
              利用条件
            </Link>
            <a
              href="mailto:hello@outdoor-lab.example?subject=撮影の相談"
              className="leading-none hover:text-pine"
            >
              相談
            </a>
          </nav>
        </div>
        <p className="text-sage md:shrink-0 md:text-right">
          撮影／デザイン／ライティング
        </p>
      </div>
    </footer>
  );
}
