import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const metadata = {
  title: "Heritage Walks - Explore Historical Towns with Trawell India",
  description:
    "Join Trawell India's Heritage Walks to immerse yourself in the rich cultural tapestry of historic towns and cities. Discover the architecture, traditions, and stories that define our heritage.",
  url: "https://trawellindia.in/heritage-walks",
  image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/heritage-in.webp",
};

const HeritagePage = () => {
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
          backgroundImage: `url("https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/heritage-in.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative flex items-center justify-center h-full">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24   text-center">
            <h1 className="text-4xl md:text-6xl  font-bold text-white tracking-wide mb-4">
              Heritage Walks
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
        <h1>
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-deepblue tracking-wide mb-8">
            About Hertiage Walks
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  font-light text-justify">
          Our Heritage Walks are designed to immerse you in the rich cultural
          tapestry of historic towns and cities. These walks are not just tours
          but journeys through time, offering a deep connection to our past.
          They allow you to experience the architecture, traditions, and stories
          that have shaped our heritage. <br></br>Participating in a Heritage
          Walk is important because it helps preserve and promote awareness of
          our cultural history. By exploring these sites, we honor the
          craftsmanship, artistry, and wisdom of our ancestors. It fosters a
          sense of pride and belonging, reminding us of our roots and the shared
          legacy we inherit. <br></br>We undertake these Heritage Walks to
          ensure that our history remains alive and vibrant in our collective
          memory. They are a means to educate, inspire, and connect people with
          the cultural treasures that define our identity. Join us on a Heritage
          Walk and become a part of the living story of our heritage.
        </p>
      </div>
      <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
        <h1>
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-deepblue tracking-wide mb-8">
            Upcoming Events
          </span>
        </h1>
        <div>
          <Link href={"https://forms.gle/yexwkhAETPdeogiW6"} target="_blank">
            <Image
              src="https://k6e1njmrbw.ufs.sh/f/ea0DhERF0poLulLPOVLANJ6DZYrchnP5XIS8472GU30mlVjt"
              width={500}
              height={300}
              alt="events"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HeritagePage;
