import { ReactNode } from "react";
import { NavItem } from "../NavItem";

interface NavDesktopProps {
  children?: ReactNode;
}

export function NavDesktop({ children }: NavDesktopProps) {
  return (
    <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
      <ul className="flex gap-x-4">
        <NavItem text="Home" border="border-r" />
        <NavItem text="Doctors" border="border-r" />
        <NavItem text="Departament" border="border-r" />
        <NavItem text="Services" border="border-r" />
        <NavItem text="Blog" border="border-r" />
        <NavItem text="Contact" />
      </ul>

      <form action="#" className="relative flex gap-x-2">
        <label
          htmlFor="search-input"
          className="flex justify-center items-center"
        >
          <i className="ri-search-line text-2xl text-accent-default"></i>
        </label>

        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent-default placeholder:italic placeholder:text-base transition-all duration-150"
        />
      </form>
    </nav>
  );
}
