import HighlightHeading from "./highlightHeading";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import { SustainedData } from "statics/buddhaFellows";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

type Product = {
  cover: string;
  title: string;
  city: string;
  createdBy: string;
  websiteLink: string;
};

export default function Sustained() {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [apidata, setapidata] = useState<Product[]>([]);
  const [visiblecount, setvisiblecount] = useState(3);
  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const fetchAllDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/products/show`
      );
      //  console.log(response.data.message);
      setapidata(response.data.message);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllDetails();
  }, []);

  return (
    <>
      <section className="  bg-[#FAF9F5] gsap-fade-in blade-top-padding blade-bottom-padding">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(250,249,245,0.2)] to-[rgba(255,255,255,1)] d"></div> */}
        <div className="">
          <div className="">
            {" "}
            <HighlightHeading heading="The products of sustained empowerment " />
          </div>
          <h4 className="w-container-xl font-lato-regular mt-8 text-black/80">
            Explore the promising products of impactful change crafted by the
            enterprises of our <br className="sm:hidden block" /> Buddha
            Fellows.
          </h4>
          <div className="  px-4 sm:px-0">
            <div className="w-container-xl blade-top-padding-sm grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3  gap-9  md:gap-20 lg:gap-16 xl:gap-8">
              {apidata.slice(0, visiblecount).map((card, index) => (
                <>
                  <div className=" bg-white ">
                    <div className="relative ">
                      <img
                        src={`${
                          process.env.REACT_APP_LOCAL_URL
                        }/${card.cover.replace(/\\/g, "/")}`}
                        alt={card.title}
                        className="h-full w-full object-cover sm:mt-0"
                      />
                      <img
                        src="/Buddha-Fellows/sustained.svg"
                        className="object-cover  w-10 h-7 absolute  -bottom-1 -right-[1px]"
                        alt="Substained Img"
                          
                      />
                    </div>
                    <div className="p-3">
                      <div>
                        <h4 className=" text-[#07393C] font-lato-bold ">
                          {card.title}
                        </h4>
                        <h5 className="font-lato-regular  text-gray-600">
                          {card.city}
                        </h5>
                      </div>

                      <div className="flex justify-between ">
                        <h5 className=" text-black font-lato-bold py-6">
                          {card.createdBy}
                        </h5>
                        <div className=" my-auto">
                          <a
                            href={card.websiteLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <button className=" flex items-center px-3 py-2  gap-4 text-nowrap  bg-pear border  group-hover:bg-darkGreen group-hover:text-white  text-base font-lato-bold transition-all duration-500">
                              Visit website
                              <svg
                                className="h- group-hover:fill-white fill-black"
                                width="8"
                                height="15"
                                viewBox="0 0 9 15"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
                                  fill="black"
                                  className=" group-hover:fill-white transition-all duration-500"
                                />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex group flex-row justify-center items-center w-full blade-top-padding-lg">
              {visiblecount < apidata.length && (
                <button
                  onClick={() => setvisiblecount(visiblecount + 3)}
                  className=" flex items-center px-5 py-3  gap-4 text-nowrap  bg-pear border  group-hover:bg-darkGreen group-hover:text-white  text-base font-lato-bold transition-all duration-500"
                >
                Load more
                  <svg
                    className="h- group-hover:fill-white fill-black"
                    width="8"
                    height="15"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
                      fill="black"
                      className=" group-hover:fill-white transition-all duration-500"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
