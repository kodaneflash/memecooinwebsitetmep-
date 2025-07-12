"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Exchanges", href: "#exchanges" },
  { name: "Jigglenomics", href: "#tokenomics" },
  { name: "How to buy", href: "#buy" },
  // { name: "Wall of love", href: "#love" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Global"
              className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 bg-black/80 backdrop-blur-sm ${
          isScrolled ? "h-20" : "h-28"
        }`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="https://placehold.co/500x500"
              width={500}
              height={500}
              className={`transition-all duration-300 ${
                isScrolled ? "h-14 w-auto" : "h-20 w-auto"
              }`}
              alt="logo placeholder"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition duration-200 text-white text-2xl font-bold font-stopbuck tracking-wider hover:text-cosmic-cyan hover:scale-105 drop-shadow-lg`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buy Button */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://dexscreener.com"
            target="_blank"
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium bg-cosmic-gradient text-white shadow-2xl hover:bg-cosmic-gradient-reverse hover:text-white hover:outline-cosmic-cyan outline outline-2 outline-offset-0"
          >
            Buy $JIAT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
