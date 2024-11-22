import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FounderCardProps = {
  imageUrl: string;
  name: string;
  rm: string;
  room: string;
  github: string;
  linkedin: string;
};

const FounderCard = ({
  imageUrl,
  github,
  linkedin,
  name,
  rm,
  room,
}: FounderCardProps) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <Image
        src={imageUrl}
        alt="Imagem fundador"
        className="rounded-full w-64 h-64 object-cover border-2 border-orange-400 shadow-md"
        width={256}
        height={256}
      />
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl border-b border-orange-500">{name}</h4>
        <p className="text-neutral-500">RM {rm}</p>
        <p className="text-neutral-500">{room}</p>
        <div className="flex gap-4">
          <a href={github} target="_blank" className="text-neutral-600 hover:text-black duration-200">
            <FaGithub size={25} />
          </a>
          <a href={linkedin} target="_blank" className="text-blue-500 hover:text-blue-600 duration-200">
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
