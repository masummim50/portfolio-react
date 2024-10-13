
import { FaRegEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ViewResumeButton = () => {
    return (
        <motion.a  initial={{ y: 100 , opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay:1.8 }} className="flex items-center bg-orange-500 rounded-md mt-3 px-3 py-1"
          target="_blank"
          href="https://drive.google.com/file/d/1wSRTF4I_UwfEwRcA0va1-qWHGJqsromS/view?usp=sharing"
        >
          <button className="btn brand-btn flex items-center gap-2 ">
            View Resume <span className="inline-block"><FaRegEye /></span>
          </button>
        </motion.a>
    );
};

export default ViewResumeButton;