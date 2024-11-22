import Banner from "@/components/banner";
import Container from "@/components/container";
import { FaSolarPanel } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdSunny, IoMdTimer } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import BannerImage from "/public/energia.jpg";
import StatisticsImage from "/public/paineis.jpg";
import Image from "next/image";
import { MdGroups, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import panelInstallation from "/public/panel-installation.jpg";
import ReputationCard from "@/components/home/reputationCard";
import StatisticsCard from "@/components/home/statisticsCard";

export default function Home() {
  return (
    <main>
      <Banner
        title="Venha conhecer a OzEnergy e desfrutar de nossos serviços"
        icon={<FiPhone size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Fale com nosso time"
        buttonUrl="#footer"
        scrollId="footer"
      />
      <Container>
        <section className="mt-16">
          <h2 className="text-center font-semibold text-4xl mb-12">
            Nossa reputação
          </h2>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-stretch md:gap-20">
            <ReputationCard
              title="Melhores serviços"
              text="Asseguramos a qualidade do serviço desde o planejamento até a instalação"
              icon={IoMdSunny}
            />
            <ReputationCard
              title="Placas de qualidade"
              text="Do projeto à execução, garantimos excelência nos serviços e nos equipamentos fornecidos."
              icon={FaSolarPanel}
            />
            <ReputationCard
              title="Energia acessível"
              text="Alcance independência energética e reduza sua conta de energia em até 90%."
              icon={SlEnergy}
            />
          </div>
        </section>
        <section className="mt-20 flex flex-col gap-16 items-center md:flex-row md:justify-between md:gap-10">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-semibold">Porque OzEnergy?</h2>
            <article className="flex items-center gap-4">
              <figure className="inline-flex border-4 border-orange-500 rounded-full p-1 shadow-lg">
                <IoMdTimer size={60} className=" text-orange-500" />
              </figure>
              <div>
                <h6 className="font-semibold text-xl">Ganhe tempo</h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Projeto completo: peças e instalação
                </p>
              </div>
            </article>
            <article className="flex items-center gap-4">
              <figure className="inline-flex border-4 border-orange-500 rounded-full p-1 shadow-lg">
                <RiMoneyDollarCircleLine
                  size={60}
                  className=" text-orange-500"
                />
              </figure>
              <div>
                <h6 className="font-semibold text-xl">Economize</h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Até 95% de economia
                </p>
              </div>
            </article>
            <article className="flex items-center gap-4">
              <figure className="inline-flex border-4 border-orange-500 rounded-full p-1 shadow-lg">
                <MdOutlineEnergySavingsLeaf
                  size={60}
                  className=" text-orange-500"
                />
              </figure>
              <div>
                <h6 className="font-semibold text-xl">Qualidade garantida</h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Garantia de 12 anos no inversor e nos módulos
                </p>
              </div>
            </article>
          </div>
          <div className="w-full md:w-auto rounded-lg flex-grow">
            <Image
              src={panelInstallation}
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
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl">
              Ajudando famílias
              <br />
              <span className="text-orange-500">de todas as classes</span>
            </h2>
            <p className="mt-2">
              Sem reajustes anuais igual à conta de energia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
            <StatisticsCard
              detail="2.245.341"
              text="Clientes"
              icon={MdGroups}
            />
            <StatisticsCard
              detail="46.328"
              text="Casas"
              icon={MdOutlineEnergySavingsLeaf}
            />
            <StatisticsCard
              detail="828.867"
              text="Receita"
              icon={RiMoneyDollarCircleLine}
            />
            <StatisticsCard
              detail="1.926.436"
              text="Economia"
              icon={IoMdTimer}
            />
          </div>
        </div>
      </section>

      <Container>
        <section className="mt-20 mb-28 flex flex-col items-center gap-4 md:gap-12 md:flex-row-reverse md:justify-between">
          <div className="flex flex-col gap-4 md:text-right">
            <h2 className="text-4xl font-semibold">
              Evolução da energia solar
            </h2>
            <h4 className="text-neutral-500 mb-4 max-w-xl">
              Aqui estão alguns dados detalhados sobre a expansão da capacidade
              de geração solar no Brasil (Em gigawatts)
            </h4>
            <article className="flex flex-col md:items-end">
              <p className="font-semibold">2021</p>
              <div className="bg-orange-300 rounded w-full max-w-[384px] shadow-md">
                <div className="bg-orange-500 w-2/6 text-white px-6 py-1 rounded md:ml-auto">
                  13 GW
                </div>
              </div>
            </article>
            <article className="flex flex-col md:items-end">
              <p className="font-semibold">2022</p>
              <div className="w-full max-w-[384px] bg-orange-300 rounded shadow-md">
                <div className="bg-orange-500 w-1/2 text-white px-6 py-1 rounded md:ml-auto">
                  24 GW
                </div>
              </div>
            </article>
            <article className="flex flex-col md:items-end">
              <p className="font-semibold">2023</p>
              <div className="w-full max-w-[384px] bg-orange-300 rounded shadow-md">
                <div className="bg-orange-500 w-3/4 text-white px-6 py-1 rounded md:ml-auto">
                  39 GW
                </div>
              </div>
            </article>
            <p className="text-neutral-500 mb-4 md:mb-0">
              Fonte: Latin America Solar
            </p>
          </div>
          <div className="md:w-2/5 md:h-96 shadow rounded-lg">
            <Image
              src={StatisticsImage}
              alt="Imagem painéis solares"
              className="object-cover h-72 md:h-96 rounded-lg shadow-lg"
              quality={100}
              priority
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
