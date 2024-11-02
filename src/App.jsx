import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import { createContext, Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import ProjectSection from './components/ProjectSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'

export const selectedProjectContext = createContext(null);

const lenis = new Lenis()



function App() {
  const [activeLink, setActiveLink] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    if (showModal) {
      lenis.stop();
    } else {
      lenis.start()
    }
  }, [showModal])



  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],

  })


  const rotate = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const [project, setProject] = useState({});




  return (
    <Suspense fallback={<div>Loading...</div>}>

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
    </Suspense>
  )
}

export default App








const DetailsModal = ({ project, showModal, setShowModal }) => {

  useEffect(() => {



    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

  }, [showModal])

  const modalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [showModal, setShowModal])

  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.focus()
    }
  }, [showModal])

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div data-lenis-prevent="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[150] flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className=" bg-slate-800 overflow-hidden rounded-lg max-w-[90%] w-[600px] max-h-[90vh] text-white relative focus:outline-none"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-6">
              <h2 id="modal-title" className="text-2xl font-bold mb-1 mr-[100px]">{project.title}</h2>
              <div className="flex items-center gap-4">
                {project.code && (
                  <a
                    href={`https://github.com/${code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-thin transition-all py-1 px-4 rounded text-sm"
                  >
                    Code on GitHub
                  </a>
                )}
                {project.links && (
                  <>
                    {project.links.frontEnd && (
                      <a
                        href={project.links.frontEnd}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-thin transition-all py-1 px-4 rounded text-sm"
                      >
                        Front-End Code
                      </a>
                    )}
                    {project.links.backEnd && (
                      <a
                        href={project.links.backEnd}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-700 text-white font-thin transition-all py-1 px-4 rounded text-sm"
                      >
                        Back-End Code
                      </a>
                    )}
                  </>
                )}
              </div>
              <button
                className="absolute top-3 right-3 text-xl text-red-100 bg-red-500 hover:bg-red-600 transition-all rounded-md px-3 py-1"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                Close &times;
              </button>
            </div>
            <div className="px-6 pb-6 overflow-y-auto max-h-[calc(90vh-8rem)] scrollbar ">
              <ul className="space-y-2">
                {project.features && project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-slate-300">•</span>
                    <span className="text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


