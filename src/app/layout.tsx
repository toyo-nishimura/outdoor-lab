import type { Metadata } from "next";
import { Archivo, League_Spartan, Noto_Sans_JP } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
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

const siteTitle = "日本の風景の無料写真素材・ストックフォト｜Japanphoto-lab";
const siteDescription =
  "日本各地の風景をロケハン・フォトウォークで撮影した無料の写真素材・ストックフォト。個人・商用を問わずダウンロードしてご利用いただけます（利用条件あり）。Free Japanese landscape stock photos for personal and commercial use.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteTitle,
    template: "%s｜Japanphoto-lab",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    url: site.url,
    siteName: site.name,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${archivo.variable} ${leagueSpartan.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
