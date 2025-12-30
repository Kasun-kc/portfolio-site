"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  className,
}: {
  text: string;
  revealText: string;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      if (cardRef.current) {
        const { left, width } = cardRef.current.getBoundingClientRect();
        setLeft(left);
        setLocalWidth(width);
      }
    };
    updateStats();
    window.addEventListener("resize", updateStats);
    return () => window.removeEventListener("resize", updateStats);
  }, []);

  const mouseMoveHandler = (event: any) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage(Math.max(0, Math.min(100, (relativeX / localWidth) * 100)));
    }
  };

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => { setIsMouseOver(false); setWidthPercentage(0); }}
      onMouseMove={mouseMoveHandler}
      onTouchMove={mouseMoveHandler}
      ref={cardRef}
      className={cn("w-full max-w-[65rem] relative cursor-default", className)}
    >
      <div className="h-32 sm:h-48 relative flex items-center overflow-hidden">
        
        {/* --- REVEAL TEXT (White) --- */}
        <motion.div
          animate={{
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
            opacity: isMouseOver ? 1 : 0
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 w-full will-change-transform"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {revealText}
          </p>
        </motion.div>

        {/* --- BLUE SEPARATOR LINE --- */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-32 sm:h-40 w-[2px] bg-[#4AA0D5] will-change-transform"
        />

        {/* --- BACKGROUND TEXT (Grey) --- */}
        <motion.div 
          animate={{
            // This hides the grey text as the mouse moves across
            clipPath: `inset(0 0 0 ${widthPercentage}%)`,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="w-full"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-500 leading-tight">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};