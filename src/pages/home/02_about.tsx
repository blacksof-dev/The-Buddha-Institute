import React, {  useEffect, useState } from "react";
import nurtureVideo from "../../assets/home/about/nurturing-updated.mp4";
const Nurturing = React.memo(() => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const openModel = () => {
    setisModelOpen(true);
};

const closeModel = () => {
    setisModelOpen(false);
};

  return (
    <div>
      <section className="blade-top-padding-lg w-container  bg-[#FFFFFF] gsap-fade-in">
        <div className="">
          <div className=" md:flex items-end justify-between border-b border-[#84848480]">
            <h1 className=" font-lato-bold text-[#07393C] pb-3">
              Nurturing ecosystems <br className="sm:hidden block"/>that  add value for the <br className="sm:hidden block"/> greater good
            </h1>
            {/* <h4 className='py-3 pr-10 md:pl-5 md:border-l text-[#848484] border-[#84848480] font-lato-regular'>About Us</h4> */}
          </div>
          <h4 className="font-lato-regular sn:w-4/5 xl:my-8 my-4">
            Supporting entrepreneurial change-makers. Building an institution of
            compassion. Attracting socially-driven Small and Medium Enterprises,
            Mentors, associates and Donors to contribute to the cause of poverty
            alleviation.
          </h4>
          <div className="blade-bottom-margin-sm sm:mt-0 blade-top-margin">
            <div onClick={openModel} className="relative z-0 overflow-hidden cursor-pointer">
              <img
                src="/Home/nurturing-updated.png"
                className="  2xl:min-h-[600px] xl:min-h-[500px] lg:min-h-[450px] min-h-[300px] w-full bg-[#22574D] object-cover object-[40%] md:object-center"
                alt="Nurturing ecosystems"
                
              />
              <div className=" absolute w-full h-[50%] bottom-0 right-0 left-0 bg-gradient-to-t from-darkGreen to-transparent"></div>
              <img
                src="/BudhaFellowProgram/video-icon.png"
                className="  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                onClick={openModel}
                alt="Play video"
                 
              />
            </div>
          </div>
        </div>
      </section>{" "}
      <section>
        {isModelOpen && (
          
          <div className="fixed inset-0 z-[99999] bg-teal  flex items-center justify-center">
            <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
              <div className="w-container">
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
                <div className="2xl:h-[700px] xl:h-[500px] sm:h-[400px]">
                  <video
                    src={nurtureVideo}
                    className="w-full h-full object-cover"
                    controls controlsList="nodownload"
                    autoPlay
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </div>
        
        )}
      </section>
    </div>
  );
});

export default Nurturing;
