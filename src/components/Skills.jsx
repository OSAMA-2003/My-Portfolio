import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular,
  FaGitAlt, FaGithub, FaNpm, FaPython, FaNodeJs
} from 'react-icons/fa';

import {
  SiTailwindcss, SiBootstrap, SiFramer,
  SiNextdotjs, SiTypescript, SiMongodb, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
    { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: <SiBootstrap />, name: 'Bootstrap', color: 'text-purple-400' },
    { icon: <FaReact />, name: 'React.js', color: 'text-cyan-300' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-white' },
    { icon: <FaAngular />, name: 'Angular', color: 'text-red-500' },
    { icon: <FaGitAlt />, name: 'Git', color: 'text-orange-600' },
    { icon: <FaGithub />, name: 'GitHub', color: 'text-zinc-300' },
    { icon: <SiFramer />, name: 'Framer Motion', color: 'text-pink-400' },
    { icon: <FaNpm />, name: 'NPM', color: 'text-red-500' },
    { icon: <FaPython />, name: 'Python', color: 'text-yellow-500' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-emerald-400' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-emerald-500' },
    { icon: <SiPostman />, name: 'Postman', color: 'text-orange-400' },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="pb-14 bg-black  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">

      </div>

      {/* Infinite Scrolling Ribbon with Gradient Fade */}
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-black after:to-transparent">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5  shadow-sm "
            >
              <span className={`text-5xl ${skill.color} transition-transform group-hover:scale-110`}>
                {skill.icon}
              </span>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;