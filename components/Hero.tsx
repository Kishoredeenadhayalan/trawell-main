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
      <div className="relative flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24 mb-32">

          {/* ✨ Typewriter heading 1 */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] tracking-wider leading-tight whitespace-break-spaces sm:whitespace-nowrap break-words">
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] tracking-wider mb-6 whitespace-break-spaces sm:whitespace-nowrap break-words">
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
            className="text-lg md:text-xl font-light text-brand-accent max-w-xl mb-8 leading-relaxed drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
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
              className="py-4 px-8 bg-brand-accent text-brand-dark font-semibold text-md border-2 border-brand-dark shadow-[0_0_15px_rgba(212,163,0,0.6)] hover:bg-yellow-500 hover:text-black transition-all duration-300"
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
