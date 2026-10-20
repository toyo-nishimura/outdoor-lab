"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Shell } from "@/components/Shell";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

function CtaLink({
  href,
  external,
  children,
  className,
  onClick,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
  className: string;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const textNav = site.nav.filter((item) => !item.cta);
  const ctaNav = site.nav.find((item) => item.cta);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const ctaClassDesktop =
    "inline-flex h-11 shrink-0 items-center justify-center rounded-[8px] bg-ink px-4 text-[15px] font-semibold text-white hover:opacity-90";
  const ctaClassMobile =
    "mt-2 inline-flex h-12 items-center justify-center rounded-[8px] bg-ink px-4 text-[15px] font-semibold text-white";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <Shell className="flex h-[80px] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[22px] font-bold leading-none tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <nav
            className="flex items-center gap-[46px] text-[17px] font-medium text-ink"
            aria-label={t("mainNav")}
          >
            {textNav.map((item) =>
              item.external ? (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="hover:opacity-70"
                >
                  {t(item.labelKey)}
                </Link>
              ),
            )}
          </nav>
          {ctaNav ? (
            <CtaLink
              href={ctaNav.href}
              external={ctaNav.external}
              className={ctaClassDesktop}
            >
              {t(ctaNav.labelKey)}
            </CtaLink>
          ) : null}
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-ink"
            aria-label={open ? t("menuClose") : t("menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <LanguageToggle />
        </div>
      </Shell>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <Shell className="flex flex-col gap-1 py-4">
            {textNav.map((item) =>
              item.external ? (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="py-3 text-[17px] font-medium text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="py-3 text-[17px] font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
              ),
            )}
            {ctaNav ? (
              <CtaLink
                href={ctaNav.href}
                external={ctaNav.external}
                className={ctaClassMobile}
                onClick={() => setOpen(false)}
              >
                {t(ctaNav.labelKey)}
              </CtaLink>
            ) : null}
          </Shell>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
