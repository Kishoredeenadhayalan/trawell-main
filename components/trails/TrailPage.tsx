import React from "react";

interface TrailsHeroProps {
  title: string;
  image: string;
  desc: string;
}

const TrailPage: React.FC<TrailsHeroProps> = ({ title, image, desc }) => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative flex items-center justify-center h-full">
          <div className="container mx-auto px-6 lg:px-12 xl:px-24   text-center">
            <h1 className="text-4xl md:text-6xl  font-bold text-white tracking-wide mb-4">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:px-32 px-8 flex flex-col gap-4 justify-between items-center">
        <h1>
          <span className="text-2xl md:text-3xl lg:text-5xl font-semibold text-deepblue tracking-wide mb-8">
            About {title}
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  font-light text-justify">
          {desc}
        </p>
      </div>
    </>
  );
};

export default TrailPage;
