"use client";

import { useLikes } from "@/lib/likes";
import { useI18n } from "@/lib/i18n";

export function LikeButton({ photoId }: { photoId: string }) {
  const { t } = useI18n();
  const { ready, isLiked, toggle } = useLikes();
  const liked = ready && isLiked(photoId);
  const label = liked ? t("unlikeAria") : t("likeAria");

  return (
    <button
      type="button"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-fog px-5 text-sm font-semibold text-pine transition hover:border-sage"
      aria-label={label}
      aria-pressed={liked}
      disabled={!ready}
      onClick={() => toggle(photoId)}
    >
      <HeartIcon filled={liked} />
      <span aria-hidden className="tabular-nums">
        {liked ? 1 : 0}
      </span>
    </button>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden
      className={filled ? "text-[#c45c5c]" : "text-ink"}
    >
      <path
        d="M12 20.5s-7.2-4.35-9.4-8.55C1.05 9.2 2.2 6.4 5.05 5.55c1.55-.46 3.2-.05 4.35 1.05L12 9.2l2.6-2.6c1.15-1.1 2.8-1.51 4.35-1.05 2.85.85 4 3.65 2.45 6.4C19.2 16.15 12 20.5 12 20.5z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
