// import { OfferingCard } from "pages/budha-fellow-program/offeringCard";
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import india_map from "assets/home/india_map.svg";
import Mappoints from "assets/Impact/Mappoints.png";
import axios from "axios";

type MapDetails = {
  digit: string;
  description: string;
};

type MapPoint = {
  _id: string;
  stateName: string;
  buddhaFellows: number;
  jobsCreated: number;
  familyImpacted: number;
};

const Mapping = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [mapApiData, setMapApiData] = useState<MapDetails[]>([]);
  const [data, setData] = useState<MapPoint[]>([]);

  const handleTooltipClick = (id: string) => {
    setActiveTooltip(id);
  };

  // ✅ Fetch map details
  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/show`
      );
      if (response.status === 200 && response.data?.data) {
        setMapApiData(response.data.data);
      }
    } catch (error: any) {
      console.log("Error fetching map details:", error.message);
    }
  };

  // ✅ Fetch map points
  const fetchMapPoints = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/map-points` 
      );
      console.log("Map Points:", response);
      if (response.status === 200 && response.data?.data) {
        setData(response.data.data);
        console.log("Map Points:", response.data.data);
      }
    } catch (error: any) {
      console.log("Error fetching map points:", error.message);
    }
  };

  // ✅ Run once safely (no infinite loop)
  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        if (!ignore) {
          await fetchDetails();
          await fetchMapPoints();
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    // cleanup for React 18 strict mode
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="bg-[#FFFBEF]">
      <div className="w-container-xl blade-top-padding-lg blade-bottom-padding-lg">
        <h1 className="text-[#07393C] font-lato-bold border-b border-[#84848480] py-3 lg:py-0">
          Mapping the collective impact{" "}
          <span className="text-[#3AB54B]">by our Buddha Fellows</span>
        </h1>

        <div className="flex lg:flex-row flex-col gap-4 lg:gap-40 blade-top-padding-sm blade-bottom-padding-sm">
          <div className="w-full lg:w-[50%]">
            <h4 className="font-lato-regular text-black/80 ">
              True potential, when nurtured, creates lasting impact. At the
              Buddha Institute, our Development Entrepreneurs are driving
              India’s grassroots to empowerment at scale through their diverse,
              innovative enterprises.
            </h4>
          </div>

          <div className="w-full lg:w-[50%]">
            <h4 className="font-lato-regular text-black/80 ">
              Rooted in compassion, they see rural India and its citizens as the
              “centers for value addition”. By generating stable employment
              opportunities and livelihoods right at ground zero, these
              Development Entrepreneurs are enabling dignified living while
              reducing rural migration across India.
            </h4>
          </div>
        </div>

        <div>
          <div className="flex lg:flex-row flex-col justify-between">
            {/* Desktop numbers section */}
            <div className="border-l lg:block hidden border-[#84848480] blade-top-margin-sm">
              {mapApiData.map((elem, index) => (
                <React.Fragment key={index}>
                  <div className="px-5">
                    <h2 className="font-lato-bold text-[#8DC63F]">
                      {elem.digit}
                    </h2>
                    <h3 className="font-lato-bold text-[#22574D]">
                      {elem.description}
                    </h3>
                  </div>
                  <span className="block last:hidden h-[1px] w-[5rem] bg-[#84848480] my-3"></span>
                </React.Fragment>
              ))}
            </div>

            {/* Mobile version */}
            <div className="lg:hidden blade-top-margin-sm border-l border-[#84848480]">
              <div className="grid lg:gap-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                {mapApiData.map((elem, index) => {
                  const isFullWidthItem =
                    elem.digit === "INR 20,000" || elem.digit === "4270 mt";
                  return (
                    <div
                      key={index}
                      className={`border-b border-[#84848480] p-4 ${
                        isFullWidthItem ? "col-span-2 sm:col-span-1" : ""
                      } ${
                        index === 0 || index === 4
                          ? "sm:border-r-0 border-r border-[#84848480]"
                          : ""
                      } ${index === 6 ? "border-b-0" : ""}`}
                    >
                      <h1 className="text-[#8DC63F] font-lato-bold text-nowrap sm:text-wrap">
                        {elem.digit}
                      </h1>
                      <h4 className="text-[#22574D] font-lato-bold">
                        {elem.description}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map section */}
            <div className="xl:w-[70%] blade-top-padding-lg lg:pt-0">
              <div className="xl:ms-[25%] relative">
                <img src={india_map} className="w-full h-full lg:p-9" alt="India Map" />

                {/* Example tooltip point */}
                <div
                  className={`absolute w-[3%] h-[3%] 2xl:w-[3%] 2xl:h-[3%] left-[37%] top-[20%] lg:left-[39%] lg:top-[23%] rounded-full ${
                    activeTooltip === "tool1" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleTooltipClick("tool1")}
                >
                  <img src={Mappoints} className="w-full h-full" id="tool1" />
                  <ReactTooltip
                    anchorId="tool1"
                    place="right"
                    className="font-lato-bold"
                    style={{
                      whiteSpace: "pre-line",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    <ul>
                      <li className="text-teal">UttaraKhand</li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-black rounded-lg" />
                        4 Buddha Fellows
                      </li>
                      <li className="flex items-center mt-1">
                        <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg" />
                        629 Jobs created
                      </li>
                      <li className="flex items-center mt-1">
                        <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg" />
                        1071 Families impacted
                      </li>
                    </ul>
                  </ReactTooltip>
                </div>

                <div
                  className={`absolute w-[3%] h-[3%] 2xl:w-[3%] 2xl:h-[3%] left-[28%] top-[25%] lg:left-[30%] lg:top-[27%] rounded-full ${
                    activeTooltip === "tool2" ? "z-50" : "z-10"
                  }`}
                  onMouseEnter={() => handleTooltipClick("tool2")}
                >
                  <img src={Mappoints} className="w-full h-full" id="tool2" />
                  <ReactTooltip
                    anchorId="tool2"
                    place="right"
                    className="font-lato-bold"
                    style={{
                      whiteSpace: "pre-line",
                      color: "black",
                      backgroundColor: "white",
                    }}
                  >
                    <ul>
                      <li className="text-teal">Haryana</li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 bg-black rounded-lg" />
                        2 Buddha Fellows
                      </li>
                      <li className="flex items-center mt-1">
                        <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg" />
                        33 Jobs created
                      </li>
                      <li className="flex items-center mt-1">
                        <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg" />
                        1000 Families impacted
                      </li>
                    </ul>
                  </ReactTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapping;
