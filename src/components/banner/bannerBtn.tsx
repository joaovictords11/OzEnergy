"use client";

type BannerBtnProps = {
  buttonUrl: string;
  icon?: React.ReactNode;
  buttonTitle: string;
  id?: string;
};

const BannerBtn = ({ buttonTitle, buttonUrl, icon, id }: BannerBtnProps) => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a
      href={buttonUrl}
      onClick={(e) => handleScroll(e, id!)}
      className="bg-orange-500 mt-4 flex items-center gap-4 text-white py-2 px-6 rounded-lg font-medium hover:scale-105 duration-300"
    >
      {icon}
      {buttonTitle}
    </a>
  );
};

export default BannerBtn;
