/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import pic from '../assets/circlePic.png';
import DarkVeil from './DarkVeil';

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-black text-white">
      {/* DarkVeil Canvas Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={3}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Background radial glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Avatar Image with Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <div className="relative w-28 md:h-28 rounded-full">
            <img
              src={pic}
              alt="Osama Ahmed"
              className="w-full h-full object-cover rounded-full filter contrast-[1.05]"
            />
          </div>

          {/* Status Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-zinc-900/90 border border-zinc-800/80 px-3.5 py-1 rounded-full text-[11px] font-semibold text-zinc-300 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-[1.1] mb-6 text-zinc-100"
        >
          I Design & Build <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            Modern Experiences
          </span>
        </motion.h1>

        {/* Subtitle / Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Hi, I'm <span className="text-white special-font">Osama Ahmed</span> — a Web Developer crafting high-performance, responsive, and visual digital solutions where technology meets creativity.
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <a
            href="https://drive.google.com/drive/folders/1OZHvg874xbJQc8co6ctW3I4epQdaF3j7?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Download CV
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md hover:border-zinc-500 cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center space-x-6 text-zinc-400"
        >
          <a
            href="https://github.com/OSAMA-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-full hover:text-white hover:border-zinc-600 hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/osamaahmedd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-full hover:text-blue-400 hover:border-zinc-600 hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/osama.ahmed.787630"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-full hover:text-blue-500 hover:border-zinc-600 hover:scale-110 transition-all"
            aria-label="Facebook Profile"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://wa.me/201029317818"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-full hover:text-emerald-400 hover:border-zinc-600 hover:scale-110 transition-all"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;