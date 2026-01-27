import Image from "next/image";

export default function InstitutionsPage() {
  const logos = [
    { src: "/logos/chinmaya.png", alt: "Chinmaya Vidyalaya" },
    { src: "/logos/bhaktavatsam.png", alt: "Bhaktavatsam Vidyalaya" },
    { src: "/logos/chettinad.png", alt: "Chettinad Vidyashram" },
    { src: "/logos/vivekananda.png", alt: "Vivekananda Vidyalaya" },
    { src: "/logos/rukminidevi.png", alt: "Rukminidevi Natyakshetra Foundation" },
    { src: "/logos/ponvidhyamandir.png", alt: "Pon Vidhyamandir, Karur" },
    { src: "/logos/dgvaishnav.png", alt: "DG Vaishnav College" },
    { src: "/logos/madrasuniversity.png", alt: "Madras University" },
    { src: "/logos/sindhicollege.png", alt: "Sindhi College" },
    { src: "/logos/patrician.png", alt: "Patrician College of Arts and Science" },
    { src: "/logos/shasun.png", alt: "Shri Shankarlal Sundarbai Shasun Jain College for Women" },
  ];

  return (
    <section className="w-full bg-background py-6 md:py-8">
      {/* Title */}
      <h2 className="text-center text-lg md:text-xl font-medium text-foreground mb-4">
        Trusted By Institutions
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]">
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
