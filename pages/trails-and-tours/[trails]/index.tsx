import Banner from "@/components/Banner";
import TrailPage from "@/components/trails/TrailPage";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { Merriweather } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";
import React from "react";

const play = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const TrailsPage = () => {
  const pathname = usePathname();
  const pathSegment = pathname ? pathname.split("/")[2] : null;
  console.log(pathSegment);

  const trailsDetails: {
    [key: string]: { title: string; image: string; desc: string };
  } = {
    "hoysala-trail": {
      title: "Hoysala Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/hoysala.webp",
      desc: "In the Deccan plains of Bharat, around 950 AD, echoes of &apso;Hoy, Sala &apos; reverberated as Sala, a young man, bravely battled a tiger to rescue his Guru. Then he established the Hoysala dynasty. The Hoysalas were renowned for their mastery of art and sculpture, particularly in the realm of miniature sculptures. These intricately crafted works are a source of delight for both the eyes and the soul. Experience the music and dance that flourished during their era through immersive performances that bring their culture to life. BELUR TEMPLE, WHERE STONE-FILIGREED BHARATANATYAM DANCERS HOLD UP THE ROOF",
    },
    "chola-trail": {
      title: "Chola Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chola.webp",
      desc: "At the heart of Tamil Nadu once thrived a powerful dynasty whose legacy still resonates today. Spanning many centuries, the Cholas expanded their influence across large swathes of the Indian subcontinent and South-East Asia. During their golden age from the 9th to the 13th century, the Cholas nurtured advancements in art, architecture, music, dance, language, literature, and bronze casting. While much of their grandeur remains undocumented, the majestic temples of Thanjavur, Gangaikonda Cholapuram, and Darasuram proudly stand as symbols of their greatness. Thanjavur, a bustling cultural center, has borne witness to the rise and fall of legendary dynasties, each leaving its mark on the city's rich history. Follow the trail to explore the significant sites of the Chola dynasty, traversing their historic territories. Immerse yourself in the enduring culture that has stood the test of time and embrace the richness of their heritage.",
    },
    "pallava-trail": {
      title: "Pallava Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pallava.webp",
      desc: "Let's journey to Kanchipuram and Mamallapuram, the twin towns adorned by the Pallava dynasty! Kanchipuram, known as the Pallava capital, teems with historical wonders and cultural richness. It stands as one of India's seven sacred cities, revered for its numerous temples. Kanchipuram, a melting pot of Saivism, Vaishnavism, Buddhism, and Jainism, boasts some of the world's most magnificent architectural marvels. This town, steeped in grandeur, also delights with its silk sarees and mouthwatering cuisine. Immerse yourself in history with all your senses! Mamallapuram, once a bustling port city under the mighty Pallavas, features stunning seaside temples that captivate every visitor. Witness the evolution of temple architecture, from the myriad cave-temples to the pioneering monoliths and unique open-air bas-reliefs, as you stroll along the shores of Mamallapuram.",
    },
    "pandya-trail": {
      title: "Pandya Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pandya.webp",
      desc: "Madurai, commonly known as Thoonga Nagaram, is a vibrant hub of thriving Tamil culture that has been passed down through centuries. Existing since 300 BC, Madurai even engaged in trade with Rome in ancient times. Greek accounts, including those of Megasthenes, mention Madurai, referring to it as 'Methora'. The city is a prominent feature in Tamil literature, with no work omitting its significance. The third Tamil Sangam, a grand assembly of scholars, was held in Madurai, earning it the name 'Koodal'. Over the years, Madurai has established itself as the epicenter of Tamil culture, where the ancient language is passionately celebrated and its heritage preserved in the daily lives of its people. At the heart of this historic capital of the Pandya dynasty stands the magnificent Meenakshi Amman Temple. Exploring Madurai means delving into Tamil culture, experiencing the bustling tourist city, the lively streets, the unique cuisine, and the melodious language. All these elements weave together the captivating story of a culture that has thrived for generations.",
    },
    "chalukya-trail": {
      title: "Chalukya Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chalukya.webp",
      desc: "Along the Malaprabha river valley once flourished the artistic and powerful Early Chalukya dynasty. Despite frequent changes in rulers, it was the Early Chalukyas, from the 6th to the 12th century, who left a lasting impact on this valley. Contemporaries of the Pallavas and Pandyas, the Chalukyas made their mark with a unique blend of Nagara and Dravidian architecture. Their architectural achievements include some of the earliest rock-cut temples, monolithic structures, and intricately sculpted structural temples. These magnificent creations are set among cliffs, ravines, waterfalls, springs, and ponds, all framed by hills and mountains. Journey through the Chalukya dynasty and marvel at the Temples of Pattadakal, the poetic inscriptions of Aihole, and the intricate carvings in the caves of Badami. Join us as we explore these serene lands through engaging interactions, cultural immersions, and storytelling. Relive the glorious reign of the Chalukyas!",
    },
    "one-day-trail": {
      title: "One Day Trail",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/one-day.webp",
      desc: "We firmly believe that travel is essential to feeling truly alive. Exploring monuments, participating in cultural programs, and experiencing temple rituals help us stay connected to our roots. Our uniquely crafted one-day tours offer you the chance to visit a place of your choice from our Heritage Trails and Pilgrimage Tours, all within a single day. Whether it's Kanchipuram, Gingee, Kumbakonam, Hampi, Chennai, or any other destination you desire, you'll get to experience the highlights of these historical towns. We provide a vibrant package, all delivered to you in just one day.",
    },
    "arupadai-veedu": {
      title: "Arupadai Veedu",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arupadei.webp",
      desc: "In the Tirumurugatrupadai by the saint-poet Nakkirar, six locations in Tamil Nadu are honored as the sacred abodes of Lord Murugan, also known as Subhramanya. These sites, known collectively as The Arupadai Veedu, or the Six Holy Abodes of Lord Murugan, each have a unique story to tell. On this journey, we recount the tales of Lord Murugan’s wit, warfare, marriage, and wisdom. Revered as the Lord of the hills and adored by Tamil women, Murugan is celebrated through verses, music, and dance. Receive the divine blessings of Lord Murugan as we immerse ourselves in his stories, music, poetry, and prasadams.",
    },
    "panchabhoota-sthalams": {
      title: "Panchabhoota Sthalams",
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pancha.webp",
      desc: "We travel across Andhra Pradesh and Tamil Nadu to visit the five sacred sites dedicated to the manifestations of Lord Shiva as the five primary elements: Earth, Water, Fire, Air, and Space. These locations are deeply revered for their profound religious and spiritual significance. Praised by the Nayanmar saints, these temples are part of the esteemed 275 Padal Petra Sthalas. Explore these temples, each filled with sculptures that tell their own stories, and immerse yourself in the legends associated with each sacred site.",
    },
    "archaeological-site-visits": {
      title: "Archaeological Site Visits",
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arch.webp",
      desc: "Archaeological site tours are essential for several reasons. They offer an educational opportunity to learn about history in a tangible and engaging way, far beyond what textbooks can provide. By visiting these sites, you can see firsthand the ingenuity and creativity of our ancestors, gaining insights into their daily lives, beliefs, and societal structures.These tours also play a critical role in preserving our cultural heritage. Increased public interest in archaeological sites helps to ensure their protection and conservation, safeguarding these treasures for future generations. Moreover, they foster a deeper appreciation for the diversity and richness of human history, highlighting the shared heritage that connects us all.",
    },
  };

  const trailDetail = pathSegment ? trailsDetails[pathSegment] : null;


  const metadata = {
    title: trailDetail ? trailDetail.title : "Trail not found | Trawell India",
    description: trailDetail
      ? trailDetail.desc
      : "Discover various trails with Trawell India.",
    url: `https://trawellindia.in/trails/${pathSegment}`,
    image: trailDetail
      ? `${trailDetail.image}`
      : "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/trails.webp",
  };
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
        {trailDetail ? (
          <TrailPage
            title={trailDetail.title}
            image={trailDetail.image}
            desc={trailDetail.desc}
          />
        ) : (
          <div>Trail not found</div>
        )}
        <Banner />
        <Footer />
      </main>
    </>
  );
};

export default TrailsPage;
