"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Shell } from "@/components/Shell";
import { site } from "@/data/site";

const textNav = site.nav.filter((item) => !item.cta);
const ctaNav = site.nav.find((item) => item.cta);

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
      {/* Pexels Navbar: h80, pad 30, max 1440/1600 */}
      <Shell className="flex h-[80px] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[22px] font-bold leading-none tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav
            className="flex items-center gap-[46px] text-[17px] font-medium text-ink"
            aria-label="メイン"
          >
            {textNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:opacity-70"
                >
                  {item.label}
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
              {ctaNav.label}
            </CtaLink>
          ) : null}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Shell>

      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <Shell className="flex flex-col gap-1 py-4">
            {textNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-[17px] font-medium text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-3 text-[17px] font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
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
                {ctaNav.label}
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
