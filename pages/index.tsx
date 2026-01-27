
import {
  Edu_TAS_Beginner,
  Inter,
  Merriweather,
  Poppins,
} from "next/font/google";
import Hero from "@/components/Hero";
import PackageGrids from "@/components/PackageGrids";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/AboutUs";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import ContactUs from "@/components/ContactUs";
import Head from "next/head";
import Logo from "@/components/logo";

const play = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const edu = Edu_TAS_Beginner({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metadata = {
  title: "Trawell India - Explore Heritage Walks, Trails, and Tours",
  description:
    "Embark on a journey through India's rich history, culture, and heritage with Trawell India. Explore curated heritage walks, trails, and educational tours. Book now!",
  openGraph: {
    images: "https://utfs.io/f/6e2a5c4a-0143-48e1-bc64-3e817fb1eefb-1cc1r.png",
    type: "website",
    title: "Trawell India - Explore Heritage Walks, Trails, and Tours",
    description:
      "Embark on a journey through India's rich history, culture, and heritage with Trawell India. Explore curated heritage walks, trails, and educational tours. Book now!",
    url: "https://trawellindia.in",
  },
  twitter: {
    images: "https://utfs.io/f/6e2a5c4a-0143-48e1-bc64-3e817fb1eefb-1cc1r.png",
    card: "summary_large_image",
    title: "Trawell India - Explore Heritage Walks, Trails, and Tours",
    description:
      "Embark on a journey through India's rich history, culture, and heritage with Trawell India. Explore curated heritage walks, trails, and educational tours. Book now!",
  },
};

export default function Home() {
  return (
    <>
    {/* updated meta */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images} />
      </Head>
      <main className={`${play.className} `}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Logo />
        <PackageGrids />
        <UpcomingEvents />
        <ContactUs />
        <Footer />
      </main>
      
    </>
  );
}
