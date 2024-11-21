import Image from "next/image";

type EconomyCardProps = {
  imageUrl: string;
  title: string;
  text: string;
};

const EconomyCard = ({ text, title, imageUrl }: EconomyCardProps) => {
  return (
    <div className="flex flex-col gap-3 max-w-80 border border-neutral-300 bg-neutral-50 p-4 rounded-lg shadow-md">
      <Image
        src={imageUrl}
        alt="Imagem painel solar"
        className="w-full rounded-lg object-cover border border-neutral-200"
        width={320}
        height={320}
        quality={100}
        priority
      />
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-neutral-500 max-w-60">{text}</p>
    </div>
  );
};

export default EconomyCard;
