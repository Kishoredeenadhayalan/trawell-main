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
import Image from "next/image";
import { sendEnquiryRequest } from "@/lib/api";



const metadata = {
  title: "Next Steps | Trawell India",
  description:
    "We welcome institutions and educators who believe education must go beyond classrooms. Let us build learning journeys where children not only learn, but reconnect with their roots.",
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
    inquiryType: "Individual",
    schoolName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleValuesChange =
    (key: keyof typeof values) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value = e.target.value;
        if (key === "phone") {
          value = value.replace(/\D/g, "");
        }
        setValues((prev) => {
          return { ...prev, [key]: value };
        });
      };

  const handleCategorySelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, category: val };
    });
  };

  const handleInquiryTypeSelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, inquiryType: val };
    });
  };

  const emailRegex = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i);
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
      // Phone is optional now, but if filled check validity:
    } else if (values.phone && !PHN_REGEX.test(values.phone)) {
      setLoading(false);
      return alert("Please enter a valid Phone No.");
    } else if (values.category === "Select a Trip") {
      setLoading(false);
      return alert("Please select a service");
    } else if (values.inquiryType === "Institution" && !values.schoolName) {
      setLoading(false);
      return alert("Please enter the Name of your School/Institution");
    } else {
      try {
        await sendEnquiryRequest(values);
        alert("Your request has been submitted successfully");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        alert(`Something went wrong, please try again: ${err as Error}`);
      }
    }
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
      </Head>
      <main className="min-h-screen bg-brand-soft w-full">
        <section className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
          <Link
            href={"/"}
            className="mb-8 flex items-center gap-2 text-base font-medium text-brand-dark hover:text-brand-accent transition-colors"
          >
            <MoveLeft className="w-6 h-6" /> Back
          </Link>

          <div className="mx-auto flex flex-col gap-4 text-center pb-[40px]">
            <h2 className="select-text text-center text-[36px] font-bold text-brand-dark md:text-[42px] lg:text-[50px] font-serif">
              Next Steps
            </h2>
            <p className="text-[18px] text-slate-700 max-w-4xl mx-auto leading-relaxed">
              We welcome institutions and educators who believe education must go beyond classrooms. Let us build learning journeys where children not only learn, but reconnect with their roots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-8">
            {/* Left Graphic - Website Logo */}
            <div className="hidden lg:flex justify-center items-center relative w-full h-[400px]">
              <div className="relative w-96 h-96 flex justify-center items-center">
                <Image
                  unoptimized
                  priority
                  src="/images/TraWell_Primary - multicolour.png"
                  alt="Trawell Logo"
                  width={450}
                  height={450}
                  className="w-full h-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-5 p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-accent/20"
            >
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name" className="text-brand-dark font-medium">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  onChange={handleValuesChange("name")}
                  value={values.name}
                  required
                  type="text"
                  className="h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email" className="text-brand-dark font-medium">Email ID <span className="text-red-500">*</span></Label>
                <Input
                  onChange={handleValuesChange("email")}
                  value={values.email}
                  required
                  type="email"
                  className="h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl"
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone" className="text-brand-dark font-medium">Mobile No.</Label>
                <Input
                  onChange={handleValuesChange("phone")}
                  value={values.phone}
                  type="text"
                  maxLength={10}
                  className="h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl"
                  placeholder="Enter your Mobile No."
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="inquiryType" className="text-brand-dark font-medium">I am an <span className="text-red-500">*</span></Label>
                <Select required defaultValue="Individual" onValueChange={handleInquiryTypeSelect}>
                  <SelectTrigger className="w-full h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl">
                    <SelectValue placeholder="Individual or Institution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Individual">Individual</SelectItem>
                    <SelectItem value="Institution">Institution / Educator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {values.inquiryType === "Institution" && (
                <div className="grid w-full items-center gap-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Label htmlFor="schoolName" className="text-brand-dark font-medium">Name of School / Institution <span className="text-red-500">*</span></Label>
                  <Input
                    onChange={handleValuesChange("schoolName")}
                    value={values.schoolName}
                    required
                    type="text"
                    className="h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl"
                    placeholder="Enter the name of your school"
                  />
                </div>
              )}

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="category" className="text-brand-dark font-medium">Services <span className="text-red-500">*</span></Label>
                <Select required onValueChange={handleCategorySelect}>
                  <SelectTrigger className="w-full h-12 border-slate-300 focus:border-brand-accent focus:ring-brand-accent rounded-xl">
                    <SelectValue placeholder="Select a Service" />
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
                <Label htmlFor="message" className="text-brand-dark font-medium">Message (Optional)</Label>
                <Textarea
                  onChange={handleValuesChange("message")}
                  className="border-slate-300 focus:border-brand-accent focus:ring-brand-accent min-h-[100px] rounded-xl"
                  placeholder="Got any special requests?"
                  id="message"
                />
              </div>

              <Button
                type="submit"
                className="mt-4 h-12 w-full rounded-xl text-white bg-brand-dark py-5 px-16 text-lg font-medium transition-all duration-300 hover:bg-brand-dark/90 hover:shadow-lg"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactForm;
