"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiLoader, FiMenu } from "react-icons/fi";
import MobileMenu from "./components/MobileMenu";
import FlyoutLink from "./components/FlyoutLink";
import { IoPersonCircleOutline } from "react-icons/io5";
import PanelsFlyout from "./components/FlyoutContents/PanelsFlyout";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export async function handleLogin() {
  await signIn("google");
}

export async function handleLogout() {
  await signOut();
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, status } = useSession();

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
      <header className="w-full flex items-center h-20 bg-white p-4 shadow-sm">
        <section className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-bold text-2xl pl-1 hover:scale-105 transition-transform duration-300 ease-out text-neutral-700"
          >
            <span className="text-orange-500">OZ</span> ENERGY
          </Link>
          <nav className="hidden md:flex items-center gap-14">
            <FlyoutLink href="/">Home</FlyoutLink>
            <FlyoutLink href="/placas" FlyoutContent={<PanelsFlyout />}>
              Placas
            </FlyoutLink>
            <FlyoutLink href="/orcamento">Orçamento</FlyoutLink>
            <FlyoutLink href="/sobre">Sobre</FlyoutLink>
          </nav>

          {status === "authenticated" && (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 bg-orange-500 px-3 py-2 rounded-md text-white font-semibold hover:bg-orange-600 duration-300"
            >
              {!data?.user?.image ? (
                <IoPersonCircleOutline size={25} />
              ) : (
                <Image
                  src={data?.user?.image!}
                  alt="Imagem perfil do usuário logado"
                  className="w-6 h-6 rounded-full border border-orange-300"
                  width={25}
                  height={25}
                />
              )}
              Logout
            </button>
          )}

          {status === "loading" && (
            <button className="hidden w-[100px] py-2 md:flex justify-center bg-orange-500 rounded-md">
              <FiLoader
                size={25}
                color="#fff"
                className="animate-spin text-center"
              />
            </button>
          )}

          {status === "unauthenticated" && (
            <button
              onClick={handleLogin}
              className="hidden md:flex items-center gap-2 bg-orange-500 px-3 py-2 rounded-md text-white font-semibold hover:bg-orange-600 duration-300"
            >
              <IoPersonCircleOutline size={25} />
              Entrar
            </button>
          )}

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
