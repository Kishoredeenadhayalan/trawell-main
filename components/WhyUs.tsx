import React from "react";
import {
  CircleDollarSign,
  Cpu,
  Handshake,
  Headset,
  LucideIcon,
  Smartphone,
  Tent,
} from "lucide-react";

function WhyUs() {
  interface WhyUsData {
    Svg: LucideIcon;
    title: string;
    description: string;
  }

  const WhyUs: WhyUsData[] = [
    {
      Svg: Headset,
      title: "Personalized Service",
      description:
        "Each journey is tailored to your unique tastes and preferences, ensuring a personalized travel experience.",
    },
    {
      Svg: Tent,
      title: "Authentic Tailormade Experiences",
      description:
        "Dive into authentic adventures meticulously crafted to ensure an unforgettable experience.",
    },
    {
      Svg: CircleDollarSign,
      title: "Value for Money",
      description:
        "Our travel options are designed to provide the best experiences at competitive prices.",
    },
  ];

  return (
    <section className="py-[50px] md:py-[50px] bg-brand-accent text-brand-dark" id="WhyUs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark">
            Why Choose Us?
          </h2>
          <p className="my-4 text-brand-dark/90 font-medium">
            Discover why our tailored travel experiences are the perfect choice
            for your next destination.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WhyUs.map((feat, idx) => (
            <div
              className="block p-8 transition duration-300 hover:-translate-y-1 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm"
              key={idx}
            >
              <div className="flex gap-4 items-center">
                <div className="border-2 rounded-full p-4 bg-brand-dark border-brand-dark shadow-md">
                  <feat.Svg
                    strokeWidth={1.5}
                    className="text-brand-accent"
                    size={36}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{feat.title}</h2>
                  <p className=" text-sm text-brand-dark/80 font-medium">{feat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
