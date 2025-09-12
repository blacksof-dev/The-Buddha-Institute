import React, { useEffect, useRef, useState } from "react";
import "./style.css";
// import home_map_img from "../../assets/home/home_map_img.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";
import india_map from "../../assets/home/india_map.svg";
import Mappoints from "../../assets/Impact/Mappoints.png";
import axios from "axios";

type MapDetails = {
  digit: string;
  description: string;
};
const Impact = () => {
  const [activetooltip, setactivetooltip] = useState(null);
  const [mapapidata, setmapapidata] = useState<MapDetails[]>();

  const handleTooltipClick = (id: any) => {
    setactivetooltip(id);
  };

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/mapDetails/show`
      );
      if (response.status !== 200) {
        // console.log("Some error");
      } else {
        // console.log(response.data.data);
        setmapapidata(response.data.data);
      }
    } catch (error: any) {
      // console.log("Some Error Occur" , error.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <section className="blade-top-padding-lg blade-bottom-padding-lg gsap-fade-in bg-[#FFFBEF]">
        <div className="w-container">
          <div>
            <h1 className=" font-lato-bold text-[#07393C] border-b-2 border-gray-300 pb-3">
              Impact on tackling poverty, unemployment, and climate change since
              2018
            </h1>
            <div className=" flex lg:flex-row flex-col justify-between ">
              <div className="border-l   border-[#84848480] blade-top-margin-sm">
                {mapapidata?.map((elem, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="px-5">
                        <h2 className="font-lato-bold  text-[#8DC63F]">
                          {elem.digit}
                        </h2>
                        <h3 className="font-lato-bold  text-[#22574D]">
                          {elem.description}
                        </h3>
                      </div>
                      <span className="block last:hidden h-[1px] w-[5rem] bg-[#84848480] my-3"></span>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className=" xl:w-[70%]  blade-top-padding-lg lg:pt-0">
                <div className=" xl:ms-[25%] relative">
                  <img src={india_map} className="w-full h-full lg:p-9 " />

                  <div
                    className={`absolute  w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%] left-[37%] top-[20%]   lg:left-[39%] lg:top-[23%] rounded-full ${
                      activetooltip == "tool1" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool1")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full  h-full "
                      id="tool1"
                    />
                    <ReactTooltip
                      anchorId="tool1"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        // fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">UttaraKhand</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          4 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          629 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          1071 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute hover:[999] w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%] left-[28%] top-[25%]  lg:left-[30%] lg:top-[27%] rounded-full ${
                      activetooltip == "tool2" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool2")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool2"
                    />
                    <ReactTooltip
                      anchorId="tool2"
                      place="right"
                      className=" font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "14px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Haryana</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          2 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          33 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          1000 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute  w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[40%] top-[30%]  lg:left-[40%] lg:top-[32%] rounded-full ${
                      activetooltip == "tool3" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool3")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool3"
                    />
                    <ReactTooltip
                      anchorId="tool3"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Uttar Pradesh</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          1 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          460 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          1300 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute  w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[58%] top-[36%]  lg:left-[57%] lg:top-[37%] rounded-full ${
                      activetooltip == "tool4" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool4")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool4"
                    />
                    <ReactTooltip
                      anchorId="tool4"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Bihar</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          1 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          20 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          200 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute  w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[47%] top-[51%] lg:left-[49%] lg:top-[50%] rounded-full ${
                      activetooltip == "tool87" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool87")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool87"
                    />
                    <ReactTooltip
                      anchorId="tool87"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Chattisgarh</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          2 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          162 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          10108 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[56%] top-[42%]  lg:left-[58%] lg:top-[45%] rounded-full ${
                      activetooltip == "tool6" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool6")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool6"
                    />
                    <ReactTooltip
                      anchorId="tool6"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Jharkhand</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          2 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          67 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          2250 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[65%] top-[45%]  lg:left-[65%] lg:top-[45%] rounded-full ${
                      activetooltip == "tool7" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool7")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool7"
                    />
                    <ReactTooltip
                      anchorId="tool7"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">West Bengal</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          2 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          116 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          8480 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[80%] top-[32%]  lg:left-[78%] lg:top-[34%] rounded-full ${
                      activetooltip == "tool8" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool8")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool8"
                    />
                    <ReactTooltip
                      anchorId="tool8"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Assam</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          2 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          16 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          600 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[36%] top-[63%]  lg:left-[37%] lg:top-[62%] rounded-full ${
                      activetooltip == "tool10" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool10")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool10"
                    />
                    <ReactTooltip
                      anchorId="tool10"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Telangana</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          1 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          7 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          1200 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[37%] top-[72%]  lg:left-[38%] lg:top-[70%] rounded-full ${
                      activetooltip == "tool11" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool11")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool11"
                    />
                    <ReactTooltip
                      anchorId="tool11"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Andhra Pradesh</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          7 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          432 Jobs created
                        </li>
                         <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                         29970 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]    left-[28%] top-[90%]   lg:left-[30%] lg:top-[88%] rounded-full ${
                      activetooltip == "tool12" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool12")}
                  >
                    <img
                      src={Mappoints}
                      className="w-full h-full "
                      id="tool12"
                    />
                    <ReactTooltip
                      anchorId="tool12"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Kerala</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          7 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          288 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          3454 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[23%] top-[75%]  lg:left-[26%] lg:top-[72%] rounded-full ${
                      activetooltip == "tool13" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool13")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool13"
                    />
                    <ReactTooltip
                      anchorId="tool13"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Karnataka</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          4 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          127 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          2660 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[19%] top-[58%]  lg:left-[25%] lg:top-[58%] rounded-full ${
                      activetooltip == "tool14" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool14")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool14"
                    />
                    <ReactTooltip
                      anchorId="tool14"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Maharashtra</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          10 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          285 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          29872 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[15%] top-[33%]  lg:left-[20%]  lg:top-[33%] rounded-full ${
                      activetooltip == "tool15" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool15")}
                  >
                    <img
                      src={Mappoints}
                      className="w-full h-full "
                      id="tool15"
                    />
                    <ReactTooltip
                      anchorId="tool15"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Rajasthan</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          7 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          205 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          18650 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute   w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%] left-[11%]  top-[45%]   lg:left-[14%] lg:top-[47%] rounded-full ${
                      activetooltip == "tool16" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool16")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool16"
                    />
                    <ReactTooltip
                      anchorId="tool16"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Gujarat</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          3 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          35 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          2080 Families impacted
                        </li>
                      </ul>
                    </ReactTooltip>
                  </div>

                  <div
                    className={`absolute  w-[3%] h-[3%]  2xl:w-[3%] 2xl:h-[3%]   left-[29%] top-[45%]  lg:left-[31%] lg:top-[45%] rounded-full ${
                      activetooltip == "tool287" ? " z-50 " : " z-10"
                    }`}
                    onMouseEnter={() => handleTooltipClick("tool287")}
                  >
                    <img
                      src={Mappoints}
                      className=" w-full h-full "
                      id="tool287"
                    />
                    <ReactTooltip
                      anchorId="tool287"
                      place="right"
                      className="font-lato-bold"
                      style={{
                        whiteSpace: "pre-line",
                        color: "black",
                        backgroundColor: "white",
                        fontSize: "15px",
                      }}
                    >
                      <ul>
                        <li className="text-teal">Madhya Pradesh</li>
                        <li className="flex items-center">
                          <span className="inline-block w-2 h-2  mr-2 bg-black rounded-lg "></span>
                          1 Buddha Fellows
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          13 Jobs created
                        </li>
                        <li className="flex items-center mt-1">
                          <span className="inline-block w-2 h-2 bg-black mr-2 rounded-lg"></span>
                          700 Families impacted
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
    </>
  );
};

export default Impact;
