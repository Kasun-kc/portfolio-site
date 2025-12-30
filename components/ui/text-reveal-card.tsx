"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Stars = () => {
  const random = () => Math.random();
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            opacity: [0, random(), 0],
            scale: [0, 1.2, 0],
          }}
          transition={{ duration: random() * 5 + 5, repeat: Infinity }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: "2px",
            height: "2px",
            backgroundColor: i % 2 === 0 ? "#ffffff" : "#a9a9a9",
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};
const MemoizedStars = memo(Stars);

export const TextRevealCard = ({ text, revealText, className }: { text: string; revealText: string; className?: string }) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const update = () => {
      if (cardRef.current) {
        const { left, width } = cardRef.current.getBoundingClientRect();
        setLeft(left);
        setLocalWidth(width);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMove = (e: any) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    if (cardRef.current) setWidthPercentage(Math.max(0, Math.min(100, ((x - left) / localWidth) * 100)));
  };

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => { setIsMouseOver(false); setWidthPercentage(0); }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      ref={cardRef}
      className={cn("w-full max-w-[65rem] relative cursor-default overflow-hidden", className)}
    >
      <div className="h-32 sm:h-48 relative flex items-center">
        <MemoizedStars />
        <motion.div
          animate={{ clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`, opacity: isMouseOver ? 1 : 0 }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 w-full"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">{revealText}</p>
        </motion.div>
        <motion.div
          animate={{ left: `${widthPercentage}%`, opacity: isMouseOver ? 1 : 0 }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-32 sm:h-40 w-[2px] bg-[#4AA0D5]"
        />
        <motion.div 
          animate={{ clipPath: `inset(0 0 0 ${widthPercentage}%)` }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="w-full relative z-10"
        >
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-500 leading-tight">{text}</p>
        </motion.div>
      </div>
    </div>
  );
};