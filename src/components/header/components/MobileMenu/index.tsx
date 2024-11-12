import { motion, AnimatePresence } from "framer-motion";
import { IoPersonCircleOutline } from "react-icons/io5";

type MobileMenuProps = {
  open: boolean;
};

const MobileMenu = ({ open }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="bg-orange-500 text-white py-7 mx-10 my-5 rounded-lg">
            <ul className="flex flex-col items-center font-semibold justify-center gap-5 text-lg">
              <li>Home</li>
              <li>Placas</li>
              <li>Feedback</li>
              <li>Sobre</li>
              <li>
                <button className="flex items-center gap-2 border border-white px-3 py-2 rounded-md">
                  <IoPersonCircleOutline size={25} />
                  Entrar
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
