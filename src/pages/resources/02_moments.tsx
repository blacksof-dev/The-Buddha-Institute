import React, {  useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import { Swiper as SwiperType } from "swiper";

import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image_01 from "../../assets/resources/sub-stories/01.jpg";
import image_02 from "../../assets/resources/sub-stories/02.jpg";
import image_03 from "../../assets/resources/sub-stories/03.jpg";
import image_04 from "../../assets/resources/sub-stories/04.jpg";
import image_05 from "../../assets/resources/sub-stories/05.jpg";
import image_06 from "../../assets/resources/sub-stories/06.jpg";


import axios from "axios";



const Moments = () => {
  return (
    <>
      <section>
        <div className="w-container-xl blade-top-padding blade-bottom-padding-sm">
          <div className="">
            <h1 className="font-lato-bold pb-2 md:pb-0 text-[#07393C]">
              From moments to memories, from stories to glories
            </h1>
            <hr className="border border-[#84848480] " />
          </div>
        
          <VideoSection />
        
          <div className="overflow-x-auto blade-top-padding  xl:pt-20 ">
          
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              grabCursor
              slideToClickedSlide
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 1.5,
                  spaceBetween: 50,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
                1280: {
                  slidesPerView: 2,
                  spaceBetween: 45,
                },
                1536: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1804: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              {data.productArray.map((slide, i) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative  w-full xl:h-[30rem]  md:h-[30rem]  h-[16rem]">
                    <div className=" absolute  bg-gradient-to-t from-[#1F8482] via-transparent  to-transparent w-full bottom-0 h-96 "></div>
                    <h3 className=" hidden md:block absolute bottom-0 text-white text-center font-lato-regular  px-6 leading-7 2xl:leading-8  lg:px-14 pb-4 lg:pb-6">
                      {slide.gradienttext}
                    </h3>
                    <h4 className="block md:hidden absolute bottom-0 text-white text-center font-lato-regular  px-3   lg:px-14 pb-4 lg:pb-6">
                      {slide.gradienttext}
                    </h4>
                    <img
                      src={slide.image}
                      className=" object-cover w-full h-full"
                      alt={`Slide ${i}`}
                      
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
           
          </div>
        </div>
      </section>
    </>
  );
};
const data = {
  productArray: [
    {
      image: image_01,
      id: "1",
      gradienttext:
        "Buddha Fellow Ravi Gajraj interacting with a farmer in the field",
    },
    {
      image: image_02,
      id: "2",
      gradienttext:
        "Buddha Fellow Kaushal (2018-20 Cohort) at his groundnut processing unit",
    },
    {
      image: image_03,
      id: "3",
      gradienttext:
        "Buddha Fellow Kusum Tiwari (2023-25 Cohort) from Mura Collective orienting the community on handcraft-based livelihood opportunities",
    },
    {
      image: image_04,
      id: "4",
      gradienttext:
        "Buddha Fellow Shravan demonstrating his agri-tech tools to Hon. President Draupadi Murmu",
    },
    {
      image: image_05,
      id: "5",
      gradienttext:
        "Workers filling bags with vermi compost produce by Shashi Shikha (2023-25 Cohort) at Kikaboni",
    },
    {
      image: image_06,
      id: "6",
      gradienttext:
        "Extracting silk from worms at the workshop of Manash Kalita (Traditional North East) from 2023-25 Cohort",
    },
  ],
};
export default Moments;

const VideoSection = () => {
  type StoryGlory = {
    video: string;
    thumbnailImg: string;
    title: string;
  };

  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [video, setVideo] = useState<string>("");
  const [videoType, setVideoType] = useState<string>("");
  const [isModelOpen, setisModelOpen] = useState(false);
  const [apidata, setapidata] = useState<StoryGlory[]>([]);

  const fetchAllDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/storyglory/show`
      );
      // console.log(response.data.data);
      setapidata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
  
    fetchAllDetails();
  },[]);

 

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };
  const openModel = (link: string) => {
    setVideo(link);
    setisModelOpen(true);
  };
  const closeModel = () => {
    setisModelOpen(false);
  };
  return (
    <section className="">
      
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        className=" relative"
        modules={[Navigation, Pagination]}
        initialSlide={0}
        speed={2000}
       
        grabCursor
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        navigation={{
          prevEl: ".enterprisingprevBtn",
          nextEl: ".enterprisingnextBtn",
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
        {apidata.map((data, index) => (
          <SwiperSlide key={index} className="">
            <div className="mt-4 sm:mt-12 relative">
              <div className=" absolute z-[1] bottom-0">
                <h3 className="sm:block hidden m-auto mb-4 font-lato-regular text-white  sm:w-[80%] text-center">
                  {data.title}
                </h3>
                <h5 className="sm:hidden block  m-auto mb-4 font-lato-regular text-white px-2 sm:w-[80%] text-center leading-5">
                  {data.title}
                </h5>
              </div>
              <div className="relative overflow-hidden ">
                <img
                  src={`${process.env.REACT_APP_LOCAL_URL}/${data.thumbnailImg.replace(/\\/g,"/")}`}
                  className="2xl:min-h-[600px] xl:min-h-[500px] lg:min-h-[450px] min-h-[300px] w-full bg-[#22574D] object-cover object-center"
                  alt={data.title}
                />
                <img
                  src="/BudhaFellowProgram/video-icon.png"
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2   2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                  onClick={() => {
                    openModel(data.video);
                  }}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className=" relative flex justify-end items-center">
          <div className=" swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar mb-3 sm:w-[250px] !absolute !bottom-5 !left-0 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>
          <div className="  custom-navigation mt-4 mb-4 flex gap-2 sm:gap-2">
            <button
              className={`enterprisingprevBtn cursor-pointer xlg:w-16 w-10 ${
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
              className={`enterprisingnextBtn cursor-pointer xlg:w-16 w-10 ${
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
     
      <div>
        {" "}
        {isModelOpen && (
          <div className="fixed inset-0  bg-teal z-[99999] flex items-center justify-center">
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

                <div className="2xl:h-[600px] xl:h-[470px] lg:h-[370px] md:h-[350px] h-[300px]">
                  <iframe
                    width=""
                    height=""
                    src={video}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    // disablePictureInPicture
                    className="h-full w-full object-cover"
                    title="buddha mentors video"
                  ></iframe>
                </div>

              
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

