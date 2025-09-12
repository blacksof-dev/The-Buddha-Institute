import React, { useState } from "react";
import Button from "atoms/button";
import { Link } from "react-router-dom";
import logo1 from "assets/home/JoinUs/logo1.svg";
import logo2 from "assets/home/JoinUs/logo2.svg";
import logo3 from "assets/home/JoinUs/logo3.svg";
import logo4 from "assets/home/JoinUs/logo4.svg";
import { useNavigate } from "react-router-dom";
import ApplicationProcess from "molecules/applicationPopup";

const JoinUs = React.memo(() => {
  const [showPopup, setshowPopup] = useState(false);

  const data = [
    {
      logo: logo1,
      desc: "are progressive in their thinking and compassionate towards the  underprivileged communities",
    },
    {
      logo: logo2,
      desc: "are passionate about alleviating suffering   and resilient in realizing  their vision",
    },
    {
      logo: logo3,
      desc: "take risks, have a problem-solving attitude, can deal with ambiguity and are dogged  in perseverance",
    },
    {
      logo: logo4,
      desc: "are innovative in building self-reliant entrepreneurial communities",
    },
  ];

  return (
    <section className="gsap-fade-in  w-container blade-bottom-padding-lg ">
      <h2 className="text-36 font-lato-bold mt-9 xl:mt-16 text-[#07393C]">
        We mentor Development Entrepreneurs who:
      </h2>
      <div className=" mt-6  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-14  !w-full ">
        {data.map((elem, index) => {
          return (
            <div
              className="flex gap-5  w-full  items-center sm:w-3/4 lg:w-full"
              key={index}
            >
              <div className="shrink-0">
                <img src={elem.logo} alt="mentor Development Entrepreneurs" className="" />
              </div>
              <h4 className="font-lato-regular">{elem.desc}</h4>
            </div>
          );
        })}
      </div>

      <div className="  blade-top-margin h-10 w-52 md:blade-top-margin-sm md:h-14 md:w-60 ">
    
          <div onClick={() => setshowPopup(true)} className="cursor-pointer">

          <Button  text={"Join us"} />
          </div>
      

        {showPopup && <ApplicationProcess onclose={() => setshowPopup(false)} />}
      </div>
    </section>
  );
});

export default JoinUs;
