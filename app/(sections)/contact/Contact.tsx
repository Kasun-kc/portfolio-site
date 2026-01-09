"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: "/Linkedin.png", url: "https://www.linkedin.com/in/kasun-kc", label: "LinkedIn" },
        { icon: "/Behance.png", url: "https://www.behance.net/KC_herath", label: "Behance" },
        { icon: "/Github.png", url: "https://github.com/Kasun-kc", label: "GitHub" },
        { icon: "/Facebook.png", url: "https://www.facebook.com/share/1FGV3R2jip/", label: "Facebook" },
        { icon: "/Instergram.png", url: "https://www.instagram.com/kasun_kc_?igsh=MWU4Y3cycTE1em0xdw==", label: "Instagram" },
        { icon: "/Gmail.png", url: "mailto:kcherath7@gmail.com", label: "Email" },
    ];

    return (
        <section
            id="contact"
            className="relative w-full bg-[#2B2F31] py-20 sm:py-32 min-h-screen flex flex-col items-center justify-center"
        >
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6">
                        LET'S CONNECT
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
                        Have a project in mind or just want to say hi? Fill out the form, and I'll get back to you as soon as possible.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
                    {/* Left Column - Contact Form */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-[#6B6B6B] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-[#6B6B6B] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-[#6B6B6B] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <textarea
                                name="message"
                                placeholder="You are looking for"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-6 py-4 bg-[#6B6B6B] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#6B6B6B] text-white font-bold text-lg rounded-2xl hover:bg-[#4AA0D5] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND'}
                            </button>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-2xl">
                                    <p className="text-green-300 text-center">✓ Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-2xl">
                                    <p className="text-red-300 text-center">✗ Failed to send message. Please try again or email me directly.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="flex flex-col">
                        <div className="space-y-1">
                            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                Kasun Herath
                            </h3>
                            <p className="text-white text-lg">
                                Matale, Sri Lanka
                            </p>
                            <a
                                href="mailto:kcherath7@gmail.com"
                                className="text-white text-lg hover:text-gray-300 transition-colors underline block mt-4"
                            >
                                kcherath7@gmail.com
                            </a>
                            <p className="text-white text-lg">
                                +94 764752569
                            </p>
                        </div>

                        {/* Social Media Icons - 3x2 Grid */}
                        <div className="grid grid-cols-3 gap-4 max-w-xs mt-12">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="relative w-16 h-16 hover:scale-110 transition-transform duration-300"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2,
                                    }}
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.label}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom Text */}
                        <p className="text-white text-lg sm:text-xl font-reguler mt-10">
                            Let's build something amazing together
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
