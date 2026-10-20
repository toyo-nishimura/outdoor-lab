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
    "ロケハンやフォトウォークで切り取った、日本各地の景色のフリー写真ストックです。",
  support2:
    "記事・デザインにそのまま使えます。撮影やビジュアル制作のご相談も受け付けています。",
  searchPlaceholder: "無料の写真を検索",
  searchAria: "写真を検索",
  searchSubmit: "検索",
  photoChip: "写真",
  galleryHeading: "写真一覧",
  gallerySubtext: "街・路地裏 · 寺社仏閣 · 風景・花 · アウトドア",
  galleryLead:
    "カテゴリや検索で絞り込み、写真を開いて利用条件を確認してからお使いください。",
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
    "過去の実績はポートフォリオでご覧ください。撮影・制作のご相談はお問い合わせフォームからどうぞ。",
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
  backToGallery: "一覧に戻る",
  openMedia: "素材を開く",
  closeMedia: "閉じる",
  playExternal: "外部で再生",
  photoLabel: "写真",
  locationLabel: "撮影地",
  detailBody:
    "利用の範囲は「利用条件」をご確認ください。「素材を開く」で写真を大きく表示できます。撮影や制作のご相談も歓迎です。",
  detailBodyVideo:
    " 動画は外部ホストで公開し、ここでは埋め込み／リンクのみ想定しています。",
  creditLabel: "クレジット：",
  lightboxHint:
    "表示中の写真です。閉じるには ×・背景・Esc。利用条件もあわせてご確認ください。",
  likeAria: "いいねする",
  unlikeAria: "いいねを取り消す",
};

const en: Dict = {
  navGallery: "Photos",
  navTerms: "Terms of use",
  navInquiry: "Book a shoot",
  headline: "Free photos of Japan—ready for your next story.",
  support1:
    "A free photo library from location scouts and photo walks across Japan: streets, temples, scenery, and outdoor moments.",
  support2:
    "Use them in articles, websites, and design. Need a custom shoot or brand visuals? You can inquire here.",
  searchPlaceholder: "Search free photos of Japan",
  searchAria: "Search photos",
  searchSubmit: "Search",
  photoChip: "Photos",
  galleryHeading: "Browse the library",
  gallerySubtext: "Streets & alleys · Temples & shrines · Scenery & flowers · Outdoor",
  galleryLead:
    "Filter by category or search, open a photo, check Terms of use, then view the full image.",
  allFilter: "All",
  countSuffix: "photos",
  emptyGallery: "No photos match. Try another search or category.",
  videoBadge: "Video",
  inquiryHeading: "Commission a shoot or visual project",
  inquiry1:
    "Every still on Japanphoto-lab was photographed on location scouts and fieldwork—not stock-agency inventory.",
  inquiry2:
    "I work as a designer and photographer: location shoots, brand visuals, and editorial stills. We shape mood and story together with design.",
  inquiry3:
    "Browse past work on the portfolio site, then send a commission inquiry via the form—no obligation, just a clear next step.",
  portfolioCta: "View portfolio",
  contactCta: "Open inquiry form",
  footerCaption:
    "Japanphoto-lab · Free photo stock from Japan · Shoots & visual practice",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mainNav: "Main",
  footerNav: "Footer",
  langToggle: "Language",
  termsTitle: "Terms of use",
  termsLead: "Free for personal and commercial use—with a few clear limits",
  termsIntro:
    "Japanphoto-lab photos are free to download and use. They come from location scouts and photo walks, published here as a practical library for writing and design.",
  termsCan: "You may",
  termsCan1:
    "Download and use photos for free—personal or commercial projects.",
  termsCan2:
    "Skip credit if you prefer (a credit is appreciated, not required).",
  termsCan3:
    "Edit freely: crop, color, and other adjustments.",
  termsCannot: "You may not",
  termsCannot1:
    "Use photos in ways that harm or defame identifiable people.",
  termsCannot2:
    "Sell an unaltered photo alone as a poster, print, or physical product.",
  termsCannot3:
    "Imply that people or brands shown endorse your product or service.",
  termsCannot4:
    "Redistribute or resell files on other stock or wallpaper platforms.",
  termsCannot5:
    "Use photos as part of a trademark, design mark, trade name, or service mark.",
  termsExamples: "Common uses",
  termsEx1: "Websites, blogs, apps, newsletters, and presentations.",
  termsEx2:
    "Flyers, invitations, magazines, book covers, and other promotional materials.",
  termsUsage: "How free use works",
  termsUsageBody:
    "Photos on this site are free for commercial and personal use—on the web, social media, print, video, and similar formats.",
  termsCaution: "Please note (shrines, buildings, trademarks)",
  termsCautionBody:
    "Some frames include shrines or temples, specific buildings, private property, registered trademarks, or signage. For certain commercial uses or media, you may need permission from rights holders or owners. Please assess and handle that yourself.",
  termsDisclaimer: "Disclaimer",
  termsDisclaimerBody:
    "Photos may be taken down without notice. Japanphoto-lab is not liable for disputes, damage, or loss arising from use of these photos.",
  termsInquiryHint:
    "For shoots or visual production, use Book a shoot in the header—or the inquiry form on the home page.",
  termsInquiryCta: "Book a shoot",
  backToGrid: "Back to grid",
  backToGallery: "Back to gallery",
  openMedia: "View full photo",
  closeMedia: "Close",
  playExternal: "Play externally",
  photoLabel: "Photo",
  locationLabel: "Location",
  detailBody:
    "Check Terms of use before publishing. Open View full photo to see the image large. For a custom shoot or visual project, use Book a shoot.",
  detailBodyVideo:
    " Videos are hosted externally; this page only links or embeds.",
  creditLabel: "Credit: ",
  lightboxHint:
    "Full-size view. Close with ×, the backdrop, or Esc. See Terms of use for licensing.",
  likeAria: "Like this photo",
  unlikeAria: "Remove like",
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
