"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "TO DO APP",
            description:
                "A minimal, creative To-Do app built for event managers—helping you organize ideas, tasks, and timelines with clarity and flow.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-white rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="TO DO APP project"
                    />
                </div>
            ),
        },
        {
            title: "Auto Care App",
            description:
                "A smart platform that connects vehicle owners with nearby garages, tow trucks, and repair services instantly.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-white rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2940&auto=format&fit=crop"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="Auto Care App project"
                    />
                </div>
            ),
        },
        {
            title: "E-Commerce Platform",
            description:
                "A modern shopping experience with intuitive product discovery, seamless checkout, and personalized recommendations for every user.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-white rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="E-Commerce Platform project"
                    />
                </div>
            ),
        },
        {
            title: "Fitness Tracker",
            description:
                "Track your workouts, monitor progress, and achieve your fitness goals with personalized insights and motivational features.",
            content: (
                <div className="flex h-full w-full items-center justify-center bg-white rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="Fitness Tracker project"
                    />
                </div>
            ),
        },
    ];

    return (
        <section
            id="projects"
            className="relative w-full bg-white py-20 sm:py-32 min-h-screen flex flex-col items-center justify-center"
        >
            {/* Title */}
            <h4 className="text-[#6b6b6b] font-semibold tracking-[0.15em] uppercase text-sm text-center mb-16 sm:mb-20">
                PROJECTS
            </h4>

            {/* Sticky Scroll Container */}
            <div className="w-full max-w-7xl mx-auto px-4">
                <StickyScroll content={projects} />
            </div>
        </section>
    );
}
