import Banner from "@/components/banner";
import React from "react";
import BannerImage from "/public/sobre-banner.jpg";
import Container from "@/components/container";
import Image from "next/image";
import JoaoImg from "/public/imagem-joao.jpg";
import TonatoImg from "/public/imagem-tonato.jpg";
import DiogoImg from "/public/imagem-diogo.jpg";
import aboutImg from "/public/sobre.jpg";
import { FaGithub } from "react-icons/fa";
import FounderCard from "@/components/sobre/founderCard";
import { MdGroups, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import DetailCard from "@/components/sobre/detailCard";
import Link from "next/link";

const Sobre = () => {
  return (
    <main>
      <Banner
        title="Conheça um pouco mais sobre os fundadores da OzEnergy"
        icon={<MdGroups size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Nossos colaboradores"
        buttonUrl="#founders"
        scrollId="founders"
      />
      <Container>
        <section className="mt-16 flex flex-col md:flex-row gap-12 justify-between items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold">Sobre nós</h2>
            <p className="max-w-96">
              Nossa empresa é especializada em oferecer orçamentos
              personalizados e serviços completos de instalação de placas
              solares, garantindo eficiência e sustentabilidade em cada projeto
              realizado.
            </p>
            <Link
              href="/placas"
              className="bg-orange-500 flex items-center gap-2 hover:bg-orange-600 duration-200 px-4 py-2 w-fit text-white font-medium rounded-md"
            >
              Nossos produtos
              <IoMdArrowForward size={22} />
            </Link>
          </div>
          <div className="w-full md:w-auto rounded-lg flex-grow">
            <Image
              src={aboutImg}
              alt="Instalação painéis solares"
              quality={100}
              priority
              className="rounded-lg object-cover max-h-[350px] md:ml-auto w-full md:max-w-xl shadow-lg"
            />
          </div>
        </section>
      </Container>
      <section className="bg-neutral-50 mt-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-6 justify-between py-8 px-4">
          <DetailCard
            icon={MdOutlineEnergySavingsLeaf}
            text="A energia sustentável transforma o mundo, promovendo inovação e respeito ao meio ambiente com soluções limpas e renováveis."
          />
          <DetailCard
            icon={BiWorld}
            text="Fontes renováveis como o sol e o vento são essenciais para criar um futuro equilibrado e ambientalmente responsável."
          />
          <DetailCard
            icon={RiMoneyDollarCircleLine}
            text="Sustentabilidade global depende do uso consciente de recursos, investindo em energia limpa para preservar o planeta."
          />
        </div>
      </section>
      <Container>
        <section
          id="founders"
          className="mt-20 mb-28 flex flex-col items-center justify-center gap-12"
        >
          <h2 className="text-4xl font-semibold text-center">
            Nossos Fundadores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 lg:gap-x-28 xl:gap-x-44">
            <FounderCard
              name="João Victor"
              rm="555290"
              linkedin="https://www.linkedin.com/in/joaovictords11"
              imageUrl={JoaoImg.src}
              github="https://github.com/joaovictords11"
              room="1TDSPZ"
            />
            <FounderCard
              name="Gustavo Tonato"
              rm="555393"
              linkedin="https://www.linkedin.com/in/gustavo-tonato-maia-a4b403323/"
              imageUrl={TonatoImg.src}
              github="https://github.com/tonato22"
              room="1TDSPZ"
            />
            <FounderCard
              name="Diogo Weyne"
              rm="558380"
              linkedin="https://www.linkedin.com/in/diogo-weyne-b621632b3/"
              imageUrl={DiogoImg.src}
              github="https://github.com/diogoweyne"
              room="1TDSPZ"
            />
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl border-b border-orange-500">
                  Repositório
                </h4>
                <p className="max-w-[350px] text-neutral-500">
                  Conheça nosso projeto mais a fundo visitando nosso github
                </p>
                <a
                  href="https://github.com/joaovictords11/OzEnergy"
                  target="_blank"
                  className="hover:bg-orange-600 shadow font-medium duration-200 w-fit flex gap-2 justify-center items-center bg-orange-500 text-white py-2 px-4 rounded-md"
                >
                  Repositório
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Sobre;
