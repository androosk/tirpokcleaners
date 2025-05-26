"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar: React.FC = () => {
  const [navBar, setNavbar] = useState(false);
  const [isHamburger, setIsHamburger] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "underline underline-offset-4" : "";
  };

  const handleClick = () => {
    if (window.screen.width < 600) {
      setIsHamburger(!isHamburger);
    }
  };

  const initial =
    "transition lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0";
  const active =
    "transition duration-500 lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 fixed w-full z-10 top-0 bg-white bg-opacity-80";

  const notHamburgerItem =
    "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-hover font-sans";
  const hamburgerItem =
    "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-red-500 font-sans";

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={navBar ? active : isHamburger ? active : initial}>
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="cursor-pointer">
          <Image
            className="h-20 m-2 float-left"
            src="/images/tirpok-logo.png"
            alt="hanger with text tirpok more than just a cleaners"
            height={96}
            width={114}
          />
        </Link>
      </div>

      <div onClick={handleClick} className="md:hidden cursor-pointer">
        {!isHamburger ? (
          <AiOutlineMenu size={25} />
        ) : (
          <AiOutlineClose size={25} />
        )}
      </div>
      <div
        className="md:visible lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul
            className={
              !isHamburger
                ? "hidden md:visible lg:flex items-center justify-between text-base text-black pt-4 lg:pt-0"
                : "pb-8"
            }
          >
            <li>
              <Link
                href="/professional-services"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
              >
                Professional Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/coupons"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
              >
                Coupons
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isHamburger ? hamburgerItem : notHamburgerItem}
                onClick={handleClick}
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
