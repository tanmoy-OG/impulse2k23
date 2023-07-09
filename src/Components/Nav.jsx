import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    setIsMenuOpen(false);
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <nav
      className="sticky z-10 text-violet-300 tracking-wider shadow-lg transition-all duration-500"
      id="navbar"
    >
      <div className="flex justify-between pt-4 pb-4 pl-4 pr-4 backdrop-blur-md">
        <div className="flex justify-center basis-1/4">
          <a
            href="#"
            className="text-xl whitespace-nowrap transition-all duration-200 hover:text-yellow-200"
            id="impulse"
          >
            IMPULSE 2k23
          </a>
        </div>
        <div className="flex justify-end basis-1/2 md:hidden">
          <button
            onClick={toggleMenu}
            className="flex justify-center h-fit p-2 rounded-md hover:text-yellow-200 transition-all duration-200"
            aria-expanded={isMenuOpen}
          >
            {!isMenuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
        <div className="hidden md:flex md:justify-evenly sm:basis-2/3 lg:basis-1/2">
          <a
            href="#about"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            ABOUT
          </a>
          <a
            href="#members"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            EVENTS
          </a>
          <a
            href="#members"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            MEMBERS
          </a>
          <a
            href="#sponsors"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            SPONSORS
          </a>
          <a
            href="#venue"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            VENUE
          </a>
          <a
            href="#contactUs"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            CONTACT US
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="shadow-lg bg-transparent backdrop-blur-md md:hidden w-full absolute">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              EVENTS
            </a>
            <a
              href="#members"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              MEMBERS
            </a>
            <a
              href="#sponsors"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              SPONSORS
            </a>
            <a
              href="#venue"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              VENUE
            </a>
            <a
              href="#contactUs"
              className="transition-all duration-200 hover:text-yellow-200"
            >
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
