import { PiSolarPanelDuotone } from "react-icons/pi";

type PanelCardProps = {
  name: string;
  price: string;
  savingPercentage: number;
};

const PanelCard = ({ name, price, savingPercentage }: PanelCardProps) => {
  return (
    <div className="bg-neutral-50 min-w-52 shadow-md border gap-10 flex items-center justify-between border-neutral-100 py-4 px-6 rounded-md">
      <div className="flex flex-col gap-3">
        <p>
          <span className="font-semibold">Nome:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Preço:</span> R$ {price}
        </p>
        <p>
          <span className="font-semibold">Economia:</span> {savingPercentage}%
        </p>
      </div>
      <PiSolarPanelDuotone size={75} className="text-orange-500" />
    </div>
  );
};

export default PanelCard;
