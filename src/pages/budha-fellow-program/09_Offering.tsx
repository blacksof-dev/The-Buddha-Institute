import React from "react";

import mobileOfferings from "../../assets/BFP/mobileOfferings.png"
import offerings from "../../assets/BFP/offering.png"

const Offering = React.memo(() => {
  return (
    <>
      <section className="  px-4 sm:px-10 lg:px-0 ">
        <div className="">
          <div className="gsap-fade-in">
            <h2 className="2xl:text-4xl sm:ps-5 text-[#07393C] font-lato-bold pb-2 ">
              The Buddha Fellowship Program offerings
            </h2>
            <hr className="border-1 border-[#84848480] lg:block hidden lg:w-[50%]" />

            <div className="md:pt-10   flex justify-center items-center">
              <div className="w-full xl:w-[60%]  h-full">
                <img src={offerings} className="w-full h-full md:block hidden"  ></img>
              </div>
               
            </div>

                <div className="w-full sm:w-[70%] mx-auto pt-5 h-[40%] ">
                <img src={mobileOfferings} className="w-full h-full md:hidden block"  ></img>
              </div>
            <div className=" gsap-fade-in pt-6">
              <h2 className="2xl:text-4xl sm:ps-5 text-[#07393C] font-lato-bold pb-4 ">
                Our goals by 2030
              </h2>
               <hr className="border-1 border-[#84848480] w-full lg:w-[50%] " />
              <div className="blade-top-padding-sm sm:flex 2xl:gap-40 xl:gap-20   sm:mt-0  sm:px-2">
                <GoalsCard
                  imgsrc="/BudhaFellowProgram/goal-new-1.svg"
                  title="Create 100,000 jobs"
                />
                <GoalsCard
                  imgsrc="/BudhaFellowProgram/goal-new-2.svg"
                  title="Uplift 25 mn poor"
                />
                <GoalsCard
                  imgsrc="/BudhaFellowProgram/goal-new-3.svg"
                  title="Add $ 1 bn to the rural economy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Offering;

export const GoalsCard = ({
  title,
  imgsrc,
}: {
  title: string;
  imgsrc: string;
}) => {
  return (
    <>
      
    <div className="flex flex-row items-center  gap-4 xl:gap-10 ps-[2%] flex-wrap md:py-0 py-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-sm bg-darkGreen">
          <img src={imgsrc || ""} alt="Offering Image" />
      </div>
      <div className="">
        <h4 className="text-[#1D1D1D] font-lato-bold sm:truncate">{title}</h4>
      </div>
    </div>
    </>
  );
};
