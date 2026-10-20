import type { Metadata } from "next";
import { Archivo, League_Spartan, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

/** Same stack as eye-see-design: Archivo + League Spartan + Noto Sans JP */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "outdoor-lab | Photo Stock & Visual Practice",
  description:
    "キャンプやアウトドアをはじめ、ロケハンやフォトウォークで切り取った景色のストック。記事・デザイン制作に使えるフリー写真と、撮影・ビジュアル制作の相談。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${archivo.variable} ${leagueSpartan.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
