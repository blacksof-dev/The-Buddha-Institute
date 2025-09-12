import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";


export default function ResourcesCarousel({
  cardData,
}: {
  cardData: Array<{
    cover: string;
    title: string;
    tag: string;
    targetpdf: string;
    titlebrochures: string;
    targetLink?: string;
    description?: string;
  }>;
}) {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };
  return (
    <div className="py-8 ">
      <Swiper
        className=" !pb-[4.5rem] !ps-[2rem]"
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        modules={[Navigation]}
      navigation={{
                prevEl: ".resourcepreviousBtn",
                nextEl: ".resourceNextBtn",
              }}
        grabCursor
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="">
            <a
              href={

                card.targetLink
                  ? card.targetLink
                  : `${process.env.REACT_APP_LOCAL_URL
                  }/${card.targetpdf?.replace(/\\/g, "/")}`
              }
              target="_blank"
            >
              <div className="pb-5  flex h-[42rem] w-full flex-col gap-2 bg-[#1A8482]  sm:mx-0 md:h-[38rem] xlg:h-[43rem]">
                <div className="h-full ">
                  <img
                    src={`${process.env.REACT_APP_LOCAL_URL
                      }/${card.cover.replace(/\\/g, "/")}`}
                    alt={card.title}
                    className="h-full max-h-[60%] w-full object-cover sm:mt-0"

                  />
                  <div className="px-3">
                    <h4 className="flex pt-3  text-white font-lato-bold  sm:text-left mt-2">
                      {card.titlebrochures}
                    </h4>
                    <h4 className=" flex  line-clamp-3  text-white font-lato-regular  sm:text-left  mt-2 ">
                      {card.title}
                    </h4>
                    <h6 className="flex  line-clamp-3  text-white font-lato-light  sm:text-left  mt-2">
                      {card.description}
                    </h6>
                  </div>
                </div>
                <div className="px-3">
                  <a
                    href={
                      card.targetLink
                        ? card.targetLink
                        : `${process.env.REACT_APP_LOCAL_URL
                        }/${card.targetpdf?.replace(/\\/g, "/")}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px]  pl-2 text-white font-lato-bold flex gap-2 self-start"
                  >
                    Read more
                    <div className="h-6 w-6 p-2 bg-pear my-auto">
                      <img src="/Home/resources/sliderArrow.svg" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
        <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
          <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

          <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
            <button
              className={`resourcepreviousBtn cursor-pointer xlg:w-16 w-10 ${isFirstSlide ? "opacity-40" : ""
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
              className={`resourceNextBtn cursor-pointer xlg:w-16 w-10 ${isLastSlide ? "opacity-40" : ""
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
  );
}
