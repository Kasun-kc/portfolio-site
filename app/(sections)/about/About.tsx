"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/type-writer";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#000000] py-20 px-6 sm:px-12 lg:px-24 rounded-t-[50px] sm:rounded-t-[100px] -mt-20 z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side - Illustration (Bigger) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[45%] relative aspect-square max-w-[600px]"
        >
          <Image
            src="/about-illustration.png"
            alt="Kasun Herath Illustration"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[55%] text-white"
        >
          {/* Header */}
          <h4 className="text-white font-semibold tracking-[0.15em] uppercase text-sm mb-6">
            ABOUT ME
          </h4>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            I'm <span className="text-[#4AA0D5]">Kasun Herath</span>
          </h2>

          {/* Description */}
          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-10">
            An Undergraduate in <span className="text-white font-bold">Software Engineering</span>{" "}
            who treats <span className="text-white font-bold">design</span> as a journey crafted
            with <span className="text-white font-bold">clarity, emotion, and purpose.</span>
          </p>

          {/* Bring Together Section with TypeWriter */}
          <div className="mb-10">
            <p className="text-white text-base sm:text-lg mb-3">
              I bring together :
            </p>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight min-h-[1.2em]">
              <TypeWriter
                words={[
                  "Design thinking",
                  "User focus",
                  "Creative solutions",
                  "Concept clarity",
                  "Creative solutions"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenWords={2000}
              />
            </h3>
          </div>

          {/* Resume Button - Matching Contact Button Style */}
          <button className="px-6 py-2.5 rounded-full border border-white/60 text-[10px] sm:text-xs font-bold text-white hover:bg-[#4AA0D5] hover:border-[#4AA0D5] hover:shadow-[0_0_15px_rgba(74,160,213,0.4)] transition-all duration-300 uppercase tracking-widest">
            RESUME
          </button>
        </motion.div>
      </div>
    </section>
  );
}

