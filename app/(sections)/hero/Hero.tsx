// app/(sections)/hero/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

const navLinks = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "DESIGNS", href: "#designs" },
  { name: "PROJECTS", href: "#projects" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col bg-[#1d1c20] overflow-hidden"
    >
      {/* --- 1. Glassy Sticky Navbar --- */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-12 sm:py-6
                   bg-[#1d1c20]/30 backdrop-blur-md border-b border-white/5"
      >
        <Link href="/" className="text-2xl font-bold text-white">
          KC
        </Link>
        <Link
          href="#contact"
          className="px-6 py-2 rounded-full border-2 border-white text-sm font-medium text-white 
                     hover:bg-white hover:text-[#1d1c20] transition-colors duration-300"
        >
          CONTACT ME
        </Link>
      </motion.header>

      {/* --- 2. Main Hero Content --- */}
      <main className="flex-grow flex flex-col justify-center px-6 sm:px-12 pt-28 pb-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Static Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-2 leading-tight">
            Hi, I’m <span className="text-[#4AA0D5]">Kasun</span>
          </h1>

          {/* Animated Text Reveal Component */}
          <div className="mt-4">
            <TextRevealCard
              text="Designer, problem solver, and curious thinker"
              revealText="I design with empathy curiosity, and a love for details"
            >
               {/* We don't need the Title/Description slots for this design */}
            </TextRevealCard>
          </div>
        </motion.div>
      </main>

      {/* --- 3. Floating Nav Pills --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-12 left-0 right-0 flex justify-center z-20 px-4"
      >
        <nav className="flex items-center gap-2 sm:gap-6 px-4 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>

       {/* --- 4. Bottom Curved Shape (Optional, based on screenshot bottom edge) --- */}
       <div className="absolute bottom-0 left-0 right-0 h-16 bg-black rounded-t-[50%] scale-x-150 translate-y-8 z-0 opacity-50"></div>
    </section>
  );
}