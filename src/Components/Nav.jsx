import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

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
          <Link
            className="text-xl 2xl:text-3xl whitespace-nowrap cursor-pointer transition-all duration-200 hover:text-yellow-200"
            to="home"
            spy={true}
            smooth={true}
            offset={-1000}
            duration={1000}
            delay={100}
          >
            IMPULSE 2k23
          </Link>
        </div>
        <div className="flex justify-end basis-1/2 lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex justify-center h-fit p-2 rounded-md hover:text-yellow-200 transition-all duration-200"
            aria-expanded={isMenuOpen}
          >
            {!isMenuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-evenly lg:gap-2 lg:basis-1/2">
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            delay={100}
          >
            ABOUT
          </Link>
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="events"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={100}
          >
            EVENTS
          </Link>
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="members"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={100}
          >
            MEMBERS
          </Link>
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="sponsors"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={100}
          >
            SPONSORS
          </Link>
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="venue"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={100}
          >
            VENUE
          </Link>
          <Link
            className="transition-all duration-200 cursor-pointer hover:text-yellow-200 2xl:text-2xl"
            to="contactUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={100}
          >
            CONTACT US
          </Link>
          {/* <a
            href="#about"
            className="transition-all duration-200 hover:text-yellow-200"
          >
            ABOUT
          </a> */}
          {/* <a
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
          </a> */}
        </div>
      </div>
      {isMenuOpen && (
        <div className="shadow-lg bg-transparent backdrop-blur-md lg:hidden w-full absolute">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              delay={100}
            >
              ABOUT
            </Link>
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="events"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              delay={100}
            >
              EVENTS
            </Link>
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="members"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              delay={100}
            >
              MEMBERS
            </Link>
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              delay={100}
            >
              SPONSORS
            </Link>
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="venue"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              delay={100}
            >
              VENUE
            </Link>
            <Link
              className="transition-all duration-200 cursor-pointer hover:text-yellow-200"
              to="contactUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              delay={100}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
