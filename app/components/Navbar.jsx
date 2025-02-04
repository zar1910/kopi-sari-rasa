"use client";
import Image from "next/image";
import logo from "@/assets/coffee-bean-icon.png";
import arrow from "@/assets/arrow.png";
import close_button from "@/assets/close_button.png";
import menu_button from "@/assets/menu_button.png";
import React, { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div id="top">
      <nav className="w-full fixed z-20 top-0 start-0 max-md:p-8 md:p-10 shadow-lg bg-[#FBFBFB]">
        <div className="flex justify-between">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              className="max-sm:w-14 sm:w-14 md:w-20"
            />
            <div>
              <p className="font-Italiana sm:text-2xl max-sm:text-2xl md:text-3xl">
                Kopi Sari
              </p>
              <p className="font-Italiana sm:text-2xl max-sm:text-2xl md:text-3xl">
                Rasa
              </p>
            </div>
          </a>

          <div className="hidden md:block my-auto">
            <ul className="flex flex-row justify-between gap-14">
              <li>
                <a
                  href="#top"
                  className="font-Italiana text-4xl  hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="font-Italiana text-4xl hover:underline"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-Italiana text-4xl hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-Italiana text-4xl hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden my-auto">
            <button className="" onClick={toggleNavbar}>
              {isClick ? (
                <Image src={close_button} alt="close" />
              ) : (
                <Image src={menu_button} alt="open" />
              )}
            </button>
          </div>
        </div>

        {/*Mobile*/}
        {isClick && (
          <div className="md:hidden">
            <ul className="flex flex-col gap-y-6 pt-5 pl-6">
              <li className="flex items-center gap-x-4">
                <Image src={arrow} alt="arrow" />
                <a href="#top" className="font-Italiana text-2xl">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-x-4">
                <Image src={arrow} alt="arrow" />
                <a href="#menu" className="font-Italiana text-2xl">
                  Menu
                </a>
              </li>
              <li className="flex items-center gap-x-4">
                <Image src={arrow} alt="arrow" />
                <a href="#about" className="font-Italiana text-2xl">
                  About Us
                </a>
              </li>
              <li className="flex items-center gap-x-4">
                <Image src={arrow} alt="arrow" />
                <a href="#contact" className="font-Italiana text-2xl">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
