"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#000000] py-20 px-6 sm:px-12 lg:px-24 rounded-t-[50px] sm:rounded-t-[100px] -mt-20 z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 relative aspect-square max-w-[500px]">
          <Image src="/about-illustration.png" alt="Illustration" fill className="object-contain" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full md:w-1/2 text-white">
          <h4 className="text-[#4AA0D5] font-bold tracking-[0.2em] uppercase text-sm mb-4">ABOUT ME</h4>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">I&apos;m <span className="text-[#4AA0D5]">Kasun Herath</span></h2>
          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-8">
            An Undergraduate in <span className="text-white font-bold">Software Engineering</span> who treats <span className="text-white font-bold">design</span> as a journey crafted with <span className="text-white font-bold">clarity, emotion, and purpose.</span>
          </p>
          <div className="space-y-2 mb-10">
            <p className="text-neutral-400 text-lg italic">I bring together :</p>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight">Design thinking</h3>
          </div>
          <a href="/resume.pdf" target="_blank" className="px-10 py-3 rounded-full border border-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">RESUME</a>
        </motion.div>
      </div>
    </section>
  );
}

