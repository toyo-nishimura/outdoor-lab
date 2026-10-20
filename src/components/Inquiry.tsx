import { Shell } from "@/components/Shell";
import { site } from "@/data/site";

export function Inquiry() {
  return (
    <section id="contact" className="border-t border-line bg-bg py-12 sm:py-16">
      <Shell>
        <div className="max-w-2xl">
          <h2 className="font-display text-[22px] font-bold tracking-tight text-ink sm:text-[26px]">
            {site.inquiryHeading}
          </h2>
          {site.inquiryBody.map((paragraph) => (
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
              ポートフォリオを見る
            </a>
            {/* External form-ready: swap site.inquiryFormUrl → Google Form */}
            <a
              href={site.inquiryFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-ink px-5 text-[15px] font-semibold text-ink hover:bg-chip"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </Shell>
    </section>
  );
}
