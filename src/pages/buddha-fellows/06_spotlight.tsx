import React, { useEffect, useRef, useState } from "react";
import HighlightHeading from "./highlightHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import spotfirst from "../../assets/BF/spotlight-section/spotlight-1.jpg";
import spotThird from "../../assets/BF/spotlight-section/spotlight-3.jpg";
import spotFourth from "../../assets/BF/spotlight-section/spotlight-4.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Spotlight() {
  return (
    <>
      <section className="blade-top-padding gsap-fade-in  bg-[#FAF9F5]">
        <div className="">
          <div className="">
            {" "}
            <HighlightHeading heading="The Buddha Fellows in highlight " />
          </div>
        </div>
      </section>
      <div className=" blade-bottom-padding bg-[#FAF9F5]">
        <VideoSection />
      </div>
    </>
  );
}

const VideoSection = () => {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [video, setVideo] = useState<string>("");
  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };
  const [isModelOpen, setisModelOpen] = useState(false);
  const openModel = (link: string) => {
    setVideo(link);
    setisModelOpen(true);
  };
  const closeModel = () => {
    setisModelOpen(false);
  };
  useEffect(() => {
    if (isModelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModelOpen]);
  return (
    <>
      <section className="">
        <div className="w-container-xl">
          <Swiper
            onSwiper={(swiper: any) => (swiperInstance.current = swiper)}
            className=" relative"
            modules={[Navigation, Pagination]}
            //modules={[Navigation]}
            initialSlide={0}
            speed={2000}
            // autoplay={{
            //   delay: 0,
            //   disableOnInteraction: true,
            // }}

            // loop
            grabCursor
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            spaceBetween={20}
            navigation={{
              prevEl: ".spotlightprevBtn",
              nextEl: ".spotlightnextBtn",
            }}
            pagination={{
              el: ".swiper-progressbar-new",
              type: "progressbar",
              progressbarOppositeClass: "fill-progressbar",
            }}
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
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
          >
            {videoData.map((data, index) => (
              <SwiperSlide key={index} className="">
                <div className="mt-4 sm:mt-12 relative">
                  <div className=" absolute z-[1] bottom-0">
                    <h3 className="sm:block hidden m-auto mb-4 font-lato-regular text-white  sm:w-[80%] text-center">
                      {data.titile}
                    </h3>
                    <h5 className="sm:hidden block  m-auto mb-4 font-lato-regular text-white px-2 sm:w-[80%] text-center leading-5">
                      {data.titile}
                    </h5>
                  </div>
                  <div className="relative overflow-hidden ">
                    <img
                      src={data.thumbnail}
                      className="object-left 2xl:min-h-[600px] xl:min-h-[500px] lg:min-h-[450px] min-h-[300px] w-full bg-[#22574D] object-cover md:object-center"
                      alt="thumbnail Img"
                        
                    />
                    <img
                      src="/BudhaFellowProgram/video-icon.png"
                      className="absolute right-[50%] bottom-[50%]   translate-x-1/2 translate-y-1/2  2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                      onClick={() => {
                        openModel(data.videLink);
                      }}
                      alt="Video Icon"
                       
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
              <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:w-[250px] !absolute !bottom-5 !left-0 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>
              <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
                <button
                  className={`spotlightprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                  className={`spotlightnextBtn cursor-pointer xlg:w-16 w-10 ${
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
        </div>{" "}
      </section>
      {isModelOpen && (
        <div className="fixed top- inset-0  bg-teal z-[9999] flex items-center justify-center h-screen ">
          <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
            <div className="w-container">
              <button
                onClick={closeModel}
                className="absolute top-4 xl:top-[5%] 2xl:right-[10%] xl:right-[5%] sm:right-4 right-4  text-black  font-bold bg-[#8DC63F] rounded-full"
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" sm:w-[55px] sm:h-[55px] "
                >
                  <circle
                    cx="31.6743"
                    cy="31.5591"
                    r="31.5591"
                    fill="#8DC63F"
                  />
                  <path
                    d="M20.7722 20.6592L42.5726 42.4596"
                    stroke="black"
                    stroke-width="3.64314"
                    stroke-linecap="round"
                  />
                  <path
                    d="M42.573 20.6592L20.7726 42.4596"
                    stroke="black"
                    stroke-width="3.64314"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div className="2xl:h-[600px] xl:h-[470px] lg:h-[370px] h-[350px]">
                {video.includes("youtube.com") || video.includes("youtu.be") ? (
                  <iframe
                    src={video}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full object-cover"
                    title="buddha mentors video"
                  ></iframe>
                ) : (
                  <video
                    src={video}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const videoData = [
  {
    videLink:
      "https://www.youtube.com/embed/mjEe9rnLDEw?autoplay=1&loop=1&si=9x67CZKUwDWA6qgS",
    thumbnail: spotfirst,
    titile:
      "Buddha Fellow Suhas Ramegowda shares how nature inspired him to create equitable empowerment in his powerful TEDx",
  },

  {
    videLink:
      "https://www.youtube.com/embed/-ijs2TTcUy8?autoplay=1&loop=1&si=6USdV5sx7Yyo714b",
    thumbnail: spotThird,
    titile:
      "Mahesh Londhe, Founder, AgroZee Organics, explains how his millet-based products are helping combat anemia among India’s rural and urban populations at the Falling Walls pitches competition",
  },
  {
    videLink: "/videos/maanKiBaat.mp4",
    thumbnail: spotFourth,
    titile: "Hon’ble PM Shri Narendra Modi praising Buddha Fellow K V Rama Subba Reddy’s work in the millets segment",
  },
];
