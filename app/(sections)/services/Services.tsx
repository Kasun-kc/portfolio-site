"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const services = [
        {
            title: "WEB & DIGITAL PRODUCT",
            details: ["INTERACTIVE DESIGN", "PROTOTYPING", "INTERFACE DESIGN (UI)", "USER EXPERIENCE (UX)", "APP INTERFACE", "MINIMAL WEB DESIGN"]
        },
        {
            title: "GRAPHIC DESIGN",
            details: ["FLYER DESIGN", "PRODUCT DESIGN", "CREATIVE VISUALS", "BRAND & GRAPHIC DESIGN", "ILLUSTRATION", "GRAPHIC STORYTELLING"]
        }
    ];

    return (
        <section
            id="services"
            className="relative w-full bg-[#e8e8e8] py-20 sm:py-32 px-6 sm:px-12 lg:px-24 -mt-20 z-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#6b6b6b] font-semibold tracking-[0.15em] uppercase text-sm text-center mb-16 sm:mb-20"
                >
                    SERVICES
                </motion.h4>

                {/* Service Items */}
                <div className="space-y-12 sm:space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            {/* Service Title */}
                            <h2 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-tight tracking-tight text-center cursor-pointer transition-opacity duration-300 hover:opacity-80 whitespace-nowrap px-4">
                                {service.title}
                            </h2>

                            {/* Scrolling Ticker Bar */}
                            <AnimatePresence>
                                {hoveredService === index && (
                                    <motion.div
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={{ scaleX: 1, opacity: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                        className="absolute bg-black overflow-hidden origin-center flex items-center justify-center"
                                        style={{
                                            left: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '100vw',
                                            marginLeft: 'calc(-1 * (100vw - 100%) / 2)',
                                            height: '120px',
                                            zIndex: 9999
                                        }}
                                    >
                                        <div className="flex whitespace-nowrap animate-scroll-fast">
                                            {/* Duplicate the list 6 times for seamless loop */}
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="flex items-center">
                                                    {service.details.map((detail, idx) => (
                                                        <React.Fragment key={`${i}-${idx}`}>
                                                            <span className="text-white text-base sm:text-lg lg:text-xl font-normal tracking-wider uppercase px-8">
                                                                {detail}
                                                            </span>
                                                            {idx < service.details.length - 1 && (
                                                                <span className="text-white text-2xl px-4">•</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                    <span className="text-white text-2xl px-4">•</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-16.666%);
          }
        }

        .animate-scroll-fast {
          animation: scroll-fast 12s linear infinite;
        }
      `}</style>
        </section>
    );
}
