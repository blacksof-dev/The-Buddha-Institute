import React, {  useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Button from "atoms/borderedButton";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import flower from "../../assets/home/fellow/flower.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMakrDown } from "hooks/markDown";
import axios from "axios";
import ApplicationProcess from "molecules/applicationPopup";

 

type Markdown = {
  cover: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  markdown: string;
};

const Tracking = () => {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [apidata, setapidata] = useState<Markdown[]>([]);
 
  const { setCaseStudy } = useMakrDown();
  const [showPopup, setshowPopup] = useState(false);
  const handleCaseStudy = (data: string) => {
    setCaseStudy(data);
   
  };
   const location = useLocation();

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const fetchdetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/caseStudy/show`
      );
     
      setapidata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, []);



  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <section className="blade-top-padding blade-bottom-padding-sm sm:blade-top-padding " id="trackingCaseStudy">
      <div className="w-container-xl ">
        <h1 className="text-[#07393C] font-lato-bold">
          Tracing the journey to transformative change
        </h1>
        <hr className="border-b border-[#84848480] mt-1" />
        <div className="py-4 sm:py-8 ">
          <div className="py-4 sm:py-4 ">
            <div
              onClick={() => setshowPopup(true)}
              className="cursor-pointer group flex px-4 py-3 gap-4 bg-pear hover:bg-teal border-2
      border-transparent hover:text-white w-fit transition-all
      duration-300 hover:border-teal text-base 2xl:text-2xl font-lato-bold
      sm:ms-auto"
            >
              Become a Buddha Fellow
              <svg
                className="h-7 2xl:h-9 group-hover:fill-white fill-black transition-all duration-300"
                width="8"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z" />
              </svg>
            </div>

            {showPopup && (
              <ApplicationProcess onclose={() => setshowPopup(false)} />
            )}
          </div>
        </div>
        {showPopup && (
          <ApplicationProcess onclose={() => setshowPopup(false)} />
        )}
      </div>

      <div className=" swipercontaine">
     
        <Swiper
          onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
          className="!lg:pb-5 sm:pl-[8%]  lg:!pl-[5.4%] 2xl:!pl-[8%]  !pl-3 !pr-3 xlg:!mt-14: !pb-10  relative"
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
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
          }}
        >
          {apidata.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto grid lg:grid-cols-2   h-[45rem] w-full flex-col sm:mx-0 sm:h-[60rem]  md:h-[30rem] xlg:h-[34rem]">
                <img
                  src={`${process.env.REACT_APP_LOCAL_URL}/${card.cover.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={card.title}
                  
                  className="h-full block w-full object-cover object-center sm:mt-0 relative left-[1px]"
                />

                <div
                  className={`${
                    index % 2 === 0 ? "bg-[#D6DF20]" : "bg-[#39B54A]"
                  } relative sm:pb-6 `}
                >
                  <div className="flex flex-col pl-5  sm:pl-10 justify-center sm:blade-top-padding gap-2 sm:gap-5  z-10 relative ">
                    <div>
                      <div className="">
                        <img
                          src={`${
                            process.env.REACT_APP_LOCAL_URL
                          }/${card.logo.replace(/\\/g, "/")}`}
                          alt={card.title}
                          
                        />
                      </div>
                      <h4 className="font-lato-bold ">{card.title}</h4>
                      <h6 className="font-lato-bold sm:text-[14.311px] ">
                        {card.subtitle}
                      </h6>
                    </div>

                    <h4 className="font-lato-regular !font-medium w-[90%] sm:w-[70%] 2xl:w-[50%] ">
                      {card.description}
                    </h4>
                    <div className="mt-2 sm:mt-0">
                      <Link
                        onClick={() => handleCaseStudy(card.markdown)}
                        to="/case-study"
                      >
                        <Button text={"Read case study"} />
                      </Link>
                    </div>
                  </div>
                  <img
                    className="mix-blend-luminosity absolute bottom-0 right-0 sm:w-full w-[50%] lg:w-[80%]  filter grayscale-[0.9]"
                    src={flower}
                    alt="flower"
                    
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" relative flex justify-end pt-6 md:pt-0 lg:!pr-[10%] xl:!pr-[10%] ">
            <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

            <div className="  custom-navigation  sm:mt-9 flex gap-2 sm:gap-2">
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
       
      </div>
    </section>
  );
};


export default Tracking;
