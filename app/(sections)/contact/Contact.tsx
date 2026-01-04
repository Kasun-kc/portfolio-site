"use client";
import React, { useState } from "react";
import { IconBrandLinkedin, IconBrandBehance, IconBrandGithub, IconBrandFacebook, IconBrandInstagram, IconMail } from "@tabler/icons-react";

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
        { icon: IconBrandLinkedin, url: "https://www.linkedin.com/in/kasun-herath-70835a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
        { icon: IconBrandBehance, url: "https://www.behance.net/KC_herath", label: "Behance" },
        { icon: IconBrandGithub, url: "https://github.com/Kasun-kc", label: "GitHub" },
        { icon: IconBrandFacebook, url: "https://www.facebook.com/share/1FGV3R2jip/", label: "Facebook" },
        { icon: IconBrandInstagram, url: "https://www.instagram.com/kasun_kc_?igsh=MWU4Y3cycTE1em0xdw==", label: "Instagram" },
        { icon: IconMail, url: "mailto:kcherath7@gmail.com", label: "Email" },
    ];

    return (
        <section
            id="contact"
            className="relative w-full bg-[#3a3a3a] py-20 sm:py-32 min-h-screen flex flex-col items-center justify-center"
        >
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
                        LET'S CONNECT
                    </h2>
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
                                className="w-full px-6 py-4 bg-[#5a5a5a] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 bg-[#5a5a5a] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-[#5a5a5a] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                            />
                            <textarea
                                name="message"
                                placeholder="You are looking for"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-6 py-4 bg-[#5a5a5a] text-white placeholder-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#5a5a5a] text-white font-bold text-lg rounded-2xl hover:bg-[#6a6a6a] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                Kasun Herath
                            </h3>
                            <p className="text-gray-300 text-lg mb-2">
                                Matale, Sri Lanka
                            </p>
                            <a
                                href="mailto:kcherath7@gmail.com"
                                className="text-white text-lg hover:text-gray-300 transition-colors"
                            >
                                kcherath7@gmail.com
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="grid grid-cols-3 gap-4 max-w-sm">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-white text-black p-4 rounded-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-110 flex items-center justify-center aspect-square"
                                >
                                    <social.icon size={48} stroke={2} />
                                </a>
                            ))}
                        </div>

                        {/* Bottom Text */}
                        <p className="text-white text-lg sm:text-xl font-medium mt-8">
                            Let's build something amazing together
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
