
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, { useState } from 'react'


type DataProps = {
    data: {
        productArray: {
            id: string;
            image: string;
            title: string;
            desc1: string;
            desc2: string;
        }[];
    };
};


const CommonCardSlider = ({ data }: DataProps) => {

    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);

    const handleSlideChange = (swiper: any) => {
        setIsLastSlide(swiper.isEnd);
        setIsFirstSlide(swiper.isBeginning);
    };

    return (
        <div className=" relative pt-4 lg:pt-12 ">
            <Swiper
                modules={[Pagination, Navigation]}
               className="!ps-[3%] sm:!ps-[2%] md:!ps-[5%] lg:!ps-[5%]  xl:!ps-[7%] 2xl:!ps-[8%]"
                spaceBetween={20}
                grabCursor
                slideToClickedSlide
                slidesPerView={1.1}
                onSlideChange={handleSlideChange}
                navigation={{
                    prevEl: ".donnersprevBtn",
                    nextEl: ".donnersnextBtn",
                }}
              
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                    },
                    1280: {
                        spaceBetween: 20,
                        slidesPerView: 3.1,
                    },
                    1536: {
                        spaceBetween: 30,
                        slidesPerView: 3.5,
                    },
                    1737: {
                        spaceBetween: 50,
                        slidesPerView: 3.5,
                    },
                }}
            >
                {data.productArray.map((slide, i) => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className=" relative grid   ">
                                <div className="pt-4 relative">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="object-contain w-full h-full"
                                        
                                    />
                                    <img
                                        src="/BudhaFellowProgram/FellowShipSvg.svg"
                                        alt="Previous Button"
                                        className="object-contain  w-10 h-7 absolute -bottom-1 right-0"
                                        
                                    />
                                    
                                     <div className=" p-2 h-auto bg-teal w-20 absolute right-0 top-4 text-center">
                                         <h3 className="font-lato-bold text-white">Dec</h3>
                                         <h3 className="font-lato-bold text-white">22</h3>
                                     </div>

                                </div>

                                <div className=" bg-teal   text-white p-8">

                                    <h3 className="font-lato-bold">
                                        {slide.title}
                                    </h3>
                                    <h4 className="font-lato-light">
                                        {slide.desc1}
                                    </h4>
                                    <h4 className="font-lato-light">
                                        {slide.desc2}
                                    </h4>
                                  <div className="flex flex-row gap-4">
                                        <div className= "  flex flex-grow gap-5 ">
                                            <h6 className="py-6 font-lato-regular">Read More</h6>
                                            <img
                                                src="/Resources/ReadMoreIcon.png"
                                                alt="Arrow Icon"
                                                className="object-contain w-6 h-6 my-auto "
                                                 
                                            />
                                        </div>
                                  </div>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
              
            </Swiper>
        </div>
    )
}

export default CommonCardSlider
