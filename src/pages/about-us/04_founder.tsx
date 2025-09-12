import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import ved from "assets/home/founder/ved.png";
import vedAryaThumbnail from "assets/home/vedAryaThumbnail.jpg";
import image1 from "assets/home/founder/image-1.png";
import image2 from "assets/home/founder/image-2.png";
import image3 from "assets/home/founder/image-3.png";

const Founder = () => {
  const [isModelOpen, setisModelOpen] = useState(false);

  const openModel = () => {
    setisModelOpen(true);
  };

  const closeModel = () => {
    setisModelOpen(false);
  };

  const swiperInstance = useRef<SwiperCore | null>(null);

  const cardData = [
    {
      id: 1,
      img: image1,
      title:
        "“Field visit of Ved Arya with SRIJAN and Axis Bank Foundation Team at Chhindwara, MP”",
      alt: "A woman skillfully weaving fabric.",
    },
    {
      id: 2,
      img: image2,
      title: "“Ved in dialogue with Isabelle Guerrero from the World Bank”",
      alt: "A group of women peeling custard apples together.",
    },
    {
      id: 3,
      img: image3,
      title:
        "“Ved with SRIJAN Team showcasing the packaged milk launched by Maitree Mahila Dairy Producer Company Ltd. at Tonk, Rajasthan”",
      alt: "A diverse group of women in vibrant saris stands proudly in front of a building, symbolizing empowerment and unity.",
    },
  ];
  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding blade-bottom-margin-sm  gsap-fade-in bg-[#1A8482]">
        <section className="sm:w-container w-container-sm text-white">
          <div className="md:flex items-end justify-between border-b pb3 border-[#fff]">
            <h1 className="pb-3 font-lato-bold text-[#fff]">
              Led by an inspiring founder
            </h1>
            {/* <h4 className='py-3 pr-10 md:pl-5 md:border-l border-[#fff] font-lato-regular'>Founder</h4> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3   blade-top-margin-sm">
            <div className="col-span-9">
              <div
                onClick={openModel}
                className="cursor-pointer relative z-0 overflow-hidden "
              >
                <img
                  src={vedAryaThumbnail}
                  className=" 2xl:min-h-[525px] xl:min-h-[528px] lg:min-h-[528px] min-h-[300px] w-full bg-[#22574D] object-cover object-[40%] md:object-center"
                  alt=""
                />
                <div className=" absolute w-full h-[50%] bottom-0 right-0 left-0 bg-gradient-to-t from-darkGreen to-transparent"></div>
                <img
                  src="/BudhaFellowProgram/video-icon.png"
                  className="  absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 z-50 2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                  onClick={openModel}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-5">
            <h2 className="font-lato-regular !font-semibold">Ved Arya</h2>
            <h4 className="font-lato-regular !font-semibold">Founder</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-y-4 my-7  gap-20">
            <div className="col-span-1  font-lato-regular">
              <h4 className="">
                Ved Arya is a serial social entrepreneur. He is a rank-holding
                aeronautical engineer from IIT Kanpur (class of 1979) and a
                management graduate from IIM Ahmedabad (class of 1981).
              </h4>
              <h4 className=" mt-5">
                Ved has founded Self-Reliant Initiatives through Joint Action
                (SRIJAN), Responsible Coalition for Resilient Communities
                (RCRC), and The Buddha Institute.
              </h4>
              <h4 className=" mt-5">
                SRIJAN promotes women’s empowerment in the form of self-help
                groups and their federations. Since its inception in 2000, it
                has reached
                <span className="font-lato-bold">
                  250,000 rural poor women
                </span>{" "}
                across<span className="font-lato-bold"> 2311 villages</span> in
                6 Indian states and formed 9 women’s federations,{" "}
                <span className="font-lato-bold">
                  uplifting 1.25+ million poor.
                </span>
              </h4>

              <h4 className=" mt-5">
                RCRC, a collaborative of{" "}
                <span className="font-lato-bold">96 NGOs across 19 states</span>{" "}
                of India, aims to build on the strengths of its member
                organisations to promote sustainable rural livelihoods and to
                drive entrepreneurship promotion through existing government
                structures.
              </h4>
              <h4 className=" mt-5">
                Founded in 2018, The Buddha Institute is dedicated to creating
                an ecosystem of support for social development that enables
                Development Entrepreneurs, especially women, to create social
                impact through their businesses.
              </h4>
            </div>
            <div className="col-span-1 font-lato-regular">
              <h4 className=" mt-5">
                Ved was recognised among Social Entrepreneurs and Innovators of
                the Year 2025 by Schwab Foundation under the Collective Social
                Innovator Category.
              </h4>
              <h4 className=" mt-5">
                In 2018, Business Standard chose Ved as a Social Entrepreneur of
                the Year.
              </h4>
              <h4 className=" mt-5">
                In 2020, he received the Distinguished Alumnus Award from IIT
                Kanpur.
              </h4>
              <h4 className=" mt-5">
                He is a Hubert Humphrey Fellow (1990-91), United Nations
                Environment Program Fellow (1991), Ashoka Fellow (2008), and
                Aspire Fellow (2015).
              </h4>
              <h4 className=" mt-5">
                With wide-ranging interests from reading to running, ghazals to
                gulab jamuns, Ved Arya is a man on a mission, quietly hurtling
                towards his calling with deep resolve. His curiosity and candour
                help him bond with a growing band of willing supporters who are
                driven to contribute to an exciting challenge. Amazingly, he
                carries a big responsibility on his narrow but able shoulders
                with consummate ease and humility.
              </h4>
            </div>
          </div>
        </section>
      </section>
      <section>
        {isModelOpen && (
          <div className="fixed inset-0 z-[99999] bg-teal  flex items-center justify-center">
            <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
              <div className="w-full lg:w-container">
                <button
                  onClick={closeModel}
                  className="absolute top-4 xl:top-[5%]  xl:right-[2%] sm:right-3 right-4  text-black  font-bold bg-[#8DC63F] rounded-full"
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
                <div className="2xl:h-[700px] xl:h-[500px]  h-[600px]">
                  <iframe
                    className="w-full h-full object-contain"
                    src="https://www.youtube.com/embed/sosLHek77us?autoplay=1&mute=1&loop=1&playlist=sosLHek77us&bg=transparent&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ backgroundColor: "transparent" }} // Ensures no black background
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Founder;
