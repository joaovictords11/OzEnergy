import { ReactNode } from "react";

type StatisticsCardProps = {
  detail: string;
  text: string;
  icon: ReactNode;
};

const StatisticsCard = ({ detail, text, icon }: StatisticsCardProps) => {
  return (
    <article className="flex gap-4 items-center">
      {icon}

      <div className="flex flex-col">
        <p className="w-36 font-bold text-xl">{detail}</p>
        <p className="text-neutral-500">{text}</p>
      </div>
    </article>
  );
};

export default StatisticsCard;
