"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        "WEB & DIGITAL PRODUCT",
        "GRAPHIC DESIGN"
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
                            key={service}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-tight tracking-tight">
                                {service}
                            </h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
