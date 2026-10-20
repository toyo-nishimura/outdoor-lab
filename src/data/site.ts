/**
 * Site-wide copy & links.
 * `inquiryFormUrl` → Google Form public response URL (all inquiry CTAs).
 */
const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtO-7gj37H0hRHemtrrgIOzKsXusCMdor4k0WVUaMQ6d1Sjg/viewform";

export const site = {
  name: "Japanphoto-lab",
  portfolioUrl: "https://takashi-portfolio.web.app/",
  /** 撮影依頼・ご相談 / お問い合わせ → Google Form only */
  inquiryFormUrl,
  nav: [
    { href: "/#gallery", labelKey: "navGallery" as const, external: false, cta: false },
    { href: "/terms", labelKey: "navTerms" as const, external: false, cta: false },
    {
      href: inquiryFormUrl,
      labelKey: "navInquiry" as const,
      external: true,
      cta: true,
    },
  ] as const,
};
