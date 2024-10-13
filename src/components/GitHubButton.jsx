
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GitHubButton = () => {
    return (
        <motion.button initial={{ x: -300, opacity: 0 }} animate={{ x: 0 , opacity: 1}} transition={{ duration: 0.4, delay:1.6 }}  className="bg-gray-900  px-3 py-1 rounded-md border border-white ">
            <a className="flex items-center gap-1 text-white " target="_blank" href="https://github.com/masummim50">
              Github <span className="inline-block"><FaGithub/></span>
            </a>
          </motion.button>
    );
};

export default GitHubButton;