import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fog/80 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-moss sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display font-semibold text-pine">outdoor-lab</p>
        <div className="flex flex-wrap gap-4">
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
        </div>
        <p className="text-sage">撮影／デザイン／ライティング</p>
      </div>
    </footer>
  );
}
