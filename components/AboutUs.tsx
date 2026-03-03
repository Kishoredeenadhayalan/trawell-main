import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="relative py-[60px] md:py-[90px] lg:py-[110px] overflow-hidden bg-white"
    >
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, 50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-96 h-96 bg-brand-warm/10 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative w-full flex flex-col lg:flex-row lg:max-w-7xl mx-auto gap-12 p-4 md:px-16 z-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 justify-center lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-dark tracking-wide drop-shadow-md">
            Experience Begins
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            Bharat is a repository of a vibrant, living, and thriving culture.
            Punctuated by towering structures, rustic forts, coastal landscapes
            and stately palaces; the southern lands are a feast for the eyes and
            soul. Home to ancient traditions, multifarious artforms, reverberant
            festivals, we promise you an enticing journey across these
            picturesque lands. Let us take you on carefully curated trails and
            tours to see the best of South India!
          </p>

          <Link href="/about">
            <Button className="mt-4 bg-brand-dark text-white tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-brand-dark/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 w-fit">
              Learn More About Us
            </Button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex lg:w-1/2">
          <div className="relative w-full rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            <Image
              src="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/about-us-1.webp"
              alt="Hampi Ruins"
              width={1000}
              height={700}
              loading="lazy"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>



    </section>
  );
};

export default About;
