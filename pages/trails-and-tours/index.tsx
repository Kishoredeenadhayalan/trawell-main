import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import TrailsGrid from "@/components/trails/TrailsGrid";
import TrailsHero from "@/components/trails/TrailsHero";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { Merriweather } from "next/font/google";
import Head from "next/head";
import React from "react";

const play = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

 const metadata = {
   title: "Explore Trails with Trawell India",
   description:
     "Discover various trails with Trawell India, including heritage walks, educational tours, and more. Join us to explore the rich cultural and historical sites.",
   url: "",
   image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/trails.webp",
 };

const Trails = () => {
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
      <main className={`${play.className} `}>
        <Navbar />
        <TrailsHero />
        <TrailsGrid />
        <Footer />
      </main>
    </>
  );
};

export default Trails;
