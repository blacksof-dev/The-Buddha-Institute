import React from "react";

const Sector = () => {
  return (
    <section className="blade-top-margin-lg blade-bottom-padding-lg  px-4 sm:px-10 lg:px-0  ">
      <div className="gsap-fade-in">
        <h3 className="text-[#07393C] text-36 font-lato-bold pb-2 sm:ps-6 ">
       Sectors of Operation
        </h3>
        <hr className="border-1 border-[#84848480] w-full lg:w-[50%] " />
        <div className="md:block hidden w-full xl:w-[90%] ps-10">
          <img
            src="/BudhaFellowProgram/sectors.svg"
            alt="Sectors Img"
            className="w-full h-full"
             
          />
        </div>
        <div className="block md:hidden blade-top-margin-sm ">
          <div className="w-full">
            <img
              src="/BudhaFellowProgram/operation.svg"
              alt="Sector Touched Img"
              className="w-full h-full "
               
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sector;
