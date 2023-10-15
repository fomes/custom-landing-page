import { twMerge } from "tailwind-merge";

interface NavItemProps {
  text: string;
  border?: string;
  href: string;
}

export function NavItem({ text, border, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
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
