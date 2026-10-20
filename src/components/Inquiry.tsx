export function Inquiry() {
  return (
    <section
      id="contact"
      className="border-t border-fog/80 px-4 py-6 sm:px-[30px] sm:py-8"
    >
      <div className="max-w-2xl">
        <h2 className="font-display text-lg font-bold tracking-tight text-pine sm:text-xl">
          写真撮影・ブランドビジュアル制作について
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-moss">
          当サイトの写真を撮影しているフォトグラファー／デザイナーが、出張撮影や記事用の写真カット、ブランドのビジュアル制作などを承ります。現場の空気感を大切に、イメージを一緒にかたちにします。
        </p>
        <p className="mt-2 text-sm leading-relaxed text-moss">
          詳細や過去の実績・ポートフォリオは下記よりご覧ください。
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="https://takashi-portfolio.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-pine px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-moss"
          >
            ポートフォリオを見る
          </a>
          <a
            href="https://takashi-portfolio.web.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-pine px-4 py-2.5 text-sm font-semibold text-pine transition hover:bg-mist"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
