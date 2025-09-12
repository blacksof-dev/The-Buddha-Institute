// import { Button } from "@headlessui/react";
import CommonCard from "molecules/commonCardSlider";
import Button from "atoms/button";
import React, { useState } from "react";
import { IoMdReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";
const BudhaFellow = () => {
  const stageImages: Record<
    | "Outreach"
    | "Virtual Interview"
    | "In-person assessment"
    | "Due diligence field visit",
    { image: string; description: string }
  > = {
    Outreach: {
      image: "/BudhaFellowProgram/outreach.jpg",
      description:
        "We conduct an extensive outreach to identify and invite promising development enterprises, like you, to apply. The applications are shortlisted based on pre-defined criteria.",
    },
    "Virtual Interview": {
      image: "/BudhaFellowProgram/Interview.png",
      description:
        "The shortlisted candidates are interviewed online by a panel comprising members from the Buddha Institute team and Fellows from previous years.",
    },
    "In-person assessment": {
      image: "/BudhaFellowProgram/in-person.jpg",
      description:
        "Selected candidates are invited to an in-person interview with experienced jury members.",
    },
    "Due diligence field visit": {
      image: "/BudhaFellowProgram/dilligence.jpg",
      description:
        "The Buddha Institute team conducts due-diligence visits to the enterprise of the shortlisted candidate as a final step in the selection process.",
    },
  };
  const [selectedStage, setSelectedStage] =
    useState<keyof typeof stageImages>("Outreach");
  const [active, setactive] = useState(true);
  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding-lg " id="buddha-fellow-section" >
        <div className="w-container-xl gsap-fade-in">
          <div className="">
            <h1 className="text-[#07393C] font-lato-bold pb-3">
              The Process — Admitting you into Buddha Fellowship
            </h1>
            <div className="border border-[#84848480]"></div>
            <div className="flex pt-6 lg:pt-11 lg:flex-row blade-bottom-padding-sm">
              <div className="w-full lg:pb-10 lg:w-[50%]">
                <h4 className="text-black/80 font-lato-regular">
                  Being selected as a Buddha Fellow involves a thorough and
                  meticulous multi-stage process with experts assessing your
                  capability and potential as a Development Entrepreneur.
                </h4>
              </div>
            </div>

            <div className="lg:block hidden">
              <div className=" border-transparent  border-l-2 lg:border-[#84848480] ">
                <div>
                  <h1 className="text-36 text-darkGreen font-lato-bold  pb-2 lg:pb-3 lg:ps-5">
                    The four-stage admission process
                  </h1>
                  <div className=" border-b-2 border-transparent lg:border-[#84848480] w-[40%]"></div>
                </div>

                <div className="flex flex-col lg:flex-row 2xl:gap-36 lg:gap-24">
                  <div className=" lg:ps-10  2xl:w-[60%] lg:w-[50%] w-full">
                    {(
                      Object.keys(stageImages) as (keyof typeof stageImages)[]
                    ).map((stage) => (
                      <div
                        key={stage}
                        className=" py-2 lg:py-5 cursor-pointer"
                        onMouseEnter={() => setSelectedStage(stage)}
                      >
                        <h3
                          className={` font-lato-bold transition-all  duration-500 ease-in ${
                            selectedStage !== stage
                              ? "text-teal opacity-30"
                              : "text-teal opacity-100"
                          }`}
                        >
                          {stage}
                        </h3>

                        <h6
                          className={`py-4 font-lato-regular transition-all duration-500 ease-in ${
                            selectedStage !== stage
                              ? "text-black text-opacity-30"
                              : "text-black text-opacity-100"
                          }`}
                        >
                          {stageImages[stage].description}
                        </h6>
                        <div className="lg:block hidden border-b-2 border-[#84848480]"></div>
                      </div>
                    ))}
                  </div>
                  <div className=" xl:ps-20 2xl:w-[40%] lg:w-[50%] w-full">
                    <div className="py-5">
                      <img
                        src={stageImages[selectedStage].image}
                        alt={`${selectedStage} Image`}
                        className=""
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" justify-center md:justify-start flex ps-9">
                <div className="blade-top-margin-sm 2xl:w-[15%] sm:w-[20%] w-[50%] ">
                  <Link to="https://application.thebuddhainstitute.org/signin">
                    <Button text={"Enroll now"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#FFFFFF] lg:hidden block  ">
        <CommonCard data={fellowshipdata} section="budhafellowSection" />
      </section>
    </>
  );
};

const fellowshipdata = {
  productArray: [
    {
      image: "/BudhaFellowProgram/outreach-mobile.jpg",
      id: "1",
      title: "Outreach",
      desc1:
        "We conduct an extensive outreach to identify and invite promising development enterprises to apply. The applications are shortlisted based on certain pre-defined criteria.",
    },
    {
      image: "/BudhaFellowProgram/online-interview-mobile.jpg",
      id: "2",
      title: "Online interview",
      desc1:
        "The shortlisted candidates are interviewed online by a panel comprising members from the Buddha Institute team and Fellows from previous years.",
    },
    {
      image: "/BudhaFellowProgram/in-person-mobile.jpg",
      id: "3",
      title: "In-person assessment",
      desc1:
        "Selected candidates are invited to an in-person interview with experienced jury members.",
    },
    {
      image: "/BudhaFellowProgram/dilligence-mobile.jpg",
      id: "4",
      title: "Due diligence field visit",
      desc1:
        "The Buddha Institute team conducts due-diligence visits to the enterprise of the shortlisted candidate as a final step in the selection process.",
    },
  ],
};
export default BudhaFellow;
