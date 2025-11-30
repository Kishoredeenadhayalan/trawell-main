import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Head from "next/head";
import React from "react";

const metadata = {
  title: "Educational Tours - Enhance Learning with Trawell India",
  description:
    "Explore educational tours that provide hands-on experiences and opportunities to explore new environments, cultures, and concepts. Ignite a passion for learning with Trawell India.",
  url: "https://trawellindia.in/educational-tours",
  image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/edu.webp",
};

const EducationalTours = () => {
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
          backgroundImage: `url("https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/edu.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative flex items-center justify-center h-full">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24   text-center">
            <h1 className="text-4xl md:text-6xl  font-bold text-white tracking-wide mb-4">
              Educational Tours
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
        <h1>
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-deepblue tracking-wide mb-8">
            About Educational Tours
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  font-light text-justify">
          Educational tours have long been recognized as an essential supplement
          to traditional classroom learning. These tours provide students with
          hands-on experiences and the opportunity to explore new environments,
          cultures, and concepts, significantly enhancing their academic and
          personal development. A visit to a natural history museum can bring to
          life the concepts of evolution and prehistoric life, making the
          learning experience more vivid and memorable. Educational tours can
          ignite a passion for specific subjects or career paths. A visit to a
          historical place might inspire a future civil servant.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default EducationalTours;
