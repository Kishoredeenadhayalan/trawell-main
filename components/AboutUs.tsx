import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-[60px] md:py-[90px] lg:py-[110px] overflow-hidden"
      style={{
        backgroundImage:
          'url("https://utfs.io/f/98e79aab-fb49-43dc-9c1e-0ec3f7c91f33-papertexture.jpg")', // parchment texture
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark vignette to add depth */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative w-full flex flex-col lg:flex-row lg:max-w-7xl mx-auto gap-12 p-4 md:px-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 justify-center lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B1F0B] tracking-wide drop-shadow-[0_0_4px_rgba(255,243,222,0.4)]">
            Experience Begins
          </h1>

          <p className="text-lg text-[#4B2C1C] leading-relaxed text-justify">
            Bharat is a repository of a vibrant, living, and thriving culture.
            Punctuated by towering structures, rustic forts, coastal landscapes
            and stately palaces; the southern lands are a feast for the eyes and
            soul. Home to ancient traditions, multifarious artforms, reverberant
            festivals, we promise you an enticing journey across these
            picturesque lands. Let us take you on carefully curated trails and
            tours to see the best of South India!
          </p>

          <Link href="/about">
            <Button className="mt-4 bg-[#D4A300] text-black tracking-wide border-2 border-[#3B1F0B] shadow-lg hover:bg-[#bf8f00] hover:shadow-[0_0_12px_rgba(212,163,0,0.5)] transition-all duration-300 w-fit">
              Learn More About Us
            </Button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex lg:w-1/2">
          <div className="relative w-full rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            <Image
              unoptimized
              priority
              src="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/about-us-1.webp"
              alt="Hampi Ruins"
              width={1000}
              height={700}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
