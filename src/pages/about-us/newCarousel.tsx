import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LinkedinIcon from "../../assets/about/LinkedinIcon.png";

export default function NewCarousel({
  cardData,
}: {
  cardData: Array<{
    id: number;
    img: string;
    title: string;
    desig: string;
    Link: string;
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
    <div className="py-8">
      <Swiper
        modules={[Pagination, Navigation]}
        className=""
        spaceBetween={20}
        grabCursor
        onSlideChange={handleSlideChange}
        slideToClickedSlide
        slidesPerView={1.1}
        // onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".brochursPrevBtn",
          nextEl: ".brochursNextBtn",
        }}
        pagination={{
          el: ".swiper-progressbar-new",
          type: "progressbar",
          // progressbarOppositeClass: "fill-progressbar",
        }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.2,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3.2,
            spaceBetween: 30,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
             <a href={card.Link} target="_blank"> 
             <div className=" mx-auto flex h-[33rem] w-full flex-col  bg-[#1A8482] sm:mx-0 md:h-[32rem] xlg:h-[36rem]">
              <img
                src={card.img}
                alt={card.title}
                className="h-full max-h-[60%] w-full object-cover sm:mt-0"
              />

              <div className="flex flex-col justify-between h-auto flex-1 p-5">
                <h4 className=" line-clamp-1 flex justify-between text-white font-lato-light w-4/5 sm:text-left ">
                  {card.title}
                </h4>
                <div className=" text-[16px] text-white font-lato-regular ">
                  <a href={card.Link} target="_blank">
                    <div className="   sm:text-left flex  items-center gap-2">
                      <h6 className="font-lato-bold">Read more</h6>
                      <img src="/Home/resources/arrow.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            </a>
          </SwiperSlide>
        ))}
        <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%] mt-5  sm:mt-0 px-3 ms:px-0 ">
          <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px]"></div>

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
  );
}
