
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const LinkedinButton = () => {
  return (
    <motion.button
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1}}
      transition={{ duration: 0.4 , delay:1.6, }}
      className="bg-blue-500 border border-blue-500  px-3 py-1 rounded-md "
    >
      <a
        className="flex items-center gap-1"
        target="_blank"
        href="https://www.linkedin.com/in/masum-billah-65709a146/"
      >
        Linkedin{" "}
        <span className="inline-block">
          <FaLinkedin />
        </span>
      </a>
    </motion.button>
  );
};

export default LinkedinButton;
