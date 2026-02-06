// components/about/AdvisoryBoard.tsx
import React from "react";

interface AdvisoryMember {
  name: string;
  role: string;
  bio: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: "Radha Narayanan",
    role: "Cultural Entrepreneur",
    bio: "Meet Radha Narayanan, Co-Founder and Director of Gurucool Fun. She is an Engineer and Business Graduate by education and a cultural entrepreneur by profession based out of Chennai. She is also a graduate of the Chinmaya Youth Empowerment Program, where youngsters are trained in Indic studies and serve the society for a year through spiritual and cultural outreach programs. Radha is a Bharatanatyam dancer who taught Nritya Yoga in Shanghai, China. She created Gurucool Fun to present ancient Indian wisdom through exciting board games, card games, and school workshops.",
  },
  {
    name: "Ananth Seshadri",
    role: "Finance Expert",
    bio: "Seasoned finance professional specializing in nonprofit funding and cultural enterprise growth strategies.",
  },
  {
    name: "Sriram Vijayaragavan",
    role: "Operations Lead",
    bio: "Travel & hospitality operations specialist ensuring seamless execution of curated cultural tours.",
  },
  {
    name: "Dr. Ramadevi",
    role: "Cultural Historian",
    bio: "Renowned South Indian heritage historian with publications on ancient architecture and temple traditions.",
  },
  {
    name: "Sandeep",
    role: "Marketing Specialist",
    bio: "Digital marketing expert driving tourism brand engagement through innovative cultural campaigns.",
  },
];

const AdvisoryBoard: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-white/50">
      <div className="w-full lg:max-w-6xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B1F0B] tracking-wide drop-shadow-[0_0_4px_rgba(255,243,222,0.4)] mb-6">
            Advisory Board
          </h2>
          <p className="text-xl text-[#4B2C1C] max-w-2xl mx-auto leading-relaxed">
            Our esteemed advisors bring decades of expertise in culture, tourism, and strategic leadership.
          </p>
        </div>

        {/* Members - One per row, alternating layout */}
        <div className="space-y-16">
          {advisoryMembers.map((member, index) => {
            // ✅ FIXED: Direct index comparison - NO arithmetic
            const layoutClass = index === 0 || index === 2 || index === 4 
              ? "lg:flex-row" 
              : "lg:flex-row-reverse";

            return (
              <div 
                key={member.name}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${layoutClass}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-sm h-64 md:h-80 bg-gradient-to-br from-[#D4A300]/10 to-[#3B1F0B]/10 rounded-2xl flex items-center justify-center border-4 border-dashed border-[#D4A300]/30 hover:border-[#D4A300]/60 transition-all duration-300 hover:scale-[1.02]">
                    <span className="text-[#4B2C1C]/60 text-lg font-medium tracking-wide text-center px-4">
                      Add Image Here
                      <br className="sm:hidden" />(Vercel Blob)
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#3B1F0B] tracking-wide hover:text-[#D4A300] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-lg md:text-xl text-[#4B2C1C]/90 font-semibold tracking-wide hover:text-[#D4A300] transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-base md:text-lg text-[#4B2C1C]/80 leading-relaxed max-w-xl line-clamp-6">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
