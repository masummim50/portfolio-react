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
        <div id="projects" ref={container} className='min-h-[100vh] w-[100%] bg-gradient-to-b from-slate-900 to-slate-800 relative pt-5 '>
            <h2 className='text-center pt-7 text-green-400 text-4xl pb-2'>Contact Me</h2>
        </div>


    );
};

export default ContactSection;