import React from "react";
import { IconType } from "react-icons";

type DetailCardProps = {
  text: string;
  icon: IconType;
};

const DetailCard = ({ text, icon: Icon }: DetailCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 justify-center items-center border border-neutral-300 rounded-md shadow">
      <Icon size={55} className="text-orange-500" />
      <p className="text-neutral-500 max-w-80 text-center">{text}</p>
    </div>
  );
};

export default DetailCard;
