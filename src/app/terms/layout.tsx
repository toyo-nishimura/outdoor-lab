import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "利用条件｜無料の日本風景ストック写真",
  description:
    "Japanphoto-lab の無料ストック写真の利用条件。個人・商用でのダウンロードと利用の範囲、注意事項、免責について。Free Japanese stock photo terms for personal and commercial use.",
  openGraph: {
    title: "利用条件｜無料の日本風景ストック写真｜Japanphoto-lab",
    description:
      "無料ストック写真の利用範囲・注意事項・免責。Free Japanese landscape stock photo terms.",
  },
  twitter: {
    card: "summary",
    title: "利用条件｜無料の日本風景ストック写真｜Japanphoto-lab",
    description:
      "無料ストック写真の利用範囲・注意事項・免責。Free Japanese landscape stock photo terms.",
  },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
