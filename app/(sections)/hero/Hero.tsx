"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  return (
    <section id="hero" className="sticky top-0 min-h-screen w-full flex flex-col bg-[#1d1c20] overflow-hidden antialiased">
      {/* Background Beams Effect */}
      <BackgroundBeams className="z-0" />

      {/* Desktop Header Bar - Hidden on Mobile */}
      <div className="hidden md:flex relative w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8 z-20">
        <Link href="/" className="relative w-14 h-7 sm:w-18 sm:h-9">
          <Image src="/logo.png" alt="KC Logo" fill className="object-contain" priority />
        </Link>
        <Link href="#contact" className="px-6 py-2.5 rounded-full border border-white/60 text-[10px] sm:text-xs font-bold text-white hover:bg-[#4AA0D5] hover:border-[#4AA0D5] hover:shadow-[0_0_15px_rgba(74,160,213,0.4)] transition-all duration-300 uppercase tracking-widest">
          CONTACT ME
        </Link>
      </div>

      {/* Mobile Logo - Top Left */}
      <div className="md:hidden absolute top-6 left-6 z-20">
        <Link href="/" className="relative w-12 h-6 block">
          <Image src="/logo.png" alt="KC Logo" fill className="object-contain" priority />
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-6 sm:px-8 md:px-16 pb-20 sm:pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-6xl">
          {/* Mobile View - Match Figma Design */}
          <div className="md:hidden">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[110px] font-black text-white leading-[0.9] tracking-tighter mb-2"
            >
              Hi,
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-[50px] font-black text-[#4AA0D5] leading-[0.9] tracking-tighter">
                I'm
              </h1>
              <h1 className="text-[80px] font-black text-[#4AA0D5] leading-[0.9] tracking-tighter">
                Kasun
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 text-base font-normal tracking-wide leading-relaxed mt-6"
            >
              Designer, problem solver,<br />and curious thinker
            </motion.p>
          </div>

          {/* Desktop View - Original Design */}
          <div className="hidden md:block">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
              Hi, I&apos;m <span className="text-[#4AA0D5]">Kasun</span>
            </h1>
            <div className="mt-[-8px] sm:mt-[-12px]">
              <TextRevealCard
                text="Designer, problem solver, and curious thinker"
                revealText="I design with empathy, curiosity, and a love for details"
              />
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
}
