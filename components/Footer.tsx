import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black py-12 sm:py-16 z-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-1">
                {/* KC Logo */}
                <div className="relative w-16 h-16">
                    <Image
                        src="/logo.png"
                        alt="KC Logo"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Copyright Text */}
                <p className="text-gray-400 text-sm sm:text-base text-center">
                    © 2026 Kasun Herath - All rights reserved.
                </p>

                {/* Tagline */}
                <p className="text-gray-400 text-sm sm:text-base text-center">
                    Made with curiosity, creativity, and strong coffee.
                </p>
            </div>
        </footer>
    );
}
