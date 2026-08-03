import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import images
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import c6 from '../assets/c6.jpg'
import c7 from '../assets/c7.jpg'
import c8 from '../assets/c8.jpg'
import c9 from '../assets/c9.jpg'
import c10 from '../assets/c10.jpg'
import c11 from '../assets/c11.jpg'
import c12 from '../assets/c12.jpg'
import c13 from '../assets/c13.jpg'
import c14 from '../assets/c14.png'
import c15 from '../assets/c15.jfif'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { title: 'Web Masters Internship', image: c13 },
    { title: 'Head of Frontend at GDG', image: c14 },
    { title: 'ITIDA Gigs', image: c15 },
    { title: 'ITI Frontend Web Development', image: c1 },
    { title: 'FWD Professional Frontend Web Development', image: c2 },
    { title: 'FWD Challenger Web Development', image: c3 },
    { title: 'Full Stack Development', image: c12 },
    { title: 'NTI Artificial Intelligence', image: c5 },
    { title: 'Microsoft AI', image: c6 },
    { title: 'Digital Transformation', image: c7 },
    { title: 'NASA Space Apps', image: c8 },
    { title: 'MWA For Marketing', image: c9 },
    { title: 'Metaverse Bootcamp', image: c10 },
    { title: 'IT Specialist', image: c4 },
    { title: 'Darwin Academy For English and Science', image: c11 },
  ];

  return (
    <section id="certificates" className="bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Certificates
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Verified certifications in web development, AI, software engineering, and technical leadership.
          </p>
        </div>

        {/* Swiper Coverflow Slider matching reference picture */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="certificates-swiper pb-16"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[380px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl hover:border-zinc-600 transition-all duration-300"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="h-[220px] sm:h-[260px] overflow-hidden bg-zinc-950">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                  <FaSearchPlus className="text-3xl text-white mb-3" />
                  <p className="text-white font-bold font-display text-sm sm:text-base">{certificate.title}</p>
                  <span className="text-xs text-zinc-300 mt-1">Click to view full certificate</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Certificate Modal View */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-lg" />
                </button>

                <h3 className="text-xl font-bold font-display text-white mb-4 pr-12">
                  {selectedCertificate.title}
                </h3>

                <div className="rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;