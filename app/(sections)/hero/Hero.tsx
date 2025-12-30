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

      {/* Standard Header Bar */}
      <div className="relative w-full flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8 z-20">
        <Link href="/" className="relative w-14 h-7 sm:w-18 sm:h-9">
          <Image src="/logo.png" alt="KC Logo" fill className="object-contain" priority />
        </Link>
        <Link href="#contact" className="px-6 py-2.5 rounded-full border border-white/60 text-[10px] sm:text-xs font-bold text-white hover:bg-[#4AA0D5] hover:border-[#4AA0D5] hover:shadow-[0_0_15px_rgba(74,160,213,0.4)] transition-all duration-300 uppercase tracking-widest">
          CONTACT ME
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-8 sm:px-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-6xl">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            Hi, I&apos;m <span className="text-[#4AA0D5]">Kasun</span>
          </h1>
          <div className="mt-[-8px] sm:mt-[-12px]">
            <TextRevealCard
              text="Designer, problem solver, and curious thinker"
              revealText="I design with empathy, curiosity, and a love for details"
            />
          </div>
        </motion.div>
      </main>
    </section>
  );
}
