import { useState } from "react";
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'

const links = [
    { title: 'Home', src: "home" },
    { title: 'About', src: "about" },
    // { title: 'Resume', src: "resume" },
    { title: 'Skills', src: "skills" },
    { title: 'Projects', src: "projects" },
    { title: 'Contact', src: "contact" },
]

const Header = ({ activeLink, setActiveLink }) => {
    const [isActive, setActive] = useState(false);
    const handleScroll = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({top:0, behavior:'smooth'});
        } else {


            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });

                // Use history API to avoid changing the URL
                window.history.pushState(null, '', window.location.pathname);
            }
        }
    };

    return (
        <>


            {/* Desktop */}
            <motion.div animate={{ top: 0 }} initial={{ top: "-100%" }} exit={{ top: "-100%" }} transition={{ duration: 0.2, type: 'spring', stiffness: 70 }} className="w-[100%] hidden md:flex justify-center items-center fixed z-[100] top-0">
                <div className="bg-green-400 rounded-b-md relative">
                    <div className="flex relative">

                        {
                            links.map((link, index) => (
                                <p onClick={() => handleScroll(link.src)} key={index} className="cursor-pointer px-6  py-3 relative z-[20]">
                                    <span className="relative z-[22]">{link.title}</span>
                                    <motion.span initial={{ height: 0 }} animate={{ height: index === activeLink ? "100%" : 0 }} className="h-[100%] w-[100%] absolute bottom-0 left-0 bg-gradient-to-t from-green-600 to-transparent z-[21] origin-bottom"></motion.span>
                                </p>
                            ))
                        }
                    </div>
                    {/* <div className="absolute border-red-500 border-[25px] z-[90] bottom-0 right-[91%]   skew-x-[30deg] rounded-md    "></div>
                <div className="absolute border-orange-500 border-[25px] z-[90] bottom-0 left-[91%]   skew-x-[-30deg] rounded-md    "></div> */}
                    <div className="absolute top-0 left-[-5%] w-[20%] h-[100%] bg-green-400 z-[-1] skew-x-[30deg] rounded-md   "></div>
                    <div className="absolute top-0 right-[-5%] w-[20%] h-[100%] bg-green-400 z-[-1] skew-x-[-30deg] rounded-md   "></div>
                </div>
            </motion.div>




            {/* Mobile */}
            <div className="w-[100%] relative md:hidden">
                <motion.div
                    animate={{ top: isActive ? '10px' : '0', borderRadius: isActive ? '20px' : '0px  0px 20px 20px' }}
                    onClick={() => setActive(!isActive)} className="fixed z-[100] top-0 left-[50%] translate-x-[-50%] cursor-pointer h-[40px] overflow-hidden w-[150px]  ">
                    <motion.p animate={{ top: isActive ? '-100%' : '0' }} initial={{ top: 0 }} className='bg-green-400 w-full h-full absolute flex items-center justify-center'>Menu</motion.p>
                    <motion.p animate={{ top: isActive ? '0' : '100%' }} initial={{ top: '100%' }} className="bg-black text-white w-full h-full absolute  flex items-center justify-center">Close</motion.p>
                </motion.div>
                <motion.div animate={{ height: isActive ? 'auto' : '0', }} initial={{ height: 0 }} className="fixed z-[99] top-0 left-[50%] translate-x-[-50%]    bg-green-400  w-[550px]  origin-top overflow-hidden rounded-b-md">
                    {
                        links.map((link, index) => (
                            <motion.a
                                animate={isActive ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? '20%' : '-20%', opacity: 0 }} // Animate when the menu is active
                                initial={{ x: index % 2 === 0 ? '20%' : '-20%', opacity: 0 }} // Initially off-screen
                                transition={{ delay: isActive ? 0.2 : 0 }}
                                onClick={() => setActive(!isActive)}
                                key={index}
                                href={link.src}
                                className={`w-full h-[50px] relative text-black flex items-center justify-center ${index === 0 ? 'mt-12' : ''}`}
                            >{link.title}</motion.a>
                        ))
                    }
                </motion.div>
            </div>


        </>
    );
};


Header.propTypes = {
    activeLink: PropTypes.number.isRequired,
    setActiveLink: PropTypes.func.isRequired,
};
export default Header;

