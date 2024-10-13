
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectSection from './components/ProjectSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

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




  return (
    <div>
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
  )
}

export default App
