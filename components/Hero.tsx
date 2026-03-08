"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const typewriterText = "Journey Through History";
const typewriterText2 = "Culture & Heritage";

const Hero = () => {
  // Fix for hydration & "window not defined"
  const [showParticles, setShowParticles] = React.useState(false);
  React.useEffect(() => setShowParticles(true), []);

  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-hidden"
      style={{
        backgroundImage:
          'url("https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/hero-bg.webp")',
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🌫 Dust particles (no hydration errors) */}
      {showParticles && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, idx) => (
            <motion.span
              key={idx}
              className="absolute w-1 h-1 bg-white/30 rounded-full blur-sm"
              initial={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0,
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 mt-24 sm:mt-32 md:mt-40 mb-12 sm:mb-24 md:mb-32 pt-16 sm:pt-24 md:pt-32">

          {/* ✨ Typewriter heading 1 */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] tracking-wider mb-2 sm:mb-3 md:mb-4 break-words leading-tight">
            {typewriterText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* ✨ Typewriter heading 2 */}
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] tracking-wider mb-3 sm:mb-4 md:mb-6 break-words leading-tight">
            {typewriterText2.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index * 0.05) + 1.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          {/* Fade-in subtitle */}
          <motion.p
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-brand-accent max-w-full sm:max-w-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            Journeying across the length and breadth of India to craft a
            magnificent tale of architecture, traditions, festivals and legacy.
          </motion.p>

          {/* Fade-in CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
          >
            <Button
              asChild
              className="py-2 px-4 xs:py-3 xs:px-6 sm:py-4 sm:px-8 bg-brand-accent text-brand-dark font-semibold text-xs xs:text-sm sm:text-md border-2 border-brand-dark shadow-[0_0_15px_rgba(212,163,0,0.6)] hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Link href="/contactForm">Explore More →</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default Hero;
