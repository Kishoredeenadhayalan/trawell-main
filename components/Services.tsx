"use client";
import React from "react";
import ServiceCard from "./ServicesCard";
import { motion } from "framer-motion";
const services = [
  {
    title: "Trails & Tours",
    description:
      "Discover India's beauty and history through curated trails and tours, guided by experts.",
    imgUrl: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/trails.webp",
    link: "/trails-and-tours",
  },
  {
    title: "Heritage Walks",
    description:
      "Explore historical towns and cities, uncovering stories and traditions on our Heritage Walks.",
    imgUrl: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/heritageCard.webp",
    link: "/heritage-walks",
  },
  {
    title: "Educational Tours",
    description:
      "Enhance learning with hands-on experiences and in-depth knowledge on our Educational Tours.",
    imgUrl: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/edu.webp",
    link: "/educational-tours",
  },
  {
    title: "Museum Walks",
    description: "Discover history and art on our enriching museum walks.",
    imgUrl: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/museum.webp",
    link: "/museum-walks",
  },
];
const Services = () => {
  return (
    <section
      id="services"
      className="relative py-[60px] md:py-[80px] overflow-hidden"
      style={{
        backgroundColor: '#f4e8d0'
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-6 sm:py-12 lg:py-16">
        {/* Heading animation */}
        <motion.div
          className="mx-auto flex flex-col gap-4 max-w-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#D4A300]  tracking-wide">
            Our Services
          </h2>
          <div className="flex justify-center gap-2 mb-2">
            <div className="w-24 h-[3px] bg-[#D4A300] rounded-full"></div>
            <div className="w-8 h-[3px] bg-[#8C1E12] rounded-full"></div>
          </div>
          <p className="text-lg text-[#4B2C1C] leading-relaxed font-light">
            Discover enriching heritage sites and thrilling adventures with us!
            We specialize in curated tours for schools and corporate groups —
            tailored to educate, inspire, and create lifelong memories.
          </p>
        </motion.div>
        {/* Service cards scroll animation */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;