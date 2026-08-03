/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black text-white ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            EDUCATION & ACADEMICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Academic Background & Foundation
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Solid computer science education specializing in software engineering and artificial intelligence.
          </p>
        </div>

        {/* Education Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Lottie Animation */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-md">
                <DotLottieReact
                  src="https://lottie.host/8bb957d2-a3a1-4823-9f98-7aa9b2670ade/1o3hMWCpGY.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="md:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-zinc-800 border border-zinc-700/60 rounded-full text-xs font-semibold text-zinc-300 mb-4">
                <FaGraduationCap className="text-white text-sm" /> Class of 2025
              </div>

              <h3 className="text-3xl font-extrabold font-display text-white mb-2">
                Egyptian E-Learning University (EELU)
              </h3>
              <p className="text-zinc-400 text-sm font-semibold mb-6">
                Bachelor's Degree in Computer Science & Artificial Intelligence • <span className="text-emerald-400">GPA: 3.3</span>
              </p>

              <p className="text-zinc-300 text-base leading-relaxed text-justify mb-4">
                Graduated in 2025 specializing in Computer Science and AI. Throughout my academic journey, I maintained consistent dedication to data structures, software engineering, web architectures, and intelligent system design.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                This academic experience provided me with a rigorous theoretical and practical foundation, preparing me to solve complex software engineering challenges in modern production environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
