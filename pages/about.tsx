import AboutHero from '@/components/about/AboutHero'
import FounderCard from '@/components/about/FounderCard'
import Intro from '@/components/about/Intro'
import OurHistory from '@/components/about/OurHistory'
import AdvisoryBoard from '@/components/about/AdvisoryBoard' 
import Footer from '@/layouts/Footer'
import Navbar from '@/layouts/Navbar'
import { Merriweather } from 'next/font/google'
import Head from 'next/head'
import React from 'react'

const play = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metadata = {
  title: "About Trawell India - Discover Our Story",
  description:
    "Learn about Trawell India's journey, our mission, and the people behind our success. Explore the rich history and vibrant culture we bring to our tours.",
  url: "https://trawellindia.in/about",
  image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/about-hero.webp",
};

const About = () => {
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
        <AboutHero />
        <Intro />
        <OurHistory />
        <FounderCard />
        <AdvisoryBoard /> 
        <Footer />
      </main>
    </>
  );
}

export default About