import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { activities } from '../components/highlightsData'; 
import { FiArrowLeft, FiExternalLink, FiInfo } from 'react-icons/fi';

const HighlightDetails = () => {
  const { id } = useParams();
  const item = activities.find((act) => act.id === Number(id));

  if (!item) return <div className="text-white p-20 bg-primary h-screen">Event not found.</div>;

  const galleryImages = item.images ? Object.values(item.images) : [];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-primary text-white"
    >
      {/* 1. Floating Premium Navigation */}
      <nav className="fixed top-6 left-0 w-full z-50 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="group flex items-center gap-2 p-2 pr-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
          >
            <div className="p-2 bg-white/10 group-hover:bg-black/10 rounded-full transition-colors">
              <FiArrowLeft size={18} />
            </div>
            <span className="text-sm font-bold tracking-tight">All Experiences</span>
          </Link>
          
          <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">
              {item.category}
            </p>
          </div>
        </div>
      </nav>

      {/* 2. Full-Bleed Hero Section */}
      <header className="relative h-[85vh] w-full flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={item.thumpImage} 
            alt={item.title}
            className="w-full h-full object-contain" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-primary" />
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto px-6 pb-20">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.85] mb-6">
              {item.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </motion.div>
        </div>
      </header>

      {/* 3. Editorial Layout Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Column Left: Overview */}
          <div className="lg:col-span-7 space-y-12">
            <motion.section {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6 text-zinc-500">
                <FiInfo className="text-white" />
                <h2 className="uppercase text-xs font-black tracking-[0.2em]">The Experience</h2>
              </div>
              <p className="text-2xl md:text-4xl font-medium leading-loose  text-zinc-100 italic">
                "{item.description || "Every journey has a story. This one is currently being written."}"
              </p>
              
              <div className="pt-10">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-zinc-200 hover:scale-105 transition-all shadow-2xl"
                >
                  Show More <FiExternalLink />
                </a>
              </div>
            </motion.section>
          </div>

          {/* Column Right: Staggered Gallery */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <h2 className="text-zinc-500 uppercase text-xs font-black tracking-[0.2em]">Captured Moments</h2>
              
              <div className="columns-1 gap-6 space-y-6">
                {galleryImages.length > 0 ? (
                  galleryImages.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-[1rem] overflow-hidden border border-white/5 shadow-2xl group"
                    >
                      <img 
                        src={img} 
                        alt="Gallery" 
                        loading="lazy" 
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="p-10 border border-dashed border-white/10 rounded-[2rem] text-center opacity-30">
                    <p className="text-sm">Gallery coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </motion.div>
  );
};

export default HighlightDetails;