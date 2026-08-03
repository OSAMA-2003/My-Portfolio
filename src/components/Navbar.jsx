import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    // { name: 'Education', to: 'education' },
    { name: 'Certificates', to: 'certificates' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/80 py-3 shadow-2xl'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="special-font text-4xl font-bold font-display tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            Osama
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md rounded-full px-5 py-1.5 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-white bg-zinc-800/80 font-medium"
              className="text-sm font-medium text-zinc-400 hover:text-white px-4 py-1.5 rounded-full transition-all cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-md hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none  "
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 backdrop-blur-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-zinc-300 hover:text-white text-base font-medium py-1 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full text-center text-xs font-semibold uppercase tracking-wider bg-white text-black py-3 rounded-full hover:bg-zinc-200 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;