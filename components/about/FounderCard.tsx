import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const FounderCard = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dharani Gunasekaran",
      title: "Founder & CEO",
      description:
        "He is an avid researcher, cultural tourism and a social entrepreneur. He has completed a course in Iconography curated by the Chola group. With keen interest in the field of Archeology and South Indian cultural history, he did his Masters in Ancient history and Archeology from the University of Madras. He was recognized by the greater Chennai corporation and has been awarded the <span className=\"font-bold text-slate-800\">Seva Ratna</span> award in the year 2019. In the <span className=\"font-bold text-slate-800\">4th ASEAN SUMMIT</span> conducted by the Central Government he was invited as a delegate to represent India and where he presented about the Cultural & Heritage linkages between South East Asia and India. Anything and everything in the field of South Indian Temple History, Heritage sites, Iconography and Archaeology gets his undivided attention.",
      imageSrc: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/founder.webp",
      alt: "Dharani Gunasekaran",
    },
    {
      name: "Priyanka Rajendra Prasad",
      title: "Chief Storyteller",
      description:
        "Priyankaa Prasad holds a Master's degree in Ancient History and Archaeology from the University of Madras. She has worked extensively as a storyteller, translating history into engaging narratives that make the past accessible and meaningful. With a growing focus on food history and traditional art forms especially painting, her work is rooted in research, curiosity, and cultural exploration. Priyankaa has a natural ability to connect with children, presenting historical content through stories that spark imagination and understanding. Having completed her schooling and higher education in Mumbai, she later moved to Chennai to deepen her engagement with South Indian history and heritage. Through Trawell India, she brings together research, storytelling, and travel to create experiences that are immersive, educational, and deeply rooted in culture.",
      imageSrc: "https://via.placeholder.com/500x600?text=Priyankaa+Prasad", 
      alt: "Priyanka Rajendra Prasad",
    },
  ];

  return (
    <section id="about" className="bg-white text-primary">
      <div className="w-full max-w-7xl mx-auto gap-16 p-4 md:px-12 py-[40px] md:py-[80px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-brand-dark">
                {member.name}
              </h1>
              <p className="text-md text-slate-800 font-semibold">{member.title}</p>
              <div 
                className="text-gray-600 text-justify"
                dangerouslySetInnerHTML={{ __html: member.description }}
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                unoptimized
                priority
                src={member.imageSrc}
                alt={member.alt}
                width={500}
                height={600}
                className="rounded-lg w-full h-96 lg:h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderCard;
