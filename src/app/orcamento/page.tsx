import Banner from "@/components/banner";
import Container from "@/components/container";
import BannerImage from "/public/orcamento-banner.jpg";
import FormImage from "/public/form-image.jpg";
import LightImage from "/public/light.jpg";
import economyImg1 from "/public/economy-1.jpg";
import economyImg2 from "/public/economy-2.jpg";
import economyImg3 from "/public/economy-3.jpg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import EconomyCard from "@/components/orcamento/economyCard";
import BudgetForm from "@/components/orcamento/budgetForm";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

const Orcamento = async () => {
  return (
    <main>
      <Banner
        title="Os melhores painéis solares por um preço acessível"
        icon={<FaMoneyCheckDollar size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Faça seu orçamento conosco"
        buttonUrl="#orcamento"
        scrollId="orcamento"
      />
      <Container>
        <section className="mt-16 mb-20">
          <h2 className="font-semibold text-4xl text-center mb-12">
            Economize até 85% na sua Conta de Luz <br /> com Nossos Painéis
            Solares
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <EconomyCard
              title="Energia Solar Completa"
              text="Aproveite a energia do sol com nossas soluções completas em instalação e manutenção de placas solares."
              imageUrl={economyImg1.src}
            />
            <EconomyCard
              title="Luz Solar Renovável"
              text="Transforme luz solar em energia limpa com nossos serviços especializados em painéis solares."
              imageUrl={economyImg3.src}
            />
            <EconomyCard
              title="Sustentabilidade Solar"
              text="Invista em sustentabilidade com nossas instalações eficientes de placas solares e suporte técnico."
              imageUrl={economyImg2.src}
            />
          </div>
        </section>

        <section className="mb-20 flex flex-col gap-12 md:flex-row items-center justify-between">
          <div>
            <h2 className="font-semibold text-4xl mb-2">
              Conta de luz nas alturas?
            </h2>
            <p className="text-neutral-500 max-w-md mb-8">
              Entre em contato com nosso time para a instalação de um sistema
              eficiente de economia através da energia solar, garantimos um
              pacote energético eficiente
            </p>
            <Link
              href="/placas"
              className="bg-orange-500 flex items-center gap-2 hover:bg-orange-600 duration-200 px-4 py-2 w-fit text-white font-medium rounded-md"
            >
              Conheça nossas placas
              <IoMdArrowForward size={22} />
            </Link>
          </div>
          <Image
            src={LightImage}
            alt="Imagem fios de energia"
            quality={100}
            priority
            className="max-w-md w-full rounded-lg shadow-md"
          />
        </section>

        <section id="orcamento" className="mb-28 flex flex-col items-center">
          <h2 className="font-semibold text-4xl text-center mb-12">
            Faça seu orçamento
          </h2>
          <div className="flex flex-col min-w-[320px] md:min-w-[720px] items-center md:flex-row w-3/4 bg-neutral-100 shadow-lg border border-neutral-200 rounded-lg">
            <div className="md:w-1/2 p-4">
              <Image
                src={FormImage}
                alt="Imagem placa solar"
                className="w-full h-full object-cover rounded-lg"
                quality={100}
                priority
              />
            </div>
            <BudgetForm />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Orcamento;
