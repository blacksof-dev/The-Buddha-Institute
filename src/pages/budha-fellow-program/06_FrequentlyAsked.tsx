import React, { useState } from "react";
import Faq from "../donate-us/06_faq";
import { faq_application } from "statics/BFP_Faq_Application";
import { faq_program } from "statics/BFP_program_Faq";

const FrequentlyAsked = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleApplication = () => {
    setCurrentIndex(1);
  };

  const handleProgram = () => {
    setCurrentIndex(2);
  };

  return (
    <>
      <section className="blade-bottom-padding-xl blade-top-padding-sm bg-[#FAF9F5]">
        <div className="w-container-xl gsap-fade-in">
          <h1 className="text-[#07393C] lg:ml-0 ml-2 font-lato-bold pb-4 ">
            Frequently asked questions
          </h1>
          <div className="sm:block hidden border t border-[#84848480]"></div>
          <div className="lg:flex gap-6 lg:gap-x-12">
            <div className="lg:w-[20%] w-[32%] lg:ml-0 ml-2 lg:max-w-[30%]  blade-top-padding-sm lg:block flex lg:flex-col py-6">
              <h4
                className={`text-[#07393C] cursor-pointer text-nowrap py-4 mr-2 px-3 font-lato-regular ${
                  currentIndex === 1 ? "bg-pear" : "bg-transparent"
                }`}
                onClick={handleApplication}
              >
                Application-related
              </h4>
              <h4
                className={`text-[#07393C] cursor-pointer py-4 mr-2 px-3 font-lato-regular ${
                  currentIndex === 2 ? "bg-pear" : "bg-transparent"
                }`}
                onClick={handleProgram}
              >
                Program
              </h4>
            </div>
            <div className="sm:block hidden border-r-2 border-[#84848480]"></div>
            <div className="lg:max-w-[70%] lg:mt-0 mt-2">
              {currentIndex === 1 ? (
                <Faq data={faq_application} />
              ) : (
                <Faq data={faq_program} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrequentlyAsked;
