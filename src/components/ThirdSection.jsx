import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose, SiPostman, SiPrisma, SiReactquery, SiRedux, SiSocketdotio, SiTypescript, SiVitest } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";




const skills = [
    { title: "HTML", image: '/html.webp', type: 'frontend', icon: <FaHtml5 /> },
    { title: "CSS", image: '/css.webp', type: 'frontend', icon: <FaCss3 /> },
    { title: "JAVASCRIPT", image: '/javascript.webp', type: 'frontend', icon: <IoLogoJavascript /> },
    { title: "TYPESCRIPT", image: '/typescript.webp', type: 'frontend', icon: <SiTypescript /> },
    { title: "REACT", image: '/react.webp', type: 'frontend', icon: <FaReact /> },
    { title: "NEXT.JS", image: '/nextjs.webp', type: 'frontend', icon: <RiNextjsFill /> },
    { title: "React Query", image: '/reactquery.webp', type: 'frontend', icon: <SiReactquery /> },
    { title: "Zustand", image: '/zustand.webp', type: 'frontend', icon: null },
    { title: "Socket Io", image: '/socket.webp', type: 'frontend', icon: <SiSocketdotio /> },
    { title: "RTK Query", image: '/redux.webp', type: 'frontend', icon: <SiRedux /> },
    { title: 'skip' },
    { title: "Firebase Authentication", image: '/firebase.webp', type: 'backend', icon: <IoLogoFirebase /> },
    { title: "EXPRESS", image: '/expressjs.webp', type: 'backend', icon: <SiExpress /> },
    { title: "NODE.JS", image: '/nodejs.webp', type: 'backend', icon: <FaNodeJs /> },
    { title: "MONGODB", image: '/mongodb.webp', type: 'backend', icon: <SiMongodb /> },
    { title: "JWT Authentication", image: '/jwt.webp', type: 'backend', icon: <SiJsonwebtokens /> },
    { title: "Mongoose", image: '/mongoose.webp', type: 'backend', icon: <SiMongoose /> },
    { title: "Prisma ORM", image: '/prisma.webp', type: 'backend', icon: <SiPrisma /> },
    { title: "Python", image: '/python.webp', type: 'backend', icon: <FaPython /> },
    {title: 'skip'},
    { title: "Github", image: '/python.webp', type: 'tools', icon: <FaGithub /> },
    { title: "VsCode", image: '/vscode.webp', type: 'tools', icon: <VscVscode /> },
    { title: "Postman", image: '/postman.webp', type: 'tools', icon: <SiPostman  /> },
    { title: "vitest", image: '/vitest.webp', type: 'tools', icon: <SiVitest /> },
]



const ThirdSection = ({ setActiveLink }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.7", "start start"],
    })

    const { scrollYProgress: rotateProgress } = useScroll({
        target: container,
        offset: ["start 0.3", "end end"],
    })

    const inView = useInView(container, { amount: 0.5 });

    useEffect(() => {
        console.log("inview: ", inView);
        if (inView) {
            setActiveLink(2);
        }
    }, [inView, setActiveLink]);

    const scaleFirst = useTransform(scrollYProgress, [0, 1], [1.1, 0]);
    const scaleSecond = useTransform(scrollYProgress, [0, 1], [2, 0]);
    const scaleThird = useTransform(scrollYProgress, [0, 1], [1.3, 0]);
    const scaleFourth = useTransform(scrollYProgress, [0, 1], [1.8, 0]);


    return (

        <div id="skills" ref={container} className="min-h-[90vh] w-[100%] bg-gradient-to-b from-slate-900 to-slate-800 relative  overflow-hidden">
            {/* <motion.div style={{scale: scaleFirst}} className="absolute top-0 bg-black h-[100%] w-[25%]"></motion.div>
            <motion.div style={{scale: scaleSecond}} className="absolute top-0 left-[25%] bg-black h-[100%] w-[25%]"></motion.div> */}
            <motion.div style={{ scaleY: scaleFirst }} initial={{ scaleY: 1.1 }} className="absolute top-0 z-20 bg-slate-950/95 h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleSecond }} initial={{ scaleY: 2 }} className="absolute top-0 z-20 left-[25%] bg-slate-950/95 h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleThird }} initial={{ scaleY: 1.3 }} className="absolute top-0 z-20 left-[50%] bg-slate-950/95 h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleFourth }} initial={{ scaleY: 1.8 }} className="absolute top-0 z-20 left-[75%] bg-slate-950/95 h-[100%] w-[25%] origin-bottom"></motion.div>


            <h2 className=' underline my-6 text-center pt-7 text-green-400 text-4xl pb-2'>Skills</h2>

            <div className="max-w-[1100px] m-auto p-2 mb-9">
                <div className="grid grid-cols-4 gap-2 md:grid-cols-6">

                    {
                        skills.map((skill, i) => (
                            <Skill skill={skill} key={i} i={i} length={skills.length} scrollYProgress={rotateProgress} />
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default ThirdSection;



const Skill = ({ skill, i, length, scrollYProgress }) => {

    const threshold = i / length
    const rotate = useTransform(
        scrollYProgress,
        [threshold, threshold + 0.01],
        [0, 180]
    )


    return (

        skill.title === "skip" ? <div className='col-span-full'></div> :

            <div style={{ perspective: '1000px' }} className="flex justify-center col-span-1 items-center w-full h-16  overflow-hidden rounded-md  mr-2">
                {/* <motion.div initial={{ rotateY: 0 }} animate={{ rotateY: 180 }} transition={{delay:i*0.2, duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay:length*0.2}} style={{ transformStyle: 'preserve-3d' }} className="card  relative h-[100%] w-[100%] duration-100 "> */}
                <motion.div style={{ transformStyle: 'preserve-3d', rotateY: rotate }} className="card  relative h-[100%] w-[100%] duration-400 ">
                    <div style={{ position: 'absolute', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }} className={`cardfront text-white bg-gradient-to-br  ${skill.type === 'frontend' ? 'from-green-400/20' : skill.type === 'backend' ? 'from-orange-400/20' : 'from-teal-400/20'} to-slate-800 h-full w-full text-center`}>

                        <div className="absolute  rounded-md top-0 left-0 w-[100%] h-[100%] flex flex-col justify-center items-center overflow-hidden">

                            <p className='text-xs sm:text-sm md:text-base'>{skill.title}</p>
                            <span className='text-base'>{skill.icon}</span>
                            {/* <div className={`light absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] w-[20%] aspect-square  rounded-full ${skill.type === 'frontend' ? 'bg-green-400' : 'bg-orange-400'} blur-md`}></div> */}
                        </div>
                    </div>



                    <img src={skill.image} alt={skill.title} style={{ position: 'absolute', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }} className="cardback overflow-hidden top-0 left-0 w-[100%] h-[100%] " />

                </motion.div>
            </div>

    )
}