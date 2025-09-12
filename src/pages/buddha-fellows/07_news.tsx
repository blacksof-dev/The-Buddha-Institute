import React, { useState } from "react";
import HighlightHeading from "./highlightHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

type DataProps = {
  data: {
    productArray: {
      id: string;
      image: string;
      title: string;
      link: string;
    }[];
  };
};

const News = ({ data }: DataProps) => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  return (
    <>
      <section className="blade-top-padding-sm gsap-fade-in blade-bottom-padding bg-[#FAF9F5]">
        <div className="">
          <div className="">
            <HighlightHeading
              heading="Our Buddha Fellows in the news"
              className="custom-heading-class sm:w-full w-[80%]"
            />
          </div>
          {/* <div className="border-b border-[#848484] sm:w-[82%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%]"></div> */}
          <div className=" relative pt-6 lg:pt-12 ">
            <Swiper
              modules={[Pagination, Navigation]}
              className=" sm:!pl-[2%] 2xl:!pl-[8%] lg:!pl-[6%] !pl-[3%]"
              spaceBetween={20}
              grabCursor
              slideToClickedSlide
              slidesPerView={1.1}
              onSlideChange={handleSlideChange}
              navigation={{
                prevEl: ".newsprevBtn",
                nextEl: ".newsnextBtn",
              }}
              pagination={{
                el: ".swiper-progressbar-new",
                type: "progressbar",
                // progressbarOppositeClass: "fill-progressbar",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                },
                1280: {
                  spaceBetween: 20,
                  slidesPerView: 3.1,
                },
                1536: {
                  spaceBetween: 30,
                  slidesPerView: 3.4,
                },
              }}
            >
              {data.productArray.map((slide, i) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <div className=" relative bg-teal 2xl:h-[600px] lg:h-[500px] min-h-[420px]  flex flex-col">
                      <div className="relative">
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover  w-full h-full"
                             
                          />
                          <img
                            src="/BudhaFellowProgram/FellowShipSvg.svg"
                            alt="Previous Button"
                            className="object-contain  w-10 h-7 absolute -bottom-1 -right-[0.8px]"
                             
                          />
                        </a>
                      </div>

                      <div className="  flex-1 flex flex-col justify-between w-container  py-6">
                        <div className="">
                          <h3 className="font-lato-light  lg:line-clamp-2  2xl:max-w-[90%] sm:max-w-full max-w-[85%] line-clamp-2 text-white">
                            {slide.title}
                          </h3>
                        </div>
                        <h5 className=" ">
                          <a
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="flex justify-between  gap-4 mt-6  bg-transparent text-white  font-lato-regular">
                              Read more
                              <div className="bg-pear px-2 text-black">
                                <svg
                                  className="h-7 "
                                  width="8"
                                  height="15"
                                  viewBox="0 0 9 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
                                    fill="black"
                                    className="transition-all duration-300 group-hover:fill-white"
                                  />
                                </svg>
                              </div>
                            </button>
                          </a>
                        </h5>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:w-[250px] !absolute !bottom-5 !left-0 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>
                <div className="  px-4 custom-navigation mt-9 flex gap-2 sm:gap-2">
                  <button
                    className={`newsprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                    className={`newsnextBtn cursor-pointer xlg:w-16 w-10 ${
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
};

export default News;
