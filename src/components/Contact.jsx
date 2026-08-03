import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ message: '', type: '' });

    emailjs
      .sendForm(
        'service_tycf2or',
        'template_5z2x5wy',
        formRef.current,
        '1gTEJC9nMAB86yD7t'
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setNotification({ message: 'Your message was sent successfully!', type: 'success' });
          formRef.current.reset();
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setNotification({ message: 'Failed to send your message. Please try again.', type: 'error' });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className=" py-10 bg-black text-white  relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header matching reference design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Shoot me a DM, let's discuss your next project
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Have a project in mind, need a custom web application, or want to hire me? Get in touch today.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info Cards (Matching reference picture layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Email Card */}
            <a
              href="mailto:osos2003ahmd@gmail.com"
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-white text-xl group-hover:scale-105 transition-transform">
                <FaEnvelope />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block">Email Me</span>
                <span className="text-sm font-semibold text-white group-hover:text-zinc-300 transition-colors truncate block">
                  osos2003ahmd@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+201029317818"
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-white text-xl group-hover:scale-105 transition-transform">
                <FaPhone />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block">Call / Text</span>
                <span className="text-sm font-semibold text-white group-hover:text-zinc-300 transition-colors block">
                  +20 1029317818
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block">Location</span>
                <span className="text-sm font-semibold text-white block">
                  Sohag / Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Prominent WhatsApp Card Button matching reference picture */}
            <a
              href="https://wa.me/201029317818"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/60 rounded-2xl p-5 text-center font-bold text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-xl group mt-2"
            >
              <span className="text-zinc-200 group-hover:text-white font-display text-base">Contact on WhatsApp</span>
              <FaWhatsapp className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-10 space-y-5 shadow-2xl backdrop-blur-md"
            >
              <h3 className="text-xl font-bold font-display text-white mb-2">Send Me A Message</h3>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold text-sm uppercase tracking-wider py-4 rounded-2xl hover:bg-zinc-200 transition-all duration-300 shadow-xl disabled:opacity-50 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>

              {notification.message && (
                <p
                  className={`mt-4 text-center text-sm font-medium ${notification.type === 'success'
                    ? 'text-emerald-400'
                    : 'text-rose-500'
                    }`}
                >
                  {notification.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
