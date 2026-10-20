/**
 * Site-wide copy & links.
 * `inquiryFormUrl` → Google Form public response URL (all inquiry CTAs).
 */
const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdtO-7gj37H0hRHemtrrgIOzKsXusCMdor4k0WVUaMQ6d1Sjg/viewform";

export const site = {
  name: "outdoor-lab",
  tagline: "outdoor-lab · Photo Stock & Visual Practice / 撮影・デザイン",
  headline: "自然の息吹を、そのまま手元に。",
  supportingLines: [
    "キャンプやアウトドアをはじめ、ロケハンやフォトウォークで切り取った景色のストック。",
    "記事・デザイン制作にそのまま使えるフリー写真素材として公開しています。",
  ],
  searchPlaceholder: "無料の写真を検索",
  galleryHeading: "写真一覧",
  gallerySubtext: "キャンプ・山・水辺・森・街歩き",
  portfolioUrl: "https://takashi-portfolio.web.app/",
  /** 撮影依頼・ご相談 / お問い合わせ → Google Form only */
  inquiryFormUrl,
  inquiryHeading: "撮影のご依頼・ビジュアル制作について",
  inquiryBody: [
    "当サイトに掲載している写真は、すべてロケハンやフィールドワークの合間に撮影したカットです。",
    "本業では、デザイナー／フォトグラファーとして、出張撮影やブランドビジュアルの制作、記事用カットの撮影などを承っています。現場の空気感やストーリーを大切に、イメージをデザインと一緒に組み上げます。",
    "過去の実績や撮影のご相談は、ポートフォリオサイトよりお気軽にご覧ください。",
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
