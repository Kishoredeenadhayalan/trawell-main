import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Head from "next/head";
import React from "react";

const metadata = {
  title: "Museum Walks - Explore History and Art with Trawell India",
  description:
    "Join our museum walks to delve into history, appreciate art, and experience cultural treasures. Perfect for history buffs, art enthusiasts, and anyone looking for an enriching experience with Trawell India.",
  url: "https://trawellindia.in/museum-walks",
  image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/museum.webp",
};

const MuseumWalks = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url("https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/museum.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative flex items-center justify-center h-full">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24   text-center">
            <h1 className="text-4xl md:text-6xl  font-bold text-white tracking-wide mb-4">
              Museum Walks
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
        <h1>
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-brand-dark tracking-wide mb-8">
            About Museum Walks
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  font-light text-justify">
          A museum walk is a delightful journey through time, art, and culture.
          It offers an opportunity to engage with history, appreciate artistic
          achievements, and reflect on human creativity. Whether you&apso;re a
          history buff, an art enthusiast, or simply looking for an enriching
          experience, a museum walk has something for everyone. By planning
          ahead, taking your time, and engaging with the exhibits, you can make
          the most of this enriching experience. Whether you leave with new
          knowledge, a fresh perspective, or simply a sense of awe, the memories
          of your museum walk will stay with you long after you leave.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MuseumWalks;
