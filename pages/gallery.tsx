import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import Head from 'next/head';
import React from 'react'

const metadata = {
  title: "Gallery - Explore Stunning Images with Trawell India",
  description:
    "Discover breathtaking images of India's heritage and natural beauty with Trawell India's gallery. Explore our collection of stunning photos showcasing historic sites, landscapes, and cultural landmarks.",
  url: "https://trawellindia.in/gallery",
  image:
    "https://utfs.io/f/6ada7816-3bce-44dc-830b-d7e6ade8e7e9-z6cjy0.png.png",
};


const GalleryPage = () => {
    const images = [
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-1.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-2.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-3.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-4.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-5.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-6.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-7.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-8.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-9.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-10.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-11.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-12.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-13.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-14.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-15.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-16.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-17.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-18.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-19.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-20.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-21.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-22.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-23.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-24.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-25.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-26.webp",
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-27.webp",
    ];
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
    <Navbar/>
    <section className="flex pt-12 w-full flex-col gap-8 h-full">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        Gallery
      </h3>
    <ParallaxScroll images={images} />
    </section>
    <Footer/>
    </>
  );
}

export default GalleryPage