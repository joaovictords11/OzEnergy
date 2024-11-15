"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./components/MobileMenu";
import FlyoutLink from "./components/FlyoutLink";
import { IoPersonCircleOutline } from "react-icons/io5";
import PanelsFlyout from "./components/FlyoutContents/PanelsFlyout";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full flex items-center h-20 bg-white px-4 py-4 shadow-sm">
        <section className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-bold text-2xl pl-1 hover:scale-105 transition-transform duration-300 ease-out"
          >
            <span className="text-orange-500">OZ</span> ENERGY
          </Link>
          <nav className="hidden md:flex items-center gap-14">
            <FlyoutLink href="/">Home</FlyoutLink>
            <FlyoutLink href="/placas" FlyoutContent={<PanelsFlyout />}>
              Placas
            </FlyoutLink>
            <FlyoutLink href="/company">Feedback</FlyoutLink>
            <FlyoutLink href="/sobre">Sobre</FlyoutLink>
          </nav>
          <button className="hidden md:flex items-center gap-2 bg-orange-500 px-3 py-2 rounded-md text-white font-semibold hover:bg-orange-600 duration-300">
            <IoPersonCircleOutline size={25} />
            Entrar
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={30} color="#000" />
          </button>
        </section>
      </header>
      <MobileMenu open={isMenuOpen} />
    </>
  );
};

export default Header;
