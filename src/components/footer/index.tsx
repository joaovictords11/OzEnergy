import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-orange-500" id="footer">
      <section className="max-w-7xl mx-auto text-white p-4">
        <div className="flex flex-col md:flex-row gap-14 justify-between py-2 items-center md:items-stretch">
          <div>
            <Link
              href="/"
              className="font-bold text-2xl hover:opacity-80 duration-300"
            >
              OZ ENERGY
            </Link>
            <p className="max-w-xs mt-4 text-neutral-100">
              At Mentary, we believe in the power of renewable energy to create
              a more sustainable future.
            </p>
          </div>

          <div className="flex gap-14 md:ml-auto">
            <ul className="flex flex-col gap-2 text-neutral-100">
              <li className="text-xl font-semibold mb-2 text-white">
                Serviços
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 duration-300">Home</Link>
              </li>
              <li>
                <Link href="/placas" className="hover:opacity-80 duration-300">Placas</Link>
              </li>
              <li>
                <Link href="/orcamento" className="hover:opacity-80 duration-300">Orçamento</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:opacity-80 duration-300">Sobre</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 text-neutral-100 break-all md:break-normal">
              <li className="text-xl font-semibold mb-2 text-white">Contato</li>
              <li>Av.Paulista, 1106 - SP</li>
              <li>(11) 3385-8010</li>
              <li>suporte@ozenergy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="mt-4 text-neutral-100">
              Cadastre-se para receber <br /> nossas novidades
            </p>
            <form className="mt-4 flex items-center">
              <input
                type="text"
                className="outline-none text-neutral-700 rounded-l-lg px-2 py-1 w-full min-w-[120px] max-w-[250px]"
              />
              <button
                type="submit"
                className="bg-neutral-700 py-2 px-2 rounded-r-lg hover:bg-neutral-800 duration-300"
              >
                <BsFillSendFill size={18} />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-white mt-4">
          <p className="text-center mt-4">Copyright © 2024 OzEnergy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
