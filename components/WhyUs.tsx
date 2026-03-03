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
  [];
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
    {
      Svg: Handshake,
      title: "Safety and Trust",
      description:
        "We prioritize your safety and trust, adhering to the highest standards of security and transparency.",
    },
    {
      Svg: Smartphone,
      title: "Easy to Book",
      description:
        "Book your next adventure effortlessly with our user-friendly online platform.",
    },
    {
      Svg: Cpu,
      title: "Technology Powered",
      description:
        "Our advanced technology ensures a smooth and innovative travel experience from start to finish.",
    },
  ];
  return (
    <section className="py-[50px] md:py-[50px] bg-white" id="WhyUs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark">
            Why Choose Us?
          </h2>
          <p className="my-4 text-gray-600">
            Discover why our tailored travel experiences are the perfect choice
            for your next destination.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WhyUs.map((feat, idx) => (
            <div
              className="block p-8 transition duration-300 hover:-translate-y-1"
              key={idx}
            >
              <div key={idx} className="flex gap-4 items-center">
                <div className="border-2 rounded-full p-4 bg-brand-accent">
                  <feat.Svg
                    strokeWidth={1.5}
                    className="text-app-slate-blue"
                    size={36}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{feat.title}</h2>
                  <p className=" text-sm text-gray-600">{feat.description}</p>
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
