import { useEffect, useState } from "react";

const CountUp = ({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function ImpactPage() {
  return (
    <section className="w-full py-20 px-6 md:px-24 bg-[#f7d98b] flex flex-col items-center">
      
      {/* Heading */}
      <div className="text-center mb-14 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3c88]">
          Our Impact
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#2c2c2c]">
          A growing journey across schools, states, and learning communities.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl text-center">

        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            <CountUp end={500} />+
          </div>
          <p className="mt-2 text-sm md:text-base text-[#2c2c2c]">
            Curated Journeys
          </p>
        </div>

        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            <CountUp end={50} />+
          </div>
          <p className="mt-2 text-sm md:text-base text-[#2c2c2c]">
            Heritage-Rich Destinations
          </p>
        </div>

        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            <CountUp end={15000} />+
          </div>
          <p className="mt-2 text-sm md:text-base text-[#2c2c2c]">
            Young Minds Inspired (Last 2 Years)
          </p>
        </div>

        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            ∞
          </div>
          <p className="mt-2 text-sm md:text-base text-[#2c2c2c]">
            Heritage Walks & Cultural Experiences
          </p>
        </div>

      </div>
    </section>
  );
}
