import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fog/80 px-4 py-4 sm:px-[30px] sm:py-5">
      <div className="flex flex-col gap-3 text-sm text-moss md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-8">
          <p className="font-display text-base font-semibold leading-none text-pine">
            outdoor-lab
          </p>
          <nav
            aria-label="フッター"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <Link href="/#gallery" className="leading-none hover:text-pine">
              写真一覧
            </Link>
            <Link href="/terms" className="leading-none hover:text-pine">
              利用条件
            </Link>
            <Link href="/#contact" className="leading-none hover:text-pine">
              撮影依頼・ご相談
            </Link>
          </nav>
        </div>
        <p className="text-sage md:shrink-0 md:text-right">
          撮影／デザイン／ライティング
        </p>
      </div>
    </footer>
  );
}
