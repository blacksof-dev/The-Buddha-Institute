import {  useEffect, useRef, useState } from "react";
import { IoMdReturnRight } from "react-icons/io";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "organisms/iconCommonent";
type Award = {
  cover: string;
  title: string;
  desc: string;
  year: string;
};

type AwardData = Record<string, Award>;

const AwardsSection = () => {
  const [stageDescription, setStageDescription] = useState<AwardData>({});
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  // Fetch Awards Data
  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/awards/show`
      );
      const awardData: AwardData = response.data.data.reduce(
        (acc: AwardData, award: Award) => {
          acc[award.title] = award;
          return acc;
        },
        {}
      );

      setStageDescription(awardData);

      // Auto-select the first item if available
      if (Object.keys(awardData).length > 0) {
        setSelectedSection(Object.keys(awardData)[0]);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  return (
    <section className="bg-[#FFFBEF] ">
      <div className="w-container-xl blade-top-padding-lg blade-bottom-padding-lg hidden lg:block">
        <h1 className="text-[#07393C] font-lato-bold pb-1 border-b border-[#84848480]">
          Earned recognition for The Buddha Institute
        </h1>

        <div className="flex flex-col lg:flex-row sm:gap-16 gap-7">
          {/* Left Section (Image + Details) */}
          <div className="w-full lg:w-[40%] h-auto mt-10">
            <div className="bg-[#8DC63F] w-full min-h-[30rem] pb-12 sticky top-2">
              <div className="p-2 xl:p-4 2xl:p-8">
                {stageDescription[selectedSection]?.cover && (
                  <img
                    src={`${process.env.REACT_APP_LOCAL_URL}/${stageDescription[
                      selectedSection
                    ].cover.replace(/\\/g, "/")}`}
                    alt={selectedSection}
                    
                  />
                )}
              </div>

              <div className="px-2 xl:px-4 2xl:px-9 pb-5">
                <h4 className="text-[#22574D] font-lato-bold py-2">
                  {stageDescription[selectedSection]?.year}
                </h4>
                <h3 className="text-white font-lato-bold w-[90%]">
                  {stageDescription[selectedSection]?.title}
                </h3>
                <h5
                  ref={lineRef}
                  className={`pb-4 lg:pb-0 font-lato-regular py-4 ${expanded ? "" : "line-clamp-3"
                    }`}
                >
                  {stageDescription[selectedSection]?.desc}
                </h5>

                {/* Read More Button */}
                {stageDescription[selectedSection]?.desc.split(" ").length >
                  30 && (
                    <div className="w-fit mt-2">
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="m-auto text-black hover:underline font-lato-regular"
                      >
                        {expanded ? "Show less" : "Read more..."}
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Right Section (Tabs) */}
          <div className="w-full lg:w-[60%]">
            <div className="pb-28 lg:border-l lg:border-[#84848480] lg:pt-24">
              {Object.keys(stageDescription).map((stage) => (
                <div
                  key={stage}
                  className="cursor-pointer"
                  onClick={() => setSelectedSection(stage)}
                >
                  <h3
                    className={`py-3 lg:px-4 lg:py-4 text-36 font-lato-bold ${selectedSection !== stage
                        ? "text-[#22574D] opacity-30"
                        : "text-[#22574D] opacity-100"
                      }`}
                  >
                    {selectedSection === stage ? (
                      <div className="flex flex-row gap-2">

                        <Icon icon={IoMdReturnRight} className="transition-transform duration-500 ease-in-out" />
                        {stage}
                      </div>
                    ) : (
                      stage
                    )}
                  </h3>
                  <h4 className="font-lato-bold text-[#8DC63F] pb-4 lg:px-4 lg:pb-4">
                    {stageDescription[stage].year}
                  </h4>
                  <div className="lg:border-b-2 lg:border-[#84848480]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className=" w-container-xl py-10 block lg:hidden">
        <div className="">
          <h1 className="text-[#07393C] font-lato-bold pb-1  border-b border-[#84848480]">
            Earned recognition for The Buddha Institute{" "}
          </h1>
        </div>
        <div className="flex h-full pt-10 ">
         
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".FirstprevBtn",
                nextEl: ".FirstnextBtn",
              }}
              pagination={{
                el: ".swiper-progressbar-new",
                type: "progressbar",
                progressbarOppositeClass: "fill-progressbar",
              }}
              spaceBetween={16}
              grabCursor
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              autoHeight={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.5 },
                1536: { slidesPerView: 4.5 },
              }}
            >
              {(
                Object.keys(stageDescription) as (keyof typeof stageDescription)[]
              ).map((stage, ind) => (
                <SwiperSlide key={ind} className="!min-h-[30rem]">
                  {" "}

                  <div key={stage} className="h-full">
                    <div className="bg-[#8DC63F] p-4 h-full ">
                      <div className="">
                        {stageDescription[stage].cover && (
                          <img
                            src={`${process.env.REACT_APP_LOCAL_URL
                              }/${stageDescription[stage].cover.replace(
                                /\\/g,
                                "/"
                              )}`}
                            alt={`${stage}`}
                            className="object-contain w-full h-full"
                          />
                        )}
                      </div>

                      <div className="py-5">
                        <h3 className="text-36 text-white font-lato-bold">
                          {stageDescription[stage].title}
                        </h3>
                        <h4 className="text-[#22574D] font-lato-bold py-2">
                          {stageDescription[stage].year}
                        </h4>
                        <h5 className="pb-4 lg:pb-0 font-lato-regular py-4">
                          {stageDescription[stage].desc}
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px]"></div>

                <div className="custom-navigation mt-3 flex gap-2 sm:gap-2">
                  <button
                    className={`FirstprevBtn cursor-pointer xlg:w-16 w-10 ${isFirstSlide ? "opacity-40" : ""
                      }`}
                    aria-label="Previous slide"
                  >
                    <img
                      src="/BudhaFellowProgram/BFP_PreviousBtn.png"
                      alt="Previous Button"
                      className="object-contain w-full h-full"
                    />
                  </button>
                  <button
                    className={`FirstnextBtn cursor-pointer xlg:w-16 w-10 ${isLastSlide ? "opacity-40" : ""
                      }`}
                    aria-label="Next slide"
                  >
                    <img
                      src="/BudhaFellowProgram/BFP_NextBtn.png"
                      alt="Next Button"
                      className="object-contain w-full h-full"
                    />
                  </button>
                </div>
              </div>
            </Swiper>
        


        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
