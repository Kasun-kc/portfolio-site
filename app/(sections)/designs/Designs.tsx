"use client";

import Carousel from "@/components/ui/carousel";

export default function Designs() {
    // Placeholder design data - replace with your actual designs and Behance links
    const designData = [
        {
            title: "Dungen & Dragons, 2D game UI",
            button: "EXPLORE DESIGN",
            src: "/Designs/D&D.png",
            link: "https://www.behance.net/gallery/241828951/AI-Driven-NPC-Interaction-Game-UI-Design" // Replace with your Behance link
        },
        {
            title: "E-COMMERCE APP",
            button: "EXPLORE DESIGN",
            src: "/Designs/Portfolio.png",
            link: "https://www.behance.net/" // Replace with your Behance link
        },
        {
            title: "SOCIAL MEDIA APP",
            button: "EXPLORE DESIGN",
            src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
            link: "https://www.behance.net/" // Replace with your Behance link
        },
        {
            title: "PORTFOLIO WEBSITE",
            button: "EXPLORE DESIGN",
            src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2836&auto=format&fit=crop",
            link: "https://www.behance.net/" // Replace with your Behance link
        },
    ];

    return (
        <section
            id="designs"
            className="relative w-full bg-black py-20 sm:py-32 min-h-screen flex flex-col items-center justify-center"
        >
            {/* Title */}
            <h4 className="text-[#6b6b6b] font-semibold tracking-[0.15em] uppercase text-sm text-center mb-16 sm:mb-20">
                DESIGNS
            </h4>

            {/* Carousel */}
            <div className="w-full">
                <Carousel slides={designData} />
            </div>
        </section>
    );
}
