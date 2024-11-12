import Banner from "@/components/banner";
import Container from "@/components/container";
import { FaSolarPanel } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMdSunny } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import BannerImage from "/public/energia.jpg";
import StatisticsImage from "/public/paineis.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner
        title="Venha conhecer a OzCarbon e desfrutar de nossos serviços"
        icon={<FiPhone size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Fale com nosso time"
        buttonUrl="/"
      />
      <Container>
        <section className="mt-16">
          <h2 className="text-center font-semibold text-4xl mb-12">
            Nossa reputação
          </h2>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-stretch md:gap-20">
            <article className="flex flex-col gap-3 border rounded p-4 border-slate-300 w-64">
              <IoMdSunny size={55} className="text-orange-500" />
              <h4 className="text-xl font-bold">Melhores serviços</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
            <article className="flex flex-col gap-3 border rounded p-4 border-slate-300 w-64">
              <FaSolarPanel size={53} className="text-orange-500" />
              <h4 className="text-xl font-bold">Placas de qualidade</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
            <article className="flex flex-col gap-3 border rounded p-4 border-slate-300 w-64">
              <SlEnergy size={53} className="text-orange-500" />
              <h4 className="text-xl font-bold">Energia acessível</h4>
              <p className="text-neutral-500">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </article>
          </div>
        </section>
        <section className="my-16 flex flex-col items-center gap-4 md:gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold">
              Evolução da energia solar
            </h2>
            <h4 className="text-neutral-500 mb-4 max-w-[680px]">
              Aqui estão alguns dados detalhados sobre a expansão da capacidade
              de geração solar no Brasil (Em gigawatts)
            </h4>
            <article>
              <p className="font-semibold">2021</p>
              <div className="bg-orange-300 rounded w-full max-w-[384px]">
                <div className="bg-orange-500 w-2/6 text-white px-6 py-1 rounded-l">
                  13 GW
                </div>
              </div>
            </article>
            <article>
              <p className="font-semibold">2022</p>
              <div className="w-full max-w-[384px] bg-orange-300 rounded">
                <div className="bg-orange-500 w-1/2 text-white px-6 py-1 rounded-l">
                  24 GW
                </div>
              </div>
            </article>
            <article>
              <p className="font-semibold">2023</p>
              <div className="w-full max-w-[384px] bg-orange-300 rounded">
                <div className="bg-orange-500 w-3/4 text-white px-6 py-1 rounded-l">
                  39 GW
                </div>
              </div>
            </article>
            <p className="text-neutral-500 mb-4 md:mb-0">
              Fonte: Latin America Solar
            </p>
          </div>
          <div className="md:w-2/5 md:h-96">
            <Image
              src={StatisticsImage}
              alt=""
              className="object-cover min-w-[280px] h-72 md:h-96 rounded"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
