
import React, {  useState } from "react";
import successImage from "assets/home/successStories/success.jpeg";
const SuccessStories = React.memo(() => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const openModel = () => {
    setisModelOpen(true);
  };
  const closeModel = () => {
    setisModelOpen(false);
  };
  return (
    <div>
      <section className=" gsap-fade-in w-container  ">
        <div className="md:flex items-end justify-between border-b pb-3 border-[#84848480]">
          <h1 className=" font-lato-bold text-[#07393C]">
            A Buddha Fellow’s voice and vision for social change
          </h1>
          <div className=" "></div>
          {/* <h4 className='py-3 pr-10 md:pl-5 md:border-l text-[#848484] border-[#84848480] font-lato-regular'>Success stories</h4> */}
        </div>
        <div className="blade-top-margin-sm">
          <div className="relative overflow-hidden">
            <img
              src={successImage}
              className="2xl:min-h-[600px] xl:min-h-[500px] lg:min-h-[450px] min-h-[300px] w-full bg-[#22574D] object-cover object-center"
              alt="Buddha Fellow"
              
            />
            <img
              src="/BudhaFellowProgram/video-icon.png"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
              onClick={openModel}
              alt="play button"
              
            />
          </div>
        </div>
      </section>{" "}
      <section>
        {" "}
        {isModelOpen && (
          
            <div className="fixed inset-0 z-[999999] bg-teal  flex items-center justify-center">
              <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
                <div className="w-full lg:w-container">
                  <button
                    onClick={closeModel}
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
                  <div className="2xl:h-[600px] xl:h-[470px] lg:h-[370px]  w-full h-[450px]">
                    <iframe
                      width=""
                      height=""
                      src="https://www.youtube.com/embed/il9bMmNyeUo?autoplay=1&loop=1&si=yYFMm4N0S9kC4v-9"
                      frameBorder="0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      // disablePictureInPicture
                      className="h-full w-full object-cover"
                      title="buddha mentors video"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
        
        )}
      </section>
    </div>
  );
});

export default SuccessStories;
