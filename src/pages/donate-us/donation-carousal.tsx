import React, { useRef, useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

type ContributorsDonation = {
  _id: string;
  cover: string;
  fullName: string;
  designation?: string;
  linkedinLink: string;
  role: string

}



export default function ContributorsDonationData() {
  const swiperInstance = useRef<SwiperCore | null>(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [MembersSectiondata, setMembersSectiondata] = useState<ContributorsDonation[]>();

  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=compassionate`);
        if (response.status !== 200) {
          // console.log("Opps! Some Errors occur");
        }
        else {
          setMembersSectiondata(response.data.data)
        }
      }
      catch (error: any) {
        console.error("Error fetching data for contributor section :", error.message);
      }
    }
    fetchDetails();
  }, [])

  return (
    <div className="py-8">
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        className="!lg:pb-5 !mt-6 !pb-3 2xl:!pl-[8%] xl:!pl-[6.5%] lg:!pl-[5%] !pl-[2%]  xlg:!mt-2 "
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".compassionateprevBtn",
          nextEl: ".compassionatenextBtn",
        }}
        pagination={{
          el: ".swiper-progressbar-new",
          type: "progressbar",
          progressbarOppositeClass: "fill-progressbar",
        }}
        initialSlide={0}
        speed={2000}
        grabCursor
        slidesPerView={1.1}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 4.8,
            spaceBetween: 30,
          },
        }}
      >
        {MembersSectiondata?.map((card, index) => (
          <SwiperSlide key={card._id}>
            <div className="mx-auto flex h-[25rem] w-full flex-col gap-3 bg-[#F3F3F3] px-2 py-2 sm:mx-0 md:h-[25rem] lg:h-[22rem] xlg:h-[25rem]">
              <div className="">
                <div className="relative group overflow-hidden">
                  <img
                    src={`${process.env.REACT_APP_LOCAL_URL}/${card.cover.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={card.fullName}
                    className="h-full w-full object-cover sm:mt-0 transition-transform duration-300 hover:scale-105"
                  />

                </div>

                <h4 className=" pl-2  text-black font-lato-bold sm:text-left max-w-[90%] flex justify-between  mt-2">
                  {card.fullName}
                  <div>
                    <a
                      href={card.linkedinLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${card.linkedinLink
                        ? "opacity-100"
                        : "opacity-40 pointer-events-none"
                        }`}
                    >
                      <svg
                        className="h-11 w-11 cursor-pointer"
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
                  </div>
                </h4>
              </div>


            </div>
          </SwiperSlide>
        ))}
        <div className=" relative flex justify-end lg:!pr-[10%] xl:!pr-[10%]">
          <div className=" swiper-progressbar-new  swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%]  !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px] "></div>

          <div className="mr-3 sm:mr-0  custom-navigation mt-9 flex  gap-0">
            <button
              className={`compassionateprevBtn cursor-pointer xlg:w-16 w-10 ${isFirstSlide ? "opacity-40" : ""
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
              className={`compassionatenextBtn cursor-pointer xlg:w-16 w-10 ${isLastSlide ? "opacity-40" : ""
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
  );
}
