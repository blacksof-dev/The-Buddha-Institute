import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import kirti from "../../assets/about/Kirti.png";
import Arvind from "../../assets/about/Arvind.png";
import Ananya from "../../assets/about/Ananya.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

type CardData = {
  cover: string;
  fullName: string;
  linkedinLink: string;
  role: string;
  designation: string;
  address?: string;
  fulldesc?: string;
};

const FriendsCard = () => {
  const [apidata, setapidata] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const fetchALlDetails = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=Usboard`
      );

      setapidata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const openPopup = (card: CardData) => {
    // console.log("Popup clicked:", card);
    setSelectedCard(card);
  };

  const closePopup = () => {
    setIsExpanded(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    fetchALlDetails();
  }, []);

 

  return (
    <>
      <section className="gsap-fade-in">
        <div className=" text-[#07393C]">
          <div className="blade-top-margin md:blade-top-margin-sm font-lato-bold flex gap-10 md:gap-20">
            <h4 className="md:text-4xl cursor-pointer">The USA Board</h4>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 blade-top-margin-sm">
            {apidata.map((card, index) => {
              return (
                <div
                  key={index}
                  className="group mx-auto flex h-[33rem] w-full flex-col gap-3 border-8 border-[#F3F3F3] bg-[#FAF9F5] sm:mx-0 md:h-[29rem] xlg:h-[31rem]"
                >
                  <div className="h-full max-h-[70%] w-full relative ">
                    {card.cover && (
                      <img
                        src={`${
                          process.env.REACT_APP_LOCAL_URL
                        }/${card.cover.replace(/\\/g, "/")}`}
                        alt={card.fullName}
                        className=" h-full max-h[70%] w-full object-cover sm:mt-0"
                        onClick={() => openPopup(card)}
                      />
                    )}

                    <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:-rotate-45 bg-[#DEDEDE] px-[6px] py-2 rounded-full group-hover:bg-green">
                      <img
                        src="/aboutUs/programs/arrow.png"
                        alt="Arrow"
                        onClick={() => openPopup(card)}
                      />
                    </div>
                  </div>
                  <h3 className="flex justify-between pl-2 text-teal font-lato-bold sm:text-left">
                    {card.fullName}
                    <a href={card.linkedinLink} target="_blank">
                      <svg
                        className=" sm:mr-2"
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

                  <h6 className="pl-2 pb-4 bg-red500 w-4/5 text-[16px] text-gray-600 font-lato-bold sm:text-left">
                    {card.designation}
                  </h6>
                </div>
              );
            })}
          </div>

          {/* Swiper for small screens */}
          <div className="md:hidden py-8">
            <Swiper
              modules={[Autoplay]}
              initialSlide={0}
              speed={1000}
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
              loop
              grabCursor
              slidesPerView={1.1}
              spaceBetween={20}
              breakpoints={{
                480: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 2.5, spaceBetween: 30 },
              }}
            >
              {apidata.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className=" group mx-auto flex h-[27rem] w-full flex-col gap-3 border-4 border-[#F3F3F3] bg-[#FAF9F5] sm:mx-0 md:h-[24rem] xlg:h-[28rem]">
                    <div className="h-full max-h-[70%] w-full relative bg-[#C4C4C4]">
                      {card.cover && (
                        <img
                          src={`${
                            process.env.REACT_APP_LOCAL_URL
                          }/${card.cover.replace(/\\/g, "/")}`}
                          alt={card.fullName}
                          className="h-full max-h[70%] w-full object-cover sm:mt-0"
                          onClick={() => openPopup(card)}
                        />
                      )}
                      <div className="absolute top-3 right-3 bg-[#DEDEDE] px-[6px] py-2 rounded-full transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-green">
                        <img
                          src="/aboutUs/programs/arrow.png"
                          alt="Arrow"
                          className=""
                          onClick={() => openPopup(card)}
                        />
                      </div>
                    </div>
                    <h4 className="flex justify-between pl-2 text-teal font-lato-bold sm:text-left">
                      {card.fullName}
                      <svg
                        className="mr-3"
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
                    </h4>
                    <h6 className=" pl-2 text-[16px] text-gray-600 font-lato-bold sm:text-left">
                      {card.designation}
                    </h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Portal>
      {selectedCard && (
        <div className=" fixed inset-0 bg-teal z-[9999] lg:flex lg:items-center justify-center">
          <div className="relative overflow overflow-auto bg-teal sm:p-8 rounded-md  w-full h-full lg:flex justify-center items-center">
            <div className="w-container ">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-6 xl:top-[1%] 2xl:right-[10%] xl:right-[5%] sm:right-4 right-4  text-black  font-bold bg-[#8DC63F] rounded-full"
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
              <div className="md:flex justify-between  lg:mt-0 blade-top-margin-lg hidden">
                <h1 className="font-lato-bold  text-white ">
                  {selectedCard.fullName}
                </h1>
                <div className="mt-auto ">
                  <h4 className="text-white ps-4 font-lato-regular   border-l border-opacity-[28%]  border-white flex ">
                   The USA Board
                  </h4>
                </div>
              </div>
              <h1 className="font-lato-bold md:hidden block text-white blade-top-padding-xl">
               USA Board
               </h1>
              <div className="border-b-2 border-white border-opacity-[28%]  "></div>
              <div className="flex flex-col-reverse blade-bottom-margin-lg sm:mt-4 md:flex-row gap-6">
                <div className="flex-1 ">
                  <h1 className="font-lato-bold md:hidden block text-white pb-3">
                    {selectedCard.fullName}
                  </h1>
                  <h4 className=" font-lato-bold text-white lg:mt-8 ">
                    {selectedCard.designation}
                  </h4>

                  {selectedCard.fulldesc && (
                  <div className="pt-4">
                    {selectedCard.fulldesc.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <h4
                          key={index}
                          className="text-white "
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      )
                    ))}
                  </div>
                )}


                  <div className="flex justify-between blade-top-margin-sm">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="my-6 text-black px-3 py-2 bg-pear block lg:hidden font-lato-bold"
                      >
                      Read More
                      </button>
                      {selectedCard.linkedinLink !== "" ? (
                        <h4 className="">
                          <a
                            href={selectedCard.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-pear mt-4 hover:bg-teal d border-pear font-lato text-black hover:text-white px-4 py-2 font-lato-bold  transition-all duration-500"
                          >
                            in LinkedIn &rarr;
                          </a>
                        </h4>
                      ) : (
                        <h4 className="inline-block bg-pear mt-4 hover:bg-teal d border-pear font-lato text-black hover:text-white px-4 py-2 font-lato-bold  transition-all duration-500">
                          in LinkedIn &rarr;
                        </h4>
                      )}
                  </div>
                </div>

                <div className="bg-white 2xl:w-[35%] xl:w-[40%] lg:w-[30%] w-[60%] h-fit md:p-2 p-1 mt-4 ">
                  <img
                    src={`${
                      process.env.REACT_APP_LOCAL_URL
                    }/${selectedCard.cover.replace(/\\/g, "/")}`}
                    alt={selectedCard.fullName}
                    className="w-full h-full object-contain shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </Portal>
    </>
  );
};

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
};
export default FriendsCard;
