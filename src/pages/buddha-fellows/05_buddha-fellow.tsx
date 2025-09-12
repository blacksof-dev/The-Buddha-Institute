import React, { useState } from "react";

import HeadingImage from "molecules/heading-image";
import Button from "atoms/button";
import ApplicationProcess from "molecules/applicationPopup";



export default function BecomeFellow() {
   const [showPopup, setshowPopup] = useState(false);
  return (
    <>
      <section className="blade-top-padding-sm  blade-bottom-padding bg-[#FAF9F5]">
        <div className="w-container-xl gsap-fade-in">
          <div className="sm:block hidden">
            {" "}
            <HeadingImage
              heading="Become a Buddha Fellow"
              imageSrc="/EngageWithUs/enroll.jpg"
              imageAlt="working ladies"
              hrColor="gray-400"
            />
          </div>
          <div className="sm:hidden block">
            {" "}
            <h1 className="font-lato-bold border-b border-[#84848480] border-opacity-50 pb-1">
              Become a Buddha Fellow
            </h1>
          </div>
          <div className="lg:flex justify-between blade-top-padding-sm ">
            <h4 className="font-lato-regular lg:max-w-[48%] 2xl:max-w-[47%] sm:max-w-[90%]">
              If you see opportunities for transformation in the adversities of
              rural India, and, if you are choosing grassroots over the urban
              entrepreneurial boom, we see a potential Development Entrepreneur
              in you — a Buddha Fellow.
            </h4>
            <h4 className="font-lato-regular lg:max-w-[44%] sm:max-w-[90%] lg:mt-0 mt-4">
              Becoming a Buddha Fellow involves a thorough and meticulous
              process guided by experts, with both macro and micro analyses of
              the social impact-first, for-profit enterprises. 
            </h4>
          </div>
          <div className="sm:blade-top-margin-sm blade-top-margin 2xl:w-[13%] sm:w-[20%] w-[50%]">
            <div onClick={() => setshowPopup(true)} className="cursor-pointer">
              <Button text={"Enroll now"} />
            </div>
              {showPopup && <ApplicationProcess onclose={() => setshowPopup(false)} />}
          </div>
        </div>
      </section>
    </>
  );
}
