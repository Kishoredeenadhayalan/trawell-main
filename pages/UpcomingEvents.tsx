import Image from "next/image";
import Link from "next/link";

export default function UpcomingEvents() {
  return (
    <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-6 items-center bg-[#f4efe8]">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-semibold text-[#5b3a1e] tracking-wide mb-4 text-center">
        Upcoming Heritage Events
      </h1>

      {/* Image – FIXED & FIT (NO CROP) */}
      <div className="w-full flex justify-center">
        <Image
          unoptimized
          priority
          src="https://k6e1njmrbw.ufs.sh/f/ea0DhERF0poLulLPOVLANJ6DZYrchnP5XIS8472GU30mlVjt"
          width={500}
          height={300}
          alt="Upcoming Event"
          className="max-h-[60vh] w-auto object-contain rounded-xl border border-[#d6c3a3] bg-[#fff8f0] p-2"
        />
      </div>

      {/* Description */}
      <p className="max-w-3xl text-center text-[#5b4632] text-sm md:text-base leading-relaxed">
        Journey through ancient pathways, uncover forgotten legends, and experience
        the soul of heritage through immersive storytelling and guided historical walks.
        Each event is curated to reconnect you with timeless cultures and traditions.
      </p>

      {/* CTA */}
      <Link
        href="https://forms.gle/yexwkhAETPdeogiW6"
        target="_blank"
      >
        <button className="mt-4 bg-[#7f5539] hover:bg-[#6b4630] text-white px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-md">
          Register for the Event
        </button>
      </Link>

      {/* Quote */}
      <p className="mt-6 text-xs text-[#7a5c43] italic">
        “The past lives on when its stories are told.”
      </p>
    </div>
  );
}
