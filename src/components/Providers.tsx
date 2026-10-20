"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { LikesProvider } from "@/lib/likes";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LikesProvider>{children}</LikesProvider>
    </LanguageProvider>
  );
}
