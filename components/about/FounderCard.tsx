import React from "react";
import Image from "next/image";

const FounderCard = () => {
  return (
    <section id="about" className="bg-white text-primary">
      <div className="w-full flex flex-col md:flex-col lg:flex-row lg:max-w-7xl lg:mx-auto gap-12 p-4 md:px-12 py-[40px] md:py-[80px] ">
        <div className="flex flex-col gap-4 justify-center lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-brand-dark">
            Dharani Gunasekaran
          </h1>
          <p className="text-md text-slate-800 font-semibold">Founder & CEO</p>
          <p className="text-gray-600 text-justify">
            He is an avid researcher, cultural tourism and a social
            entrepreneur. He has completed a course in Iconography curated by
            the Chola group. With keen interest in the field of Archeology and
            South Indian cultural history, he did his Masters in Ancient history
            and Archeology from the University of Madras. He was recognized by
            the greater Chennai corporation and has been awarded the{" "}
            <span className="font-bold text-slate-800">Seva Ratna</span> award
            in the year 2019. In the{" "}
            <span className="font-bold text-slate-800">4th ASEAN SUMMIT</span>{" "}
            conducted by the Central Government he was invited as a delegate to
            represent India and where he presented about the Cultural & Heritage
            linkages between South East Asia and India. Anything and everything
            in the field of South Indian Temple History, Heritage sites,
            Iconography and Archaeology gets his undivided attention.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-slate-700 lg:w-1/2">
          <Image
            unoptimized
            priority
            src="https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/founder.webp"
            alt="Hampi Ruins"
            width={100}
            height={100}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderCard;
