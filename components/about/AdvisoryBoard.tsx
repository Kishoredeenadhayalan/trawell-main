import React from "react";

interface AdvisoryMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    name: "Radha Narayanan",
    role: "Cultural Entrepreneur",
    image:
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-01%20at%2014.56.47.jpeg",
    bio: "Meet Radha Narayanan, Co-Founder and Director of Gurucool Fun. She is an Engineer and Business Graduate by education and a cultural entrepreneur by profession based out of Chennai. She is also a graduate of the Chinmaya Youth Empowerment Program, where youngsters are trained in Indic studies and serve the society for a year through spiritual and cultural outreach programs. Radha is a Bharatanatyam dancer who taught Nritya Yoga in Shanghai, China. She created Gurucool Fun to present ancient Indian wisdom through exciting board games, card games, and school workshops.",
  },
  {
    name: "Ananth Seshadri",
    role: "Finance Expert",
    image:
      "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-01%20at%2014.53.50.jpeg",
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
    image:"https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/cc1cf894-652b-450e-8356-21e41dfe1f77.JPG",
    bio: "Digital marketing expert driving tourism brand engagement through innovative cultural campaigns.",
  },
];

const AdvisoryBoard: React.FC = () => {
  return (
    <div className="py-24 bg-[#FBF7F1]">
      <div className="w-full lg:max-w-6xl mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#3B1F0B] tracking-wide mb-6">
            Advisory Board
          </h2>

          <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mb-6" />

          <p className="text-lg md:text-xl text-[#4B2C1C] max-w-2xl mx-auto leading-relaxed">
            Our esteemed advisors bring decades of expertise in culture, tourism,
            and strategic leadership.
          </p>
        </div>

        {/* Members */}
        <div className="space-y-20">
          {advisoryMembers.map((member, index) => {
            const layoutClass =
              index === 0 || index === 2 || index === 4
                ? "lg:flex-row"
                : "lg:flex-row-reverse";

            return (
              <div
                key={member.name}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${layoutClass}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#C9A24D]/60 bg-[#F5EFE6] shadow-[0_10px_30px_rgba(59,31,11,0.15)] transition-all duration-300 hover:scale-[1.02]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#4B2C1C]/60 text-lg font-medium text-center px-4">
                        Add Image Here <br />(Vercel Blob)
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 text-left">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#3B1F0B] tracking-wide">
                    {member.name}
                  </h3>

                  <p className="text-lg md:text-xl text-[#7A5C2E] font-semibold tracking-wide">
                    {member.role}
                  </p>

                  <div className="w-12 h-[1px] bg-[#C9A24D]/70 my-2" />

                  <p className="text-base md:text-lg text-[#4B2C1C]/80 leading-relaxed max-w-xl">
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
