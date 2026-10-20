export function Inquiry() {
  return (
    <section
      id="contact"
      className="border-t border-fog/80 px-4 py-10 sm:px-6 sm:py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="max-w-xl">
          <h2 className="font-display text-xl font-bold tracking-tight text-pine sm:text-2xl">
            撮影・制作の相談
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-moss sm:text-[15px]">
            業務委託の撮影、記事用カット、ブランドビジュアル。現場の空気感を一緒に組み立てます。
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="mailto:hello@outdoor-lab.example?subject=撮影の相談（outdoor-lab）"
            className="inline-flex items-center justify-center bg-pine px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-moss"
          >
            メールで相談する
          </a>
          <p className="mt-2 text-xs text-sage">
            hello@outdoor-lab.example（プレースホルダ）
          </p>
        </div>
      </div>
    </section>
  );
}
