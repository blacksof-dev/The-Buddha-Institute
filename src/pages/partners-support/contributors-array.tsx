import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ContributorsData() {
  const swiperInstance = useRef<SwiperCore | null>(null);

  return (
    <div className="py-8">
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        className="!lg:pb-5 !mt-6 !pb-3 !pl-3 !pr-3 xlg:!mt-14 2xl:!pb-10"
        modules={[Autoplay]}
        initialSlide={0}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        loop
        grabCursor
        slidesPerView={1.1}
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="mx-auto flex h-[25rem] w-full flex-col gap-3 bg-white px-2 py-2 sm:mx-0 md:h-[24rem] xlg:h-[28rem]">
              <div className="relative group ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full  w-full object-cover sm:mt-0 transition-transform duration-300 hover:scale-105"
                />
                <svg
                  className="absolute top-5 right-4 transition-transform duration-300 group-hover:-rotate-45 cursor-pointer"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.3252"
                    cy="17.3252"
                    r="17.3252"
                    className="transition-all duration-300 fill-[#DEDEDE] group-hover:fill-green"
                  />
                  <path
                    d="M26.1887 16.9929C26.5575 16.6241 26.5575 16.0262 26.1887 15.6575L20.1792 9.64792C19.8104 9.27914 19.2125 9.27914 18.8437 9.64792C18.4749 10.0167 18.4749 10.6146 18.8437 10.9834L24.1855 16.3252L18.8437 21.667C18.4749 22.0358 18.4749 22.6337 18.8437 23.0025C19.2125 23.3712 19.8104 23.3712 20.1792 23.0025L26.1887 16.9929ZM9.12891 17.2695H25.521V15.3809H9.12891V17.2695Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h4 className=" pl-2  text-teal font-lato-bold sm:text-left flex justify-between ">
                {card.title}
                <a
                  href={card.Link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    card.Link ? "opacity-100" : "opacity-40 pointer-events-none"
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
              </h4>

              <h6 className="pl-2 text-[16px] text-gray-600 font-lato-bold sm:text-left">
                {card.desig}
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
const cardData = [
  {
    id: 1,
    img: "/partnersAndSupport/mahua-menon.png",
    title: "Mahua Menon and Ranodeb Roy",
    Link: "https://www.linkedin.com/in/dr-mahua-menon-2989b01b9/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Theme Leader / Anchor",
  },
  {
    id: 2,
    img: "/partnersAndSupport/shilpa.png",
    title: "Shilpa and Arvind Sanger",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 3,
    img: "/partnersAndSupport/krishnan.png",
    title: "Lata Krishnan and Ajay Shah",
    Link: "https://www.linkedin.com/in/ajay-shah-b223ab3b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 4,
    img: "/partnersAndSupport/sunish.png",
    title: "Sunish Sharma",
    Link: "https://www.linkedin.com/in/sunishsharma/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 5,
    img: "/partnersAndSupport/ram.png",
    title: "Ram Shriram",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 6,
    img: "/partnersAndSupport/chandana.png",
    title: "Chandana and Devinjit Singh",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 7,
    img: "/partnersAndSupport/pradeep.png",
    title: "Pradeep Singh",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 8,
    img: "/partnersAndSupport/shashank.png",
    title: "Maithili Parekh and Shashank Singh",
    Link: "",
    desig: "Theme Leader / Anchor",
  },
  {
    id: 9,
    img: "/partnersAndSupport/karan.png",
    title: "Karan Singh",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 10,
    img: "/partnersAndSupport/venkat.png",
    title: "Venkat Srinivasan",
    Link: "https://www.linkedin.com/in/venkat-srinivasan-111510a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 11,
    img: "/partnersAndSupport/saurabh.png",
    title: "Saurabh Srivastava",
    Link: "",
    desig: "Theme Leader / Anchor",
  },
  {
    id: 12,
    img: "/partnersAndSupport/paresh.png",
    title: "Paresh Sukthankar",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 13,
    img: "/partnersAndSupport/srinivas.png",
    title: "B Srinivas Rao",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 14,
    img: "/partnersAndSupport/sonia.png",
    title: "Sonia Maria and Monish Tahilramani",
    Link: "https://www.linkedin.com/in/monish-tahilramani-a5b415201/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 15,
    img: "/partnersAndSupport/harit.png",
    title: "Harit Talwar",
    Link: "https://www.linkedin.com/in/harit-talwar-82a9371b2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 16,
    img: "/partnersAndSupport/varun.png",
    title: "Varun Thapar",
    Link: "https://www.linkedin.com/in/varunthapar/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 17,
    img: "/partnersAndSupport/mohit.png",
    title: "Mohit Thukral",
    Link: "https://www.linkedin.com/in/mohit-thukral/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 18,
    img: "/partnersAndSupport/sunil.png",
    title: "Sunil Vachani",
    Link: "https://www.linkedin.com/in/sunil-vachani-01585038/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 19,
    img: "/partnersAndSupport/kartik.png",
    title: "Kartik Varma",
    Link: "",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 20,
    img: "/partnersAndSupport/sameer.png",
    title: "Sameer Brij Verma",
    Link: "https://www.linkedin.com/in/sameerbrijverma/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Team Leader/ Anchor",
  },
  {
    id: 21,
    img: "/partnersAndSupport/harshbeena.png",
    title: "Harshbeena Zaveri",
    Link: "https://www.linkedin.com/in/harshbeena-zaveri-59a87860/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    desig: "Theme Leader / Anchor",
  },
];
