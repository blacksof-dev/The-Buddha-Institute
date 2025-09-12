import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, { useState } from "react";
import play from "assets/Impact/play.png";
import VoiceSubComp from "pages/impact/06_voiceSubcomp";
type DataProps = {
  data: {
    productArray: {
      id: string;
      image: string;
      title: string;
    }[];
  };
  section: string;
};

const CommonCard = ({ data, section }: DataProps) => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };
  return (
    <>
      <div className="w-container-xl    ">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          grabCursor
          slideToClickedSlide
          // speed={5000}
          navigation={{
            prevEl: ".brochursPrevBtn",
            nextEl: ".brochursNextBtn",
          }}
          pagination={{
            el: ".swiper-progressbar-new",
            type: "progressbar",
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 45,
            },
            1536: {
              slidesPerView: 2.3,
              spaceBetween: 30,
            },
          }}
        >
          {data.productArray.map((slide, i) => (
            <SwiperSlide key={slide.id}>
              <div className=" relative   w-full xl:h-[30rem]  md:h-[30rem]  h-[19rem]">
                <div className=" absolute  bg-gradient-to-t from-[#1F8482] via-transparent  to-transparent w-full bottom-0 h-96 "></div>
                <h3 className="hidden md:block absolute bottom-0 text-white text-center font-lato-regular  px-6   lg:px-14 pb-4 lg:pb-6">
                  {slide.title}
                </h3>
                <img
                  src={slide.image}
                  className=" object-cover w-full h-full"
                  alt={`Slide ${i}`}
                   
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%] mt-5  sm:mt-0 px-3 ms:px-0 ">
            <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md  lg:max-w-[350px] 2xl:max-w-[500px]"></div>

            <div className="custom-navigation sm:mt-9 flex gap-2 sm:gap-2 ">
              <button
                className={`brochursPrevBtn cursor-pointer xlg:w-16 w-10 ${
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
                className={`brochursNextBtn cursor-pointer xlg:w-16 w-10 ${
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
    </>
  );
};

export default CommonCard;
