import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-zinc-500 text-xs sm:text-sm text-center md:text-left">
            © 2025 <span className="text-zinc-300 font-medium">Osama Ahmed</span>. All rights reserved. Built with React & Tailwind.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/OSAMA-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-ahmed-250648245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BF%2FV6E6JtQMeTmVtsXb2pKA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-blue-400 hover:border-zinc-700 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://twitter.com/osama_ahmd_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-sky-400 hover:border-zinc-700 transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://wa.me/201029317818"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>

          {/* Back To Top Button */}
          <div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              Top <FaArrowUp className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;