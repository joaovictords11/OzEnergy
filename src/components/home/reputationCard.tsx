import { ReactNode } from "react";

type ReputationCardProps = {
  title: string;
  text: string;
  icon: ReactNode;
};

const ReputationCard = ({ title, text, icon }: ReputationCardProps) => {
  return (
    <div className="flex flex-col shadow-md gap-3 border rounded-md p-4 border-slate-300 w-full sm:w-80 md:w-64">
      {icon}
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-neutral-500">{text}</p>
    </div>
  );
};

export default ReputationCard;
