"use client";

import React from "react";

const AboutHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          'url("https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/about-hero.webp")',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24   text-center">
          <h1 className="text-4xl md:text-6xl  font-bold text-white tracking-wide mb-4">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
