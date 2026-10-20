import Link from "next/link";
import { Shell } from "@/components/Shell";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-bg py-8">
      <Shell className="flex flex-col gap-4 text-[14px] text-muted md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
          <p className="font-display text-[16px] font-semibold leading-none text-ink">
            {site.name}
          </p>
          <nav
            aria-label="フッター"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {site.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="leading-none text-muted hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-muted-2 md:shrink-0 md:text-right">{site.tagline}</p>
      </Shell>
    </footer>
  );
}
