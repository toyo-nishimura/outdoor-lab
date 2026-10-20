import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

export default function TermsPage() {
  return (
    <>
      <header className="border-b border-fog/80 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-pine"
          >
            outdoor-lab
          </Link>
          <Link href="/#gallery" className="text-sm font-medium text-moss hover:text-pine">
            素材へ
          </Link>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
            利用条件（委託先向け・要約）
          </h1>
          <p className="mt-4 text-base leading-relaxed text-moss">
            outdoor-lab はストック販売サイトではありません。撮影仕事の導線と、制作で困ったときの素材棚として公開しています。
          </p>

          <ol className="mt-10 space-y-6 text-base leading-relaxed text-ink">
            <li>
              <h2 className="font-display text-xl font-semibold text-pine">
                1. 初期写真について
              </h2>
              <p className="mt-2 text-moss">
                MVP掲載の写真は Unsplash / Pexels 等の無料素材プレースホルダです。本番運用前に、オリジナル撮影分へ差し替えます。クレジットは README と各詳細ページを参照してください。
              </p>
            </li>
            <li>
              <h2 className="font-display text-xl font-semibold text-pine">
                2. 利用の目安
              </h2>
              <p className="mt-2 text-moss">
                業務委託・共同制作の検討用として閲覧・仮置き利用を想定しています。商用最終納品での利用可否は、案件ごとに確認してください。
              </p>
            </li>
            <li>
              <h2 className="font-display text-xl font-semibold text-pine">
                3. 撮影・記事の相談
              </h2>
              <p className="mt-2 text-moss">
                アウトドア現場の撮影、記事用カット、ブランドビジュアルの相談はメールで受け付けます。要件・日程・用途を添えてください。
              </p>
            </li>
            <li>
              <h2 className="font-display text-xl font-semibold text-pine">
                4. やらないこと（初版）
              </h2>
              <p className="mt-2 text-moss">
                投稿者コミュニティ、無限ライブラリ運用、広告／紹介課金型のマーケットプレイスは対象外です。
              </p>
            </li>
          </ol>

          <a
            href="mailto:hello@outdoor-lab.example?subject=利用条件についての確認"
            className="mt-12 inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
          >
            利用について問い合わせる
          </a>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
