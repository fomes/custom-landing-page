"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavItem } from "../NavItem";
import logo from "@/assets/img/header/logo.svg";

interface NavHiddenMenuProps {
  children?: ReactNode;
}

export function NavHiddenMenu({ children }: NavHiddenMenuProps) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileNavClass, setMobileNavClass] = useState("-left-[300px]");
  const [iconClass, setIconClass] = useState("ri-arrow-right-s-line");

  useEffect(() => {
    return showNavbar
      ? setMobileNavClass("left-0")
      : setMobileNavClass("-left-[300px]");
  }, [showNavbar]);

  const handleNav = () => {
    iconClass === "ri-arrow-right-s-line"
      ? setIconClass("ri-arrow-left-s-line")
      : setIconClass("ri-arrow-right-s-line");

    return mobileNavClass === "-left-[300px]"
      ? setShowNavbar(true)
      : setShowNavbar(false);
  };

  return (
    <nav
      className={twMerge(
        `mnav bg-white fixed w-[300px] top-0 h-screen ${mobileNavClass} shadow-2xl lg:hidden transition-all duration-300 z-20`
      )}
    >
      <div
        className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
        onClick={handleNav}
      >
        <i
          className={twMerge(
            `mnav__close-btn-icon ${iconClass} text-2xl text-white`
          )}
        ></i>
      </div>

      <div className="px-12 flex flex-col gap-y-12 h-full">
        <a href="#">
          <Image src={logo} alt="Logo" priority />
        </a>

        <ul className="flex flex-col gap-y-5">
          <NavItem text="Home" href="#home" />
          <NavItem text="Doctors" href="#doctors" />
          <NavItem text="Departaments" href="#departaments" />
          <NavItem text="Services" href="#services" />
          <NavItem text="Blog" href="#blog" />
          <NavItem text="Contact" href="#contact" />
        </ul>

        <form action="#" className="relative flex gap-x-[10px]">
          <label htmlFor="mnav-search-input">
            <i className="ri-search-line text-2xl text-accent-default"></i>
          </label>

          <input
            name="search"
            type="text"
            id="mnav-search-input"
            placeholder="Search..."
            className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent-default placeholder:italic"
          />
        </form>
      </div>
    </nav>
  );
}
