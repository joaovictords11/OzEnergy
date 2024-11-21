import { IconType } from "react-icons";

type ReputationCardProps = {
  title: string;
  text: string;
  icon: IconType;
};

const ReputationCard = ({ title, text, icon: Icon }: ReputationCardProps) => {
  return (
    <div className="flex flex-col shadow-md gap-3 border rounded-md p-4 border-slate-300 w-full sm:w-80 md:w-64">
      <Icon size={55} className="text-orange-500" />
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-neutral-500">{text}</p>
    </div>
  );
};

export default ReputationCard;
