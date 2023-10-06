import { ReactNode } from "react";

interface NavItemProps {
  children?: ReactNode;
  text: string;
}

export function NavItem({ text }: NavItemProps) {
  return (
    <li>
      <a
        href="#"
        className="border-r pr-4 text-secondary hover:text-accent-default transition-all duration-300"
      >
        {text}
      </a>
    </li>
  );
}
