"use client";

import { Shell } from "@/components/Shell";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function Inquiry() {
  const { t } = useI18n();

  return (
    <section id="contact" className="border-t border-line bg-bg py-12 sm:py-16">
      <Shell>
        <div className="max-w-2xl">
          <h2 className="font-display text-[22px] font-bold tracking-tight text-ink sm:text-[26px]">
            {t("inquiryHeading")}
          </h2>
          {[t("inquiry1"), t("inquiry2"), t("inquiry3")].map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-3 text-[15px] leading-relaxed text-muted sm:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={site.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-ink px-5 text-[15px] font-semibold text-white hover:opacity-90"
            >
              {t("portfolioCta")}
            </a>
            <a
              href={site.inquiryFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-ink px-5 text-[15px] font-semibold text-ink hover:bg-chip"
            >
              {t("contactCta")}
            </a>
          </div>
        </div>
      </Shell>
    </section>
  );
}
