import Image from "next/image";

export default function InstitutionsPage() {
  const logos = [
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Chinmaya%20Vidyalaya%20logo%20.png", alt: "Chinmaya Vidyalaya" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Bhaktavatsam%20Vidyalaya%20logo.png", alt: "Bhaktavatsam Vidyalaya" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Chettinad%20Vidyashram%20logo.png", alt: "Chettinad Vidyashram" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Vivekananda%20Vidyalaya%20logo.png", alt: "Vivekananda Vidyalaya" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Rukminidevi%20Natyakshetra%20Foundation%20logo.png", alt: "Rukminidevi Natyakshetra Foundation" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Pon%20Vidhyamandir%2C%20Karur%20logo.png", alt: "Pon Vidhyamandir, Karur" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/DG%20Vaishnav%20College%20logo.png", alt: "DG Vaishnav College" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Madras%20University%20logo.png", alt: "Madras University" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Sindhi%20College%20logo.png", alt: "Sindhi College" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Patrician%20College%20of%20Arts%20and%20Science%20logo.png", alt: "Patrician College of Arts and Science" },
    { src: "https://7llynlmlgfrzlkfk.public.blob.vercel-storage.com/Shri%20Shankarlal%20Sundarbai%20Shasun%20Jain%20College%20for%20Women%20logo.png", alt: "Shri Shankarlal Sundarbai Shasun Jain College for Women" },
  ];

  return (
    <section className="w-full bg-brand-soft py-6 md:py-8">
      {/* Title */}
      <h2 className="text-center text-lg md:text-xl font-medium text-slate-700 mb-4">
        Trusted By Institutions
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max items-center animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-6 md:mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
