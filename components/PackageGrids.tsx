import React, { useState } from "react";
import { MapPin, ArrowRight, Clock, Users } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const PackageCard = ({ card, handleCardClick, hoveredCard, setHoveredCard }: any) => {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredCard(card.link);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div>
      <div
        onClick={() => handleCardClick(card.link)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow:
            hoveredCard === card.link
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white transition-all duration-500 border border-slate-200"
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Badges */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full shadow border border-brand-accent">
            {card.category}
          </span>
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
            <Clock className="w-3 h-3" /> {card.duration}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>

            {/* Description */}
            <p
              className={`text-white/90 text-sm mb-3 transition-all duration-300 ${hoveredCard === card.link ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}
            >
              {card.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-3">
              {card.highlights.map((highlight: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md">
                  {highlight}
                </span>
              ))}
            </div>

            {/* Explore button */}
            <div
              className={`flex items-center gap-2 text-brand-accent font-semibold text-sm transition-all duration-300 ${hoveredCard === card.link ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              Explore Trail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-brand-accent drop-shadow-sm" />
              <span className="font-medium">{card.highlights[0]}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500">
              <Users className="w-4 h-4" />
              <span className="text-xs">Group Tours</span>
            </div>
          </div>
        </div>

        {/* Hover border */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-brand-accent transition-opacity duration-300 pointer-events-none ${hoveredCard === card.link ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};
const PackageGridsRedesign = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const trailCards = [
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chola.webp",
      title: "Chola Trail",
      category: "FESTIVAL TRAILS",
      link: "chola-trail",
      duration: "6-8 Days",
      description: "Explore the golden age of Chola architecture and bronze casting",
      highlights: ["Thanjavur", "Gangaikonda Cholapuram"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/hoysala.webp",
      title: "Hoysala Trail",
      category: "HERITAGE TRAILS",
      link: "hoysala-trail",
      duration: "5-7 Days",
      description: "Witness the intricate stone sculptures and temple architecture",
      highlights: ["Belur Temple", "Halebidu"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pallava.webp",
      title: "Pallava Trail",
      category: "HERITAGE TRAILS",
      link: "pallava-trail",
      duration: "4-5 Days",
      description: "Journey through rock-cut temples and coastal marvels",
      highlights: ["Kanchipuram", "Mamallapuram"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pandya.webp",
      title: "Pandya Trail",
      category: "HERITAGE TRAILS",
      link: "pandya-trail",
      duration: "3-4 Days",
      description: "Experience the vibrant Tamil culture and ancient traditions",
      highlights: ["Meenakshi Temple", "Madurai"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chalukya.webp",
      title: "Chalukya Trail",
      category: "FESTIVAL TRAILS",
      link: "chalukya-trail",
      duration: "5-6 Days",
      description: "Marvel at the blend of Nagara and Dravidian architecture",
      highlights: ["Pattadakal", "Badami Caves"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/one-day.webp",
      title: "One Day Trail",
      category: "HERITAGE TRAILS",
      link: "one-day-trail",
      duration: "1 Day",
      description: "Perfect for quick heritage explorations and cultural immersion",
      highlights: ["Flexible", "Customizable"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arupadei.webp",
      title: "Arupadai Veedu",
      category: "PILGRIMAGE",
      link: "arupadai-veedu",
      duration: "7-9 Days",
      description: "Visit the six sacred abodes of Lord Murugan",
      highlights: ["Spiritual Journey", "Temple Rituals"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pancha.webp",
      title: "Panchabhoota Sthalams",
      category: "PILGRIMAGE",
      link: "panchabhoota-sthalams",
      duration: "6-8 Days",
      description: "Experience the five elements through Shiva temples",
      highlights: ["Five Elements", "Sacred Sites"]
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arch.webp",
      title: "Archaeological Site Visits",
      category: "HERITAGE TRAILS",
      link: "archaeological-site-visits",
      duration: "Varies",
      description: "Educational tours through India's historical treasures",
      highlights: ["Historical Sites", "Expert Guides"]
    }
  ];

  const categories = ["All", "HERITAGE TRAILS", "FESTIVAL TRAILS", "PILGRIMAGE"];
  const filteredCards =
    selectedCategory === "All"
      ? trailCards
      : trailCards.filter((card) => card.category === selectedCategory);

  const handleCardClick = (link: string) => {
    window.location.href = `/trails-and-tours/${link}`;
  };

  return (
    <section className="py-16 md:py-24 relative bg-brand-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent text-brand-dark rounded-full text-sm font-semibold mb-4 tracking-wide shadow-[0_4px_12px_rgba(212,163,0,0.3)]">
            EXPLORE HERITAGE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 drop-shadow-sm">
            Frequently Explored Trails
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover why our tailored travel experiences are the perfect choice for your next adventure
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                ? "bg-brand-dark text-white shadow-lg scale-105"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <PackageCard
              key={card.link}
              card={card}
              handleCardClick={handleCardClick}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGridsRedesign;
