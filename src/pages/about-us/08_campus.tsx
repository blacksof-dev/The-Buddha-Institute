import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import campusImg1 from "../../assets/about/campusImg1.png";
import campusImg2 from "../../assets/about/campusImg2.png";
import campusImg3 from "../../assets/about/campusImg3.png";
import campusImg4 from "../../assets/about/campusImg4.png";

import campusImg from "../../assets/about/campusImg.png";



import FriendsCard from "./friendCards";
const Campus = () => {
  const swiperInstance = useRef<SwiperCore | null>(null);

  const cardData = [
    {
      id: 1,
      img: campusImg1,
      title:
        "Ground breaking ceremony of The Buddha Institute campus at Raikheda, Rajasthan",
      alt: "A woman skillfully weaving fabric.",
    },
    {
      id: 2,
      img: campusImg2,
      title:
        "A Buddha Fellow planting a sapling at the sprawling Buddha Institute campus",
      alt: "A group of women peeling custard apples together.",
    },
    {
      id: 3,
      img: campusImg3,
      title:
        "The initial concept drawing of the envisaged Buddha Institute campus",
      alt: "A diverse group of women in vibrant saris stands proudly in front of a building, symbolizing empowerment and unity.",
    },
    {
      id: 4,
      img: campusImg4,
      title: "An architect's model for The Buddha Institute campus building",
      alt: "Two women sit on the floor, focused on creating intricate blue crochet patterns with their hands.",
    },
    {
      id: 5,
      img: campusImg,
      title: "The Buddha Institute campus at Raikheda, Rajasthan",
      alt: "Two women sit on the floor, focused on creating intricate blue crochet patterns with their hands.",
    },
  ];

  return (
    <section className="bg-[#FFFBEF]">
      <div className=" gsap-fade-in sm:w-container w-container-sm blade-top-padding-lg blade-bottom-padding-lg ">
        <div className=" md:flex items-end justify-between border-b pb3 border-[#84848480]">
          <h1 className="pb-3 font-lato-bold text-[#07393C]">
            Campus — Our center for development entrepreneurship
          </h1>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
            className="!lg:pb-5 !mt-6 !pb-3  xlg:!mt-14 2xl:!pb-10"
            modules={[Autoplay]}
            initialSlide={0}
            speed={5000}
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
            {cardData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className=" relative mx-auto flex h-[25rem] w-full flex-col gap-3 sm:mx-0 md:h-[30rem] xlg:h-[34rem]">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="h-full w-full object-cover object-center sm:mt-0"
                  />
                  <div className="absolute  bottom-10 px-4 w-full">
                    <h4 className=" text-white font-lato-regular !font-semibold text-center w-full">
                      {card.title}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h5 className="font-lato-regular w-full  py-2 lg:py-6">
          The Buddha Institute campus is a four-hectare space in Raikheda,
          Rajasthan. The space is envisaged as a venue for conducting quarterly
          Buddha Entrepreneurship Clinics (BECs), ongoing support and growth
          planning sessions for Buddha Fellows, an annual Mini MBA program to
          impart business and management skills, and a space for the community
          to learn from demos, and hands-on engagement with experts and
          entrepreneurs. The campus will have facilities dedicated to teaching
          and learning, community engagement, administration and management, and
          overnight accommodation facilities for Fellows, Mentors, and experts.
        </h5>

        <div className="blade-top-padding-lg">
          <h1 className="font-lato-bold text-[#07393C] border-b border-[#848484]">
            The Buddha Institute USA
          </h1>
          <div className="w-full">
            <h5 className="font-lato-regular blade-top-padding-sm">
              The Buddha Institute USA supports the vision, mission and goals of
              The Buddha Institute and the Buddha Fellowship Program. It is
              organized as a tax-exempt organization under Internal Revenue Code
              Section 501(c)(3) of the IRS in the USA.
            </h5>
          </div>  
          <div>
               <FriendsCard /> 
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Campus;
