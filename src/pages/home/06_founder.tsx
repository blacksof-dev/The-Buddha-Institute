
import vedAryaThumbnail from "assets/home/vedAryaThumbnail.jpg"
import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

const Founder = React.memo(() => {
  const [isModelOpen, setisModelOpen] = useState(false);

  const openModel = () => {
    setisModelOpen(true);
  };

  const closeModel = () => {
    setisModelOpen(false);
  };



  return (
    <>
      <section className="bg-[#1A8482] blade-top-padding-lg blade-bottom-padding-lg ">
        <div className=" text-white gsap-fade-in w-container">
          <div className="md:flex items-end justify-between border-b pb3 border-[#fff] border-opacity-[28%]">
            <h1 className="pb-3 font-lato-bold text-[#fff]  xl:!w-[85%] xlg:w-full">
              40+ years, impacting 1.25 mn+ poor, and an everlasting commitment
              to empowerment
            </h1>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3  blade-top-margin-sm">

            <div className="col-span-9 ">
              <div onClick={openModel} className="cursor-pointer relative z-0 overflow-hidden ">
                <img
                  src={vedAryaThumbnail}
                  className=" 2xl:min-h-[600px] xl:min-h-[528px] lg:min-h-[528px] min-h-[300px] w-full bg-[#22574D] object-cover object-[40%] md:object-center"
                  alt="Ved Arya"
                  

                />
                <div className=" absolute w-full h-[50%] bottom-0 right-0 left-0 bg-gradient-to-t from-darkGreen to-transparent"></div>
                <img
                  src="/BudhaFellowProgram/video-icon.png"
                  className="  absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2  z-50 2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                  onClick={openModel}
                  alt="Video Icon"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-y-4 blade-top-margin md:blade-top-margin-sm">
            <div className="col-span-1">
              <h2 className="font-lato-regular !font-semibold">Ved Arya</h2>
              <h4 className="font-lato-regular !font-semibold">Founder</h4>
            </div>
            <div className="col-span-1">
              <h4 className="font-lato-regular ">
                Ved Arya has devoted over four decades of his life to creating
                livelihood opportunities for India’s rural poor and working for
                the cause of poverty alleviation and human empowerment. He
                founded Self-Reliant Initiatives through Joint Action (SRIJAN),
                Responsible Coalition for Resilient Communities (RCRC), and The
                Buddha Institute.
              </h4>
              <h4 className="font-lato-regular  mt-5">
                He founded The Buddha Institute in 2018 to create an ecosystem
                of support for social development that enables Development
                Entrepreneurs, especially women, to create social impact through
                their businesses.
              </h4>
              <div className=" w-fit blade-top-margin-sm">
                <Link to="/about-us" className="h-0 ">
                  <div className="group">
                    <h4 className="flex gap-2 font-lato-bold border-white d  px-6 py-2 group-hover:text-black group-hover:bg-pear group-hover:border-pear cursor-pointer transition-all duration-500">
                      Read more
                      <svg
                        className="2xl:h-9 xl:h-8 h-7 "
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                      >
                        <path
                          d="M1.80605 14.4862L8.92197 7.37031L1.80605 0.254395L0.0429688 2.01748L5.39581 7.37031L0.0429688 12.7232L1.80605 14.4862Z"
                          fill="#FFFF"
                          className="group-hover:fill-black transition-all duration-500"
                        />
                      </svg>
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
                  <div className="2xl:h-[700px] xl:h-[500px] h-[600px]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/sosLHek77us?autoplay=1&mute=1&loop=1&playlist=sosLHek77us&bg=transparent"
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
});

export default Founder;
