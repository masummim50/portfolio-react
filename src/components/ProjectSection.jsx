import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { selectedProjectContext } from "../App";



const projects = [
  {
    id: 'blog',
    type: 'Full stack',
    image: '/project/ww.JPG',
    title: "Blogging application",
    live: "https://blog-frontend-orpin-eta.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/blog-frontend",
      backEnd: "https://github.com/masummim50/blog-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "tailwindcss + framer motion",
        "react query",
        "zustand"
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "mongoose",
        "jwt-authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. Testing accounts are provided in the login page",
    features: [
      "homepage featuring posts with newest first, post card with details, like and share functionality",
      "create post with title description thumbnail and tags, option to select community/group to post in",
      "post details, comments like functionality",
      "user sign up and login",
      "view posts by tags",
      "create community, join and create post in them",
      "upload image while creating post, upload avatar and cover image, and feature image and cover image for communities. (imgbb api used)",
      "light and dark mode",
      "view own profile along with other users profile"
    ],
  },
  {
    id: 'pm',
    type: 'Full stack',
    image: '/project/pm.JPG',
    title: "Project Management System",
    live: "https://project-management-light.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/project-management-frontend-light",
      backEnd: "https://github.com/masummim50/project-management-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "material-ui",
        "redux toolkit",
        "react router",
      ],
      backEnd: [
        "mongodb",
        "express",
        "node js",
        "mongoose",
        "typescript",
        "jwt-authentication",
        "firebase authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "a simple todo list page",
      "drag and drop todo",
      "personal and group project",
      "search and add member to group project",
      "create task and subtask",
      "assign task and subtask to members for group projects",
      "start, pause and resume task",
      "track time spent on task and subtask",
      "an overview page for projects",
      "individual member overview for group projects",
      "mark as completed only when all task are complete",
      "re-open project",
      "a journal page bound to date, not editable once the day has passed",
      "an user dashboard page showing review of last 30 days: how many todo completed each day, how many task completed each day and how many words written in the journal each day",
    ],
  },
  {
    id: 'ec',
    type: 'Full stack',
    image: '/project/bb.JPG',
    title: "Multi-vendor e-commerce Website(nextjs)",
    live: "https://best-buy-nu.vercel.app",
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
    technologies: {
      frontEnd: [
        "nextjs (app router)",
        "typescript",
        "tailwindcss + nextUi",
        "redux for client side state-management",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "postgresql with prisma orm",
        "jwt-authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },
  {
    id: 'chat',
    type: 'Full stack',
    image: '/project/chat.jpg',
    title: "Anonymous realtime chat application(react)",
    live: "https://best-buy-nu.vercel.app",
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
    technologies: {
      frontEnd: [
        "nextjs (app router)",
        "typescript",
        "tailwindcss + nextUi",
        "redux for client side state-management",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "postgresql with prisma orm",
        "jwt-authentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },

];

const fontEndProjects = [
  {
    name: "Gaming Dashboard",
    tech: "React",
    liveLink: "https://elaborate-piroshki-f91fe1.netlify.app/",
    code: "https://github.com/masummim50/dashboard-gaming",
  },
  {
    name: "Project Management Dashboard",
    tech: "React",
    liveLink: "https://wondrous-pasca-292302.netlify.app/",
    code: "https://github.com/masummim50/dashboard-project-management-frontend-only",
  },
  {
    name: "Travel landing Page",
    tech: "Nextjs",
    liveLink: "https://landing-page-voyage.vercel.app/",
    code: "https://github.com/masummim50/landing-page-travel-life",
  },
];


const ProjectSection = ({ setActiveLink }) => {
  const container = useRef(null);
  const linkref = useRef(null);

  const inView = useInView(linkref, { amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const [endValue, setEndValue] = useState('-60%');
  const [startValue, setStartValue] = useState('60%');

  const x = useTransform(scrollYProgress, [0, 1], [startValue, endValue]);



  useEffect(() => {
    console.log("inview: project ", inView);
    if (inView) {
      setActiveLink(3);
    }
  }, [inView, setActiveLink]);

  useEffect(()=> {
    const con = document.getElementById('projectsContainer');
    const vw = window.innerWidth;
    if(con){
      const width = con.offsetWidth;
      setStartValue(`${(vw/2)}px`);
      setEndValue(`-${width-(vw/2)}px`);
    }

    window.addEventListener('resize', ()=> {
      const vw = window.innerWidth;
    if(con){
      const width = con.offsetWidth;
      setStartValue(`${(vw/2)}px`);
      setEndValue(`-${width-(vw/2)}px`);
    }
    })


  },[])


  return (
    <div id="projects" ref={container} className='h-[400vh] w-[100%]  bg-gradient-to-b from-slate-800 to-slate-900 relative  '>


      <div ref={linkref} className="sticky  top-0 overflow-x-hidden  h-[100vh] w-[100%] ">
        <h2 className=" top-[10vh] left-[50%] translate-x-[-50%] absolute text-center pt-2 text-green-400 text-4xl pb-2">Projects</h2>

        <div className="w-[100%] h-[100%] flex items-center">
          <motion.div id="projectsContainer" style={{ left:x }} className="flex relative gap-3 mt-5 ">
           
            {
              projects.map((project, index) => (
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
    <div>

      <div className="text-center">

        <p className="text-xs text-white bg-green-600 px-3 py-1 rounded-md inline-block  text-center">{project.type}</p>
      </div>
      <div className=" bg-slate-700 rounded-md p-3 w-[100%] min-w-[300px]">
        <h2 className="text-base text-green-400 text-nowrap">{project.title}</h2>
        <div className="flex flex-col">
          <img src={project.image} className="h-[150px] rounded-md overflow-hidden w-auto object-fit" alt="" />
          <div className="w-auto flex justify-between items-center mt-2">
            <a href={project.live} className="bg-orange-500 px-3 py-1 rounded-md text-white" target="_blank">Live Demo</a>
            <button className="bg-white text-black px-3 py-1 rounded-md" onClick={handleDetailsClick}>Details</button>
          </div>
        </div>

      </div>

    </div>
  )
}


