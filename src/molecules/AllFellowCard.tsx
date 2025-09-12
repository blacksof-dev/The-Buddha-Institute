import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
type FellowCardProps = {
  bgColor: string;
  borderColor: string;
  disablePopup?: boolean;
  cardInfo: Array<{
    cover: string;
    fullName: string;
    linkedinLink: string;
    role: string;
    designation: string;
    address?: string;
    fulldesc?: string;
  }>;
};

const FellowCard: React.FC<FellowCardProps> = ({
  bgColor,
  borderColor,
  cardInfo,
  disablePopup,
}) => {
  const initialVisibleCount = 12;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [selectedCard, setSelectedCard] = useState<(typeof cardInfo)[0] | null>(
    null
  );

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  const handleLoadMore = () => {

    setVisibleCount((prevCount) => prevCount + 8);
  };

  const openPopup = (card: (typeof cardInfo)[0]) => {
    console.log(cardInfo.length);
    console.log("Popup clicked:", card);
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {" "}
      {selectedCard && (
        <div className=" fixed inset-0 bg-teal z-[99999] lg:flex lg:items-center justify-center">
          <div className="relative overflow overflow-auto bg-teal sm:p-8 rounded-md  w-full h-full lg:flex justify-center items-center">
            <div className="w-container ">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className=" absolute top-4 xl:top-[5%] 2xl:right-[10%] xl:right-[5%] sm:right-4 right-4  text-black  font-bold bg-[#8DC63F] rounded-full"
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
              <div className="sm:flex justify-between lg:mt-0 blade-top-margin-lg">
                <h1 className="font-lato-bold text-white">
                  {selectedCard.fullName}
                </h1>
              </div>
              <div className="border-b-[2px] border-white border-opacity-[28%] sm:block hidden"></div>
              <div className="flex flex-col-reverse blade-bottom-margin-lg sm:mt-4 md:flex-row gap-6">
                <div className="flex-1 ">
                  <h4 className=" font-lato-bold text-white lg:mt-8 ">
                    {selectedCard.designation}
                  </h4>
                  <h4 className="text-white  w-full lg:mt-8 mt-2 font-lato-regular lg:mb-6">
                    {selectedCard.fulldesc}
                  </h4>
                  {selectedCard.linkedinLink!=='' ? 
                  (
                    <h4 className="">
                      <Link
                        to={selectedCard.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-pear mt-4 hover:bg-teal d border-pear font-lato text-black hover:text-white px-4 py-2 font-lato-bold  transition-all duration-500"
                      >
                        in LinkedIn &rarr;
                      </Link>
                    </h4>
                  ) : (
                    <h4  className="inline-block bg-pear mt-4 hover:bg-teal d border-pear font-lato text-black hover:text-white px-4 py-2 font-lato-bold  transition-all duration-500">
                      in LinkedIn &rarr;
                    </h4>
                  )}
                </div>

                <div className="bg-white  2xl:w-[35%] xl:w-[40%] lg:w-[30%] w-full h-fit  md:p-2 p-1 mt-4 sm:mx-auto">
                  <img
                    src={`${
                      process.env.REACT_APP_LOCAL_URL
                    }/${selectedCard.cover.replace(/\\/g, "/")}`}
                    alt={selectedCard.fullName}
                    className="w-full h-full object-cover  shadow-lg"
                     
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="flex blade-top-padding-sm flex-row flex-wrap gap-8 ">
          {cardInfo.slice(0, visibleCount).map((carddata, index) => (
            
          
            <div
              key={index}
              className=" 2xl:w-[23%] lg:w-[30%] sm:w-[45%] w-full h-auto group"
            >
              <div
                className={` border-8 border-[${borderColor}] bg-${bgColor}  h-full flex flex-col`}
              >
                <div className="h-fit sm:h-[18rem] relative overflow-hidden ">
                  <img
                    src={`${
                      process.env.REACT_APP_LOCAL_URL
                    }/${carddata.cover.replace(/\\/g, "/")}`}
                    alt={carddata.fullName}
                    className=" w-full object-cover  h-full transform cursor-pointer transition-transform duration-300 hover:scale-105"
                    
                    onClick={() => {
                      if (carddata.role === "mentorpool") {
                        openPopup(carddata);
                      }
                    }}
                  />

                  <div>
                    {carddata.role === "mentorpool"?  (
                      <svg
                        className="absolute top-5 right-4 transition-transform duration-300 group-hover:-rotate-45 cursor-pointer"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          if (carddata.role === "mentorpool") {
                            openPopup(carddata);
                          }
                        }}
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
                    ):"null"}
                  </div>
                </div>
                <div className=" px-5 py-2 bg- flex-1 bg-[#F3F3F3] ">
                  <div className="flex items-start justify-between">
                    <h3 className="text-teal font-lato-bold">
                      {carddata.fullName}
                    </h3>
                    {carddata.linkedinLink === "" ? (
                      <img
                        src="/BudhaFellowProgram/MentorPoolicon.png"
                        alt="Mentor Pool"
                        className={`${
                          carddata.linkedinLink
                            ? "opacity-100"
                            : "opacity-40 pointer-events-none"
                        }`}
                        
                      />
                    ) : (
                      <Link
                        to={carddata.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/BudhaFellowProgram/MentorPoolicon.png"
                          alt="Mentor Pool"
                          className={`${
                            carddata.linkedinLink
                              ? "opacity-100"
                              : "opacity-40 pointer-events-none"
                          }`}
                           
                        />
                      </Link>
                    )}
                  </div>
                  <h6 className="font-lato-bold text-left text-black/80 py-3">
                    {carddata.designation}
                  </h6>
                </div>
              </div>
            </div>
          
       
          ))}
        </div>
        {visibleCount < cardInfo.length && (
            <div className="mx-auto flex justify-center items-center blade-top-padding-sm">
              <button
                onClick={handleLoadMore}
                className="  flex gap-2 bg-pear px-16 py-3 text-lg text-black font-lato-bold sm:gap-4 sm:px-14 sm:py-3 sm:text-2xl"
              >
                Load more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mt-1 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

       
      </section>
    </>
  );
};

export default FellowCard;
