/**
 * Site-wide copy & links.
 * `inquiryFormUrl` → Google Form public response URL.
 */
const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtO-7gj37H0hRHemtrrgIOzKsXusCMdor4k0WVUaMQ6d1Sjg/viewform";

export const site = {
  name: "outdoor-lab",
  tagline: "日本の風景 · 撮影／デザイン／ライティング",
  headline:
    "日本の風景を、歩きながら撮って、そのまま使える素材棚。",
  supportingLine:
    "フォトウォークとロケで撮った風景を、記事・制作・案件用のフリー写真として公開しています。",
  searchPlaceholder: "日本の風景を検索",
  galleryHeading: "日本の風景",
  portfolioUrl: "https://takashi-portfolio.web.app/",
  portfolioContactUrl: "https://takashi-portfolio.web.app/#contact",
  /** 撮影依頼・ご相談 → Google Form */
  inquiryFormUrl,
  inquiryHeading: "写真撮影・ブランドビジュアル制作について",
  inquiryBody: [
    "当サイトの写真を撮影しているフォトグラファー／デザイナーが、風景ロケや出張撮影、記事用カット、ブランドのビジュアル制作などを承ります。歩きながら現場の空気感を大切に、イメージを一緒にかたちにします。",
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
