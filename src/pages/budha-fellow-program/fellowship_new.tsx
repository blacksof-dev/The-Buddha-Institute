import React, { useEffect, useState } from "react";
import voiceSubCom1 from "assets/Impact/voiceSubCom1.png";
import voiceSubCom2 from "assets/Impact/voiceSubCom2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

type testimonialContent = {
  logo:string;
  title:string;
  desc:string;
}
const VoiceSubComp = React.memo(() => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [apidata,setapidata] = useState<testimonialContent []>([]);

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const FetchAllDEtails = async()=>{
    try
    {
       const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/testimonialContent/show`)
       setapidata(response.data.message);
    }
    catch(error:any){
      console.log(error.message);
    }
  }
  useEffect(()=>{
    FetchAllDEtails();
  },[])
  return (
    <>
      <section className="blade-top-padding-sm blade-bottom-padding-sm  md:w-container-xl">
        <Swiper
          modules={[Pagination, Navigation]}
           className="md:!pl-[0%] sm:!pl-[2%] !pl-[3%]"
          spaceBetween={10}
          grabCursor
          slideToClickedSlide
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
          <div className="!h-auto flex ">
            {apidata.map((slide, index) => {
              return (
                <SwiperSlide key={index} className=" !h-auto">
                  <div
                    className={`bg-teal  p-4   lg:h-[47rem]  h-full sm:h-[36rem]`}
                  >
                    <div>
                      <img src={`${process.env.REACT_APP_LOCAL_URL}/${slide.logo.replace(
                        /\\/g,
                        "/"
                      )}`} alt={slide.title} className=""   />

                     
                    </div>
                    <div>
                      <h5 className="py-3 text-pear font-lato-bold">
                        {slide.title}
                      </h5>
                      <h6
                        className={`  font-lato-regular text-white h-full`}
                        dangerouslySetInnerHTML={{ __html: slide.desc || "" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>

          <div className="relative flex justify-end   lg:!pr-[10%] xl:!pr-[10%] mt-5  sm:mt-0 px-3 ms:px-0 ">
            <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md  lg:max-w-[350px] 2xl:max-w-[500px]"></div>

            <div className="custom-navigation sm:mt-9 flex gap-2 sm:gap-2 mr-5 ">
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
      </section>
    </>
  );
});

export default VoiceSubComp;

