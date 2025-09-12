import React from "react";
import Faq from "./faq";
import { faqDonateUs } from "../../statics/donateUs";
export default function FrequentlyAskedIndia() {
  return (
    <>
      <section className="blade-bottom-padding-lg blade-top-padding bg-[#FAF9F5] ">
        <div className="w-container-xl gsap-fade-in">
          <h1 className="text-[#07393C] lg:ml-0 ml-2 font-lato-bold  blade-bottom-padding-sm">
            Frequently asked questions
          </h1>
          <div className="sm:block hidden border t border-[#84848480]"></div>
          <div className="lg:flex gap-6 gap-x-12 ">
            <div className="blade-top-margin-sm sm:w-[20%] w-[50%] lg:ml-0 ml-3 sm:ml-2">
              <h3 className=" text-[#07393C] bg-pear sm:py-4 py-2 px-4 font-lato-regular cursor-pointer hover:bg-teal hover:text-white transition-all duration-500">
                FAQs
              </h3>
            </div>
            <div className="sm:block hidden border-r-2 border-[#84848480]"></div>
            <div className=" lg:mt-0 mt-2 ">
              <Faq data={faqDonateUs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
