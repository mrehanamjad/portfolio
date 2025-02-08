"use client"
import { PanelsTopLeft, User } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-black z-50 text-white p-4 rounded-full max-w-[35rem] w-full my-4 mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-yellow-300 text-2xl font-bold">M.Rehan Amjad</span>
          </div>

          {/* Hamburger Menu */}
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Cards Menu */}
      <div className={`absolute w-full bg-black rounded-3xl mt-4 p-6 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Branding Card */}
          <div className="bg-yellow-300 p-6 rounded-2xl flex items-center justify-between">
            <span className="text-black text-2xl font-bold">About</span>
            <User size={40} />
          </div>

          {/* Web Design Card */}
          <div className="bg-yellow-300 p-6 rounded-2xl flex items-center justify-between">
            <span className="text-black text-2xl font-bold">Skills</span>
         
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Request Quote Card */}
          <div className="bg-yellow-300 p-6 rounded-2xl flex items-center justify-between">
            <span className="text-black text-xl font-bold">Projets</span>
            <PanelsTopLeft size={40} />
          </div>

          {/* Discount Card */}
          <div className="bg-white p-6 rounded-2xl">
            <div className="text-black">
              <span className="text-4xl font-bold">15%</span>
              <p className="font-bold mt-2">DISCOUNT ON YOUR FIRST PROJECT</p>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-white text-center mt-8 text-xl font-bold">
          Trusted by clients worldwide
        </div>
      </div>
    </div>
  );
};

export default Navbar;