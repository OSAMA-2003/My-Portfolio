/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCogs } from "react-icons/fa";

const About = () => {
  const services = [
    {
      icon: <FaLaptopCode className="text-2xl text-white" />,
      title: "Full Stack Web Development",
      description: "Building responsive, modern web applications using React, Next.js, Node.js, and MongoDB with clean architecture and fast load times."
    },
    {
      icon: <FaMobileAlt className="text-2xl text-white" />,
      title: "Frontend & Responsive UI",
      description: "Crafting pixel-perfect, highly responsive interfaces using Tailwind CSS, Framer Motion, and modern UI/UX design principles."
    },
    {
      icon: <FaDatabase className="text-2xl text-white" />,
      title: "Backend & Database Solutions",
      description: "Developing RESTful APIs, authentication systems, database schemas, and server-side logic tailored to business requirements."
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "Custom Web Applications & CMS",
      description: "Delivering customized e-commerce stores, admin dashboards, content management systems, and business platforms."
    }
  ];

  return (
    <section id="about" className="py-14 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header matching reference design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            SERVICES & ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Building digital products that grow your business
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            From modern responsive websites to complex web applications, I deliver scalable, user-friendly digital solutions.
          </p>
        </div>

        {/* 2x2 Services Grid (Matching reference picture layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Bio & Lottie Animation Container (Preserving original info) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                WHO I AM
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
                Passionate Programmer & Continuous Learner
              </h3>
              <p className="text-zinc-300 text-base leading-relaxed text-justify mb-4">
                My name is <span className="text-white font-medium">Osama Ahmed</span>. I am a professional and enthusiastic programmer dedicated to building high-quality web applications. I am a quick learner with a strong self-directed learning attitude, passionate about problem-solving and making the web more open and accessible.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                My core skill stack is built around JavaScript & TypeScript ecosystem (React, Next.js, Node.js, Express, MongoDB, Tailwind CSS). I am available for software engineering opportunities, freelance projects, and tech collaborations.
              </p>
            </div>

            <div className="md:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-md">
                <DotLottieReact
                  src="https://lottie.host/7ce0b038-bf38-457a-805b-4fcaf57bd58f/xQkjQItfR0.lottie"
                  loop
                  autoplay
                  className="w-full h-auto filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
