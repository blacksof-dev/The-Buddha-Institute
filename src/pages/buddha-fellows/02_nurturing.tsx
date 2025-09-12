import React, { useEffect, useRef, useState } from "react";
import HighlightHeading from "./highlightHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import CohortButton from "./cardsArray";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { Icon } from "organisms/iconCommonent";

type CardData = {
  cover: string;
  fullName: string;
  designation: string;
  linkedinLink: string;
  address: string;
  role: string;
};

export default function Nurturing() {
  type SectionType = "section1" | "section2" | "section3" | "section4";
  const [activeSection, setActiveSection] = useState<SectionType>("section4");
  const [fade, setFade] = useState(false);
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [apidata, setapidata] = useState<CardData[]>([]);
  const [isloading, setloading] = useState<boolean>(false);
  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const handleClick = (section: SectionType) => {
    if (section !== activeSection) {
      setFade(true);
      setTimeout(() => {
        setActiveSection(section);
        setFade(false); // Disable fade after the timeout
      }, 100); // Time for fade duration
    }
  };

  const fetchDetails = async (category: string) => {
    try {
      setloading(true);
      let response;
      if (category === "section1") {
        response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=cohort2023_25`
        );
        console.log(response);
      } else if (category === "section2") {
        response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=cohort2022_24`
        );
        console.log(response);
      } else if (category === "section3") {
        response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=cohort2018_20`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=cohort2024_26`
        );
        // console.log(response);
      }

      setapidata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setTimeout(() => setloading(false), 300);
    }
  };

  useEffect(() => {
    fetchDetails(activeSection);
  }, [activeSection]);

  return (
    <section className="gsap-fade-in blade-top-padding-sm blade-bottom-padding-sm">
      <div className="">
        <HighlightHeading
          heading="Nurturing empowerment,  "
          spanText="one Cohort at a time"
          className=""
          spanClassName="custom-span-class"
        />
        {/* <div className="border-b border-[#848484] sm:w-[82%] 2xl:ml-[8%] lg:ml-[5%] xl:ml-[6%] sm:ml-[1%] sm:mx-0 mx-[3%]"></div> */}
        <div className=" sm:blade-top-margin-sm blade-top-margin w-container-xl mb-6 blade-bottom-margin-sm  gap-2 flex flex-wrap sm:gap-9 xl:gap-10 2xl:gap-14">
          <CohortButton
            label="Cohort 2024-26"
            sectionId="section4"
            activeSection={activeSection}
            onClick={handleClick}
            className=""
          />
          <CohortButton
            label="Cohort 2023-25"
            sectionId="section1"
            activeSection={activeSection}
            onClick={handleClick}
            className=""
          />
          <CohortButton
            label="Cohort 2022-24"
            sectionId="section2"
            activeSection={activeSection}
            onClick={handleClick}
            className=""
          />
          <CohortButton
            label="Cohort 2018-20"
            sectionId="section3"
            activeSection={activeSection}
            onClick={handleClick}
            className=""
          />
        </div>
        {isloading ? (
          <div className=" w-full flex justify-center items-center  text-4xl   my-20">
            <span className="spin">
              <Icon icon={ImSpinner2}  />
            </span>
          </div>
        ) : (
          <div
            className={` p-4 transition-opacity  duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {activeSection === "section1" && (
              <div className="2xl:pl-[8%] sm:pl-[2%] xl:pl-[7%] ">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".FirstprevBtn",
                    nextEl: ".FirstnextBtn",
                  }}
                  pagination={{
                    el: ".swiper-progressbar-new",
                    type: "progressbar",
                    progressbarOppositeClass: "fill-progressbar",
                  }}
                  spaceBetween={16}
                  grabCursor
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  autoHeight={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.5 },
                    1280: { slidesPerView: 3.5 },
                    1536: { slidesPerView: 4.5 },
                  }}
                >
                  {apidata.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full  flex-col overflow-hidden gap-4  2xl:h-[500px] lg:h-[470px] h-[498px] bg-[#F3F3F3] ">
                        <div className="relative group overflow-hidden">
                          <img
                            src={`${
                              process.env.REACT_APP_LOCAL_URL
                            }/${card.cover.replace(/\\/g, "/")}`}
                            alt={card.fullName}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            
                          />
                        </div>

                        <h3 className="flex w-full  px-4 justify-between text-teal font-lato-bold">
                          {card.fullName}
                          {card.linkedinLink !== "" ? (
                            <a
                              href={card.linkedinLink || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${
                                card.linkedinLink
                                  ? "opacity-100"
                                  : "opacity-40 pointer-events-none"
                              }`}
                            >
                              <svg
                                className="h-10 w-10 cursor-pointer"
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.926894"
                                  y="1.25819"
                                  width="35.3833"
                                  height="35.3833"
                                  rx="17.6916"
                                  stroke="#1A8482"
                                  strokeWidth="0.680448"
                                />
                                <path
                                  d="M13.0318 15.1265C13.9938 15.1265 14.7737 14.3466 14.7737 13.3845C14.7737 12.4225 13.9938 11.6426 13.0318 11.6426C12.0697 11.6426 11.2898 12.4225 11.2898 13.3845C11.2898 14.3466 12.0697 15.1265 13.0318 15.1265Z"
                                  fill="#1A8482"
                                />
                                <path
                                  d="M16.4187 16.4464V26.1107H19.4194V21.3315C19.4194 20.0704 19.6566 18.8491 21.2203 18.8491C22.7624 18.8491 22.7815 20.2909 22.7815 21.4111V26.1115H25.7837V20.8116C25.7837 18.2082 25.2233 16.2075 22.1804 16.2075C20.7195 16.2075 19.7402 17.0092 19.3398 17.768H19.2992V16.4464H16.4187ZM11.5288 16.4464H14.5342V26.1107H11.5288V16.4464Z"
                                  fill="#1A8482"
                                />
                              </svg>
                            </a>
                          ) : (
                            <svg
                              className="h-10 w-10 cursor-pointer"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.926894"
                                y="1.25819"
                                width="35.3833"
                                height="35.3833"
                                rx="17.6916"
                                stroke="#1A8482"
                                strokeWidth="0.680448"
                              />
                              <path
                                d="M13.0318 15.1265C13.9938 15.1265 14.7737 14.3466 14.7737 13.3845C14.7737 12.4225 13.9938 11.6426 13.0318 11.6426C12.0697 11.6426 11.2898 12.4225 11.2898 13.3845C11.2898 14.3466 12.0697 15.1265 13.0318 15.1265Z"
                                fill="#1A8482"
                              />
                              <path
                                d="M16.4187 16.4464V26.1107H19.4194V21.3315C19.4194 20.0704 19.6566 18.8491 21.2203 18.8491C22.7624 18.8491 22.7815 20.2909 22.7815 21.4111V26.1115H25.7837V20.8116C25.7837 18.2082 25.2233 16.2075 22.1804 16.2075C20.7195 16.2075 19.7402 17.0092 19.3398 17.768H19.2992V16.4464H16.4187ZM11.5288 16.4464H14.5342V26.1107H11.5288V16.4464Z"
                                fill="#1A8482"
                              />
                            </svg>
                          )}
                        </h3>
                        <h6
                          className="text-black px-4  font-lato-bold"
                          dangerouslySetInnerHTML={{ __html: card.designation }}
                        ></h6>
                        <h6
                          className="text-black px-4  font-lato-regular pb-3"
                          dangerouslySetInnerHTML={{ __html: card.address }}
                        ></h6>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                    <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                    <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
                      <button
                        className={`FirstprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                        className={`FirstnextBtn cursor-pointer xlg:w-16 w-10 ${
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
            )}
            {activeSection === "section2" && (
              <div className="2xl:pl-[8%] sm:pl-[4%]  blade-bottom-padding-lg">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".SecondprevBtn",
                    nextEl: ".SecondnextBtn",
                  }}
                  pagination={{
                    el: ".swiper-progressbar-new",
                    type: "progressbar",
                    progressbarOppositeClass: "fill-progressbar",
                  }}
                  grabCursor
                  spaceBetween={16}
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  autoHeight={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3.5 },
                    1536: { slidesPerView: 4.2 },
                  }}
                >
                  {apidata.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full flex-col overflow-hidden gap-4 2xl:h-[550px] lg:h-[510px] h-[490px] bg-[#F3F3F3] ">
                        <div className="relative group overflow-hidden">
                          <img
                            src={`${
                              process.env.REACT_APP_LOCAL_URL
                            }/${card.cover.replace(/\\/g, "/")}`}
                            alt={card.fullName}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              
                          />
                        </div>

                        <h3 className="flex w-full px-4 justify-between text-teal font-lato-bold">
                          {card.fullName}
                          <a
                            href={card.linkedinLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              card.linkedinLink
                                ? "opacity-100"
                                : "opacity-40 pointer-events-none"
                            }`}
                          >
                            <svg
                              className="h-10 w-10 cursor-pointer"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.926894"
                                y="1.25819"
                                width="35.3833"
                                height="35.3833"
                                rx="17.6916"
                                stroke="#1A8482"
                                strokeWidth="0.680448"
                              />
                              <path
                                d="M13.0318 15.1265C13.9938 15.1265 14.7737 14.3466 14.7737 13.3845C14.7737 12.4225 13.9938 11.6426 13.0318 11.6426C12.0697 11.6426 11.2898 12.4225 11.2898 13.3845C11.2898 14.3466 12.0697 15.1265 13.0318 15.1265Z"
                                fill="#1A8482"
                              />
                              <path
                                d="M16.4187 16.4464V26.1107H19.4194V21.3315C19.4194 20.0704 19.6566 18.8491 21.2203 18.8491C22.7624 18.8491 22.7815 20.2909 22.7815 21.4111V26.1115H25.7837V20.8116C25.7837 18.2082 25.2233 16.2075 22.1804 16.2075C20.7195 16.2075 19.7402 17.0092 19.3398 17.768H19.2992V16.4464H16.4187ZM11.5288 16.4464H14.5342V26.1107H11.5288V16.4464Z"
                                fill="#1A8482"
                              />
                            </svg>
                          </a>
                        </h3>
                        <h6
                          className="text-black px-4  font-lato-bold"
                          dangerouslySetInnerHTML={{ __html: card.designation }}
                        ></h6>
                        <h6
                          className="text-black px-4  font-lato-regular pb-3"
                          dangerouslySetInnerHTML={{ __html: card.address }}
                        ></h6>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                    <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                    <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
                      <button
                        className={`SecondprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                        className={`SecondnextBtn cursor-pointer xlg:w-16 w-10 ${
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
            )}
            {activeSection === "section3" && (
              <div className="2xl:pl-[8%] sm:pl-[4%]  blade-bottom-padding-lg">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".ThirdprevBtn",
                    nextEl: ".ThirdnextBtn",
                  }}
                  pagination={{
                    el: ".swiper-progressbar-new",
                    type: "progressbar",
                    progressbarOppositeClass: "fill-progressbar",
                  }}
                  grabCursor
                  spaceBetween={16}
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  autoHeight={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3.5 },
                    1536: { slidesPerView: 4.2 },
                  }}
                >
                  {apidata.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full flex-col overflow-hidden gap-4  2xl:h-[550px] h-[470px] bg-[#F3F3F3] ">
                        <div className="relative group overflow-hidden ">
                          <img
                            src={`${
                              process.env.REACT_APP_LOCAL_URL
                            }/${card.cover.replace(/\\/g, "/")}`}
                            alt={card.fullName}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              
                          />
                        </div>

                        <h3 className="flex w-full px-4 justify-between text-teal font-lato-bold">
                          {card.fullName}
                          <a
                            href={card.linkedinLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              card.linkedinLink
                                ? "opacity-100"
                                : "opacity-40 pointer-events-none"
                            }`}
                          >
                            <svg
                              className="h-10 w-10 cursor-pointer"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.926894"
                                y="1.25819"
                                width="35.3833"
                                height="35.3833"
                                rx="17.6916"
                                stroke="#1A8482"
                                strokeWidth="0.680448"
                              />
                              <path
                                d="M13.0318 15.1265C13.9938 15.1265 14.7737 14.3466 14.7737 13.3845C14.7737 12.4225 13.9938 11.6426 13.0318 11.6426C12.0697 11.6426 11.2898 12.4225 11.2898 13.3845C11.2898 14.3466 12.0697 15.1265 13.0318 15.1265Z"
                                fill="#1A8482"
                              />
                              <path
                                d="M16.4187 16.4464V26.1107H19.4194V21.3315C19.4194 20.0704 19.6566 18.8491 21.2203 18.8491C22.7624 18.8491 22.7815 20.2909 22.7815 21.4111V26.1115H25.7837V20.8116C25.7837 18.2082 25.2233 16.2075 22.1804 16.2075C20.7195 16.2075 19.7402 17.0092 19.3398 17.768H19.2992V16.4464H16.4187ZM11.5288 16.4464H14.5342V26.1107H11.5288V16.4464Z"
                                fill="#1A8482"
                              />
                            </svg>
                          </a>
                        </h3>
                        <h6
                          className="text-black px-4  font-lato-bold"
                          dangerouslySetInnerHTML={{ __html: card.designation }}
                        ></h6>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                    <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                    <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
                      <button
                        className={`ThirdprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                        className={`ThirdnextBtn cursor-pointer xlg:w-16 w-10 ${
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
            )}
            {activeSection === "section4" && (
              <div className="2xl:pl-[8%] sm:pl-[2%] xl:pl-[7%] ">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".FirstprevBtn",
                    nextEl: ".FirstnextBtn",
                  }}
                  pagination={{
                    el: ".swiper-progressbar-new",
                    type: "progressbar",
                    progressbarOppositeClass: "fill-progressbar",
                  }}
                  spaceBetween={16}
                  grabCursor
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  autoHeight={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.5 },
                    1280: { slidesPerView: 3.5 },
                    1536: { slidesPerView: 4.5 },
                  }}
                >
                  {apidata.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex w-full  flex-col overflow-hidden gap-4  2xl:h-[500px] lg:h-[470px] h-[498px] bg-[#F3F3F3] ">
                        <div className="relative group overflow-hidden">
                          <img
                            src={`${
                              process.env.REACT_APP_LOCAL_URL
                            }/${card.cover.replace(/\\/g, "/")}`}
                            alt={card.fullName}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                              
                          />
                        </div>

                        <h3 className="flex w-full  px-4 justify-between text-teal font-lato-bold">
                          {card.fullName}
                          <a
                            href={card.linkedinLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              card.linkedinLink
                                ? "opacity-100"
                                : "opacity-40 pointer-events-none"
                            }`}
                          >
                            <svg
                              className="h-10 w-10 cursor-pointer"
                              width="37"
                              height="37"
                              viewBox="0 0 37 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.926894"
                                y="1.25819"
                                width="35.3833"
                                height="35.3833"
                                rx="17.6916"
                                stroke="#1A8482"
                                strokeWidth="0.680448"
                              />
                              <path
                                d="M13.0318 15.1265C13.9938 15.1265 14.7737 14.3466 14.7737 13.3845C14.7737 12.4225 13.9938 11.6426 13.0318 11.6426C12.0697 11.6426 11.2898 12.4225 11.2898 13.3845C11.2898 14.3466 12.0697 15.1265 13.0318 15.1265Z"
                                fill="#1A8482"
                              />
                              <path
                                d="M16.4187 16.4464V26.1107H19.4194V21.3315C19.4194 20.0704 19.6566 18.8491 21.2203 18.8491C22.7624 18.8491 22.7815 20.2909 22.7815 21.4111V26.1115H25.7837V20.8116C25.7837 18.2082 25.2233 16.2075 22.1804 16.2075C20.7195 16.2075 19.7402 17.0092 19.3398 17.768H19.2992V16.4464H16.4187ZM11.5288 16.4464H14.5342V26.1107H11.5288V16.4464Z"
                                fill="#1A8482"
                              />
                            </svg>
                          </a>
                        </h3>
                        <h6
                          className="text-black px-4  font-lato-bold"
                          dangerouslySetInnerHTML={{ __html: card.designation }}
                        ></h6>
                        <h6
                          className="text-black px-4  font-lato-regular pb-3"
                          dangerouslySetInnerHTML={{ __html: card.address }}
                        ></h6>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                    <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                    <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
                      <button
                        className={`FirstprevBtn cursor-pointer xlg:w-16 w-10 ${
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
                        className={`FirstnextBtn cursor-pointer xlg:w-16 w-10 ${
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
            )}
          </div>
        )}
      </div>
    </section>
  );
}
