import HighlightHeading from "./highlightHeading";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import Firstconfidence from "../../assets/BF/beaming-confidence/confidence-1.jpg";
import Secondconfidence from "../../assets/BF/beaming-confidence/confidence-2.jpg";
import Thirdconfidence from "../../assets/BF/beaming-confidence/confidence-3.jpg";
import Fourthconfidence from "../../assets/BF/beaming-confidence/confidence-4.jpg";
import Fifthconfidence from "../../assets/BF/beaming-confidence/confidence-5.jpg";
import Sixthconfidence from "../../assets/BF/beaming-confidence/confidence-6.jpg";

export default function BeamingConfidence() {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  return (
    <>
      <section className="blade-top-padding-sm gsap-fade-in blade-bottom-padding  bg-[#FAF9F5]">
        <div className="">
          <div>
            {" "}
            <HighlightHeading heading="High-spirits, beaming confidence" />
          </div>
          {/* <div className="border-b border-[#848484] sm:w-[82%] 2xl:w-[83.5%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%] mt-2"></div> */}
          <div className="overflow-x-auto blade-top-padding  w-container-xl">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              initialSlide={0}
              spaceBetween={10}
              grabCursor
              onSlideChange={handleSlideChange}
              slideToClickedSlide
              speed={2000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".beamingprevBtn",
                nextEl: ".beamingnextBtn",
              }}
              pagination={{
                el: ".swiper-progressbar-new",
                type: "progressbar",
              }}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 45,
                },
                1536: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {data.productArray.map((slide, i) => (
                <SwiperSlide key={slide.id}>
                  <div className=" flex justify-center ">
                    <div className=" w-full h-full">
                      <img
                        src={slide.image}
                        className="object-cover w-full h-full"
                        alt={`Slide ${i}`}
                         
                      />
                    
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className=" relative flex justify-end ">
                <div className=" swiper-progressbar-new  swiper-pagination-progressbar swiper-pagination-buddha-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                <div className=" custom-navigation mt-9 flex gap-2 sm:gap-2">
                  <button
                    className={`beamingprevBtn cursor-pointer xlg:w-16 w-10 ${
                      isFirstSlide ? "opacity-40" : ""
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
                    className={`beamingnextBtn cursor-pointer xlg:w-16 w-10 ${
                      isLastSlide ? "opacity-40" : ""
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
    </>
  );
}

const data = {
  productArray: [
    {
      image: Firstconfidence,
      id: "1",
    },
    {
      image: Secondconfidence,
      id: "2",
    },
    {
      image: Thirdconfidence,
      id: "3",
    },
    {
      image: Fourthconfidence,
      id: "4",
    },
    {
      image: Fifthconfidence,
      id: "5",
    },
    {
      image: Sixthconfidence,
      id: "6",
    },
  ],
};
