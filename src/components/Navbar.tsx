'use client';

import React, { useEffect, useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10); // Delay to allow the page to render before starting the animation

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`relative z-50 top-0 w-full flex md:flex-row justify-between items-center transition-opacity ${visible ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`}>
      <div className="flex justify-center items-center w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem]">
        <img src="/Logo.png" alt="websnap" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16 xl:gap-24 border border-white-200/10 rounded-full p-4 text-sm lg:text-xl">
        <div className="flex-shrink-0">Home</div>
        <div className="flex-shrink-0">Services</div>
        <div className="flex-shrink-0">Portfolio</div>
        <div className="flex-shrink-0">About</div>
      </div>

      {/* Book Call Button */}
      <div className="flex md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        <div className="hidden sm:flex lg:text-xl">Contact</div>
        <div>
          <button className="relative inline-flex h-10 md:h-12 lg:h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-xs font-medium text-white backdrop-blur-3xl sm:px-2 sm:py-2 sm:text-sm md:px-2 md:py-3 md:text-base lg:px-2 lg:py-4 lg:text-lg xl:px-2 xl:py-5 xl:text-xl">
              <div className="flex items-center gap-2">
                <PiPhoneCallFill /> Book Call
              </div>
            </span>
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="text-3xl md:hidden text-white sm:font-bold sm:text-3xl" onClick={toggleMenu}>
          <IoMenu />
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-16 right-0 w-full mt-4 bg-[#030014] border border-white-200/10 rounded-lg shadow-lg md:hidden transition-transform duration-300 ${menuOpen && 'hidden'}`}>
          <div className="flex flex-col gap-3 font-bold py-5 px-3 text-sm lg:text-xl">
            <div className="flex-shrink-0 sm:font-bold sm:text-lg hover:text-blue-400 transition-colors duration-300">Home</div>
            <div className="flex-shrink-0 sm:font-bold sm:text-lg hover:text-blue-400 transition-colors duration-300">Services</div>
            <div className="flex-shrink-0 sm:font-bold sm:text-lg hover:text-blue-400 transition-colors duration-300">Portfolio</div>
            <div className="flex-shrink-0 sm:font-bold sm:text-lg hover:text-blue-400 transition-colors duration-300">About</div>
           
          </div>
          <div className="flex justify-center items-center font-bold pb-4 text-sm lg:text-xl">
            <button className="relative inline-flex h-10 md:h-12 lg:h-12 overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-xs font-medium text-white backdrop-blur-3xl sm:px-2 sm:py-2 sm:text-sm md:px-2 md:py-3 md:text-base lg:px-2 lg:py-4 lg:text-lg xl:px-2 xl:py-5 xl:text-xl">
                <div className="flex items-center gap-2">
                  <BiSolidContact /> Contact Us
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
