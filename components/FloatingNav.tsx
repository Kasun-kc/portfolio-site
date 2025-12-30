"use client";
import React from "react";
import Link from "next/link";

export default function FloatingNav() {
    return (
        <div className="fixed bottom-10 left-0 right-0 flex justify-center z-[9999] px-4 pointer-events-none">
            <nav className="pointer-events-auto flex items-center gap-4 sm:gap-8 px-8 py-3.5 bg-white/[0.04] backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                {["HOME", "ABOUT", "SERVICES", "DESIGNS", "PROJECTS"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-neutral-400 hover:text-white transition-colors uppercase"
                    >
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
