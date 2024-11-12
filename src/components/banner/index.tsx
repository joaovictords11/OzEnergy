import Image from "next/image";

type BannerProps = {
  title: string;
  buttonUrl?: string;
  buttonTitle?: string;
  bannerUrl: string;
  icon?: React.ReactNode;
};

const Banner = ({
  bannerUrl,
  buttonTitle,
  buttonUrl,
  title,
  icon,
}: BannerProps) => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="absolute z-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center max-w-[600px] mb-4 mx-6">
          {title}
        </h1>
        <a
          // target="_blank"
          href={buttonUrl}
          className="bg-orange-500 mt-4 flex items-center gap-4 text-white py-2 px-6 rounded-lg font-medium hover:scale-105 duration-300"
        >
          {icon}
          {buttonTitle}
        </a>
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
