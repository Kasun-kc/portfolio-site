"use client";
import { useState, useRef, useEffect } from "react";

interface SlideData {
    title: string;
    button: string;
    src: string;
    link: string;
    description?: string;
}

interface CarouselProps {
    slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Handle mouse drag
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Multiply for faster scroll
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        snapToNearest();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            snapToNearest();
        }
    };

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        snapToNearest();
    };

    // Snap to nearest slide
    const snapToNearest = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const slideWidth = container.offsetWidth * 0.7; // 70vw per slide
        const gap = 32; // 2rem gap
        const scrollPos = container.scrollLeft;
        const index = Math.round(scrollPos / (slideWidth + gap));

        setCurrentIndex(Math.min(Math.max(index, 0), slides.length - 1));

        // Smooth scroll to the snapped position
        container.scrollTo({
            left: index * (slideWidth + gap),
            behavior: 'smooth'
        });
    };

    // Update current index based on scroll position
    const handleScroll = () => {
        if (!scrollContainerRef.current || isDragging) return;

        const container = scrollContainerRef.current;
        const slideWidth = container.offsetWidth * 0.7;
        const gap = 32;
        const scrollPos = container.scrollLeft;
        const index = Math.round(scrollPos / (slideWidth + gap));

        setCurrentIndex(Math.min(Math.max(index, 0), slides.length - 1));
    };

    // Go to specific slide
    const goToSlide = (index: number) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const slideWidth = container.offsetWidth * 0.7;
        const gap = 32;

        container.scrollTo({
            left: index * (slideWidth + gap),
            behavior: 'smooth'
        });

        setCurrentIndex(index);
    };

    return (
        <div className="w-full">
            {/* Scrollable container */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onScroll={handleScroll}
                className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8 px-[15vw]"
                style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[70vw] h-[60vh] relative group"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        {/* Card Container */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-300">
                                {slide.src && (
                                    <img
                                        src={slide.src}
                                        alt={slide.title}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                )}
                            </div>

                            {/* Overlay gradient for better button visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
                                {/* Explore Design Button */}
                                <a
                                    href={slide.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black font-semibold px-12 py-4 rounded-full text-sm md:text-base hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg z-10"
                                    onClick={(e) => {
                                        if (isDragging) e.preventDefault();
                                    }}
                                >
                                    {slide.button}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentIndex === index
                                ? 'bg-blue-500 w-3 h-3'
                                : 'bg-gray-500 w-2.5 h-2.5 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* CSS to hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
