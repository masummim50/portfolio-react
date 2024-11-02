import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { FaEnvelope } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useState } from "react";




const ContactSection = ({ setActiveLink }) => {
    const container = useRef(null);

    const inView = useInView(container, { amount: 0.7 });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [pending, setPending] = useState(false);
    const form = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.current == null) return;
        setPending(true);
        await emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    setPending(false);
                    setSuccess(true);
                    if (form.current) {
                        form.current.reset();
                    }
                    setTimeout(() => {
                        setSuccess(false);
                    }, 2000);
                },
                (error) => {
                    setPending(false);
                    setError(error.text ? error.text : "Something went wrong");
                    setTimeout(() => {
                        setError("");
                    }, 2000);
                    console.log("FAILED...", error);
                }
            );
    };





    useEffect(() => {
        console.log("inview: project ", inView);
        if (inView) {
            setActiveLink(4);
        }
    }, [inView, setActiveLink]);



    return (
        <div id="contact" ref={container} className='min-h-[100vh] w-[100%] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 relative pt-5 '>
            <div className="text-center flex flex-col pt-7 text-green-400 text-4xl pb-2">
                <p>

                    Contact me
                </p>
                <span className='text-center flex items-center justify-center'>

                    <FaEnvelope />
                </span>
            </div>

            <form
                className="text-black flex flex-col w-[100%] max-w-[600px] m-auto "
                ref={form}
                onSubmit={handleSubmit}
            >
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: inView ? 0 : -300, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.4, }} className='flex flex-col'>

                    <label className="text-green-400 font-light">Name</label>
                    <input
                        required
                        placeholder="Enter Your Name"
                        className="text-gray-300 px-3 py-2 rounded-md bg-slate-600 mb-3 outline-none"
                        type="text"
                        name="sender_name"
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: inView ? 0 : 300, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col'>

                    <label className="text-green-400 font-light">Email</label>
                    <input
                        required
                        placeholder="Enter Your Email - i will reply to this address"
                        className="text-gray-300 px-3 py-2 outline-none rounded-md bg-slate-600 mb-3"
                        type="email"
                        name="reply_to"
                    />
                </motion.div>
                <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }} className='flex flex-col'>

                    <label className="text-green-400 font-light">Message</label>
                    <textarea
                        required
                        placeholder="How can i help you?"
                        rows={3}
                        className="text-gray-300 origin-top outline-none px-3 py-2 rounded-md bg-slate-600 mb-1 resize-none"
                        name="message"
                    />

                </motion.div>
                <div className="text-center text-red-600">{error}</div>
                <div className="text-left">
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: inView ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="hover:bg-green-400 border border-green-400 transition-all ease-linear px-8 py-2 text-white font-semibold  rounded-md cursor-pointer mt-3"
                        type="submit"
                        value="Send"
                    >
                        {pending ? "Sending..." : "Send Message"}
                        <div
                            className={`animate-spin h-[15px] w-[15px] border-2 border-t-green-400 rounded-full bg-transparent inline-block ${pending ? "opacity-100" : "opacity-0"
                                }`}
                        ></div>
                    </motion.button>
                </div>
                <div
                    className={`${success ? "opacity-100" : "opacity-0"
                        } text-green-500 font-semibold transition-all ease-linear`}
                >
                    Email sent Successfully <br />I will contact you soon
                </div>
            </form>
        </div>
    );
};

export default ContactSection;




