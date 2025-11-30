import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Instagram,
  LinkedinIcon,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[12px] pt-[72px] pb-[32px] md:px-[20px] lg:px-[5vw]">
        <div className="flex flex-col items-stretch justify-start">
          <div className="w-full border-b p-2 md:p-4">
            <div className="flex flex-col items-center justify-between md:items-start lg:flex-row">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={"/images/TraWell_Primary - multicolour.png"}
                  width={1080}
                  height={1920}
                  alt="trawell-india-logo"
                  className="w-28 md:w-32 lg:w-36"
                />
              </Link>
              <div className="flex w-full flex-col items-center justify-between md:flex-row lg:justify-end">
                <div className="mb-4 flex items-center justify-start lg:ml-[64px]">
                  {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-red"
                  >
                    <Twitter aria-label="Twitter" />
                  </Link> */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/trawell_india_"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-red"
                  >
                    <Instagram aria-label="Instagram" />
                  </Link>
                  {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-red"
                  >
                    <Youtube aria-label="You-Tube" />
                  </Link> */}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:trawellindia2022@gmail.com"
                    className="mx-[2px] p-3 transition-all duration-300 hover:text-app-red"
                  >
                    <Mail aria-label="Mail" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:p-4">
            <div className="flex flex-col items-center justify-start md:flex-row md:justify-between">
              <div className="mb-4 flex flex-col items-stretch justify-center text-center md:flex-row">
                {/* <Link
                  href="/terms-and-conditions"
                  className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="py-2 text-[14px] text-[#777a85] md:mr-[24px]"
                >
                  Privacy Policy
                </Link> */}
                {/**<p className="text-center text-[12px] text-[#777a85]">
                  Crafted by{" "}
                  <Link
                    href="https://github.com/Jayanth-Srinivasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500"
                  >
                    Codelance Devs
                  </Link>
                </p>*/}
              </div>
              <p className="mb-4 text-[12px] text-[#777a85]">
                Copyright &copy; {new Date().getFullYear()} Trawell India
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <p className="text-center text-[12px] text-[#777a85]">
            Crafted by{" "}
            <Link
              href="https://github.com/Jayanth-Srinivasan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500"
            >
              Codelance Devs
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
