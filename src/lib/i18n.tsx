"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/data/photos";

const STORAGE_KEY = "japanphoto-lab-locale";

type Dict = Record<string, string>;

const ja: Dict = {
  navGallery: "写真一覧",
  navTerms: "利用条件",
  navInquiry: "撮影依頼・ご相談",
  headline: "自然の息吹を、そのまま手元に。",
  support1:
    "キャンプやアウトドアをはじめ、ロケハンやフォトウォークで切り取った景色のストック。",
  support2:
    "記事・デザイン制作にそのまま使えるフリー写真素材として公開しています。",
  searchPlaceholder: "無料の写真を検索",
  searchAria: "写真を検索",
  searchSubmit: "検索",
  photoChip: "写真",
  galleryHeading: "写真一覧",
  gallerySubtext: "キャンプ・山・水辺・森・街歩き",
  allFilter: "すべて",
  countSuffix: "点",
  emptyGallery: "該当する写真がありません。検索語やカテゴリを変えてみてください。",
  videoBadge: "動画",
  inquiryHeading: "撮影のご依頼・ビジュアル制作について",
  inquiry1:
    "当サイトに掲載している写真は、すべてロケハンやフィールドワークの合間に撮影したカットです。",
  inquiry2:
    "本業では、デザイナー／フォトグラファーとして、出張撮影やブランドビジュアルの制作、記事用カットの撮影などを承っています。現場の空気感やストーリーを大切に、イメージをデザインと一緒に組み上げます。",
  inquiry3:
    "過去の実績や撮影のご相談は、ポートフォリオサイトよりお気軽にご覧ください。",
  portfolioCta: "ポートフォリオを見る",
  contactCta: "お問い合わせ",
  footerCaption: "Japanphoto-lab · Photo Stock & Visual Practice / 撮影・デザイン",
  menuOpen: "メニューを開く",
  menuClose: "メニューを閉じる",
  mainNav: "メイン",
  footerNav: "フッター",
  langToggle: "言語",
  termsTitle: "利用条件",
  termsLead: "シンプルなライセンス",
  termsIntro:
    "Japanphoto-lab の写真は、無料でダウンロードして利用できます。ロケハンやフォトウォークで切り取った景色のストックとして公開しています。",
  termsCan: "できること",
  termsCan1:
    "Japanphoto-lab の写真は無料で利用できます。個人・商用を問わず、ダウンロードして使えます。",
  termsCan2:
    "クレジット（出典表示）は必須ではありません。表示していただけると嬉しいですが、任意です。",
  termsCan3:
    "写真に変更を加えることができます。トリミングや色調整など、自由に編集してください。",
  termsCannot: "できないこと",
  termsCannot1:
    "特定可能な人物のイメージを損なったり、攻撃・誹謗中傷するような使い方はできません。",
  termsCannot2:
    "変更を加えていない写真そのものを、ポスター・印刷物・物理製品などとして単独で販売することはできません。",
  termsCannot3:
    "画像に登場する人物やブランドが、あなたの製品・サービスを推奨しているように見せないでください。",
  termsCannot4:
    "他の写真素材サイトや壁紙プラットフォームなどで再配布・再販売しないでください。",
  termsCannot5:
    "商標、デザインマーク、商号、サービスマークの一部として使用しないでください。",
  termsExamples: "使い方の例",
  termsEx1:
    "Webサイト、ブログ、アプリ、ニュースレター、プレゼン資料などでの利用。",
  termsEx2:
    "チラシ、招待状、雑誌、書籍のカバーなど、製品・サービスの宣伝・制作物への利用。",
  termsUsage: "写真の利用について",
  termsUsageBody:
    "当サイトに掲載している写真は、すべて無料で自由にご利用いただけます（商用・個人問わず）。Webサイト、SNS、印刷物、動画などの素材としてお使いください。",
  termsCaution: "ご注意いただきたいこと",
  termsCautionBody:
    "写真の中に、神社仏閣、特定の建物、私有地、登録商標や看板などが写り込んでいる場合があります。こうした被写体を含む写真を利用する場合、商用利用や媒体の性質によっては、権利者や所有者への確認・許可取りが必要となることがあります。ご利用の際は、ご自身の責任において適切にご判断・ご対応をお願いいたします。",
  termsDisclaimer: "免責事項",
  termsDisclaimerBody:
    "当サイトの写真は予告なく公開停止・削除する場合があります。また、当サイトの写真を利用したことによって発生したトラブルや損害、損失について、当方は一切の責任を負いかねます。あらかじめご了承ください。",
  termsInquiryHint:
    "撮影・制作のご相談はホームの「撮影依頼・ご相談」からどうぞ。",
  termsInquiryCta: "撮影依頼・ご相談へ",
  backToGrid: "グリッドへ戻る",
  openMedia: "素材を開く",
  playExternal: "外部で再生",
  photoLabel: "写真",
  detailBody:
    "素材利用の目安は利用条件をご確認ください。業務委託・撮影案件の相談も歓迎です。",
  detailBodyVideo:
    " 動画は外部ホストで公開し、ここでは埋め込み／リンクのみ想定しています。",
  creditLabel: "クレジット：",
  consultPhoto: "この素材について相談",
};

