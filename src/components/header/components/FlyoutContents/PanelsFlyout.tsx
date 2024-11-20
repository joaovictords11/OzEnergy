import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import FlyoutImage from "/public/instalacao.jpg";

const PanelsFlyout = () => {
  return (
    <section className="flex justify-center shadow-lg text-white">
      <div className="bg-neutral-800 flex flex-col justify-between w-40 p-6">
        <div>
          <h3 className="font-extrabold text-xl">OzCarbon</h3>
          <p className="mt-3 font-light">
            Placas solares da melhor qualidade com preço acessível
          </p>
        </div>
        <a
          href="/placas"
          className="font-semibold flex items-center mt-14 gap-1 hover:opacity-75"
        >
          Veja mais <FaArrowRight size={20} className="pt-[2px]" />
        </a>
      </div>
      <div className="bg-orange-400 flex w-60 p-6 flex-col gap-4 justify-between">
        <Image
          className="w-full rounded-sm"
          src={FlyoutImage}
          alt="Placas solares"
          quality={100}
        />
        <p className="leading-6">
          Placas solares reduzem o seu gasto com energia e ajudam o meio
          ambiente.
        </p>
      </div>
    </section>
  );
};

export default PanelsFlyout;
