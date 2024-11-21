import Image from "next/image";
import BannerBtn from "./bannerBtn";

type BannerProps = {
  title: string;
  buttonUrl?: string;
  buttonTitle?: string;
  bannerUrl: string;
  icon?: React.ReactNode;
  scrollId: string;
};

const Banner = ({
  bannerUrl,
  buttonTitle,
  buttonUrl,
  title,
  icon,
  scrollId,
}: BannerProps) => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center max-w-[600px] mb-4 mx-6">
          {title}
        </h1>
        <BannerBtn
          buttonTitle={buttonTitle!}
          buttonUrl={buttonUrl!}
          icon={icon}
          id={scrollId}
        />
      </div>
      <figure className="relative w-full bg-black h-96">
        <Image
          src={bannerUrl}
          alt="Placas solares"
          className="object-cover w-full opacity-50 h-96"
          priority
          quality={100}
          fill
        />
      </figure>
    </section>
  );
};

export default Banner;
