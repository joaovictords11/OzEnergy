import { IconType } from "react-icons";

type StatisticsCardProps = {
  detail: string;
  text: string;
  icon: IconType;
};

const StatisticsCard = ({ detail, text, icon: Icon }: StatisticsCardProps) => {
  return (
    <article className="flex gap-4 items-center">
      <Icon size={50} className=" text-orange-500 min-w-10" />

      <div className="flex flex-col">
        <p className="w-36 font-bold text-xl">{detail}</p>
        <p className="text-neutral-500">{text}</p>
      </div>
    </article>
  );
};

export default StatisticsCard;
