import Banner from "@/components/banner";
import Container from "@/components/container";
import { FaSolarPanel } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdSunny, IoMdTimer } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import BannerImage from "/public/energia.jpg";
import StatisticsImage from "/public/paineis.jpg";
import Image from "next/image";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import panelInstallation from "/public/panel-installation.jpg";

export default function Home() {
  return (
    <main className="text-neutral-700">
      <Banner
        title="Venha conhecer a OzEnergy e desfrutar de nossos serviços"
        icon={<FiPhone size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Fale com nosso time"
        buttonUrl="#footer"
      />
      <Container>
        <section className="mt-16">
          <h2 className="text-center font-semibold text-4xl mb-12">
            Nossa reputação
          </h2>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-stretch md:gap-20">
            <article className="flex flex-col shadow-md gap-3 border rounded-md p-4 border-slate-300 w-full sm:w-80 md:w-64">
              <IoMdSunny size={55} className="text-orange-500" />
              <h4 className="text-xl font-bold">Melhores serviços</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
            <article className="flex flex-col shadow-md gap-3 border rounded-md p-4 border-slate-300 w-full sm:w-80 md:w-64">
              <FaSolarPanel size={53} className="text-orange-500" />
              <h4 className="text-xl font-bold">Placas de qualidade</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
            <article className="flex flex-col shadow-md gap-3 border rounded-md p-4 border-slate-300 w-full sm:w-80 md:w-64">
              <SlEnergy size={53} className="text-orange-500" />
              <h4 className="text-xl font-bold">Energia acessível</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
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
                <h6 className="font-semibold text-xl">Save Time</h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Get up to 3 quotes from our selected suppliers by filling in
                  only 1 form
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
                <h6 className="font-semibold text-xl">Save Money</h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Get up to 3 quotes from our selected suppliers by filling in
                  only 1 form
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
                <h6 className="font-semibold text-xl">
                  Free and No Obligation
                </h6>
                <p className="text-neutral-500 md:max-w-sm">
                  Get up to 3 quotes from our selected suppliers by filling in
                  only 1 form
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

      <section className="bg-neutral-50 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-6 justify-between py-8 px-4">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-2xl">
              Helping a local
              <br />
              <span className="text-orange-500">business reinvent itself</span>
            </h2>
            <p className="mt-2">
              We reached here with our hard <br className="lg:hidden"/> work and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
            <article className="flex gap-4 items-center">
              <IoMdTimer size={50} className=" text-orange-500 min-w-10" />

              <div className="flex flex-col">
                <p className="w-36 font-bold text-xl">2.245.341</p>
                <p className="text-neutral-500">Members</p>
              </div>
            </article>
            <article className="flex gap-4 items-center">
              <MdOutlineEnergySavingsLeaf
                size={50}
                className=" text-orange-500 min-w-10"
              />

              <div className="flex flex-col">
                <p className="w-36 font-bold text-xl">46.328</p>
                <p className="text-neutral-500">Clubs</p>
              </div>
            </article>
            <article className="flex gap-4 items-center">
              <RiMoneyDollarCircleLine
                size={50}
                className=" text-orange-500 min-w-10"
              />

              <div className="flex flex-col">
                <p className="w-36 font-bold text-xl">828.867</p>
                <p className="text-neutral-500">Event Bookings</p>
              </div>
            </article>
            <article className="flex gap-4 items-center">
              <IoMdTimer size={50} className=" text-orange-500 min-w-10" />

              <div className="flex flex-col">
                <p className="w-36 font-bold text-xl">1.926.436</p>
                <p className="text-neutral-500">Payments</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Container>
        <section className="my-20 flex flex-col items-center gap-4 md:gap-12 md:flex-row-reverse md:justify-between">
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
