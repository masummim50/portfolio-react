import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ContactSection = ({ setActiveLink }) => {
    const container = useRef(null);

    const inView = useInView(container, { amount: 0.5 });





    useEffect(() => {
        console.log("inview: project ", inView);
        if (inView) {
            setActiveLink(4 );
        }
    }, [inView, setActiveLink]);


    return (
        <div id="projects" ref={container} className='min-h-[100vh] w-[100%]  bg-slate-900 relative  '></div>


    );
};

export default ContactSection;