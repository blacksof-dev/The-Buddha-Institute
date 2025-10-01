import React from "react";
import { Link } from "react-router-dom";

type props = {
  backgroundClass?: string;
  bannerImage?: string;
  videoSrc?: string;
  overlayVideo?: string;
  mainHeading?: string;
  subHeading?: string;
  customClass?: string;
  buttonText?: string;
  buttonIcon?: string;
  buttonLink?: any;
  buttonOnClick?: () => void;
  buttonTextTwo?: string;
  buttonIconNew?: string;
  buttonOnClickNew?: () => void;
  buttonLinkTwo?: any;
  category?: string;
};
const Banner = React.memo(({
  backgroundClass = "bg-teal",
  bannerImage,
  videoSrc,
  overlayVideo,
  mainHeading,
  subHeading,
  customClass,
  buttonText,
  buttonIcon,
  buttonOnClick,
  buttonLink,
  buttonTextTwo,
  buttonIconNew,
  buttonOnClickNew,
  buttonLinkTwo,
  category,
}: props) => {
  return (
    <section className={`${backgroundClass}  sm:pb-0`}>
      <div className=" flex flex-col items-center sm:relative sm:h-screen md:h-[90dvh] xl:h-screen overflow-hidden ">
        {bannerImage && (
          <img
             src={`http://localhost:3000/${bannerImage.replace(/\\/g, '/')}`}
            alt={mainHeading}
            className="h-[300px] sm:h-full w-full object-cover "
            loading="eager"
            fetchPriority="high"
          />
        )}
        {videoSrc && (
          <video
            autoPlay
            muted
            loop
            playsInline
              preload="metadata"   
            className=" h-[300px] sm:h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className={overlayVideo} />

        
          <div
            className={`${" blade-bottom-padding blade-top-padding sm:pb-0 sm:pt-0 sm:absolute sm:bottom-2 sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center sm:space-y-2 sm:px-4"} ${
              category === "resources" ? "mb-8" : "sm:blade-bottom-margin-sm"
            } relative text-center px-4 overflow-hidden`}
          >
            {mainHeading && (
              <h1
                className=" text-pear font-lato-bold sm:mt-0 "
                dangerouslySetInnerHTML={{ __html: mainHeading }}
              />
            )}
            {subHeading && (
              <h3
                className={`mt-4 px-4  text-white font-lato-regular sm:mt-0   ${customClass}`}
              >
                {subHeading}
              </h3>
            )}
            <div
              className={`  sm:flex ${
                category === "impact"
                  ? "lg:gap-16 md:gap-4 gap-8 me-5 sm:me-0"
                  : "lg:gap-4 gap-4"
              }`}
            >
              {buttonText && (
                <div className="group mx-auto">
                  <Link to={buttonLink}>
                    <button
                      className={` mx-auto  mt-6 group-hover:bg-transparent  border-2 border-pear group-hover:text-white  flex  gap-2 transition-all duration-500  bg-pear sm:px-11 px-8 py-2   text-black font-lato-bold sm:gap-4  ${
                        category === "impact" ? "lg:px-5 px-4" : "sm:px-14"
                      } sm:py-3 2xl:text-2xl lg:text-lg text-base`}
                      onClick={buttonOnClick}
                    >
                      {buttonText}
                      {buttonIcon && (
                        <svg
                          className="h-auto 2xl:h-9 group-hover:translat-x-3 transition-all duration-500"
                          width="8"
                          height="15"
                          viewBox="0 0 9 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={buttonIcon}
                            fill="black"
                            className="transition-all duration-300 group-hover:fill-white"
                          />
                        </svg>
                      )}
                    </button>
                  </Link>
                </div>
              )}
              {buttonTextTwo ? (
                <div className="mx-auto  w-fit">
                  <Link to={buttonLinkTwo}>
                    <button
                      className="border-pear   sm:me-7 md:me-0 mt-6 flex gap-2 border-2  px-12 py-2 text-pear font-lato-bold sm:gap-2 sm:px-12 sm:py-3 2xl:text-2xl lg:text-lg text-base hover:bg-teal hover:text-white transition-all duration-500"
                      onClick={buttonOnClickNew}
                    >
                      {buttonTextTwo}
                      {buttonIcon && (
                        <svg
                          className="h-auto 2xl:h-9 group-hover:translat-x-3 transition-all duration-500"
                          width="8"
                          height="15"
                          viewBox="0 0 10 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={buttonIconNew}
                            fill="#D7DF23"
                            className="fill-current hover:fill-black transition-all duration-300"
                          />
                        </svg>
                      )}
                    </button>
                  </Link>
                </div>
              ) : buttonTextTwo ? (
                <div className=" group">
                  <Link to={"/donate-usa"}>
                    <button
                      className=" mx-auto mt-6 d flex transition-all duration-500  group-hover:bg-transparent  border border-pear group-hover:text-white gap-2 bg-pear px-5 py-2 text-lg text-black font-lato-bold sm:gap-4 sm:px-10 sm:py-3 sm:text-2xl"
                      onClick={buttonOnClickNew}
                    >
                      {buttonTextTwo}
                      {buttonIcon && (
                        <svg
                          className="h-8 sm:h-9 group-hover:translat-x-3 transition-all duration-500"
                          width="8"
                          height="15"
                          viewBox="0 0 9 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={buttonIconNew}
                            fill="black"
                            className="transition-all duration-300 group-hover:fill-white"
                          />
                        </svg>
                      )}
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
     
      </div>
    </section>
  );
});

export default Banner;
