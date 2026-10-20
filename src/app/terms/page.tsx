import { Shell } from "@/components/Shell";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-paper py-12 sm:py-16">
        <Shell>
          <article className="mx-auto max-w-3xl">
            <h1 className="font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
              利用条件
            </h1>
            <p className="mt-3 text-sm text-sage">シンプルなライセンス</p>

            <p className="mt-8 text-base leading-relaxed text-moss sm:text-lg">
              outdoor-lab
              の写真は、無料でダウンロードして利用できます。日本の風景をテーマにしたフリー写真素材として公開しています。
            </p>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                できること
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-ink">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                  <span>
                    outdoor-lab
                    の写真は無料で利用できます。個人・商用を問わず、ダウンロードして使えます。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                  <span>
                    クレジット（出典表示）は必須ではありません。表示していただけると嬉しいですが、任意です。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                  <span>
                    写真に変更を加えることができます。トリミングや色調整など、自由に編集してください。
                  </span>
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                できないこと
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-ink">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>
                    特定可能な人物のイメージを損なったり、攻撃・誹謗中傷するような使い方はできません。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>
                    変更を加えていない写真そのものを、ポスター・印刷物・物理製品などとして単独で販売することはできません。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>
                    画像に登場する人物やブランドが、あなたの製品・サービスを推奨しているように見せないでください。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>
                    他の写真素材サイトや壁紙プラットフォームなどで再配布・再販売しないでください。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>
                    商標、デザインマーク、商号、サービスマークの一部として使用しないでください。
                  </span>
                </li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-pine">
                使い方の例
              </h2>
              <ul className="mt-5 space-y-4 text-base leading-relaxed text-moss">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>
                    Webサイト、ブログ、アプリ、ニュースレター、プレゼン資料などでの利用。
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>
                    チラシ、招待状、雑誌、書籍のカバーなど、製品・サービスの宣伝・制作物への利用。
                  </span>
                </li>
              </ul>
            </section>

            <p className="mt-12 text-sm leading-relaxed text-sage">
              撮影・制作のご相談はホームの「撮影依頼・ご相談」からどうぞ。
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              撮影依頼・ご相談へ
            </a>
          </article>
        </Shell>
      </main>
      <SiteFooter />
    </>
  );
}
