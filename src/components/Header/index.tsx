"use client";

import Image from "next/image";
import logo from "@/assets/img/header/logo.svg";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavItem } from "../NavItem";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileNavClass, setMobileNavClass] = useState("-left-[300px]");

  useEffect(() => {
    return showNavbar
      ? setMobileNavClass("left-0")
      : setMobileNavClass("-left-[300px]");
  }, [showNavbar]);

  const handleNav = () => {
    return mobileNavClass === "-left-[300px]"
      ? setShowNavbar(true)
      : setShowNavbar(false);
  };

  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal">
          <a href="#">
            <Image src={logo} alt="Logo" />
          </a>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-map-pin-2-fill text-2xl text-accent-default"></i>
            <div className="text-secondary">13h Street, W 13h, NY</div>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-phone-fill text-2xl text-accent-default"></i>
            <div className="text-secondary">"(+487) 389 872"</div>
          </div>

          <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Book now
          </button>

          {/* Nav Hidden Menu */}
          <nav
            className={twMerge(
              `mnav bg-white fixed w-[300px] top-0 h-screen ${mobileNavClass} shadow-2xl lg:hidden transition-all duration-300 z-20`
            )}
          >
            <div
              className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
              onClick={handleNav}
            >
              <i className="mnav__close-btn-icon ri-arrow-right-s-line text-2xl text-white"></i>
            </div>

            <div className="px-12 flex flex-col gap-y-12 h-full">
              <a href="#">
                <Image src={logo} alt="Logo" />
              </a>

              <ul className="flex flex-col gap-y-5">
                <NavItem text="Home" />
                <NavItem text="Doctors" />
                <NavItem text="Departament" />
                <NavItem text="Services" />
                <NavItem text="Blog" />
                <NavItem text="Contact" />
              </ul>

              <form action="#" className="relative flex gap-x-[10px]">
                <label htmlFor="mnav-search-input">
                  <i className="ri-search-line text-2xl text-accent-default"></i>
                </label>

                <input
                  type="text"
                  id="mnav-search-input"
                  placeholder="Search..."
                  className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent-default placeholder:italic"
                />
              </form>
            </div>
          </nav>

          {/* Nav Desktop */}
          <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
            <ul className="flex gap-x-4">
              <NavItem text="Home" />
              <NavItem text="Doctors" />
              <NavItem text="Departament" />
              <NavItem text="Services" />
              <NavItem text="Blog" />
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
        </div>
      </div>
    </header>
  );
}
