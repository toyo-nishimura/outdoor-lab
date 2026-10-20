"use client";

import { Shell } from "@/components/Shell";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <>
      <SiteHeader />
      <main className="bg-paper py-12 sm:py-16">
        <Shell>
          <article className="mx-auto max-w-3xl">
            <h1 className="font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
              {t("termsTitle")}
            </h1>
            <p className="mt-3 text-sm text-sage">{t("termsLead")}</p>

            <p className="mt-8 text-base leading-relaxed text-moss sm:text-lg">
              {t("termsIntro")}
            </p>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                {t("termsCan")}
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-ink">
                {[t("termsCan1"), t("termsCan2"), t("termsCan3")].map((text) => (
                  <li key={text.slice(0, 24)} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                {t("termsCannot")}
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-ink">
                {[
                  t("termsCannot1"),
                  t("termsCannot2"),
                  t("termsCannot3"),
                  t("termsCannot4"),
                  t("termsCannot5"),
                ].map((text) => (
                  <li key={text.slice(0, 24)} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                {t("termsExamples")}
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-moss">
                {[t("termsEx1"), t("termsEx2")].map((text) => (
                  <li key={text.slice(0, 24)} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                {t("termsUsage")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-moss sm:text-lg">
                {t("termsUsageBody")}
              </p>

              <h3 className="font-display mt-10 text-xl font-bold text-pine">
                {t("termsCaution")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {t("termsCautionBody")}
              </p>

              <h3 className="font-display mt-10 text-xl font-bold text-pine">
                {t("termsDisclaimer")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {t("termsDisclaimerBody")}
              </p>
            </section>

            <p className="mt-12 text-sm leading-relaxed text-sage">
              {t("termsInquiryHint")}
            </p>

            <a
              href={site.inquiryFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {t("termsInquiryCta")}
            </a>
          </article>
        </Shell>
      </main>
      <SiteFooter />
    </>
  );
}
