import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "statics/BFP_Faq_Application";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
const Synergy = () => {
  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding-lg  bg-[#FAF9F5]">
        <div className="xl:pl-[7%] 2xl:pl-[8.5%] lg:pl-[3%] lg:mx-0 sm:mx-6 mx-3 gsap-fade-in">
          <h1 className="font-lato-bold text-[#07393C] leading-[120%] pb-2">
            A synergy of inclusion, involvement and inspiration
          </h1>
          <hr className="border-b border-[#84848480]" />
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-20 py-6 lg:py-10">
            <div className="w-full lg:w-[50%]">
              <h4 className="text-[#22574D] font-lato-bold ">
                “What business entrepreneurs are to the economy; social
                entrepreneurs are to social change. They are driven, creative
                individuals who question the status quo, exploit new
                opportunities, refuse to give up, and remake the world for the
                better.”
                <br />
                <br />
                <span className="text-black/80 ">— David Bornstein, Author</span>
              </h4>

              <h4 className="text-black/80 font-lato-regular py-6">
                Buddha Fellowship, our flagship program, aims to stimulate
                economic growth in rural India by nurturing Development
                Entrepreneurs or Buddha Fellows. These Development Entrepreneurs
                treat rural India as centers of value addition and help in
                poverty alleviation. They do this by directly employing them and
                by engaging them in their enterprise value chain as suppliers.
              </h4>
            </div>
            <div className="relative  overflow-x-auto w-full lg:w-[50%] h-fit">
              <div className="absolute  inset-0 bg-gradient-to-r from-[#FAF9F5] via-transparent to-transparent w-[20%] z-40 sm:block hidden"></div>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10} // Adjust spacing between slides
                grabCursor
                loop={true}
                slideToClickedSlide
                speed={2000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1.1,
                    spaceBetween: 50,
                  },
                  640: {
                    slidesPerView: 1.3,
                    spaceBetween: 50,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 35,
                  },
                  1280: {
                    slidesPerView: 1.1,
                    spaceBetween: 35,
                  },
                  1536: {
                    slidesPerView: 1.2,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.synergyFirstArray.map((slide, i) => (
                  <SwiperSlide key={slide.id}>
                    <div className="relative flex justify-center">
                      <div className="w-full h-full ">
                        <img
                          src={slide.image}
                          className="object-contain object-bottom w-full h-full"
                          alt={`First Carousel Slide ${i}`}
                           
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      
        <div className="xl:pr-[7%] 2xl:pr-[8.5%] lg:pr-[3%] lg:mx-0 sm:mx-6 mx-3">
          <div className="flex  flex-col lg:flex-row-reverse gap-3 lg:gap-20 py-6 lg:py-10">
            <div className="relative overflow-x-auto w-full lg:w-[50%] lg:order-1 order-2 h-fit">
              <div className="absolute  bg-gradient-to-l h-full right-0 from-[#FAF9F5] via-transparent to-transparent  w-[20%] z-40"></div>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={10} // Adjust spacing between slides
                  grabCursor
                  slideToClickedSlide
                  loop={true}
                  speed={2000}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }}
                  breakpoints={{
                    500: {
                      slidesPerView: 1.1,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 1.3,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 1.5,
                      spaceBetween: 35,
                    },
                    1280: {
                      slidesPerView: 1.1,
                      spaceBetween: 35,
                    },
                    1536: {
                      slidesPerView: 1.2,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {data.synergySecondArray.map((slide, i) => (
                    <SwiperSlide key={slide.id}>
                      <div className="relative flex justify-center">
                        <div className="w-full h-full">
                          <img
                            src={slide.image}
                            className="object-contain object-bottom w-full h-full"
                            alt={`First Carousel Slide ${i}`}
                             
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
             <div className="  w-full lg:w-[50%]">
              <h4 className="text-black/80  font-lato-regular ">
              Buddha Fellowship Program nurtures early-stage, for-profit enterprises through a 24-month intervention focused on 3Ms — mentoring, management skills, and money. This support enables them to evolve from micro to scaled-up enterprises, with annual revenue of INR 10 crore+, ready to raise money in the capital markets based on their profitability and impact.
                <br />
              
              
              </h4>

                <h4 className="text-black/80  font-lato-regular py-6">
                 By 2030, our goal is to cumulatively nurture 1000 Development Entrepreneurs, who in turn will generate 100,000 jobs and add $ 1 billion annually to the rural economy.
                </h4>
            </div>
            
          </div>
           
        </div>
      </section>
    </>
  );
};

export default Synergy;
