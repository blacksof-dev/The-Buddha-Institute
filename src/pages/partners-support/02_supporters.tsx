import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { Icon } from "organisms/iconCommonent";

type PartnerAndSupport = {
  _id: string;
  logo: string;
  title?: string;
  __v: number;
};

export default function Supporters() {
  type SectionType = "section1" | "section2" | "section3";
  const [activeSection, setActiveSection] = useState<SectionType>("section1");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fade, setFade] = useState(false);
  const [apidata, setapidata] = useState<PartnerAndSupport[]>();


  const fetchAllDetails = async (section: SectionType) => {
    try {
      setIsLoading(true);
      let response;
      if (section === "section1") {
        response = await axios(`${process.env.REACT_APP_LOCAL_URL}/api/GovtInstitue/show`);
      } else if (section === "section2") {
        response = await axios(`${process.env.REACT_APP_LOCAL_URL}/api/foundation/show`);
      } else {
        response = await axios(`${process.env.REACT_APP_LOCAL_URL}/api/csonetwork/show`);
      }

      setapidata(response.data.data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
    finally {
      setTimeout(() => setIsLoading(false), 300); 
    }
  };

  useEffect(() => {
    fetchAllDetails("section1");
  }, [])

  const handleClick = (section: SectionType) => {
    if (section !== activeSection) {
      // setFade(true);
      setTimeout(() => {
        setActiveSection(section);
        // setFade(false);
      }, 300);
    }
    fetchAllDetails(section);
  };
  return (
    <>
      <section className="gsap-fade-in bg-[#FAF9F5]">
        <div className="2xl:blade-top-padding-lg sm:blade-top-padding blade-top-padding w-container gsap-fade-in flex flex-col items-center">
          <img src="/partnersAndSupport/lotus.png" alt="lotus" className="" />
          <h1 className="blade-bottom-padding-sm text-[#07393C] font-lato-bold">
            {" "}
            Partners and Supporters
          </h1>
        </div>
        <div className="p-6">
          {/* Buttons */}
          <div className="align center mb-6 justify-center gap-4 lg:flex sm:gap-9 xl:gap-10 2xl:gap-14">
            <button
              className={`sm:px-6 px-2 flex gap-2 2xl:text-xl font-lato-regular sm:py-4 py-2 border border-gray-200 rounded-full lg:mx-0 mx-auto ${activeSection === "section1"
                  ? "bg-darkGreen text-white"
                  : "bg-white"
                }`}
              onClick={() => handleClick("section1")}
            >
              <svg
                className="mt-[10px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="0.302734"
                  width="8.00001"
                  height="8.00001"
                  transform="rotate(45 6 0.302734)"
                  fill="#D7DF23"
                />
              </svg>
              Government and Institutions
            </button>
            <button
              className={`sm:px-6 px-2 flex gap-2 2xl:text-xl lg:mt-0 mt-4 font-lato-regular sm:py-4 py-2 border border-gray-200  rounded-full lg:mx-0 mx-auto  ${activeSection === "section2"
                  ? "bg-darkGreen text-white"
                  : "bg-white"
                }`}
              onClick={() => handleClick("section2")}
            >
              <svg
                className="mt-[10px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="0.302734"
                  width="8.00001"
                  height="8.00001"
                  transform="rotate(45 6 0.302734)"
                  fill="#D7DF23"
                />
              </svg>
              Foundations and CSR Partners
            </button>
            <button
              className={`sm:px-6 px-2 flex gap-2 lg:mt-0 mt-4 2xl:text-xl font-lato-regular sm:py-4 py-2 border border-gray-200 rounded-full lg:mx-0 mx-auto ${activeSection === "section3"
                  ? "bg-darkGreen text-white"
                  : "bg-white"
                }`}
              onClick={() => handleClick("section3")}
            >
              <svg
                className="mt-[10px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="0.302734"
                  width="8.00001"
                  height="8.00001"
                  transform="rotate(45 6 0.302734)"
                  fill="#D7DF23"
                />
              </svg>
              CSO and CSO Networks
            </button>
          </div>

          <div
            className={`p-4 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
              }`}
          >

            {isLoading ? (
              <div className="w-full flex justify-center  text-4xl text-teal  my-20">
                <span className="spin">
                  {/* <ImSpinner2  /> */}
                  <Icon icon={ImSpinner2}  />
                </span>
              </div>
            ):
            (
            <>
            {activeSection === "section1" && (
              <div className="blade-top-padding-sm blade-bottom-padding-lg">
                <div className="grid grid-cols-2 justify-center gap-4 sm:flex sm:flex-wrap sm:gap-10">
                  {apidata?.slice(0, 4).map((ele, index) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_LOCAL_URL}/${ele.logo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Government Institutions Images"
                      className="h-[164px] bg-transparent object-contain"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 justify-center gap-4 sm:flex sm:flex-wrap sm:gap-12">
                  {apidata?.slice(-2).map((ele, index) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_LOCAL_URL}/${ele.logo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Government Institutions Images"
                      className="h-[164px] bg-transparent object-contain"
                    />
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === "section2" && (
              <div className="blade-top-padding-sm blade-bottom-padding-lg">
                <div className="grid grid-cols-2 justify-center gap-4 sm:flex sm:flex-wrap sm:gap-14">
                  {apidata?.slice(0, 4).map((ele, index) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_LOCAL_URL}/${ele.logo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Government Institutions Images"
                      className="h-[164px] bg-transparent object-contain"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 justify-center gap-4 sm:flex sm:flex-wrap sm:gap-10">
                  {apidata?.slice(4).map((ele, index) => (
                    <img
                      key={index}
                      src={`${process.env.REACT_APP_LOCAL_URL}/${ele.logo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Government Institutions Images"
                      className="h-[164px] bg-transparent object-contain"
                    />
                  ))}
                </div>
              </div>
            )}
            {activeSection === "section3" && (
              <div className="w-container mt-0 blade-bottom-padding-lg gap-x-2 sm:flex sm:gap-6 flex items-center flex-col justify-center">
                {apidata?.map((ele, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={`${process.env.REACT_APP_LOCAL_URL}/${ele.logo.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Government Institutions Images"
                      className="h-[164px] bg-transparent object-contain"
                    />
                    <h4 className="2xl:text-2xl font-lato-regular mt-4 xl:max-w-[48%] lg:max-w-[60%] sm:max-w-[80%] text-center">
                      {ele.title}
                    </h4>
                  </div>
                ))}
              </div>
            )}
            </>
            )}

          
            
          </div>
        </div>
      </section>
    </>
  );
}
