import Image from 'next/image';
import React from 'react'

const Clients = () => {
    const clientimages = [
        "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    "https://media.istockphoto.com/id/978902252/photo/junagarh-fort-bikaner-rajasthan-interior-gold-artwork-with-architecture-details.jpg?s=2048x2048&w=is&k=20&c=ZYyruJK_7feksajcYLQGQ50HiueBeDnDAI3OdD1eVK4=",
    "https://media.istockphoto.com/id/1366763781/photo/brihadisvara-temple-thanjavur-tamil-nadu.jpg?s=2048x2048&w=is&k=20&c=l7Geynt84jT4KzzmhDMSsHraR0pbprA_jY4PUcMCTBw=",
    "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=2048x2048&w=is&k=20&c=DHGXYX9Ff21baUwbpwv_7lyAKi-iPI8IVl2nmBVG_nA=",
    ];
  return (
    <section  className=" w-full bg-white  h-fit">
      <div className="my-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mt-4 text-deepblue">
          Our Clients
        </h2>
      </div>
      <div className="relative flex gap-4 overflow-x-hidden">
        <div className="py-6 -ml-4 flex justify-center items-center gap-4 lg:gap-16 animate-marquee whitespace-nowrap">
          {clientimages.map((image, index) => (
            <Image
              priority
              key={index}
              className="w-56 h-32 rounded-lg shadow-xl object-cover"
              width={1920}
              height={1080}
              src={image}
              alt="sponsor"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients