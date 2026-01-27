import React from "react";

const OurHistory = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-5 lg:px-[5vw] lg:pt-[32px] ">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12">
        <div className="mx-4 grid gap-4 sm:grid-cols-12">
          <div className="-z-10 col-span-12 sm:col-span-3 ">
            <div className="sticky top-28 text-center sm:text-left sm:before:mx-0">
              <h3 className="select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                <span className=" h-fit w-fit  bg-bottom bg-no-repeat">
                  Our
                </span>{" "}
                History
              </h3>
              
            </div>
          </div>
          <div className="relative -z-10 col-span-12 space-y-6 sm:col-span-9 lg:ml-8 lg:px-4">
            <div className="relative col-span-12 space-y-12 before:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 lg:px-4">
              <p className="text-justify text-[14px] leading-normal md:text-[16px] lg:leading-loose">
                Trawell India  is a firm founded by Dharani Gunasekaran
                in 2019. It was founded with a vision to take people close to
                History, Temples, Culture, Nature and make them feel the bliss
                of our country. It was accomplished this for 2+ years and
                remains committed to sharing, adapting, and evolving into the
                most dedicated and impactful professional it can be.
                <br />
                <br /> Trawell India has worked on many projects in India and is
                always ready to take on new challenges. Trawell India believes
                that there is no limit to what one can achieve if they are
                willing to put in hard work and determination.
                <br />
          
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
