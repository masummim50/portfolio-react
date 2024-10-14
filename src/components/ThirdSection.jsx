import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const skills = [
    { title: "HTML", image: '/html.jpg' },
    { title: "CSS", image: '/css.jpg' },
    { title: "JAVASCRIPT", image: '/javascript.jpg' },
    { title: "TYPESCRIPT", image: '/typescript.jpg' },
    { title: "REACT", image: '/react.jpg' },
    { title: "NEXT.JS", image: '/nextjs.jpg' },
    { title: "MONGODB", image: '/mongodb.jpg' },
    { title: "NODE.JS", image: '/nodejs.jpg' },
    { title: "EXPRESS", image: '/expressjs.jpg' },
    { title: "Firebase Authentication", image: '/firebase.jpg' },
    { title: "JWT Authentication", image: '/jwt.jpg' },
    { title: "Mongoose", image: '/mongoose.jpg' },
    { title: "Prisma ORM", image: '/prisma.jpg' },
    { title: "React Query", image: '/reactquery.jpg' },
    { title: "Zustand", image: '/zustand.jpg' },
    { title: "RTK Query", image: '/redux.jpg' },
    { title: "Socket Io", image: '/socket.jpg' },
    { title: "Python", image: '/python.jpg' },
]

const ThirdSection = ({ setActiveLink }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.7", "start start"],
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

        <div id="skills" ref={container} className="min-h-[100vh] w-[100%] bg-gradient-to-b from-slate-900 to-slate-800 relative  overflow-hidden">
            {/* <motion.div style={{scale: scaleFirst}} className="absolute top-0 bg-black h-[100%] w-[25%]"></motion.div>
            <motion.div style={{scale: scaleSecond}} className="absolute top-0 left-[25%] bg-black h-[100%] w-[25%]"></motion.div> */}
            <motion.div style={{ scaleY: scaleFirst }} initial={{ scaleY: 1.1 }} className="absolute top-0 z-20 bg-black h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleSecond }} initial={{ scaleY: 2 }} className="absolute top-0 z-20 left-[25%] bg-black h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleThird }} initial={{ scaleY: 1.3 }} className="absolute top-0 z-20 left-[50%] bg-black h-[100%] w-[25%] origin-bottom"></motion.div>
            <motion.div style={{ scaleY: scaleFourth }} initial={{ scaleY: 1.8 }} className="absolute top-0 z-20 left-[75%] bg-black h-[100%] w-[25%] origin-bottom"></motion.div>


            <h2 className=' underline my-6 text-center pt-7 text-green-400 text-4xl pb-2'>Skills</h2>

            <div className="max-w-[1100px] m-auto p-2">
                <div className="grid grid-cols-4 gap-2 md:grid-cols-6">

                    {
                        skills.map((skill, i) => (
                            <Skill skill={skill} key={i} i={i} length={skills.length} />
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default ThirdSection;



const Skill = ({ skill,i , length}) => {
    return (
        <div style={{ perspective: '1000px' }} className="flex justify-center items-center w-full h-24  overflow-hidden rounded-md  mr-2">
            <motion.div initial={{ rotateY: 0 }} animate={{ rotateY: 180 }} transition={{delay:i*0.2, duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay:length*0.2}} style={{ transformStyle: 'preserve-3d' }} className="card  relative h-[100%] w-[100%] duration-100 ">
                <div  style={{ position: 'absolute', backfaceVisibility: 'hidden', transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }} className="cardfront text-white bg-slate-800 h-full w-full text-center">
                
                <div className="absolute border-[3px] border-green-400 rounded-md top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">

                    {skill.title}
                </div>
                </div>



                <img src={skill.image} alt={skill.title} style={{ position: 'absolute', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }} className="cardback overflow-hidden top-0 left-0 w-[100%] h-[100%] "/>
                    
            </motion.div>
        </div>
    )
}