import type { Metadata } from "next";
import { Archivo, League_Spartan, Noto_Sans_JP } from "next/font/google";
import { Providers } from "@/components/Providers";
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
  title: "Japanphoto-lab | Free photos & videos of Japan & visual commissions",
  description:
    "Free-to-use photos and videos from location scouts and photo walks across Japan. Browse streets, temples, scenery, and outdoor scenes—or inquire about a custom shoot and brand visuals.",
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
