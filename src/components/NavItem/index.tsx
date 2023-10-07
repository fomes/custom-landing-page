import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  children?: ReactNode;
  text: string;
  border?: string;
}

export function NavItem({ text, border }: NavItemProps) {
  return (
    <li>
      <a
        href="#"
        className={twMerge(
          border,
          "pr-4 text-secondary hover:text-accent-default transition-all duration-300"
        )}
      >
        {text}
      </a>
    </li>
  );
}
