"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [navBar, setNavbar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const initial =
    "transition lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0";
  const active =
    "transition duration-500 lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0 bg-primary bg-opacity-80";

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleClick = () => {
    if (hamburger) {
      setHamburger(!hamburger);
      console.log("yo tamborger");
    } else {
      setHamburger(!hamburger);
      console.log("da button was clicked");
    }
  };

  return (
    <div className={navBar ? active : initial}>
      <div className="flex-1 flex justify-between items-center">
        <Image
          className="h-20 m-2 float-left"
          src="/images/tirpok-logo.png"
          alt="hanger with text tirpok more than just a cleaners"
          height={300 / 4}
          width={600 / 4}
        />
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          onClick={handleClick}
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0">
            <li>
              <Link
                href="/"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans"
              >
                Coupons
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
