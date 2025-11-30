import React, { useState } from 'react';
import { MapPin, ArrowRight, Clock, Users } from 'lucide-react';

const PackageGridsRedesign = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'HERITAGE TRAILS', 'FESTIVAL TRAILS', 'PILGRIMAGE'];

  const filteredCards = selectedCategory === 'All' 
    ? trailCards 
    : trailCards.filter(card => card.category === selectedCategory);

  const handleCardClick = (link) => {
    window.location.href = `/trails-and-tours/${link}`;
  };

  return (
    <section className="py-16 md:py-24 relative" style={{
      backgroundColor: '#f4e8d0',
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(139, 119, 101, 0.03) 0px, transparent 1px, transparent 2px, rgba(139, 119, 101, 0.03) 3px),
        repeating-linear-gradient(90deg, rgba(139, 119, 101, 0.03) 0px, transparent 1px, transparent 2px, rgba(139, 119, 101, 0.03) 3px),
        linear-gradient(to bottom, #f4e8d0, #e8dcc8, #f4e8d0)
      `,
      backgroundSize: '100% 100%, 100% 100%, 100% 100%'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-700/20 text-amber-900 rounded-full text-sm font-semibold mb-4 tracking-wide border border-amber-700/30">
            EXPLORE HERITAGE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Frequently Explored Trails
          </h2>
          <p className="text-lg md:text-xl text-amber-900/80 max-w-3xl mx-auto leading-relaxed">
            Discover why our tailored travel experiences are the perfect choice for your next adventure through India's magnificent heritage
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-700 text-white shadow-lg shadow-amber-900/30 scale-105'
                  : 'bg-amber-100/50 text-amber-900 hover:bg-amber-200/70 border border-amber-700/30 hover:border-amber-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.link)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-amber-50/80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-700/20"
              style={{
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(120, 53, 15, 0.3)' 
                  : '0 10px 20px rgba(120, 53, 15, 0.15)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-700 text-white text-xs font-bold rounded-full shadow-lg border border-amber-600">
                    {card.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                    <Clock className="w-3 h-3" />
                    {card.duration}
                  </div>
                </div>

                {/* Title and Highlights - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:mb-3 transition-all duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Description - Shows on Hover */}
                  <p className={`text-white/90 text-sm mb-3 transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'opacity-100 max-h-20' 
                      : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {card.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {card.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <div className={`flex items-center gap-2 text-amber-300 font-semibold text-sm transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                  }`}>
                    Explore Trail
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-4 bg-gradient-to-r from-amber-100/60 to-amber-200/60 border-t border-amber-700/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-amber-900">
                    <MapPin className="w-4 h-4 text-amber-700" />
                    <span className="font-medium">{card.highlights[0]}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-800">
                    <Users className="w-4 h-4" />
                    <span className="text-xs">Group Tours</span>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-amber-700 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGridsRedesign;