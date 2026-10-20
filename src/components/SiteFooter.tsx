"use client";

import Link from "next/link";
import { Shell } from "@/components/Shell";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-line bg-bg py-8">
      <Shell className="flex flex-col gap-4 text-[14px] text-muted md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-10">
          <p className="font-display text-[16px] font-semibold leading-none text-ink">
            {site.name}
          </p>
          <nav
            aria-label={t("footerNav")}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {site.nav.map((item) =>
              item.external ? (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="leading-none text-muted hover:text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="leading-none text-muted hover:text-ink"
                >
                  {t(item.labelKey)}
                </Link>
              ),
            )}
          </nav>
        </div>
        <p className="text-muted-2 md:shrink-0 md:text-right">
          {t("footerCaption")}
        </p>
      </Shell>
    </footer>
  );
}
