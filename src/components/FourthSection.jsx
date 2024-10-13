import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const FourthSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.5", "start start"],
    });

    // Create 50 random scales with start between 1 and 2, end always 0
    const scales = Array.from({ length: 50 }, () => {
        const randomStart = Math.random() * (2 - 1) + 1; // Generate random start between 1 and 2
        return useTransform(scrollYProgress, [0, 1], [randomStart, 0]); // End always 0
    });
    return (
        <div ref={container} className='min-h-[100vh] w-[100%] bg-teal-400'>
            
        </div>
    );
};

export default FourthSection;