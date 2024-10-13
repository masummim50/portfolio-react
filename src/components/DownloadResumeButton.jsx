
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DownloadResumeButton = () => {
    return (
        <motion.a initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay:1.7 }}  className="flex items-center bg-cyan-500 rounded-md mt-3 px-3 py-1"
          
          href="https://drive.google.com/uc?export=download&id=1wSRTF4I_UwfEwRcA0va1-qWHGJqsromS"
        >
          <button className="btn brand-btn">
            Download Resume <span className="inline-block"><FaDownload /></span>
          </button>
        </motion.a>
    );
};

export default DownloadResumeButton;