import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const steps = Math.min(end, 50);
    const stepTime = (duration * 1000) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Cubic ease-out calculation for smooth deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(end * easeOutProgress);

      setCount(currentCount);

      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Achievements = () => {
  const stats = [
    {
      metric: "25+",
      label: "Projects Completed",
    },
    {
      metric: "15+",
      label: "Certificates Earned",
    },
    {
      metric: "99%",
      label: "Satisfaction Rate",
    },
    {
      metric: "3+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-20 bg-black text-white ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            A few of my proudest achievements
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Milestones and stats reflecting dedication to software craftsmanship and client satisfaction.
          </p>
        </div>

        {/* 4 Stat Cards Row with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 md:p-8 text-center hover:border-zinc-700 transition-all duration-300 shadow-xl group"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.metric} duration={2.2} />
              </div>
              <div className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
