import React from "react";
import Button from "atoms/button";
import FellowSwiper from "./fellowSwiper";

const Fellow = () => {
  return (
    <section className=" gsap-fade-in">
      <div className="md:flex items-end justify-between border-b pb3 border-[#84848480]">
        <h1 className="pb-3 font-lato-bold text-[#07393C]">
          Fellow highlights
        </h1>
      </div>
      <div className="blade-top-margin-sm font-lato-regular">
        <h4 className=" lg:w-[50rem]">
          Our Buddha Fellows stand up to many on-the-ground challenges with
          immense passion and resilience. The result? Increased dignity and
          labor force participation.
        </h4>
        <div className="mt-2 flex flex-col lg:flex-row lg:items-center justify-between">
          <h4 className="lg:w-1/2 xl:w-full">
            Explore some select cases of transformation being driven by our{" "}
            <b>Buddha Fellows..</b>
          </h4>
          <div className="mt-4 h-10 w-80 md:mt-6 md:h-14 md:w-96 flex-shrink-0">
            <Button text={"Become a Buddha Fellow"} />
          </div>
        </div>
      </div>

      <div>
        <FellowSwiper />
      </div>
    </section>
  );
};

export default Fellow;