const en: Dict = {
  navGallery: "Photos",
  navTerms: "Terms",
  navInquiry: "Commission inquiry",
  headline: "Bring the breath of nature to your work.",
  support1:
    "A stock of scenes from camping, outdoor days, location scouts, and photo walks.",
  support2:
    "Published as free photos you can use straight in articles and design work.",
  searchPlaceholder: "Search free photos",
  searchAria: "Search photos",
  searchSubmit: "Search",
  photoChip: "Photos",
  galleryHeading: "Photos",
  gallerySubtext: "Camping · Mountains · Water · Forest · City walks",
  allFilter: "All",
  countSuffix: "photos",
  emptyGallery: "No photos match. Try another search or category.",
  videoBadge: "Video",
  inquiryHeading: "Commissions & visual production",
  inquiry1:
    "Every photo on this site was made during location scouts and fieldwork.",
  inquiry2:
    "As a designer / photographer, I take on location shoots, brand visuals, and editorial stills—building the mood and story together with design.",
  inquiry3:
    "See past work and reach out for shoots via the portfolio site.",
  portfolioCta: "View portfolio",
  contactCta: "Contact",
  footerCaption: "Japanphoto-lab · Photo Stock & Visual Practice",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mainNav: "Main",
  footerNav: "Footer",
  langToggle: "Language",
  termsTitle: "Terms of use",
  termsLead: "A simple license",
  termsIntro:
    "Japanphoto-lab photos are free to download and use. They are published as a stock of scenes from location scouts and photo walks.",
  termsCan: "You may",
  termsCan1:
    "Use Japanphoto-lab photos for free—personal or commercial—after download.",
  termsCan2:
    "Credit is not required (appreciated, but optional).",
  termsCan3:
    "Edit photos freely—crop, color grade, and more.",
  termsCannot: "You may not",
  termsCannot1:
    "Use photos in ways that harm or defame identifiable people.",
  termsCannot2:
    "Sell an unaltered photo on its own as a poster, print, or physical product.",
  termsCannot3:
    "Imply that people or brands in an image endorse your product or service.",
  termsCannot4:
    "Redistribute or resell on other stock or wallpaper platforms.",
  termsCannot5:
    "Use photos as part of a trademark, design mark, trade name, or service mark.",
  termsExamples: "Examples",
  termsEx1: "Websites, blogs, apps, newsletters, presentations.",
  termsEx2:
    "Flyers, invitations, magazines, book covers, and other promotional materials.",
  termsUsage: "About using the photos",
  termsUsageBody:
    "All photos on this site are free to use (commercial or personal)—for web, social, print, video, and similar.",
  termsCaution: "Please note",
  termsCautionBody:
    "Some photos may include shrines, temples, specific buildings, private property, trademarks, or signs. Depending on commercial use and medium, you may need permission from rights holders. Please judge and handle responsibly.",
  termsDisclaimer: "Disclaimer",
  termsDisclaimerBody:
    "Photos may be removed without notice. We are not liable for any trouble, damage, or loss arising from use of these photos.",
  termsInquiryHint: "For shoot or production inquiries, use Commission inquiry.",
  termsInquiryCta: "Commission inquiry",
  backToGrid: "Back to grid",
  openMedia: "Open file",
  playExternal: "Play externally",
  photoLabel: "Photo",
  detailBody:
    "See Terms for usage. Commissions and shoot requests are welcome.",
  detailBodyVideo:
    " Videos are hosted externally; this page only links or embeds.",
  creditLabel: "Credit: ",
  consultPhoto: "Ask about this photo",
};

const dictionaries: Record<Locale, Dict> = { ja, en };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ja");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ja" || stored === "en") setLocaleState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string) => dictionaries[locale][key] ?? dictionaries.ja[key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
