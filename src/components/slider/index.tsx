"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "/public/energia.jpg";
import img2 from "/public/slider2.jpg";
import img3 from "/public/slider3.jpg";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Slider = () => {
  return (
    <section className="mt-20 flex flex-col md:flex-row w-full bg-orange-500 rounded-xl">
      <div className="md:w-1/2 rounded-lg">
        <Splide aria-label="Imagens placas solares">
          <SplideSlide>
            <Image
              src={img1}
              alt="Placas solares instaladas"
              className="h-full rounded-xl object-cover"
              quality={100}
              priority
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={img2}
              alt="Placas solares instaladas"
              className="h-full rounded-xl object-cover"
              quality={100}
              priority
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={img3}
              alt="Placas solares instaladas"
              className="h-full rounded-xl object-cover"
              quality={100}
              priority
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center gap-6 text-white p-9">
        <h2 className="text-3xl font-semibold">Sobre nós</h2>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <Link
          href="/sobre"
          className="flex gap-2 border justify-center border-white text-white p-2 rounded w-36 hover:opacity-70"
        >
          Veja mais
          <MdArrowOutward size={22} className="text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Slider;
