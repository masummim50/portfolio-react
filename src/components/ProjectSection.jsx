import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { selectedProjectContext } from "../App";
import { frontenProjects, fullStackProjects } from "./projects";

import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiMui, SiNextdotjs, SiNextui, SiPostgresql, SiPrisma, SiReactquery, SiRedux, SiTypescript } from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";

export const techIcons = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <FaJs />,
  typescript: <SiTypescript />,
  react: <FaReact />,
  nextjs: <SiNextdotjs />,
  reactquery: <SiReactquery />,
  redux: <SiRedux />,
  reduxtoolkit: <SiRedux />,
  nodejs: <FaNodeJs />,
  express: <SiExpress />,
  expressjs: <SiExpress />,
  mongodb: <SiMongodb />,
  mongoose: <SiMongodb />, // using MongoDB icon as substitute
  tailwindcss: <RiTailwindCssFill />,
  framermotion: <TbBrandFramerMotion />,
  jwtauthentication: <SiJsonwebtokens />,
  firebaseauthentication: <SiFirebase />,
  postgresql: <SiPostgresql />,
  prismaorm: <SiPrisma />,
  materialui: <SiMui />,
  nextui: <SiNextui />
};




const ProjectSection = ({ setActiveLink }) => {
  const container = useRef(null);
  const linkref = useRef(null);

  const inView = useInView(linkref, { amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const [endValue, setEndValue] = useState('-60px');

  const [startValue, setStartValue] = useState('-50px');

  const x = useTransform(scrollYProgress, [0, 1], [startValue, endValue])

  const [fstartValue, setfStartValue] = useState('-50px');
  const [fendValue, setfEndValue] = useState('-60px');


  const fx = useTransform(scrollYProgress, [0, 1], [fstartValue, fendValue])



  // run a useeffect to get the half of the width in pixels
  useEffect(() => {
    const vw = window.innerWidth / 2;
    setStartValue(`${vw}px`);
    setfStartValue(`${vw}px`)
    const con = document.getElementById('projectsContainer');
    const fcon = document.getElementById('fprojectsContainer');
    if (con && fcon) {
      const width = con.offsetWidth;
      const fwidth = fcon.offsetWidth;
      console.log('con width: ', width);
      setEndValue(`-${width - (vw)}px`);
      setfEndValue(`-${fwidth - (vw)}px`);
    }
  }, [])







  useEffect(() => {
    if (inView) {
      setActiveLink(3);
    }

  }, [inView, setActiveLink]);








  return (
    <div id="projects" ref={container} className='h-[400vh] w-[100%]  bg-gradient-to-b from-slate-800 to-slate-800 relative  '>


      <div ref={linkref} className="sticky overflow-y-hidden  top-0 overflow-x-hidden  h-[100vh] w-[100%] ">
        <h2 className=" top-[48px] left-[50%] translate-x-[-50%] absolute text-center pt-1 text-green-400 text-4xl pb-2">Projects</h2>

        <div className="w-[100%] h-[100%] flex items-center flex-col mt-16  relative ">
          <motion.div id="projectsContainer" style={{ left: x }} className="flex absolute top-[20px]  gap-3 mt-5">

            {
              fullStackProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            }
          </motion.div>

          <motion.div id="fprojectsContainer" style={{ right: fx }} className="flex absolute top-[240px] gap-3 mt-5 ">

            {
              frontenProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            }
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default ProjectSection;


const ProjectCard = ({ project }) => {
  const { setShowModal, setProject } = useContext(selectedProjectContext);
  const handleDetailsClick = () => {
    setProject(project);
    setShowModal(true);
  }

  return (
    <div className="relative">

      <div className=" bg-slate-700 rounded-md pb-3 px-3 w-[100%] min-w-[300px]">


        <div className={`text-[10px] relative px-3 rounded-md   text-center`}>
          <span className={`${project.type === 'FrontEnd' ? 'text-purple-400' : 'text-green-600'} bg-slate-800 px-3 py-1 rounded-md relative`}>{project.type}
          

          </span>
        </div>

        <h2 className="text-base text-green-400 text-nowrap">{project.title}</h2>
        <div className="flex flex-col mb-[2px]">
          <img src={project.image} className="h-[100px] rounded-md overflow-hidden w-auto object-fit" alt="" />
          {/* <div className="text-orange-400 text-[10px] text-wrap font-thin mt-1">{project.importantInfo}</div> */}
          <div className="w-auto flex justify-between items-center mt-2">
            <a href={project.live} className="bg-orange-500 hover:bg-orange-600 transition-all px-3 py-1 rounded-md text-white text-xs" target="_blank">Live Demo</a>

            <button className="bg-slate-900 hover:bg-slate-900 transition-all text-slate-300  px-3 py-1 rounded-md text-xs" onClick={handleDetailsClick}>Details</button>
          </div>
        </div>

        <div className="flex justify-between">

          <div>

            {
              project.technologies && project.technologies.frontEnd && project.technologies.frontEnd.map((tech, index) => (
                <span className="text-green-300 inline-block mr-1 text-xs" key={index}>{techIcons[tech]}</span>
              ))
            }
          </div>
          <div>

            {
              project.technologies && project.technologies.backEnd && project.technologies.backEnd.map((tech, index) => (
                <span className="text-white inline-block mr-1 text-xs" key={index}>{techIcons[tech]}</span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}


