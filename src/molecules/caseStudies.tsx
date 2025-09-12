import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Button from "atoms/button";
import ButtonSmall from "atoms/borderedButton";
import kalyani from "assets/home/caseStudies/kalyani.jpg";
import sahrudaya from "assets/home/caseStudies/sahrudaya.png";
import suhas from "assets/home/caseStudies/suhas.jpg";
import doll from "assets/home/caseStudies/doll.png";
import flower from "assets/home/fellow/flower.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CaseStudy = ({
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
      <section className="blade-top-padding-lg blade-bottom-padding-lg">
        <div className="w-container ">
          <h1 className="text-[#07393C] font-lato-bold border-b  border-[#00000015] ">
            {title}
          </h1>
          <div className="lg:mt-8 mt-4 grid gap-5">
            {paragraphs?.map((item: string, ind: number) => {
              const keyVal = ind + " " + "paragraphs;";
              return (
                <h4
                  key={keyVal}
                  className="font-lato-regular xl:max-w-[51%] lg:max-w-[60%] sm:max-w-[70%]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              );
            })}
          </div>
          <div className=" sm:mt-0 mt-6 w-fit md:ml-auto  ml-none">
            <Button text={`${buttonText}`} classes="px-8" />
          </div>
        </div>

        <div className=" swipercontainer ">
          <Swiper
            onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
            className="!lg:pb-5 sm:pl-[8%] !mt-6 lg:!pl-[5.4%] 2xl:!pl-[10.5%]  !pl-3 !pr-3 xlg:!mt-14 !pb-20  relative"
            modules={[Navigation, Pagination]}
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
                slidesPerView: 1.2,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 1.4,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((card: any) => (
              <SwiperSlide key={card.id} className="!h-auto ">
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
                    className={`${card.cardColor} relative  blade-bottom-padding`}
                  >
                    <div className="flex flex-col just pl-5 h-full sm:pl-10 justify-between blade-top-padding gap-6 z-10 relative ">
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
                          <h4 className="font-lato-bold mt-2">{card.title}</h4>
                          <h6 className="font-lato-bold sm:text-sm mt-1">
                            {card.subTitle}
                          </h6>
                        </div>

                        <h4 className="font-lato-regular !font-medium w-[85%] mt-3">
                          {card.desc}
                        </h4>
                      </div>
                      <div className="" onClick={() => OpenPopUp(card)}>
                        <ButtonSmall text={"Read more"} />
                      </div>
                    </div>
                    <img
                      className="mix-blend-luminosity  absolute bottom-0 right-0"
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
      </section>{" "}
      <section>
        {" "}
        {isModelOpen && selectedCard && (
          <div className="fixed inset-0  bg-teal z-50 flex items-center justify-center">
            <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
              <div className="w-container">
                <button
                  onClick={ClosePopUp}
                  className="absolute top-4 xl:top-[5%] 2xl:right-[10%] xl:right-[5%] sm:right-4 right-4  text-black D font-bold bg-[#FFF] rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
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
                  <img
                    src={selectedCard.img}
                    alt={selectedCard.alt}
                    className="h-full sm:block  hidden w-full object-cover object-center sm:mt-0 "
                  />
                  <img
                    src={selectedCard.mobileimg}
                    alt={selectedCard.alt}
                    className="h-full sm:hidden block w-full object-cover object-center sm:mt-0"
                  />
                  <div
                    className={`${selectedCard.cardColor} relative  blade-bottom-padding`}
                  >
                    <div className="flex flex-col just pl-5 h-full sm:pl-10 justify-between blade-top-padding gap-6 z-10 relative ">
                      <div>
                        <h4 className="font-lato-regular !font-medium">
                          {selectedCard.id}
                        </h4>
                        <div className="">
                          <div className="h-14">
                            <img
                              src={selectedCard.logo}
                              alt={selectedCard.title}
                              className="h-full object-contain"
                            />
                          </div>
                          <h4 className="font-lato-bold mt-2">
                            {selectedCard.title}
                          </h4>
                          <h6 className="font-lato-bold sm:text-sm mt-1">
                            {selectedCard.subTitle}
                          </h6>
                        </div>

                        <h4 className="font-lato-regular !font-medium w-[85%] mt-3">
                          {selectedCard.desc}
                        </h4>
                        <h5 className="mt-4 font-lato">
                          {selectedCard.Socialimpact}
                          <ul>
                            <li>{selectedCard.Sociallist}</li>
                          </ul>
                        </h5>
                        <h5 className="mt-4 font-lato">
                          {selectedCard.businessjourney}
                          <ul>
                            <li>{selectedCard.businessjourneylist}</li>
                          </ul>
                        </h5>
                      </div>
                      {/* <div className="" onClick={OpenPopUp}>
                        <ButtonSmall text={"Read more"} />
                      </div> */}
                    </div>
                    <img
                      className="mix-blend-luminosity  absolute bottom-0 right-0"
                      src={flower}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>{" "}
    </div>
  );
};

export default CaseStudy;
