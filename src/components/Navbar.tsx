"use client";
import { PanelsTopLeft, Phone, User, Wrench } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "About",
      href: "/about",
      icon: User,
    },
    {
      name: "Skills",
      href: "/skills",
      icon: Wrench,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: PanelsTopLeft,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
    },
  ];

  return (
    <div className="fixed  max-w-[35rem] w-full my-4 mx-auto z-50 -translate-x-1/2 left-1/2">
      {/* Navbar */}
      <nav className="bg-black z-50 text-white p-4 rounded-full">
        <div className="container mx-auto flex justify-between items-center px-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"} className="text-yellow-300 text-2xl font-bold">
              M.Rehan Amjad
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="p-3 hover:bg-gray-800 rounded-3xl transition-colors"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Cards Menu */}
      <div
        className={`absolute w-full max-w-[35rem] z-50 mx-auto left-1/2 -translate-x-1/2 bg-black rounded-3xl mt-4 p-6 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-4 mb-4 z-50">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div className={`bg-yellow-300 p-6 z-50 rounded-2xl flex items-center justify-between hover:scale-105 duration-300 ${
                isMenuOpen
            ? "opacity-100 translate-y-0 scale-1 duration-500"
            : "opacity-0 -translate-y-4 scale-50 pointer-events-none"
                }`}>
                <span className="text-black text-2xl font-bold">
                  {item.name}
                </span>
                <item.icon size={40} />
              </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
