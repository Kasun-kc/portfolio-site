"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/type-writer";
import AttractButton from "@/components/ui/attract-button";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#000000] py-16 sm:py-20 px-6 sm:px-12 lg:px-24 rounded-t-[50px] sm:rounded-t-[100px] -mt-20 z-30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[48%] relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-[700px]">
            <Image
              src="/about-illustration.png"
              alt="Kasun Herath Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[48%] text-white flex flex-col justify-center"
        >
          {/* Header */}
          <h4 className="text-white font-semibold tracking-[0.15em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">
            ABOUT ME
          </h4>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            I'm <span className="text-[#4AA0D5]">Kasun Herath</span>
          </h2>

          {/* Description */}
          <p className="text-neutral-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            An Undergraduate in <span className="text-white font-bold">Software Engineering</span>{" "}
            who treats <span className="text-white font-bold">design</span> as a journey crafted
            with <span className="text-white font-bold">clarity, emotion, and purpose.</span>
          </p>

          {/* Bring Together Section with TypeWriter */}
          <div className="mb-6 sm:mb-10">
            <p className="text-white text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">
              I bring together :
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight min-h-[1.2em]">
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

          {/* Resume Button with Attract Effect - Aligned Right */}
          <div className="flex justify-end">
            <AttractButton particleCount={15} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
