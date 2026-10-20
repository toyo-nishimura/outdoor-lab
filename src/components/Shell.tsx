import type { ReactNode } from "react";

/** Shared Pexels-style content shell: 1600px max, 30px side pad. */
export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-[30px] ${className}`}>
      {children}
    </div>
  );
}
