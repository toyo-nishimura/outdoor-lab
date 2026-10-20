export function Inquiry() {
  return (
    <section
      id="contact"
      className="border-t border-fog/80 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-pine sm:text-4xl">
            撮影・制作の相談
          </h2>
          <p className="mt-3 text-base leading-relaxed text-moss sm:text-lg">
            業務委託の撮影、記事用カット、ブランドビジュアル。現場の空気感を一緒に組み立てます。
          </p>
          <a
            href="mailto:hello@outdoor-lab.example?subject=撮影の相談（outdoor-lab）"
            className="mt-8 inline-flex items-center justify-center bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss"
          >
            メールで相談する
          </a>
          <p className="mt-3 text-sm text-sage">
            hello@outdoor-lab.example（プレースホルダ）
          </p>
        </div>
      </div>
    </section>
  );
}
