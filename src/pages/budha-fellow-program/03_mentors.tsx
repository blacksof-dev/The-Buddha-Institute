import React, {  useEffect, useState } from "react";
import FellowCard from "molecules/AllFellowCard";
import axios from "axios";

type CardData={
  cover: string;
  fullName: string;
  linkedinLink: string;
  role: string;
  designation: string;
  address?: string;
  fulldesc?:string;
};

const Mentors = () => {
  

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [apidata, setapidata] = useState<CardData[]>([]);
  const [loadingdata, setloadingdata] = useState(false);

  const openModel = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  const fetchAllDeatails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=mentorpool`
      );   
      // console.log(response.data.data);
      setapidata(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    fetchAllDeatails()
  },[])

  return (
    <>
      <section className="bg-teal blade-top-padding-lg blade-bottom-padding-lg">
        <div className="w-container-xl  text-center lg:text-start gsap-fade-in">
          <h1 className="font-lato-bold text-white pb-2">
            Mentor — A supportive force to enable success
          </h1>
          <hr className="border-white/25 " />
          <div className="flex sm:flex-col flex-col-reverse">
            <div className="flex flex-col  lg:flex-row blade-top-padding-sm blade-bottom-padding-sm lg:gap-44">
              <div className="w-full lg:w-[60%]">
                <h4 className="text-white font-lato-regular">
                  A unique offering of the Buddha Fellowship Program, is a
                  dedicated Mentor assigned to each Buddha Fellow for a duration
                  of 2 years, based on shared interest. These Mentors bring over
                  30 years of experience in business, often having served as
                  CXOs or in other senior leadership positions.
                </h4>
              </div>
              <div className="w-full lg:w-[70%] py-4 lg:py-0">
                <h4 className="text-white font-lato-regular">
                 Committed to the Fellow and the larger goal, the Mentor makes field visits ensuring she/he offers context-specific guidance. The Mentor, using her/his years of experience, nudges Buddha Fellows to yield stable, steadily growing, socially focused, profitable enterprises.
                </h4>
              </div>

             
            </div>

            <div className="blade-bottom-margin-sm sm:mt-0 blade-top-margin">
              <div className="relative overflow-hidden ">
                <img
                  src="/BudhaFellowProgram/video-tag.jpg"
                  className="min-h-[300px] w-full object-cover object-center "
                  alt="Video Tag"
                  
                />
                <img
                  src="/BudhaFellowProgram/video-icon.png"
                  className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  2xl:h-28 2xl:w-28 h-20 w-20 cursor-pointer"
                  onClick={openModel}
                  alt="Video Icon"
                  
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" border-l-2  border-transparent lg:border-white/50">
              <h3 className="text-white sm:mt-0 mt-8 font-lato-bold pb-6 ps-8">
                Our Mentor Pool
              </h3>
            </div>
          </div>
        </div>
        <div className=" pb-10 w-container-xl">
          <div className=" border-b-2 border-transparent  lg:border-white/50 w-[28%]"></div>
          <div className=" border-l-2  border-transparent lg:border-white/50">
            <div className=" sm:ps-8">
          
            <FellowCard
             cardInfo={apidata}
             bgColor="#FFFFFF"
            borderColor="#FFFFFF"
            disablePopup={true}
          />
         
            </div>
          </div>
        </div>
      </section>
      {isModelOpen && (
        <div className="fixed inset-0 bg-teal z-[99999] flex items-center justify-center w-full h-full">
          <div className="relative bg-teal p-4 rounded-lg  w-full h-full flex justify-center items-center">
            <div className="w-container">
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
              <div className="2xl:h-[600px] xl:h-[470px] lg:h-[370px] h-[350px]">
                <iframe
                  width=""
                  height=""
                  src="https://www.youtube.com/embed/OfMKBV5NfGQ?autoplay=1&loop=1&playlist=OfMKBV5NfGQ"
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
    </>
  );
};

export default Mentors;
