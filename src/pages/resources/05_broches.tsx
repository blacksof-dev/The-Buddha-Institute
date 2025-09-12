import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import axios from "axios";
type Brochures = {
  cover: string;
  title: string;
  tag: string;
  targetpdf: string;
  titlebrochures: string;
  targetLink?: string;
  description?: string;
};
const Brouches = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [apidata, setapidata] = useState<Brochures[]>([]);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const fetchDetails = async () => {
    try
    {
      const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/brochure/allbroucher`);
      // console.log(response.data.data)
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
    <section className="blade-top-padding sm:blade-top-padding-sm w-container-xl ">
      <div className=" ">
        <div className=" flex justify-between items-center ">
          <h1 className="font-lato-bold  md:pb-0 text-[#07393C]">Brochures</h1>
          <div>
            <select className="bg-transparent text-darkCyan border-none outline-none p-2 px-3 font-lato-bold  ">
              <option className="">Eng</option>
              <option className="">Hin</option>
            </select>
          </div>
        </div>
        <hr className="border  border-[#84848480]" />
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        className=""
       
        grabCursor
        slideToClickedSlide
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation={{
          prevEl: ".bfpprevBtn",
          nextEl: ".bfpnextBtn",
        }}
       
        pagination={{
          el: ".swiper-progressbar-new",
          type: "progressbar",
         
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
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
            spaceBetween: 40,
            slidesPerView: 3,
          },
          1536: {
            spaceBetween: 40,
            slidesPerView: 3.4,
          },
        }}
      >
        { apidata.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="!h-full ">
              <div className="   h-auto ">
                <div className="h-full relative pt-4 lg:pt-14 ">
                  <div className={`reactive  grid border-t-2`}>
                    <a href={slide.targetpdf} target="_blank">
                      <div className="relative h-[290px] md:h-[318px] ">
                        <img
                          src={`${
                            process.env.REACT_APP_LOCAL_URL
                          }/${slide.cover.replace(/\\/g, "/")}`}
                          alt={slide.title}
                          className="object-cover  h-full w-full "
                           
                        />
                        <img
                          src="/BudhaFellowProgram/FellowShipSvg.svg"
                          alt="Previous Button"
                          className="object-contain  w-10 h-7 absolute -bottom-1 right-0"
                           
                        />
                      </div>
                    </a>

                    <div className=" bg-teal text-white w-container flex flex-col justify-betwee px-6 py-3 md:py-6 h-[12rem] sm:h-[15rem] w-full ">
                      <h3 className="text-white font-lato-bold mt-1">
                        <span className="font-lato-regular"></span>{" "}
                        {slide.titlebrochures}
                      </h3>
                      <h4 className="font-lato-regular mt-4">{slide.title}</h4>

                      <h5 className="mt-auto flex gap-3">
                        <a
                          href={
                            slide.targetLink
                              ? slide.targetLink
                              : `${
                                  process.env.REACT_APP_LOCAL_URL
                                }/${slide.targetpdf?.replace(/\\/g, "/")}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[18px]  text-white font-lato-bold flex gap-2"
                        >
                          Read more
                          
                        </a>
                        <img src="/Home/resources/arrow.png" alt="Arrow"   />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* {(section === "bfp" || section === "budhafellowSection") && ( */}
        <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%] mt-5">
          <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px]"></div>
          <div className="custom-navigation sm:mt-9 flex gap-2 sm:gap-2 ">
            <button
              className={`bfpprevBtn cursor-pointer xlg:w-16 w-10 ${
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
              className={`bfpnextBtn cursor-pointer xlg:w-16 w-10 ${
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
        {/* )} */}
      </Swiper>
    </section>
  );
};


export default Brouches;
