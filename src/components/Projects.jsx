import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.png";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import vid16 from "../assets/16.mp4";
import img17 from "../assets/17.jpg";
import img19 from "../assets/19.webp";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.jpg";
import vid25 from "../assets/spidervenom.webm";
import img25 from "../assets/25.png";
import img26 from "../assets/26.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sara Portfolio",
      description: "Modern personal portfolio website for a graphic designer, showcasing her creative work, services, and visual identity through an interactive and responsive experience.",
      image: img26,
      technologies: ["Next", "Tailwind", "Framer"],
      github: "https://sara-designer.vercel.app",
      live: "https://sara-designer.vercel.app",
      underProcessing: false,
      isNew: true,
    },
    {
      title: "Kyandr",
      description:
        "Kyandr is a full-stack eCommerce platform for customizable products and mockup designs. It includes a modern customer-facing store, secure authentication, and a powerful admin dashboard.",
      image: img25,
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://kyandr.vercel.app",
      live: "https://kyandr.vercel.app",
      underProcessing: false,
      isNew: true,
    },
    {
      title: "HD Group For Export",
      description:
        "HD GROUP For Export is an international trading company specializing in the export and import of food products, fresh fruits and vegetables, and medical supplies.",
      image: img24,
      technologies: ["Next.js", "Tailwind CSS", "Google"],
      github: "https://www.hdgroupforexport.com/",
      live: "https://www.hdgroupforexport.com/",
      underProcessing: false,
      isNew: true,
    },

    {
      title: "ATOMIKA",
      description:
        "Student activity platform in EELU Faculty of Computer Science providing technical support and problem solving for student coding challenges.",
      image: img19,
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/ATOMIKA",
      live: "https://atomikaa.vercel.app/",
      underProcessing: false,
      isNew: false,
    },
    {
      title: "CRYPTHECO",
      description:
        "Digital economy and encryption marketing agency landing page showcasing crypto services and corporate branding.",
      image: vid16,
      isVideo: true,
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/CRYPTECHO",
      live: "https://cryptecho-x.vercel.app/",
      underProcessing: false,
      isNew: false,
    },

    {
      title: "Kayzen Store",
      description:
        "Full-stack online bookstore specializing in high school textbooks, integrated with Egyptian online payment solutions.",
      image: img20,
      technologies: ["Next.js", "PostgreSQL", "Paymob"],
      github: "https://github.com/",
      live: "https://kayzen-store.com/",
      underProcessing: false,
      isNew: false,
    },
    {
      title: "Spider Venom",
      description:
        "Spider Venom is a dynamic and visually captivating website dedicated to the world of Spider-Man, featuring 3D immersive web animations.",
      image: vid25,
      isVideo: true,
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/SpiderVenom",
      live: "https://spider-venom.vercel.app/",
      underProcessing: false,
      isNew: true,
    },
    {
      title: "EDUVENTO",
      description:
        "Eduvento is a leading digital education platform empowering individuals with skills for modern technological advancements.",
      image: img21,
      technologies: ["Next.js", "Tailwind CSS", "Supabase"],
      github: "https://github.com/",
      live: "https://www.eduvento.online/",
      underProcessing: false,
      isNew: false,
    },

    {
      title: "ViVaDecor",
      description:
        "Luxury interior design firm showcase combining timeless elegance with modern lighting and architectural innovation.",
      image: img17,
      isVideo: false,
      technologies: ["HTML5", "CSS3", "Tailwind", "Figma"],
      github: "https://github.com/OSAMA-2003/ViVaDicor",
      live: "https://osama-2003.github.io/ViVaDicor/",
      underProcessing: false,
    },
    {
      title: "Organs Transplants",
      description:
        "Medical landing page for a life-saving organ transplants center, providing advanced treatments and patient care information.",
      image: img14,
      isVideo: false,
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/Medical-Landing-Page",
      live: "https://organs-transplant-medical.vercel.app/",
      underProcessing: false,
    },
    {
      title: "Dr.Ahmed Portfolio",
      description:
        "Official academic portfolio showcasing Professor Ahmed Hassan's research, publication achievements, and Arabic studies journey.",
      image: img15,
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/Dr-Ahmed-Portfolio",
      live: "https://dr-ahmed-hassan.vercel.app/",
      underProcessing: false,
    },
    {
      title: "NASA Space Apps 2025",
      description:
        "Space exploration app built for the NASA Space Apps Challenge, combining space data APIs and modern UI design.",
      image: img22,
      technologies: ["React", "Tailwind CSS", "NASA API"],
      github: "https://github.com/OSAMA-2003/",
      live: "https://nasa-space-apps-2025-rho.vercel.app/",
      underProcessing: false,
      isNew: false,
    },
    {
      title: "ARCANE",
      description:
        "Immersive interactive web presentation inspired by the Netflix Arcane universe, featuring GSAP motion design.",
      image: img13,
      technologies: ["React", "Vite", "Tailwind CSS", "GSAP"],
      github: "https://github.com/OSAMA-2003/ARCANE",
      live: "https://arcane-ivi.vercel.app/",
      underProcessing: false,
    },
    {
      title: "Blog Plus+",
      description:
        "Modern fully responsive blogging platform designed for fast content creation with GitHub auth and CMS integration.",
      image: img23,
      technologies: ["Next.js", "Tailwind", "Sanity CMS", "Shadcn"],
      github: "https://github.com/OSAMA-2003/blog-website",
      live: "https://blog-plusss.vercel.app/",
      underProcessing: false,
      isNew: false,
    },
    {
      title: "Al-Ahly SC",
      description:
        "Discover Al Ahly SC's rich legacy through a sleek React website featuring team stats, achievements, and club history.",
      image: img1,
      technologies: ["React", "Redux", "Vite", "Tailwind CSS"],
      github: "https://www.linkedin.com/posts/osama-ahmed-250648245_frontend-react-vite-activity-7255327228048142338-TDNB",
      live: "https://www.linkedin.com/posts/osama-ahmed-250648245_frontend-react-vite-activity-7255327228048142338-TDNB",
      underProcessing: true,
    },
    {
      title: "MOVIZ Cinema",
      description:
        "Browse the latest movies and TV shows on a React and Redux platform with real-time movie API integrations.",
      image: img6,
      technologies: ["React", "Vite", "Tailwind", "Framer", "API"],
      github: "https://github.com/OSAMA-2003/MOVIZ",
      live: "https://movizcinema.vercel.app/",
      underProcessing: false,
    },
    {
      title: "Brainwave AI",
      description:
        "Explore AI Chatting possibilities with Brainwave — open AI chat application web template with landing page sections.",
      image: img5,
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/OSAMA-2003/Brainwave",
      live: "https://brainwave-g-5.vercel.app/",
    },
    {
      title: "Discover Space",
      description:
        "Explore universe phenomena with a NASA inspired space website built with responsive vanilla HTML/CSS and JavaScript.",
      image: img4,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/OSAMA-2003/Discover-Space",
      live: "https://discover-space.vercel.app/",
    },
    {
      title: "GPT-3 Web App",
      description:
        "Futuristic AI website landing page showcasing natural language processing concepts and modern UI components.",
      image: img2,
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/OSAMA-2003/GPT3_react_app",
      live: "https://gpt-3-silk-seven.vercel.app/",
    },
    {
      title: "Get Advice App",
      description:
        "Real-time advice generator web application powered by RESTful advice API integration and smooth animations.",
      image: img9,
      technologies: ["React", "API Integration", "CSS3"],
      github: "https://github.com/OSAMA-2003/Get-Advice-App",
      live: "https://get-advice-app-v2.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "Stay updated with live weather conditions using a real-time geolocation weather forecast application.",
      image: img7,
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      github: "https://github.com/OSAMA-2003/Weather_app",
      live: "https://osama-2003.github.io/Weather_app/",
    },
    {
      title: "Marvel World",
      description:
        "Superhero fan portal displaying Marvel characters, comic storylines, and cinematic universe highlights.",
      image: img3,
      technologies: ["HTML5", "CSS3"],
      github: "https://github.com/OSAMA-2003/Marvel-World",
      live: "https://osama-2003.github.io/Marvel-World/",
    },
    {
      title: "ADVENTURE World",
      description:
        "Travel and adventure landing page showcasing wild locations, tours, and booking templates.",
      image: img8,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/OSAMA-2003/A-World-Template",
      live: "https://osama-2003.github.io/A-World-Template/",
    },
    {
      title: "Free Palestine",
      description: "Responsive interactive Palestine flag web tribute.",
      image: img12,
      technologies: ["HTML5", "CSS3"],
      github: "https://github.com/OSAMA-2003/Palestine?tab=readme-ov-file",
      live: "https://osama-2003.github.io/Palestine/",
    },
    {
      title: "Kasper Template",
      description: "Elzero Web School design template challenge implementation.",
      image: img10,
      technologies: ["HTML5", "CSS3"],
      github: "https://github.com/OSAMA-2003/kasper-zero",
      live: "https://osama-2003.github.io/kasper-zero/",
    },
    {
      title: "Elzero Template 3",
      description: "Elzero Web School full feature responsive layout challenge.",
      image: img11,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/OSAMA-2003/Elzero-trmplate-3",
      live: "https://osama-2003.github.io/Elzero-trmplate-3/",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className=" bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header matching reference UI */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            WORKS & PROJECTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Take a closer look at some of my works
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A showcase of full-stack platforms, client projects, student activity tools, and web applications I've engineered.
          </p>
        </div>

        {/* 3-Column Projects Grid matching reference card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="bg-[#0e0e0e] border border-zinc-800/80 rounded-[15px] overflow-hidden flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 group shadow-2xl"
            >
              <div>
                {/* Full-width Image Header */}
                <div className="relative w-full h-64  overflow-hidden bg-black">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {project.isVideo ? (
                      <video
                        src={project.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    )}
                  </a>

                  {/* Badge */}
                  {project.isNew && (
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#eab308] border border-[#eab308]/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {project.underProcessing && (
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-rose-400 border border-rose-500/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      IN PROGRESS
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold font-display text-white mb-3 tracking-tight group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Pills (Dark Purple Tinted) */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#181524] text-[#a78bfa] border border-[#2e264a] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions Line */}
              <div className="px-6 sm:px-7 pb-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                  >
                    VISIT LIVE SITE
                  </a>

                  <div className="flex items-center gap-3">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="Visit Live Site"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-14">
            <button
              onClick={handleLoadMore}
              className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
            >
              Load More Projects ({projects.length - visibleProjects} Remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
