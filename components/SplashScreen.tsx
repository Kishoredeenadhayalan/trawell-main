"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide original scrolling
        document.body.style.overflow = "hidden";

        // Wait for animation duration then trigger complete
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                document.body.style.overflow = "unset";
                onComplete();
            }, 500); // 500ms allows the fade out Exit animation to complete
        }, 1200); // 1.2 seconds total loading

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F172A]"
                >
                    {/* Logo Container with 3D Pulse */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 1,
                        }}
                        className="relative"
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Image
                                src="/images/TraWell_Primary - multicolour white text.png"
                                alt="Trawell Main Logo"
                                width={300}
                                height={300}
                                className="drop-shadow-[0_20px_50px_rgba(255,107,107,0.3)] object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 250, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                        className="mt-12 h-1 bg-brand-accent rounded-full shadow-[0_0_15px_#FF6B6B]"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
