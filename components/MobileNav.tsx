"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect if device is a touch device (only actual touch capability, not window size)
    useEffect(() => {
        const checkTouch = () => {
            // Only check for touch capability, don't check window size
            // This ensures mobile nav only appears on actual touch devices
            const hasTouch = (
                ('ontouchstart' in window && navigator.maxTouchPoints > 0) ||
                (navigator.maxTouchPoints > 1) // More than 1 touch point = definitely mobile
            );
            setIsTouchDevice(hasTouch);
        };

        // Only check once on mount - don't listen to any events
        checkTouch();
    }, []);

    // Detect scroll position to change button style
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past 80% of viewport height (end of hero section)
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationLinks = [
        { name: "HOME", href: "#" },
        { name: "ABOUT", href: "#about" },
        { name: "SERVICES", href: "#services" },
        { name: "DESIGNS", href: "#designs" },
        { name: "PROJECTS", href: "#projects" },
        { name: "CONTACT", href: "#contact" },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Don't render on non-touch devices
    if (!isTouchDevice) return null;

    return (
        <>
            {/* Hamburger Button - Fixed Position */}
            <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`fixed top-6 right-6 z-[100] w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${isScrolled && !isMenuOpen
                    ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                    : "bg-[#4AA0D5] shadow-[0_0_20px_rgba(74,160,213,0.3)]"
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.span
                    className="w-6 h-0.5 bg-white rounded-full"
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className="w-6 h-0.5 bg-white rounded-full"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.span
                    className="w-6 h-0.5 bg-white rounded-full"
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Slide-in Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 w-full h-screen bg-[#1d1c20] z-[90] flex flex-col items-center justify-center"
                    >
                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center gap-8">
                            {navigationLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="text-white text-2xl font-bold tracking-wider hover:text-[#4AA0D5] transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-10 text-white/30 text-sm tracking-widest"
                        >
                            PORTFOLIO 2026
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
