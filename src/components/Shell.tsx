import type { ReactNode } from "react";

/**
 * Pexels Wrapper_maxwidth-default pattern:
 * centered shell, ~1600px cap (large side margins on ultra-wide), 30px pad.
 * Measured @1440: max-width 1440 + 30px pad → 1380 content.
 * Cap raised to 1600 so 4-col masonry has room; same 30px gutters.
 */
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
