import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import Head from 'next/head';
import React, { useMemo } from 'react'
import dynamic from 'next/dynamic';

const metadata = {
  title: "Gallery - Explore Stunning Images with Trawell India",
  description:
    "Discover breathtaking images of India's heritage and natural beauty with Trawell India's gallery. Explore our collection of stunning photos showcasing historic sites, landscapes, and cultural landmarks.",
  url: "https://trawellindia.in/gallery",
  image:
    "https://utfs.io/f/6ada7816-3bce-44dc-830b-d7e6ade8e7e9-z6cjy0.png.png",
};

// Dynamically import ParallaxScroll with SSR disabled for better performance
const DynamicParallaxScroll = dynamic(
  () => import('@/components/ui/parallax-scroll').then(mod => mod.ParallaxScroll),
  {
    loading: () => (
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full aspect-[3/4] bg-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    ),
    ssr: false // Disable server-side rendering for this component
  }
);

const GalleryPage = () => {
  // Memoize images array to prevent recreating on every render
  const images = useMemo(() => [
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
  ], []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* DNS prefetch and preconnect for faster image loading */}
        <link rel="preconnect" href="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com" />

        {/* Preload the first few critical images for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-1.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-2.webp"
        />
        <link
          rel="preload"
          as="image"
          href="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Gal-3.webp"
        />
      </Head>
      <Navbar darkText={true} />
      <section className="flex pt-32 pb-12 w-full flex-col gap-8 h-full bg-slate-50 min-h-screen">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-brand-dark drop-shadow-sm">
          Our Gallery
        </h3>
        <DynamicParallaxScroll images={images} />
      </section>
      <Footer />
    </>
  );
}

export default GalleryPage;