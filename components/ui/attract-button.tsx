"use client";

import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AttractButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    children?: React.ReactNode;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function AttractButton({
    className,
    particleCount = 12,
    attractRadius = 50,
    children,
    ...props
}: AttractButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 360 - 180,
            y: Math.random() * 360 - 180,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <button
            className={cn(
                "relative min-w-40 touch-none overflow-visible",
                "px-6 py-2.5 rounded-full",
                "border border-white/60",
                "text-[10px] sm:text-xs font-bold text-white",
                "hover:bg-[#4AA0D5] hover:border-[#4AA0D5] hover:shadow-[0_0_15px_rgba(74,160,213,0.4)]",
                "transition-all duration-300",
                "uppercase tracking-widest",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    animate={particlesControl}
                    className={cn(
                        "absolute h-1.5 w-1.5 rounded-full pointer-events-none",
                        "bg-[#4AA0D5]",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                    custom={index}
                    initial={{ x: particles[index].x, y: particles[index].y }}
                    key={index}
                />
            ))}
            <span className="relative flex w-full items-center justify-center gap-2">
                {children || "RESUME"}
            </span>
        </button>
    );
}
