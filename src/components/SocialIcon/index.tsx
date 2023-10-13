import { ComponentProps } from "react";

export type SocialIconProps = ComponentProps<"a"> & {};

export function SocialIcon({ className, ...props }: SocialIconProps) {
  return (
    <a
      href=""
      className="cursor-pointer hover:text-accent-default transition-all duration-300"
    >
      <i className={className}></i>
    </a>
  );
}
