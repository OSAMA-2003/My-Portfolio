import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { activities } from './highlightsData';
import { Link } from 'react-router-dom';

const HighlightSection = () => {
    const containerRef = useRef(null);
    const controls = useAnimationControls();
    const x = useMotionValue(0);

    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const duplicatedActivities = [...activities, ...activities];
    const LOOP_DURATION = 25;

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    const startAnimation = () => {
        const targetX = -width;
        const currentX = x.get();
        const remainingDistance = Math.abs(targetX - currentX);
        const duration = (remainingDistance / width) * LOOP_DURATION;

        controls.start({
            x: targetX,
            transition: {
                duration,
                ease: "linear",
                onComplete: () => {
                    x.set(0);
                    startAnimation();
                }
            }
        });
    };

    useEffect(() => {
        if (width > 0) startAnimation();
    }, [width]);

    return (
        <section className="py-20 bg-black text-white border-t border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
                    HIGHLIGHTS & COMMUNITY
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
                    Featured Activities & Mentorship
                </h2>
                <p className="text-zinc-400 text-base max-w-xl mx-auto">
                    Explore key leadership roles, student community activities, and technical workshops.
                </p>
            </div>

            <div className="group relative cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    className="flex gap-6 w-max px-6"
                    animate={controls}
                    drag="x"
                    dragConstraints={{ left: -width, right: 0 }}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onMouseEnter={() => controls.stop()}
                    onMouseLeave={() => startAnimation()}
                    onPointerDown={() => controls.stop()}
                    onPointerUp={() => startAnimation()}
                    onDragStart={() => {
                        setIsDragging(true);
                        controls.stop();
                    }}
                    onDragEnd={() => {
                        setTimeout(() => setIsDragging(false), 50);
                        startAnimation();
                    }}
                >
                    {duplicatedActivities.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative min-w-[280px] md:min-w-[400px] h-[420px] md:h-[480px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-zinc-700"
                        >
                            <img
                                src={item.thumpImage}
                                alt={item.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-90 contrast-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                            <Link to={`/highlight/${item.id}`}>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white pointer-events-none">
                                    <span className="inline-block self-start px-3 py-1 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 text-zinc-300">
                                        {item.category}
                                    </span>

                                    <h3 className="text-2xl font-bold font-display mb-4 leading-tight text-white drop-shadow-md">
                                        {item.title}
                                    </h3>

                                    <Link
                                        to={`/highlight/${item.id}`}
                                        onPointerDown={(e) => e.stopPropagation()}
                                        className="pointer-events-auto inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-black bg-white px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-all shadow-lg w-fit"
                                    >
                                        Explore Details
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HighlightSection;