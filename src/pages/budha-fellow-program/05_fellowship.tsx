import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, {  useEffect, useState } from "react";
import play from "assets/Impact/play.png"
import axios from "axios";

type testimonialVideo = {
  video: string;
  thumbnailImg: string;
  title: string;
  type:string;
};

const FellowShip = () => {
 
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const [apidata, setapidata] = useState<testimonialVideo[]>([]);

  const section = "bfp";
  const handleSlideChange = (swiper: any) => {
    setIsLastSlide(swiper.isEnd);
    setIsFirstSlide(swiper.isBeginning);
  };

  const openPopup = (card: any) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const fetchAllDetails = async()=>{
    try
    {
       const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/testimonialVideo/show`);
       setapidata(response.data.message);
    }
     catch(error:any){
      console.log(error.message);
     }
  }

  useEffect(()=>{

    fetchAllDetails();
  },[])

  return (
    <>
      <section className=" blade-top-padding-sm blade-bottom-padding-sm" id="fellowship_section">
        <div className="cursor-pointer relative   gsap-fade-in">
          <div className="w-container-xl blade-bottom-padding-sm">
             <h1 className="text-[#07393C] font-lato-bold">The Fellowship experience — Reflections from the Buddha Fellows</h1>
          </div>
       
          <Swiper
            modules={[Pagination, Navigation]}
            className="!ps-[3%] sm:!ps-[2%] md:!ps-[5%] lg:!ps-[5%]  xl:!pl-[7%] 2xl:!pl-[9%] 3xl:!pl-[9%]"
            spaceBetween={20}
            slidesPerView={1.1}
            onSlideChange={handleSlideChange}
            navigation={{
              prevEl: ".bfpprevBtn",
              nextEl: ".bfpnextBtn",
            }}
            
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 35,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 45,
              },
              1536: {
                slidesPerView: 2.3,
                spaceBetween: 30,
              },
            }}
          >
            {apidata.map((slide,cover) => (
              <SwiperSlide key={cover}>
                {slide.type === "video" ? (
                  <div className=" reactive grid">
                    <div
                      className="relative h-full w-full"
                      onClick={() => openPopup(slide)}
                    >
                      <img
                        src={`${process.env.REACT_APP_LOCAL_URL}/${slide.thumbnailImg.replace(/\\/g , "/" )}`}
                        alt={slide.title}
                        className="object-cover h-full w-full"
                      />
                       <h3 className=" hidden md:block absolute bottom-0 text-white text-center font-lato-regular  px-6 leading-7 2xl:leading-8  lg:px-14 pb-4 lg:pb-6">
                        {slide.title}
                      </h3>
                     <h6 className="sm:block md:hidden absolute bottom-0 text-white text-center font-lato-regular  px-2   lg:px-14 pb-3 lg:pb-6">
                         {slide.title}
                     </h6>
                    </div>
                    <button className="absolute inset-0 flex items-center justify-center"   onClick={() => openPopup(slide)}>
                      <img src={play} alt="Play Button" className="w-16 h-16 sm:w-28 sm:h-28" />
                    </button>
                  </div>
                ) : (
                  <div className="reactive grid">
                    <div className="relative h-full w-full">
                      <img
                        src={`${process.env.REACT_APP_LOCAL_URL}/${slide.thumbnailImg.replace(/\\/g , "/" )}`}
                        alt={slide.title}
                        className="object-cover h-full w-full"
                        
                      />
                      
                    </div>
                    <div>
                    <h3 className=" hidden md:block absolute bottom-0 text-white text-center font-lato-regular  px-6 leading-7 2xl:leading-8  lg:px-14 pb-4 lg:pb-6">
                        {slide.title}
                      </h3>
                      <h6 className="block md:hidden text-sm absolute bottom-0 text-white text-center font-lato-regular  px-2   lg:px-14 pb-3 lg:pb-6">
                         {slide.title}
                     </h6>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}

            <div className="relative flex justify-end lg:!pr-[10%] xl:!pr-[10%] ">
              <div className="swiper-progressbar-new swiper-progressbar swiper-pagination-progressbar sm:[250px] !absolute !bottom-5 ps-3 !top-auto max-w-[40%] !rounded-md md:block lg:max-w-[350px] 2xl:max-w-[500px]"></div>

              <div className="custom-navigation mt-9 flex gap-2 sm:gap-2 mr-5">
                <button
                  className={`bfpprevBtn cursor-pointer xlg:w-16 w-10 ${
                    isFirstSlide ? "opacity-40" : ""
                  }`}
                  aria-label="Previous slide"
                >
                  <img
                    src="/BudhaFellowProgram/BFP_PreviousBtn.png"
                    alt="Previous Button"
                    className="object-contain w-full h-full "
                    
                  />
                </button>
                <button
                  className={`bfpnextBtn cursor-pointer xlg:w-16 w-10 ${
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
        {selectedCard && (
          <div className="fixed inset-0  bg-black/70 z-[99999] flex items-center justify-center">
            <div className="relative overflow-hidden bg-teal w-full h-full flex items-center rounded-md">
              <div className="w-container w-full ">
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 xl:top-[5%] 2xl:right-[10%] xl:right-[5%] sm:right-4 right-4  text-black  font-bold bg-[#8DC63F] rounded-full"
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
                <div className="flex justify-between ">
                  <h2 className="font-lato-bold text-white ">
                    {selectedCard.title}
                  </h2>
                 
                </div>
                <div className="border-b-[2px] border-white border-opacity-[28%]"></div>
                <div className="flex flex-col mt-4 md:flex-row gap-6 justify-center items-center ">
                  <div className="w-full 2xl:h-[600px] xl:h-[470px] lg:h-[370px] h-[350px] ">
                    {selectedCard.video ? (
                      <iframe
                        src={selectedCard.video}
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                        title="buddha mentors video"
                      ></iframe>
                    ) : selectedCard.image ? (
                      <img
                        src={selectedCard.image}
                        alt={selectedCard.title}
                        className="w-full h-full object-cover shadow-lg"
                        
                      />
                    ) : (
                      <p className="text-center text-gray-500">
                        No media available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};




export default FellowShip;
