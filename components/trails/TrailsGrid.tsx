import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { useRouter } from "next/navigation";

const TrailsGrid = () => {
  const router = useRouter();
  const trailCards = [
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chola.webp",
      title: "Chola Traila",
      category: "FESTIVAL TRAILS",
      link: "chola-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/hoysala.webp",
      title: "Hoysala Trail",
      category: "HERITAGE TRAILS",
      link: "hoysala-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pallava.webp",
      title: "Pallava Trail",
      category: "HERITAGE TRAILS",
      link: "pallava-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pandya.webp",
      title: "Pandya Trail",
      category: "HERITAGE TRAILS",
      link: "pandya-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/chalukya.webp",
      title: "Chalukya Trail",
      category: "FESTIVAL TRAILS",
      link: "chalukya-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/one-day.webp",
      title: "One Day Trail",
      category: "HERITAGE TRAILS",
      link: "one-day-trail",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arupadei.webp",
      title: "Arupadai Veedu",
      category: "HERITAGE TRAILS",
      link: "arupadai-veedu",
    },
    {
      image:
        "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/pancha.webp",
      title: "Panchabhoota Sthalams",
      category: "HERITAGE TRAILS",
      link: "panchabhoota-sthalams",
    },
    {
      image: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/arch.webp",
      title: "Archaeological Site Visits",
      category: "HERITAGE TRAILS",
      link: "archaeological-site-visits",
    },
  ];
  return (
    <section className="py-[50px] md:py-[50px] bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-deepblue">
            Select your experience
          </h2>
          <p className="my-4 text-gray-600">
            Come and witness the Heritage Trails, Temple tours, Pilgrimage
            Trails of Bharat
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trailCards.map((card, index) => (
            <>
              <div
                key={index}
                className="relative flex items-center justify-center"
                onClick={() => router.push(`/trails-and-tours/${card.link}`)}
              >
                <DirectionAwareHover imageUrl={card.image}>
                  <p className="font-bold text-xl">{card.title}</p>
                  {/* <p className="font-normal text-sm">{card.category}</p> */}
                </DirectionAwareHover>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrailsGrid;
