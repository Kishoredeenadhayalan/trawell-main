import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
      <h1>
        <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-deepblue tracking-wide mb-8">
          Upcoming Events
        </span>
      </h1>
      <div>
        <Link href={"https://forms.gle/yexwkhAETPdeogiW6"} target="_blank">
          <Image
            unoptimized
            priority
            src="https://k6e1njmrbw.ufs.sh/f/ea0DhERF0poLulLPOVLANJ6DZYrchnP5XIS8472GU30mlVjt"
            width={500}
            height={300}
            alt="events"
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
