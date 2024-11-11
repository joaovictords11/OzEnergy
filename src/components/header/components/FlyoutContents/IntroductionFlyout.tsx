import Image from "next/image";
import React from "react";
import FlyoutImage from "/public/instalacao.jpg";
import { FaArrowRight } from "react-icons/fa";

const IntroductionFlyout = () => {
  return (
    <section className="flex justify-center gap-5 bg-orange-400 p-6 shadow-lg text-white">
      <div className="flex flex-col justify-between w-32">
        <div>
          <h3 className="font-extrabold text-xl">OzCarbon</h3>
          <p className="mt-4 font-light">
            Placas solares da melhor qualidade com preço acessível
          </p>
        </div>
        <a
          href="/placas"
          className="font-semibold flex items-center gap-1 hover:opacity-75"
        >
          Veja mais <FaArrowRight size={20} className="pt-[2px]" />
        </a>
      </div>
      <span className="bg-white w-[2px] rounded-full" />
      <div className="bg-orange-400 flex w-52 flex-col gap-4 justify-between">
        <Image
          className="w-full rounded-sm"
          src={FlyoutImage}
          alt="Placas solares"
          quality={100}
        />
        <p className="font-light">
          Placas solarem reduzem o seu gasto com energia e ajudam o meio
          ambiente.
        </p>
      </div>
    </section>
  );
};

export default IntroductionFlyout;
