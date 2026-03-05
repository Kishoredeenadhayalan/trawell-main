import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f4e8d0]">
      <div className="bg-gradient-to-r from-[#f4e8d0]/20 to-[#f4e8d0] py-8 px-6 relative"> {/* Sand gradient */}
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row flex-wrap md:flex-nowrap items-start justify-between gap-8 md:gap-12 text-[#333] text-sm">

          {/* LOGO + EXPLORE */}
          <div className="flex items-start gap-4 w-full md:w-1/4 flex-shrink-0">
            <Image
              src={"/images/TraWell_Primary - multicolour.png"}
              width={1080}
              height={1920}
              alt="trawell-india-logo"
              className="w-16 mt-1"
            />
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">EXPLORE</span>
              <Link href="/" className="hover:text-[#666] py-0.5 block">Home</Link>
              <Link href="/about" className="hover:text-[#666] py-0.5 block">About</Link>
              <Link href="/gallery" className="hover:text-[#666] py-0.5 block">Gallery</Link>
            </div>
          </div>

          {/* TRAVEL SERVICES */}
          <div className="flex flex-col gap-1 w-full sm:w-1/2 md:w-1/4 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">TRAVEL SERVICES</span>
            <div className="hover:text-[#666] py-0.5">India Tours</div>
            <div className="hover:text-[#666] py-0.5">Custom Packages</div>
            <div className="hover:text-[#666] py-0.5">Flight Bookings</div>
            <div className="hover:text-[#666] py-0.5">24/7 Support</div>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-1 w-full sm:w-1/2 md:w-1/4 pt-1">
            <span className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">LEGAL</span>
            <Link href="/terms" className="hover:text-[#666] py-0.5 block">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#666] py-0.5 block">Privacy Policy</Link>
          </div>

          {/* SOCIAL + CONTACT + FOLLOW US */}
          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-1/4 pt-1">
            <div className="flex items-center gap-2 mb-2">
              <Link href="https://www.instagram.com/trawell_india_" className="p-1.5 hover:scale-110">
                <Instagram size={18} className="text-[#333]" />
              </Link>
              <Link href="mailto:trawellindia2022@gmail.com" className="p-1.5 hover:scale-110">
                <Mail size={18} className="text-[#333]" />
              </Link>
            </div>
            <div className="text-xs text-left md:text-right opacity-80">contact@trawell.in</div>
            <div className="text-xs text-left md:text-right opacity-80">Coimbatore: 964105</div>
            <div className="text-lg text-left md:text-right font-bold mt-1">Follow us</div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="py-3 px-4 text-center text-xs text-[#666]">
        Copyright © 2026 Trawell India
      </div>
    </footer>
  );
};

export default Footer;
