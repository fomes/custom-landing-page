"use client";

import React, { useEffect, useState } from "react";

export function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className="bg-accent-default hover:bg-accent-secondary transition-all duration-300 fixed w-12 h-12 right-8 bottom-8 text-5xl z-10 cursor-pointer leading-10 rounded-[3px] shadow-[0_0_0_4px_rgba(0,0,0,0.3)]"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <i className="ri-arrow-up-s-line text-4xl text-white"></i>
    </button>
  );
}

export default ScrollButton;
