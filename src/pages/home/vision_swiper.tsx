import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import VisionMission1 from '../../assets/about/VisionMission1.jpeg'
import VisionMission2 from '../../assets/about/VisionMission2.jpeg'
import VisionMission3 from '../../assets/about/VisionMission3.png'
import VisionMission4 from '../../assets/about/VisionMission4.png'
import VisionMission5 from '../../assets/about/VisionMission5.png'
import VisionMission6 from '../../assets/about/VisionMission6.jpeg'

export default function VisionSwiper() {
  const swiperInstance = useRef<SwiperCore | null>(null);

  return (
    <div className=" ">
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        className="!lg:pb-5 !mt-6 !pb-3 xlg:!mt-12 2xl:!pb-10"
        modules={[Autoplay]}
        initialSlide={0}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        loop
        grabCursor
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
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
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
         {data.productArray.map((slide, i) => (
                        <SwiperSlide key={slide.id}>
        
                          <div className=" relative  w-full xl:h-[30rem]  md:h-[30rem]  h-[16rem]">
                            <div className=" absolute  bg-gradient-to-t from-[#1F8482] via-transparent  to-transparent w-full bottom-0 h-96 "></div>
                            <h3 className="hidden md:block absolute bottom-0 text-white text-center font-lato-regular  px-6 leading-7 2xl:leading-8  lg:px-14 pb-4 lg:pb-6">{slide.gradienttext}</h3>
                            <h4 className="block md:hidden absolute bottom-0 text-white text-center font-lato-regular  px-3   lg:px-14 pb-4 lg:pb-6">{slide.gradienttext}</h4>
                            <img
                              src={slide.image}
                              className=" object-cover w-full h-full "
                              alt={`Slide ${i}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
      </Swiper>
    </div>
  );
}

const data = {
  productArray: [
    {
      image: VisionMission1,
      id: "1",
      gradienttext: "Buddha Fellow Ravi Gajraj interacting with a farmer in the field"
    },
    {
      image: VisionMission2,
      id: "2",
      gradienttext: "Buddha Fellow Kaushal (2018-20 Cohort) at his groundnut processing unit"
    },
    {
      image: VisionMission3,
      id: "3",
      gradienttext: "Buddha Fellow Kusum Tiwari (2023-25 Cohort) from Mura Collective during a community orientation"
    },
    {
      image:  VisionMission4,
      id: "4",
      gradienttext: "Buddha Fellow Shravan demonstrating his agri-tech tools to Hon. President Draupadi Murmu"
    },
    {
      image: VisionMission5,
      id: "5",
      gradienttext: "Workers filling bags with vermi compost produce by Shashi Shikha (2023-25 Cohort) at Kikaboni"
    },
    {
      image: VisionMission6,
      id: "6",
      gradienttext: "Extracting silk from worms at the workshop of Manash Kalita (Traditional North East) from 2023-25 Cohort"
    },

  ],
};
