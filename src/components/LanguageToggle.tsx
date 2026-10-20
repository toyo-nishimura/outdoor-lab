"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={`inline-flex items-center gap-1 text-[14px] font-medium ${className}`}
      role="group"
      aria-label={t("langToggle")}
    >
      <button
        type="button"
        className={
          locale === "ja"
            ? "px-1.5 text-ink"
            : "px-1.5 text-muted-2 hover:text-ink"
        }
        aria-pressed={locale === "ja"}
        onClick={() => setLocale("ja")}
      >
        JA
      </button>
      <span className="text-muted-2" aria-hidden>
        /
      </span>
      <button
        type="button"
        className={
          locale === "en"
            ? "px-1.5 text-ink"
            : "px-1.5 text-muted-2 hover:text-ink"
        }
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
