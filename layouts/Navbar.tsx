"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { title } from "process";

const Navbar = ({ darkText = false }: { darkText?: boolean }) => {
  const NAVBAR_DATA = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/about" },
    { title: "Tours", link: "/#services" },
    { title: "Gallery", link: "/gallery" },
    { title: "Podcast & Talks", link: "/podcast-and-talks" },
    { title: "Contact Us", link: "/#contact" },
    { title: "Upcoming Events", link: "/UpcomingEvents" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(false);
  const handleToggle = (isOpen: boolean) => setOpen(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled || darkText ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
        } z-50 w-full h-[4rem] transition-all duration-300 flex items-center justify-between fixed top-0 p-4 md:p-12`}
    >
      {/* LOGO CHANGE ON SCROLL */}
      <Link href={"/#"}>
        <Image
          unoptimized
          priority
          src={
            isScrolled || darkText
              ? "/images/TraWell_Primary - multicolour.png" // logo with black/colored text
              : "/images/TraWell_Primary - multicolour white text.png" // white logo
          }
          alt="Trawell Logo"
          width={100}
          height={100}
          className="w-28 md:w-32 lg:w-36 transition-all duration-300"
        />
      </Link>

      {/* NAV LINKS (DESKTOP) */}
      <div className="hidden xl:flex gap-8 items-center">
        {NAVBAR_DATA.map((data, idx) => (
          <Link
            key={idx}
            className="hover:scale-110 transition-all duration-300"
            href={data.link}
          >
            {data.title}
          </Link>
        ))}
        <Button>
          <Link href="/contactForm">Enquire Now</Link>
        </Button>
      </div>

      {/* MOBILE MENU */}
      <div className="xl:hidden">
        <Sheet open={open} onOpenChange={handleToggle}>
          <SheetTrigger aria-label="Menu">
            {/* ICON CHANGE ON SCROLL */}
            <MenuIcon className={isScrolled || darkText ? "text-black" : "text-white"} />
          </SheetTrigger>

          <SheetContent side={"top"} className="bg-[#0d1117] text-white">
            <SheetHeader>
              <SheetTitle>
                <Image
                  unoptimized
                  priority
                  src="/images/TraWell_Primary - multicolour white text.png"
                  alt="Trawell Logo"
                  width={100}
                  height={100}
                  className="w-28 md:w-32 lg:w-36"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 mt-4">
              {NAVBAR_DATA.map((data, idx) => (
                <Link
                  onClick={handleClose}
                  key={idx}
                  href={data.link}
                  className="text-white"
                >
                  {data.title}
                </Link>
              ))}
              <Button>
                <Link href="/contactForm">Enquire Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
