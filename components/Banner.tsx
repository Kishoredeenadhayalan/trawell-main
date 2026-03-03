
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Banner = () => {
  const router = useRouter();

  return (
    <div
      className="bg-brand-dark text-brand-soft w-full mt-12 py-12 md:px-32 px-8 flex flex-col md:flex-row md:gap-0 gap-4 justify-between items-center"
      id="contact"
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold text-white">Lets Get Connected</h1>
        <p className="text-base text-justify">
          Discover rich heritage and vibrant culture through our exclusive
          trails and tours. Connect with us to explore history and tradition.
        </p>
      </div>

      <Button
        onClick={() => router.push("/contactForm")}
        className="bg-brand-accent text-black  px-6 py-2 rounded hover:bg-brand-accent/80 transition-colors duration-300 ease-in-out"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default Banner;
