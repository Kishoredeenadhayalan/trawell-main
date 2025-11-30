import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { sendEnquiryRequest } from "@/lib/api";



const metadata = {
  title: "Enquire Now | Trawell India",
  description:
    "Start your journey with Trawell India by filling out our enquiry form. Choose from a variety of tours and services and let us help you plan your perfect trip.",
  url: "https://trawellindia.in/contactForm",
  image: "https://utfs.io/f/1e119bd8-ba4e-44ed-9086-b3d36380d42d-rri8sg.png",
};

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    category: "",
    email: "",
    message: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  //   const { toast } = useToast();

  const handleValuesChange =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => {
        return { ...prev, [key]: e.target.value };
      });
    };

  const handleCategorySelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, category: val };
    });
  };
  const emailRegex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
  const PHN_REGEX = /^(^[6-9]\d{9}$)/g;

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (!values.name || !values.email || !values.category) {
      setLoading(false);
      return alert("Please fill all the required fields");
    } else if (!emailRegex.test(values.email)) {
      setLoading(false);
      return alert("Please enter a valid email address");
    } else if (!PHN_REGEX.test(values.phone)) {
      setLoading(false);
      return alert("Please enter a valid Phone No.");
    }
    else if (values.category === "Select a Trip") {
      setLoading(false);
      return alert("Please select a trip");
    } else {
      try {
        await sendEnquiryRequest(values);
        // toast({
        //   title: "Scheduled: Catch up",
        //   description: "Friday, February 10, 2023 at 5:57 PM",
        // });
        alert("Your request has been submitted successfully");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert(`Something went wrong, please try again: ${err as Error}`);
      }
    }
    console.log(values);
  };

  const CATEGORIES = [
    "Trails",
    "Heritage Walks",
    "Educational Tours",
    "Chola Trail",
    "Hoysala Trail",
    "Pallava Trail",
    "Pandya Trail",
    "Chalukya Trail",
    "One-Day Trail",
    "Arupadei Veedu",
    "Pancha Bhoota Sthalas",
    "Archaeological Site Visits",
    "Other Services"
  ];
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
      <main className="min-h-screen bg-gray-50  w-full ">
        <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[50px]">
          <Link
            href={"/"}
            className="mx-auto flex items-center gap-2 text-base font-medium text-[#4c4f58] "
          >
            <MoveLeft className="w-6 h-6 text-marigold " /> Back
          </Link>
          <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
            <h2 className=" select-text text-center text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
              Explore the Wonders of Bharat with Trawell India - Enquire Now
            </h2>
            <p className="text-[18px] text-[#4c4f58]">
              We&apos;re here to assist you with any questions or information
              you need. Whether you&apos;re seeking the perfect trail or an
              exciting tour, we&apos;re ready to help. Fill out the form below,
              and we&apos;ll get back to you shortly.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4 p-4 border rounded font-outfit  border-white/10"
          >
            <h1 className="text-xl font-bold md:text-2xl">Enquiry Form</h1>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                onChange={handleValuesChange("name")}
                required
                type="text"
                className="h-12"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">
                Your Email <span className="text-red-500">*</span>
              </Label>
              <Input
                onChange={handleValuesChange("email")}
                required
                type="email"
                className="h-12"
                placeholder="Enter your email"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="start">
                Mobile No. <span className="text-red-500">*</span>
              </Label>
              <Input
                onChange={handleValuesChange("phone")}
                type="text"
                maxLength={10}
                required
                className="h-12"
                placeholder="Enter your Mobile No."
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="category" className="mb-2">
                Service <span className="text-red-500">*</span>
              </Label>
              <Select required onValueChange={handleCategorySelect}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Select a Trip" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                onChange={handleValuesChange("message")}
                placeholder="Got any special requests?"
                id="message"
              />
            </div>
            <Button
              type="submit"
              className="h-12 w-full rounded-lg text-black bg-marigold py-5 px-16 transition-all duration-300 hover:bg-marigold/80 "
            >
              {loading ? "Loading..." : "Request"}
            </Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactForm;
