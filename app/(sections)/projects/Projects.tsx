"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Creative Goals To-Do App",
            description:
                "A goal-oriented mobile application designed to help users manage projects, tasks, timelines, and reminders in one streamlined experience. The app focuses on clarity and usability, enabling users to break down creative goals into actionable tasks while staying organized and on schedule. Led the wireframing and high-fidelity UI design process using Figma, then implemented the mobile user interface using Flutter and Dart, ensuring consistency between design and development.",
            tags: ["Flutter", "Dart", "Figma", "Mobile Development"],
            content: (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden">
                    <Image
                        src="/Projects/todo.png"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="Creative Goals To-Do App - Mobile Development"
                    />
                </div>
            ),
        },
        {
            title: "Garage Finder App",
            description:
                "A mobile application designed to help users quickly locate nearby garages and request tow truck services during vehicle breakdowns or emergencies. The app also includes an in-app chat feature to enable fast and clear communication between vehicle owners and service providers, prioritizing speed and ease of use in critical situations. Designed the complete wireframe and interactive prototype using Figma, with a strong focus on intuitive navigation, accessibility, and rapid task completion for emergency scenarios.",
            tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
            content: (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl overflow-hidden">
                    <Image
                        src="/Projects/autocare.png"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="Garage Finder App - Mobile UI/UX Design"
                    />
                </div>
            ),
        },
        {
            title: "AI-Powered Career Guidance System",
            description:
                "A system that helps users identify suitable tech roles based on personality traits and skills. As a UI/UX Engineer, I designed the user experience for inputting data and translating complex AI outputs into a clear, actionable career path interface. The system provides personalized career recommendations by analyzing user inputs through machine learning algorithms, presenting results in an intuitive and engaging format that guides users toward their ideal tech career.",
            tags: ["Next.js", "TypeScript", "Python", "Flask/FastAPI", "scikit-learn"],
            content: (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
                        width={500}
                        height={450}
                        className="h-full w-full object-cover"
                        alt="AI-Powered Career Guidance System"
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
