"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { handleLogin, handleLogout } from "../..";
import Image from "next/image";

type MobileMenuProps = {
  open: boolean;
};

const MobileMenu = ({ open }: MobileMenuProps) => {
  const { data } = useSession();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="bg-orange-500 text-white py-7 mx-10 my-5 rounded-lg">
            <ul className="flex flex-col items-center font-semibold justify-center gap-5 text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/placas">Placas</Link>
              </li>
              <li>
                <Link href="/orcamento">Orçamento</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                {data?.user ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 border border-white px-3 py-2 rounded-md font-semibold hover:bg-orange-600 duration-300"
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
                ) : (
                  <button
                    onClick={handleLogin}
                    className="flex items-center gap-2 border border-white px-3 py-2 rounded-md hover:bg-orange-600 duration-200"
                  >
                    <IoPersonCircleOutline size={25} />
                    Entrar
                  </button>
                )}
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
