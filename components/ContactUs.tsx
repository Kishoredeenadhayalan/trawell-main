import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  return (
    <section id="contact" className="bg-brand-soft">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className=" mx-auto text-left">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-brand-dark">
            Visit Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We&apos;d love to hear from you! Reach out to us with any questions, or
            come visit our office.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2011.105171665181!2d80.20774202990843!3d13.090768003323674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717059919117!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                title="trawell-india-location"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    297-295, Kathiravan Colony, Anna Nagar, Chennai, Tamil Nadu
                    600040
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 10am - 6pm
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">
                    <Link href="mailto:trawellindia2022@gmail.com">
                      Email: trawellindia2022@gmail.com
                    </Link>
                  </p>
                  <p className="mt-1 text-gray-600">
                    <Link href="tel:+918667737189">Phone: +91 86677 37189</Link>
                  </p>
                </div>
              </div>
              <div className="mt-4 px-4">
                <Button
                  onClick={() => router.push("/contactForm")}
                  className="bg-brand-accent text-black  px-6 py-2 rounded hover:bg-brand-accent/80 transition-colors duration-300 ease-in-out"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
