import Banner from "@/components/banner";
import React from "react";
import { PiSolarPanelDuotone } from "react-icons/pi";
import BannerImage from "/public/slider3.jpg";
import Container from "@/components/container";
import { GoLaw } from "react-icons/go";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { getAllPanels } from "@/services/api";
import PanelCard from "@/components/placas/panelCard";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import HouseImage from "/public/house-panel.jpg";
import Image from "next/image";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoHammerOutline } from "react-icons/io5";
import { MdOutlineDoneOutline } from "react-icons/md";

const Placas = async () => {
  const panels = await getAllPanels();

  return (
    <main>
      <Banner
        title="Conheça os melhores modelos disponíveis no mercado"
        icon={<PiSolarPanelDuotone size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Conheça os melhores modelos"
        buttonUrl="#panels"
        scrollId="panels"
      />
      <Container>
        <section className="mt-16 mb-20 flex flex-col md:flex-row justify-center flex-wrap gap-12 items-center bg-neutral-50 shadow-md p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <MdOutlineDoneOutline size={35} className="text-orange-500" />
            <div>
              <h4 className="font-semibold">Qualidade</h4>
              <p className="text-neutral-500 max-w-48">
                Equipamentos de primeira linha
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <GoLaw size={35} className="text-orange-500" />
            <div>
              <h4 className="font-semibold">Garantia</h4>
              <p className="text-neutral-500 max-w-48">
                Garantia de 12 anos no inversor
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoHammerOutline size={35} className="text-orange-500" />
            <div>
              <h4 className="font-semibold">Instalação</h4>
              <p className="text-neutral-500 max-w-48">
                Instalação rápida e gratuita
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RiMoneyDollarCircleFill size={35} className="text-orange-500" />
            <div>
              <h4 className="font-semibold">Valorização</h4>
              <p className="text-neutral-500 max-w-48">
                Seu imóvel valorizado em até 90%
              </p>
            </div>
          </div>
        </section>
        <section className="mb-20 flex flex-col gap-12 md:flex-row items-center justify-between">
          <div>
            <h2 className="font-semibold text-4xl mb-2">
              Pensando em investir?
            </h2>
            <p className="text-neutral-500 max-w-md mb-8">
              Conheça nossas soluções em energia solar e solicite um orçamento
              agora mesmo! Descubra como nossas placas solares podem reduzir
              seus custos com eficiência e sustentabilidade.
            </p>
            <Link
              href="/orcamento"
              className="bg-orange-500 flex items-center gap-2 hover:bg-orange-600 duration-200 px-4 py-2 w-fit text-white font-medium rounded-md"
            >
              Faça um orçamento
              <IoMdArrowForward size={22} />
            </Link>
          </div>
          <Image
            src={HouseImage}
            alt="Imagem fios de energia"
            quality={100}
            priority
            className="max-w-md w-full rounded-lg shadow-md"
          />
        </section>
        <section id="panels" className="mt-20 mb-28">
          <h2 className="font-semibold text-4xl text-center mb-12">
            Nossos modelos disponíveis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {panels ? (
              panels.map((panel) => (
                <PanelCard
                  key={panel.id}
                  name={panel.nome}
                  price={panel.preco.toFixed(2).replace(".", ",")}
                  savingPercentage={panel.percentualDeEconomia}
                />
              ))
            ) : (
              <p className="text-center">Não foi possível carregar os dados</p>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Placas;
