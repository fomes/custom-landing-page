import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface StatsItemProps {
  children?: ReactNode;
  text: string;
  subText: string;
  borderRight?: boolean;
}

export function StatsItem({
  text,
  subText,
  borderRight = false,
}: StatsItemProps) {
  return (
    <div
      className={twMerge(
        `${borderRight ? "xl:border-r" : ""}`,
        "stats__item flex-1 flex flex-col items-center"
      )}
    >
      <div className="text-4xl xl:tex-[64px] font-semibold text-accent-tertiary xl:mb-2">
        {text}
      </div>
      <div>{subText}</div>
    </div>
  );
}
