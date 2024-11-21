import Banner from "@/components/banner";
import Container from "@/components/container";
import BannerImage from "/public/orcamento-banner.jpg";
import economyImg1 from "/public/economy-1.jpg";
import economyImg2 from "/public/economy-2.jpg";
import economyImg3 from "/public/economy-3.jpg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import EconomyCard from "@/components/orcamento/economyCard";

const Orcamento = () => {
  return (
    <main>
      <Banner
        title="Os melhores painéis solares por um preço acessível"
        icon={<FaMoneyCheckDollar size={24}/>}
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
              title="Solar Energy Solutions"
              text="Harness the power of the sun with our comprehensive solar panel
                installations and maintenance services."
              imageUrl={economyImg1.src}
            />
            <EconomyCard
              title="Solar Energy Solutions"
              text="Harness the power of the sun with our comprehensive solar panel
                installations and maintenance services."
              imageUrl={economyImg3.src}
            />
            <EconomyCard
              title="Solar Energy Solutions"
              text="Harness the power of the sun with our comprehensive solar panel
                installations and maintenance services."
              imageUrl={economyImg2.src}
            />
          </div>
        </section>
        <section id="orcamento" className="mb-28 flex flex-col items-center">
            <h2 className="font-semibold text-4xl text-center mb-12">Seu orçamento</h2>
            <div className="flex w-3/4">
                <div className="w-1/2 bg-slate-100 rounded-l-lg"></div>
                <form className="flex flex-col gap-2 bg-orange-200 w-1/2 p-4 rounded-r-lg">
                    <label>Nome</label>
                    <input className="bg-slate-300 mb-2 outline-none px-2 py-1 rounded-md"></input>
                    <label>Nome</label>
                    <input className="bg-slate-300 mb-4 outline-none px-2 py-1 rounded-md"></input>
                    <button className="bg-orange-500 font-medium text-white rounded-md py-1 hover:bg-orange-600 duration-200">Enviar</button>
                </form>
            </div>
        </section>
      </Container>
    </main>
  );
};

export default Orcamento;
