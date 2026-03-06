import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export default function ImpactPage() {
  return (
    <section className="relative w-full py-24 px-6 md:px-24 bg-brand-dark flex flex-col items-center overflow-hidden">
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 right-10 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[80px]"
          animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 left-10 w-[300px] h-[300px] bg-brand-warm/20 rounded-full blur-[60px]"
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Heading */}
      <div className="relative text-center mb-16 max-w-3xl z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
          Our Impact
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-300">
          A growing journey across schools, states, and learning communities.
        </p>
      </div>

      {/* Stats */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl text-center z-10">

        {/* Stat 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm flex justify-center items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className="h-12 flex items-center">
                  {isVisible ? <CountUp end={500} duration={2.5} /> : "0"}
                  <span>+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <p className="mt-3 text-sm md:text-base text-slate-300 font-medium">
            Curated Journeys
          </p>
        </div>

        {/* Stat 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm flex justify-center items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className="h-12 flex items-center">
                  {isVisible ? <CountUp end={50} duration={2.5} /> : "0"}
                  <span>+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <p className="mt-3 text-sm md:text-base text-slate-300 font-medium">
            Heritage-Rich Destinations
          </p>
        </div>

        {/* Stat 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm flex justify-center items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className="h-12 flex items-center">
                  {isVisible ? <CountUp end={15000} duration={2.5} separator="," /> : "0"}
                  <span>+</span>
                </div>
              )}
            </VisibilitySensor>
          </div>
          <p className="mt-3 text-sm md:text-base text-slate-300 font-medium">
            Young Minds Inspired (Last 2 Years)
          </p>
        </div>

        {/* Stat 4 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
            ∞
          </div>
          <p className="mt-3 text-sm md:text-base text-slate-300 font-medium">
            Heritage Walks & Cultural Experiences
          </p>
        </div>

      </div>
    </section>
  );
}