
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectSection from './components/ProjectSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

export const selectedProjectContext = createContext(null);




function App() {
  const [activeLink, setActiveLink] = useState(0);
  useEffect(() => {
    console.log("activeLink: ", activeLink);
  }, [activeLink])

  useEffect(() => {

    const lenis = new Lenis()


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],

  })


  const rotate = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState({});




  return (
    <selectedProjectContext.Provider value={{ project, setProject, showModal, setShowModal }}>

      <div>
        <DetailsModal showModal={showModal} setShowModal={setShowModal} project={project} />
        <Header activeLink={activeLink} setActiveLink={setActiveLink} />

        <motion.div style={{ rotate, scale }} className="h-[100vh] fixed z-0 top-0 left-0 w-[100%] overflow-hidden">
          <HomeSection />
        </motion.div>
        <div className="top-[100vh] relative">

          <div ref={container} className="min-h-[100vh] bg-slate-800 relative z-10  rounded-t-3xl overflow-hidden">
            <SecondSection setActiveLink={setActiveLink} />
          </div>

          <div className=" relative ">


            <ThirdSection setActiveLink={setActiveLink} />
          </div>


          <div className=" relative ">

            <ProjectSection setActiveLink={setActiveLink} />

          </div>

          <div className=" relative ">

            <ContactSection setActiveLink={setActiveLink} />

          </div>


        </div>

      </div>

    </selectedProjectContext.Provider>
  )
}

export default App


const DetailsModal = ({ project, showModal, setShowModal }) => {




  return (
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
      className={`fixed inset-0 bg-black bg-opacity-50 z-[110] flex items-center justify-center transition-opacity duration-300 ${showModal ? "block" : "hidden"
        }`}
      onClick={() => setShowModal(false)} // Close the modal when clicked outside
    >
      {
        project.id &&

        <div
          className="bg-white p-6 rounded-lg max-w-[90%] w-[600px] text-black relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          <button
            className="absolute top-3 right-3 text-xl text-black hover:text-red-500"
            onClick={() => setShowModal(false)}
          >
            &times; {/* Close button */}
          </button>
          <h2 className="text-xl font-bold mb-4">{project.title}</h2>
          <p className="text-base">{project.importantInfo}</p>
          <ul className="mt-4">
            {project.features.map((feature, index) => (
              <li key={index} className="list-disc ml-5">
                {feature}
              </li>
            ))}
          </ul>
          {/* Add other modal details here */}
        </div>
      }
    </motion.div>
  );
};
