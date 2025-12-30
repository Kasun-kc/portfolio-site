"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
// import { BackgroundBeams } from "@/components/ui/background-beams"; // Removed due to missing module

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col bg-[#1d1c20] overflow-hidden antialiased">
      {/* Standard Header Bar */}
      <div className="w-full flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8 z-20">
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

      {/* Glass Floating Nav */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-4 sm:gap-8 px-8 py-3.5 bg-white/[0.04] backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {["HOME", "ABOUT", "SERVICES", "DESIGNS", "PROJECTS"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors uppercase">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}