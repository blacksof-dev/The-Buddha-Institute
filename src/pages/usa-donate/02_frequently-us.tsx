import React from "react";
import Faq from "./faq-usa";
import { faqDonateUs } from "../../statics/donateUs";
export default function FrequentlyAskedUSA() {
  return (
    <>
      <section className="blade-bottom-padding-lg blade-top-padding bg-[#FAF9F5] ">
        <div className="w-container-xl ">
          <h1 className="text-[#07393C] lg:ml-0 ml-2 font-lato-bold  blade-bottom-padding-sm">
            Frequently asked questions
          </h1>
          <div className="sm:block hidden border t border-[#84848480]"></div>
          <div className="lg:flex gap-x-12 ">
            <div className="lg:w-[20%]  w-full lg:ml-0 ml-2 lg:max-w-[30%] md:max-w-[50%] blade-top-padding-sm">
              <h3 className=" text-[#07393C]   cursor-pointer transition-all duration-500 bg-pear py-4 mr-2 px-4 font-lato-regular">
                FAQs
              </h3>
            </div>
            <div className="sm:block hidden border-r-2 border-[#84848480]"></div>
            <div className="lg:max-w-[70%] lg:mt-0 mt-2 ">
              <Faq data={faqDonateUs} />
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
