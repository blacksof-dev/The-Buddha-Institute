import React, {  useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Button from "atoms/button";

import kalyani from "assets/home/caseStudies/kalyani.jpg";
import sahrudaya from "assets/home/caseStudies/sahrudaya.png";
import suhas from "assets/home/caseStudies/suhas.jpg";
import doll from "assets/home/caseStudies/doll.png";
import flower from "assets/home/fellow/flower.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import ApplicationProcess from "./applicationPopup";

const CaseStudyHome = ({
  title,
  buttonText,
  data,
  paragraphs,
}: {
  title?: string;
  buttonText?: string;
  data: any;
  paragraphs?: string[];
}) => {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [selectedCard, setslectedCard] = useState<any>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isModelOpen, setisModelOpen] = useState(false);
  const [showPopup, setshowPopup] = useState(false);

  const OpenPopUp = (card: any) => {
    setslectedCard(card);
    setisModelOpen(true);
  };

  const ClosePopUp = () => {
    setisModelOpen(false);
  };

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  return (
    <div>
      <section className=" blade-top-padding-lg blade-bottom-padding-lg ">
        <div className="sm:w-container w-container-sm  ">
          <h1 className="text-[#07393C] font-lato-bold border-b pb-2  border-[#84848480] ">
            {title}
          </h1>
          <div className="lg:mt-8 mt-4 grid gap-5">
            {paragraphs?.map((item: string, ind: number) => {
              const keyVal = ind + " " + "paragraphs;";
              return (
                <h4
                  key={keyVal}
                  className=" font-lato-regular w-full md:w-[85%] "
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              );
            })}
          </div>
          <div className="my-6 sm:my-7  w-full   flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div>
              <div
                onClick={() => setshowPopup(true)}
                className="cursor-pointer"
              >
                <Button text={`${buttonText}`} classes="px-8" />
              </div>
              {showPopup && (
                <ApplicationProcess onclose={() => setshowPopup(false)} />
              )}
            </div>
            <div>
              <Link to="/resources/#trackingCaseStudy">
                <Button text="See more" classes="px-8 " />
              </Link>
            </div>
          </div>
          <div className=" swipercontainer  ">
          
            <Swiper
              onSwiper={(swiper: SwiperType) =>
                (swiperInstance.current = swiper)
              }
              className="relative"
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
                el: ".swiper-pagination-bullet",
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
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },
                1536: {
                  slidesPerView: 1.4,
                  spaceBetween: 40,
                },
              }}
            >
              {data.map((card: any, index: number) => (
                <SwiperSlide key={card.id} className=" !h-auto ">
                  <div className="mx-auto grid lg:grid-cols-2 h-full w-full flex-col sm:mx-0 ">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="h-full sm:block  hidden w-full object-cover object-center sm:mt-0 "
                    />
                    <img
                      src={card.mobileimg}
                      alt={card.alt}
                      className="h-full sm:hidden block w-full object-cover object-center sm:mt-0"
                    />
                    <div
                      className={`${card.cardColor}  h-auto sm:h-auto md:h-full relative  blade-bottom-padding`}
                    >
                      <div className=" flex flex-col just pl-5 h-full md:pl-10 gap-4 md:justify-between pt-4 md:blade-top-padding  z-10 relative ">
                        <div>
                          <h4 className="font-lato-regular !font-medium">
                            {card.id}
                          </h4>
                          <div className="">
                            <div className="h-14">
                              <img
                                src={card.logo}
                                alt={card.title}
                                className="h-full object-contain"
                              />
                            </div>
                            <h4 className="font-lato-bold mt-2">
                              {card.title}
                            </h4>
                            <h6 className="font-lato-bold sm:text-sm mt-1">
                              {card.subTitle}
                            </h6>
                          </div>

                          <h4 className="font-lato-regular !font-medium w-[85%] mt-3">
                            {card.desc}
                          </h4>
                        </div>
                        <h4
                          className="cursor-pointer  w-fit font-lato-bold hover:underline"
                          onClick={() => OpenPopUp(selectedCardData[index])}
                        >
                          Read more
                        </h4>
                      </div>
                      <img
                        className="mix-blend-luminosity absolute bottom-0 right-0"
                        src={flower}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
                <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

                <div className="  custom-navigation mt-9 flex gap-2 sm:gap-2">
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
        </div>
      </section>{" "}
      <section>
        {" "}
        {isModelOpen && selectedCard && (
          <div
            className={`fixed inset-0  ${selectedCard.cardColor}  z-[99999] h-screen overflow-y-auto `}
          >
            <div
              className={`relative   ${selectedCard.cardColor} p- rounded-lg  w-full h-full  `}
            >
              <div className="overflow-y-auto max-h-screen">
                <button
                  onClick={ClosePopUp}
                  className="absolute top-4 xl:top-[5%] 2xl:right-[10%] z-50 xl:right-[5%] sm:right-4 right-4  text-black D font-bold bg-[#FFF] rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="64"
                    // height="64"
                    viewBox="0 0 64 64"
                    className="h-12 w-12"
                    fill="none"
                  >
                    <circle
                      cx="31.7075"
                      cy="31.5591"
                      r="31.5591"
                      fill="white"
                    />
                    <path
                      d="M20.8047 20.6592L42.6051 42.4596"
                      stroke="black"
                      stroke-width="3.64314"
                      stroke-linecap="round"
                    />
                    <path
                      d="M42.6055 20.6592L20.8051 42.4596"
                      stroke="black"
                      stroke-width="3.64314"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <div className="mx-auto grid lg:grid-cols-2 h-full w-full flex-col sm:mx-0 ">
                  <div className=" flex items-center justify-center p-4">
                    <img
                      src={selectedCard.img}
                      alt={selectedCard.alt}
                      className="h-auto  sm:block xl:w-[70%] 2xl::w-[60%] hidden object-cover object-center sm:mt-0"
                      
                    />
                    <img
                      src={selectedCard.mobileimg}
                      alt={selectedCard.alt}
                      className="h-full  sm:hidden block w-full object-cover object-center sm:mt-0"
                       
                    />
                  </div>
                  <div
                    className={`${selectedCard.cardColor}   relative  blade-bottom-padding`}
                  >
                    <div className="flex 2xl:w-[70%] w-[90%] flex-col just pl-5 h-full sm:pl-10 justify-between blade-top-padding-sm gap-6 z-10 relative ">
                      <div>
                        <h4 className="font-lato-regular !font-medium">
                          {selectedCard.id}
                        </h4>
                        <div className="">
                          <div className="h-14">
                            <img
                              src={selectedCard.logo}
                              alt={selectedCard.title}
                              className=" h-full object-contain"
                               
                            />
                          </div>
                          <h4 className="font-lato-bold mt-2">
                            {selectedCard.title}
                          </h4>
                          <h6 className="font-lato-bold sm:text-sm mt-1">
                            {selectedCard.subTitle}
                          </h6>
                        </div>
                        <h4
                          className="font-lato-regular !font-medium w-full mt-3"
                          dangerouslySetInnerHTML={{
                            __html: selectedCard.desc,
                          }}
                        />

                        <h5 className="mt-6 font-lato-bold">
                          {selectedCard.Socialimpact}
                        </h5>
                        <h5 className="font-lato-regular">
                          {" "}
                          <ul>
                            {selectedCard.Sociallist.map(
                              (item: any, index: any) => (
                                <li
                                  key={index}
                                  className="  list-disc list-inside"
                                >
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </h5>
                        <h5 className="mt-2 font-lato-bold">
                          {selectedCard.businessjourney}
                        </h5>
                        <h5 className="font-lato-regular">
                          {" "}
                          <ul>
                            {selectedCard.businessjourneylist.map(
                              (item: any, index: any) => (
                                <li
                                  key={index}
                                  className=" first:mt-0 list-disc list-inside"
                                >
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                        </h5>
                     
                      </div>
                     
                    </div>
                  </div>
                  <img
                    className="mix-blend-luminosity  absolute bottom-0 right-0"
                    src={flower}
                    alt="Flower Img"
                     
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>{" "}
    </div>
  );
};

const selectedCardData = [
  {
    id: "",
    img: kalyani,
    mobileimg: kalyani,
    alt: "A woman skillfully weaving fabric.",
    logo: sahrudaya,
    title: "Kalyani Chavali",
    subTitle: "Founder, Sahrudaya",
    desc: "Mentored by Shobha Agarwal, Kalyani worked on Sahrudaya’s USP to create a clear brand identity in a vastly competitive segment. With the right guidance and peer-to-peer learning at The Buddha Institute, she has evolved into a confident leader who continues to nurture women empowerment.",
    cardColor: "bg-[#D6DF20]",
    Socialimpact: "Two-year social impact",
    Sociallist: [
      "Employment: 12 women, up from 2 women.",
      "Women empowerment: 4 sole breadwinners in the team.",
      "Annual income: INR 72K/woman.",
      "Capacity building: 160+ women trained.",
    ],
    businessjourney: "Two-year business progress",
    businessjourneylist: [
      "Product: Traditional Indian sweets and snacks.",
      "Major areas of focus: Process standardisation, branding and packaging, and developing sales channels.",
      "Turnover growth: INR 24 lakhs (~USD 28,078.39) in 2025, up from a modest INR 2 lakhs (~USD 2,339) in 2022.",
      "Market presence: Acquired 3000+ customers by introducing a focused online sales strategy and a subscription model.",
      "Growth support: Received a grant of INR 10 lakhs (~USD 11,699) from The Buddha Institute.",
      "Won grants of  INR 20 lakhs (~USD ​​23,398).",
    ],
  },
  {
    id: "",
    img: suhas,
    mobileimg: suhas,
    alt: "A group of women peeling custard apples together.",
    logo: doll,
    title: "Suhas and Sunita Ramegowda",
    subTitle: "Founder, The Good Doll",
    desc: "During the Fellowship, Suhas refined the product-market fit and shifted to decentralised production to focus on the gifting market. Together, Suhas and Sunita created a thriving gifting brand of handcrafted, traditional dolls and toys, empowering women from India’s underprivileged communities towards dignified and independent living.",
    cardColor: "bg-[#87BD3C]",
    Socialimpact: "Two-year social impact",
    Sociallist: [
      "Employment: 21 rural and tribal women employed, with most working from home.",
      "Income: INR 7,000 (~USD 82) to INR 20,000 (~USD 234) per month.",
      "Empowerment: 80% of women achieved financial independence, 100% of their children attend school, and 50% have health insurance.",
      "Capacity building: Ongoing training, leadership development, and child-friendly workspaces are provided.",
    ],
    businessjourney: "Two-year business progress",
    businessjourneylist: [
      "Product: Sustainable handcrafted dolls and toys.",

      "Major areas of focus: Narrowing product offerings, identifying the best product-market fit, and go-to-market strategy.",

      "Annual revenue growth: INR 1.5 crores (~USD 175,489) up from INR 6.5 lakhs (~USD 7,605).",
      "Market presence: 50+ retail outlets, online marketplaces, and corporate partnerships.",
      "Raised INR 1.15 (USD) crores via grants and investment."
    ],
  },
  
];
export default CaseStudyHome;
