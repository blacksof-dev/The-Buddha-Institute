import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import Button from "atoms/borderedButton";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

export default function FellowSwiper() {
  const swiperInstance = useRef<SwiperCore | null>(null);

  return (
    <div className="py-8 swipercontainer">
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        className="!lg:pb-5 !mt-6  !pl-3 !pr-3 xlg:!mt-14: !pb-20 relative"
        modules={[Autoplay, Scrollbar, Navigation]}
        initialSlide={0}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        scrollbar={{
          hide: false,
        }}
        loop
        grabCursor
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          prevEl: ".successStoriesprevBtn",
          nextEl: ".successStoriesnextBtn",
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
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="mx-auto grid lg:grid-cols-2 h-[45rem] w-full flex-col sm:mx-0 sm:h-[60rem] md:h-[30rem] xlg:h-[34rem]">
              <img
                src={card.img}
                alt={card.alt}
                className="h-full w-full object-cover object-center sm:mt-0"
              />
              <div
                className={`${card.cardColor} relative max-md:blade-top-padding max-md:blade-bottom-padding`}
              >
                <div className="flex flex-col pl-5 sm:pl-10 justify-center h-full gap-5 z-10 relative">
                  <h4 className="font-lato-regular !font-medium">{card.id}</h4>
                  <div>
                    <div>
                      <img src={card.logo} alt={card.title} />
                    </div>
                    <h4 className="font-lato-bold">{card.title}</h4>
                    <h6 className="font-lato-bold">{card.subTitle}</h6>
                  </div>

                  <h4 className="font-lato-regular !font-medium w-2/3">
                    {card.desc}
                  </h4>
                  <div className="">
                    <Button text={"Read case study"} />
                  </div>
                </div>
                <img
                  className="mix-blend-luminosity absolute bottom-0 right-0"
                  src="/Home/success/flower.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="mt-10 flex gap-4 sm:gap-[1px] absolute bottom-0 right-0">
          {/* ProdprevBtn cursor-pointer xlg:w-16 w-10 */}
          <button
            className={`successStoriesprevBtn flex items-center justify-center cursor-pointer xl:w-16 xl:h-16 h-10 w-10 bg-[#F3F3F3]`}
            aria-label="Previous slide"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_184_89)">
                <path
                  d="M17.451 6.01538L6.45795 17.0102L17.451 28.004"
                  stroke="#1B3530"
                  stroke-width="2.07298"
                  stroke-miterlimit="10"
                />
                <path
                  d="M7.92371 17.01H26.9777"
                  stroke="#1B3530"
                  stroke-width="2.07298"
                  stroke-miterlimit="10"
                />
                <path
                  d="M42.3299 27.77L27.3321 27.7727L27.33 42.7698"
                  stroke="#1B3530"
                  stroke-width="1.99979"
                  stroke-miterlimit="10"
                />
                <path
                  d="M28.332 28.7722L41.3272 41.7674"
                  stroke="#1B3530"
                  stroke-width="1.99979"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_184_89">
                  <rect
                    width="21.9981"
                    height="22.0052"
                    fill="white"
                    transform="translate(16.5 0.939941) rotate(45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          {/* ProdnextBtn cursor-pointer xlg:w-16 w-10 */}
          <button
            className={`successStoriesnextBtn flex items-center justify-center cursor-pointer xl:w-16 xl:h-16 h-10 w-10 bg-[#F3F3F3]`}
            aria-label="Next slide"
          >
            <svg
              className="rotate-180"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_184_89)">
                <path
                  d="M17.451 6.01538L6.45795 17.0102L17.451 28.004"
                  stroke="#1B3530"
                  stroke-width="2.07298"
                  stroke-miterlimit="10"
                />
                <path
                  d="M7.92371 17.01H26.9777"
                  stroke="#1B3530"
                  stroke-width="2.07298"
                  stroke-miterlimit="10"
                />
                <path
                  d="M42.3299 27.77L27.3321 27.7727L27.33 42.7698"
                  stroke="#1B3530"
                  stroke-width="1.99979"
                  stroke-miterlimit="10"
                />
                <path
                  d="M28.332 28.7722L41.3272 41.7674"
                  stroke="#1B3530"
                  stroke-width="1.99979"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_184_89">
                  <rect
                    width="21.9981"
                    height="22.0052"
                    fill="white"
                    transform="translate(16.5 0.939941) rotate(45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
const cardData = [
  {
    id: "01",
    img: "/Home/fellow/image-1.png",
    alt: "Angraj Swami - Founder, Ecowrap",
    logo: "/Home/fellow/logo-1.png",
    title: "Angraj Swami",
    subTitle: "Founder, Ecowrap",
    desc: "Revolutionising waste management for a zero-waste India",
    cardColor: "bg-[#D6DF20]",
  },
  {
    id: "02",
    img: "/Home/fellow/image-2.png",
    alt: "Foreca",
    logo: "/Home/fellow/logo-2.png",
    title: "Suhas and Sunita Ramegowda",
    subTitle: "Founder, the good doll",
    desc: "Empowering farmers with cold-pressed innovations",
    cardColor: "bg-[#39B54A]",
  },
  {
    id: "03",
    img: "/Home/fellow/image-3.png",
    alt: "Ecowrap",
    logo: "/Home/fellow/logo-3.png",
    title: "Angraj Swami",
    subTitle: "Founder, Ecowrap",
    desc: "Revolutionising waste management for a zero-waste India",
    cardColor: "bg-[#D6DF20]",
  },
  {
    id: "04",
    img: "/Home/fellow/image-4.png",
    alt: "The good doll",
    logo: "/Home/fellow/logo-4.png",
    title: "Suhas Rameegowda",
    subTitle: "Founder, The good doll",
    desc: "Crafting livelihoods with purpose and sustainability",
    cardColor: "bg-[#39B54A]",
  },
  {
    id: "05",
    img: "/Home/fellow/image-5.png",
    alt: "Ecowrap",
    logo: "/Home/fellow/logo-5.png",
    title: "Borra Srinivas",
    subTitle: "Founder, Ecowrap",
    desc: "Reviving millets, empowering communities",
    cardColor: "bg-[#D6DF20]",
  },
];
