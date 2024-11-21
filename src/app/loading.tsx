import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return (
    <div className="w-full h-screen mt-8 flex justify-center items-center opacity-40">
      <FiLoader size={80} color="#4b5563" className="animate-spin mb-36" />
    </div>
  );
};

export default Loading;
