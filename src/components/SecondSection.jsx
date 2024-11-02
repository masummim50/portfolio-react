import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ServiceCards from './ServiceCards';

const sentence = `My journey into web development started with a curiosity about how websites worked and evolved into a passion for building interactive, scalable applications using the MERN stack. With a strong foundation in JavaScript, React, Node.js, Express, and MongoDB, I focus on delivering well-structured, high-performance applications. (n)  Despite not having formal education in computer science, my dedication and hands-on experience have allowed me to quickly learn and apply new technologies. I love solving complex problems, building features from the ground up, and continuously refining my skills. I'm always eager to learn the latest tools and best practices in web development, and I'm constantly working on improving my projects to deliver high-quality results. `

const SecondSection = ({ setActiveLink }) => {



    const container = useRef(null);
    const inView = useInView(container, { amount: 0.5 });
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.5", "end end"],
    });

    const totalWords = sentence.split(" ").length;

    useEffect(() => {
        if (inView) {
            setActiveLink(1);
        } else {
            setActiveLink(prev => {
                if (prev === 1 || prev === 0) return 0
            })
        }
    }, [inView, setActiveLink]);

    const cardContainer = document.querySelector('#about');
    const cards = document.querySelectorAll('.card-container .card');
    if (cardContainer) {

        cardContainer.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            })
        })
    }

    return (
        <div id="about" ref={container} className='h-full min-h-[100vh] w-full bg-gradient-to-b from-slate-800 to-slate-900 text-white p-2 '>
            <div className='max-w-[1100px] m-auto md:text-xl '>
                <h2 className='text-center pt-7 text-green-400 text-4xl pb-2'>About Me</h2>
                <p className='text-center'>Masum Billah | <a className='underline decoration-sky-400' href="mailto: masummim50@gmail.com"> masummim50@gmail.com</a> </p>
                <p className='text-green-300 text-center'>Self-taught MERN Stack Developer, building dynamic, engaging and full stack web applications.</p>
                <p className=" mt-[20px] text-4xl text-center leading-3">
                    {sentence.split(" ").map((word, index) => {
                        const start = index / totalWords; // Start based on the position in the string
                        const end = (index + 1) / totalWords;
                        const send = word === "(n)" ? <br /> : <Word
                            key={index}
                            range={[start, end]}
                            progress={scrollYProgress}
                        >
                            {word}
                        </Word>
                        return (
                            send

                        );
                    })}
                </p>
            </div>

            <h2 className='text-green-400 text-3xl text-center mt-5'>Services</h2>
            <ServiceCards />
        </div>
    );
};


export default SecondSection;





const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);


    return (
        <div className='inline-block'>
            {/* <span className="absolute opacity-20 text-base">{children}</span> */}
            {
                children === "(n)" ? <div className='flex-grow'></div>
                    :
                    <motion.span style={{ opacity }} className="mr-[6px] text-base">
                        {children}
                    </motion.span>
            }

        </div>
    );
};
