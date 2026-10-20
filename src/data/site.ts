/**
 * Site-wide copy & links.
 * `inquiryFormUrl` → Google Form public response URL.
 */
const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtO-7gj37H0hRHemtrrgIOzKsXusCMdor4k0WVUaMQ6d1Sjg/viewform";

export const site = {
  name: "outdoor-lab",
  tagline: "撮影／デザイン／ライティング",
  headline:
    "自然の息吹を、そのまま手元に。アウトドアに特化したフリー写真素材。",
  searchPlaceholder: "無料の写真を検索",
  galleryHeading: "無料の写真素材",
  portfolioUrl: "https://takashi-portfolio.web.app/",
  portfolioContactUrl: "https://takashi-portfolio.web.app/#contact",
  /** 撮影依頼・ご相談 → Google Form */
  inquiryFormUrl,
  inquiryHeading: "写真撮影・ブランドビジュアル制作について",
  inquiryBody: [
    "当サイトの写真を撮影しているフォトグラファー／デザイナーが、出張撮影や記事用の写真カット、ブランドのビジュアル制作などを承ります。現場の空気感を大切に、イメージを一緒にかたちにします。",
    "詳細や過去の実績・ポートフォリオは下記よりご覧ください。",
  ],
  nav: [
    { href: "/#gallery", label: "写真一覧", external: false, cta: false },
    { href: "/terms", label: "利用条件", external: false, cta: false },
    {
      href: inquiryFormUrl,
      label: "撮影依頼・ご相談",
      external: true,
      cta: true,
    },
  ] as const,
};
