import CommonCard from 'molecules/commonCardSlider'
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

type NewsArticle = {
  cover: string;
  title: string;
  tag: string;
  targetpdf: string;
  titlebrochures: string;
  targetLink?: string;
  description?: string;
};
const NewsMedia = () => {

  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

   const [apidata, setapidata] = useState<NewsArticle[]>([]);
  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const fetchDetails = async () => {
    try
    {
      const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/newsArticle/news`);
       setapidata(response.data.data);
    }
    catch(error:any){
      console.log(error)
    }
    
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <section className="">
        <div className="  w-container-xl blade-top-padding-sm   ">
          <h1 className="font-lato-bold  md:pb-0 text-[#07393C] ps-2 ">Stay in tune with the <br className='block sm:hidden' /> latest updates</h1>
          <hr className="border-b border-[#84848480] mt-1 " />
        </div>
        <div className=" blade-bottom-padding-sm blade-top-padding-sm">
          {/* <CommonCard data={fellowshipdata} section="resources" /> */}
          <Swiper
            modules={[Pagination, Navigation]}
            className=" sm:!pl-[2%] 2xl:!pl-[8%] lg:!pl-[6%] !pl-[3%]"
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
            { apidata.map((slide, index) => {
              return (
                <SwiperSlide key={index}>

                  <div className=" relative bg-teal  ">
                    <a
                      href={slide.targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <div className="relative h-[290px] md:h-[318px]">
                        <img
                          src={`${process.env.REACT_APP_LOCAL_URL}/${slide.cover.replace(/\\/g, "/")}`}
                          alt={slide.title}
                          className="object-cover w-full h-full "
                           
                        />
                        <img
                          src="/BudhaFellowProgram/FellowShipSvg.svg"
                          alt="Previous Button"
                          className=" object-contain  w-10 h-7 absolute -bottom-1 -right-[0.8px]"
                           
                        />
                      </div>
                    </a>

                    <div className=" blade-bottom-paddin h-[180px] lg:h-[235px] pb-8  flex flex-col justify-between  w-container ">
                      <div className="">
                        <h3 className="font-lato-regular  lg:line-clamp-3 mt-6 2xl:max-w-[90%] line-clamp-2 text-white">
                          {slide.title}
                        </h3>
                      </div>
                      <h5 className="">
                        <a
                          href={slide.targetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="flex items-center  justify-between px-2 leading-0 gap-2 mt-6  bg-transparent text-white  font-lato-bold ">
                            <span className='inline-block -mt-[3px]  leading-0'>
                              Read more
                            </span>
                            <div className="bg-pear  px-1 sm:px-2 text-black">
                              <svg
                                className=" w-2 h-4 sm:h-5 "
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

            <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%] mt-5  sm:mt-0 px-3 ms:px-0 ">
              <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px]"></div>

              <div className="custom-navigation sm:mt-9 flex gap-2 sm:gap-2 ">
                <button
                  className={`brochursPrevBtn cursor-pointer xlg:w-16 w-10 ${isFirstSlide ? "opacity-40" : ""
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
                  className={`brochursNextBtn cursor-pointer xlg:w-16 w-10 ${isLastSlide ? "opacity-40" : ""
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

      </section>

    </>
  )
}

export default NewsMedia
