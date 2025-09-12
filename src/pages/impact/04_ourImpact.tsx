import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import axios from "axios";

type GraphDetails = {
  tabName: string;
  desc: string;
  graphdetails: string;
  subtabs: string;
};

const OurImpact = () => {
  const imageRef = useRef(null);
  const [apidata, setapidata] = useState<GraphDetails[]>([]);
  const [activeState, setActiveState] = useState<string>();
  const [subtabsState, setsubtabsState] = useState<string>();

  const fetchAllDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/graphdata/show`
      );
     
  
      setapidata(response.data.graphs);
  
      
      const firsttab = response.data.graphs[0].tabName

        if (firsttab) {
          setActiveState(firsttab);  
        } 

        const subtabFirst = response.data.graphs.find((tab:any) => 
          Array.isArray(tab.subtabs) && tab.subtabs.length === 2
        );
         
        if(subtabFirst){
          setsubtabsState(subtabFirst.subtabs[0].title)
        }
        
        
    } catch (error: any) {
      
    }
  };
  
useEffect(()=>{
  fetchAllDetails();
},[])


  const handleSubmit = (stateKey: string) => {
    if (activeState !== stateKey) {
      setActiveState(stateKey);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
    );
   
  }, [activeState]);

  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding-lg bg-teal">
        <div className="w-container-xl">
          <h1 className="font-lato-bold text-white border-b border-white pb-3">
            Our impact
          </h1>

          <div className="hidden md:block">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 h-auto  ">
              <div className="w-full lg:w-[25%] flex lg:border-r lg:border-white pt-4 lg:pt-10  flex-row flex-wrap lg:flex-col gap-4 2xl:gap-6 pr-5">
                {apidata.map((ele, index) => {
                  const stateKey = ele.tabName;
                  return (
                    <div key={index}>
                      <button
                        onClick={() => handleSubmit(stateKey)}
                        className={`text-left font-lato-regular py-3 px-3 text-xl 2xl:text-2xl w-full 
                        ${
                          activeState === stateKey
                            ? "font-bold bg-pear hover:text-black"
                            : "bg-transparent text-white"
                        }`}
                      >
                        {ele.tabName}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="lg:py-10  flex-1 2xl:pl-5">
                {apidata
                  ?.filter((ele) => ele.tabName === activeState)
                  .map((ele, index) => (
                    <div key={index} className="">
                      <div>
                        <h1 className=" font-lato-bold text-white  text-36 ">
                          {ele.tabName}
                        </h1>
                      </div>

                      <div className="">
                        {Array.isArray(ele.graphdetails) &&
                          ele.graphdetails.map((detail, idx) => (
                            <div key={idx} className="flex flex-col">
                              {detail === "Actual" ? (
                                 <div className="flex flex-row gap-5">
                                  <div className="bg-pear w-24 h-1 mt-3"></div>
                                  <h5 className="text-white font-lato-regular">
                                    {detail}
                                  </h5>
                                </div>
                              ) : (
                                <div className="flex flex-row gap-5">
                                  <div className="border-b-2 border-dotted w-24 h-1 mt-3"></div>
                                  <h5 className="text-white font-lato-regular">
                                    {detail}
                                  </h5>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>

                      {Array.isArray(ele.subtabs) &&
                        ele.subtabs.map((elems) => {
                          const stateKey = elems.title;
                          return activeState !== "Cohort-wise job creation" ? (
                            <div key={stateKey}>
                              <img
                                ref={imageRef}
                                src={`${
                                  process.env.REACT_APP_LOCAL_URL
                                }/${elems.images.replace(/\\/g, "/")}`}
                                alt={elems.title}
                                className="transition-opacity  duration-500 ease-in-out xl:w-[85%]"
                                
                              />
                            </div>
                          ) : null;
                        })}
                      {ele.tabName === "Cohort-wise job creation" && (
                        <div className="">
                          <h3 className="font-lato-regular text-white py-3 ">
                            {ele.desc}
                          </h3>

                          <div className="flex  gap-9 pt-5 w-full xl:w-fit border-b border-white">
                            {Array.isArray(ele.subtabs) &&
                              ele.subtabs.map((elems, index) => {
                                const stateKey = elems.title;

                                return (
                                  <div
                                    key={index}
                                    className={`flex flex-row gap-3 ${subtabsState===stateKey?"border-b-4 pb-4 border-pear":"border-b-4 pb-4 border-white"}  `} 
                                  >
                                    <div
                                      className={`w-8 h-8 border-white bg-[#D7DF23] ${
                                        subtabsState !== stateKey
                                          ? "filter grayscale-[0.9]"
                                          : ""
                                      }`}
                                    ></div>

                                    <button
                                      onClick={() => {
                                        setsubtabsState(stateKey);
                                      }}
                                      className={`text-white font-lato-regular sm:text-xl text-lg whitespace-nowrap ${
                                        subtabsState === stateKey
                                          ? "font-bold"
                                          : ""
                                      }`}
                                    >
                                      {elems.title}
                                    </button>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="blade-top-padding-lg ">
                            {Array.isArray(ele.subtabs) &&
                              ele.subtabs.map((elems) => {
                                const stateKey = elems.title;
                                return (
                                  subtabsState === stateKey && (
                                    <img
                                      key={stateKey}
                                      ref={imageRef}
                                      src={`${
                                        process.env.REACT_APP_LOCAL_URL
                                      }/${elems.images.replace(/\\/g, "/")}`}
                                      alt={elems.title}
                                      className="transition-opacity duration-500 ease-in-out xl:w-[85%]"
                                       
                                    />
                                  )
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className=" flex flex-col lg:flex-row gap-6 md:gap-10 h-auto  ">
              <div className="w-full lg:w-[25%] flex lg:border-r lg:border-white pt-4 lg:pt-10  flex-row flex-wrap lg:flex-col gap-4 2xl:gap-6 pr-5">
                {apidata
                  ?.filter(
                    (data) => data.tabName !== "Cohort-wise job creation"
                  )
                  .map((data, index) => {
                    const statickey = data.tabName;
                    return (
                      <div key={index} className="blade-top-padding-sm">
                        <div>
                          <h1 className="font-lato-bold text-white py-4">
                            {data.tabName}
                          </h1>
                        </div>

                      
                          {Array.isArray(data.graphdetails) &&
                          data.graphdetails.map((detail, idx) => (
                            <div key={idx} className="flex flex-col">
                              {detail === "Actual" ? (
                                <div className="flex flex-row gap-5">
                                  <div className="bg-pear w-24 h-1 mt-3"></div>
                                  <h5 className="text-white font-lato-regular">
                                    {detail}
                                  </h5>
                                </div>
                              ) : (
                                <div className="flex flex-row gap-5">
                                  <div className="border-b-2 border-dotted w-24 h-1 mt-3"></div>
                                  <h5 className="text-white font-lato-regular">
                                    {detail}
                                  </h5>
                                </div>
                              )}
                            </div>
                          ))}

                        {Array.isArray(data.subtabs) &&
                          data.subtabs.map((element, no) => (
                            <div key={no}>
                              <img
                                src={`${
                                  process.env.REACT_APP_LOCAL_URL
                                }/${element.images.replace(/\\/g, "/")}`}
                                alt={element.title}
                                 
                              />
                            </div>
                          ))}
                      </div>
                    );
                  })}

                {apidata
                  ?.filter((ele) => ele.tabName === "Cohort-wise job creation")
                  .map((ele, index) => (
                    <div className="blade-top-padding-sm">
                      <div>
                        <h1 className="font-lato-bold text-white py-4">
                          {ele.tabName}
                        </h1>
                        <h3 className="font-lato-regular text-white pb-3">
                          {ele.desc}
                        </h3>
                      </div>

                      <div className="flex gap-9 pt-5 w-full  xl:w-fit border-b border-white">
                        {Array.isArray(ele.subtabs) &&
                          ele.subtabs.map((elems, index) => {
                            const stateKey = elems.title;

                            return (
                              <div
                                key={index}
                                className="flex flex-row gap-3 border-b-4 pb-4 hover:border-pear"
                              >
                                <div
                                  className={`w-8 h-8 border-white  bg-[#D7DF23] ${
                                    subtabsState !== stateKey
                                      ? "filter grayscale-[0.9]"
                                      : ""
                                  }`}
                                ></div>

                                <button
                                  onClick={() => {
                                    setsubtabsState(stateKey);
                                  }}
                                  className={`text-white font-lato-regular sm:text-xl text-lg whitespace-nowrap ${
                                    subtabsState === stateKey ? "font-bold" : ""
                                  }`}
                                >
                                  {elems.title}
                                </button>
                              </div>
                            );
                          })}
                      </div>

                      <div className="blade-top-padding-xl ">
                        {Array.isArray(ele.subtabs) &&
                          ele.subtabs.map((elems) => {
                            const stateKey = elems.title;
                            return (
                              subtabsState === stateKey && (
                                <img
                                  key={stateKey}
                                  ref={imageRef}
                                  src={`${
                                    process.env.REACT_APP_LOCAL_URL
                                  }/${elems.images.replace(/\\/g, "/")}`}
                                  alt={elems.title}
                                  className="transition-opacity duration-500 ease-in-out xl:w-[85%]"
                                   
                                />
                              )
                            );
                          })}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default OurImpact;
