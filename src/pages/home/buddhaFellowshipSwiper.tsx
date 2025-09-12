import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BuddhaFellowshipSwiper({ data }: { data: Array<any> }) {
  const swiperInstance = useRef<SwiperCore | null>(null);

  return (
    <div className="">
      <Swiper className=""
        onSwiper={(swiper: SwiperType) => (swiperInstance.current = swiper)}
        modules={[Autoplay, Pagination]}
        initialSlide={0}
        speed={1000}
        pagination
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        grabCursor
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 border-l border-[#84848480]  ">
              <h1 className="text-outline font-lato-bold text-9xl relative w-fit pl-3">
                {item.number}
                <span className="absolute left-0 bottom-0 w-full border-b border-[#84848480]"></span>
              </h1>
              <div>
                <h4 className="text-[#1B3530] font-lato-bold text-2xl mb-6 pl-3">
                  {item.title}
                </h4>
                <ul className="list-none  space-y-6">
                  {item.subTitle && (
                    <li className="flex items-center gap-2">
                      <span className=" w-5 h-[1px] block bg-[#84848480]"></span>
                      <h4 className=" font-lato-bold text-[#1B3530] ">
                        {item.subTitle}
                      </h4>
                    </li>
                  )}
                  {item.points.map((point:any, i:number) => (
                    <li
                      key={i}
                      className=" flex pl-3 items-center gap-3 text-xl relative pb-3 after:absolute after:left-0 after:bottom-0 after:content-[''] after:h-[1px] last:after:h-0 after:w-1/4 after:bg-[#84848480]"
                    >
                      <span className="text-black text-3xl">•</span>
                      <h4 className=" font-lato-regular !font-medium">{point}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
