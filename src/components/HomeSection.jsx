import { motion } from 'framer-motion';
import React from 'react';
import DownloadResumeButton from './DownloadResumeButton';
import GitHubButton from './GitHubButton';
import './homesection.css';
import LinkedinButton from './LinkedInButton';
import ViewResumeButton from './ViewResumeButton';

const HomeSection = () => {

    const draw = {

        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1, opacity: 1, transition: { duration: 1.5, delay: 0.4 }
        },
    };





    return (
        <div id="home" className='h-full w-full bg-slate-900 relative'>
            <Box/>

            <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} className='pt-[80px] text-center text-green-100 text-4xl'>I am Masum,<br/> a</motion.h2>
            <div className="flex justify-center items-center ">

                <motion.svg id="mern" initial="hidden" animate="visible"

                    width="300" height="100" fill={'transparent'} viewBox="0 0 468 119" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={draw} d="M438.692 73.9715L384.242 7.80346L383.492 6.892H382.312H361.704H360.159L359.468 8.27396L356.268 14.674L355.191 16.8287L357.304 17.9851L369.572 24.6979V93.8304L358.468 102.808L357.54 103.558V104.752V110V112.5H360.04H392.936H394.481L395.172 111.118L398.372 104.718L399.545 102.373L397.146 101.313L383.276 95.1872V43.3858L439.26 111.586L440.01 112.5H441.192H449.896H452.396V110V25.5696L463.618 16.5922L464.556 15.8416V14.64V9.392V6.892H462.056H429.16H427.615L426.924 8.27397L423.724 14.674L422.538 17.0454L424.975 18.0899L438.692 23.9685V73.9715Z" stroke="#82FFC3" strokeWidth="3" />
                    <motion.path variants={draw} d="M350.028 112.5H351.573L352.264 111.118L355.464 104.718L356.603 102.441L354.305 101.344L340.779 94.8857L322.607 64.431L322.122 63.6185L321.221 63.3306L318.671 62.5161C323.829 60.0875 328.424 56.9318 332.439 53.0441C338.196 47.4697 341.264 41.1361 341.264 34.096C341.264 28.8467 339.851 24.0221 337.025 19.6848C334.195 15.2552 330.204 11.8072 325.146 9.32383C320.059 6.82671 314.296 5.612 307.916 5.612C305.273 5.612 301.197 5.78707 295.728 6.12887L295.719 6.12943L295.71 6.13006C288.431 6.6379 281.022 6.89201 273.484 6.89201H256.076H254.531L253.84 8.27397L250.64 14.674L249.313 17.3278L252.153 18.1853L263.944 21.7447V93.8304L252.84 102.808L251.912 103.558V104.752V110V112.5H254.412H295.884H297.429L298.12 111.118L301.32 104.718L302.628 102.103L299.841 101.217L287.888 97.4192V22.8784C290.853 21.0053 294.057 20.084 297.548 20.084C303.74 20.084 308.077 21.9785 310.991 25.4603L311 25.4717L311.01 25.483C314.139 29.1331 315.784 33.8559 315.784 39.856C315.784 44.445 314.428 47.7392 311.959 50.0705C309.461 52.4301 305.953 53.74 301.132 53.74H294.348H292.784L292.1 55.1463L289.796 59.8823L288.87 61.7863L290.595 63.0134L295.926 66.8039L322.408 111.279L323.135 112.5H324.556H350.028Z" stroke="#82FFC3" strokeWidth="3" />
                    <motion.path variants={draw} d="M212.34 100.076H183.391V64.756H197.438L204.972 81.8255L206.031 84.2251L208.377 83.0521L214.777 79.8521L216.159 79.1611V77.616V39.344V36.844H213.659H208.411H207.003L206.274 38.0475L197.531 52.46H183.391V19.188H212.967L227.712 41.1227L228.815 42.7627L230.665 42.0688L235.785 40.1488L237.407 39.5405V37.808V7.08801V3.74374L234.2 4.69023L226.738 6.89201H151.579H150.034L149.343 8.27398L146.143 14.674L144.839 17.282L147.615 18.1725L159.447 21.9676V94.0664L148.369 102.788L147.415 103.538V104.752V110V112.5H149.915H228.018L235.479 114.702L238.687 115.648V112.304V79.024V77.2915L237.065 76.6832L231.945 74.7632L230.109 74.0748L229.003 75.6934L212.34 100.076Z" stroke="#82FFC3" strokeWidth="3" />
                    <motion.path variants={draw} d="M134.352 112.5H135.897L136.588 111.118L139.788 104.718L141.11 102.073L138.283 101.209L126.228 97.5258V25.3336L137.424 16.6123L138.388 15.8616V14.64V9.392V6.892H135.888H103.248H101.555L100.927 8.46352L72.5232 79.4726L43.9999 8.46019L43.37 6.892H41.68H10.704H9.15891L8.46793 8.27396L5.26793 14.674L4.13276 16.9443L6.4201 18.0448L18.572 23.8915V94.0664L7.4936 102.788L6.54 103.538V104.752V110V112.5H9.04H40.272H41.8171L42.5081 111.118L45.7081 104.718L46.865 102.404L44.5129 101.327L32.276 95.7232V40.5477L60.7383 110.937L61.3702 112.5H63.056H71.632H73.3138L73.9477 110.942L102.412 40.9856V94.0664L91.3336 102.788L90.38 103.538V104.752V110V112.5H92.88H134.352Z" stroke="#82FFC3" strokeWidth="3" />
                </motion.svg>


            </div>

            <motion.h2  initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}} className=' text-center text-[#82FFC3] text-3xl'>Stack Developer</motion.h2>

            <div className="flex w-full justify-center items-center gap-3 mt-4">
                <GitHubButton/>
                <LinkedinButton/>

            </div>
            <div className="flex flex-col items-center">
                <DownloadResumeButton/>
                <ViewResumeButton/>
            </div>




        </div>
    );
};

export default HomeSection;


const Box = ()=> {
    return (
        <motion.div initial={{rotate:0, }} animate={{rotate:360, }} transition={{repeat: Infinity, repeatType:'loop', duration: 5, ease: "linear"}} className='absolute top-[-25vh] left-[-25vh] h-[50vh] w-[50vh] bg-transparent  border-sky-400 opacity-10'>
            <div className="absolute top-0 left-0 bg-sky-300 h-2 w-2 rounded-full"></div>
            <div className="absolute top-0 left-[100%] bg-sky-300 h-2 w-2 rounded-full"></div>
            <div className="absolute top-[100%] left-0 bg-sky-300 h-2 w-2 rounded-full"></div>
            <div className="absolute top-[100%] left-[100%] bg-sky-300 h-2 w-2 rounded-full"></div>

        </motion.div>
    )
}