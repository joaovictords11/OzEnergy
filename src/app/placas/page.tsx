import Banner from "@/components/banner";
import React from "react";
import { PiSolarPanelDuotone } from "react-icons/pi";
import BannerImage from "/public/slider3.jpg";
import Container from "@/components/container";

const Placas = () => {
  return (
    <main>
      <Banner
        title="Conheça os melhores modelos disponíveis no mercado"
        icon={<PiSolarPanelDuotone size={24} />}
        bannerUrl={BannerImage.src}
        buttonTitle="Conheça os melhores modelos"
        buttonUrl="#founders"
        scrollId="founders"
      />
      <Container>
        <section>
          <h2></h2>
        </section>
      </Container>
    </main>
  );
};

export default Placas;
