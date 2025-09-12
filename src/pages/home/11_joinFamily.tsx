import React, { useState } from "react";
import { Link } from "react-router-dom";
import team from "assets/home/joinFamily/image.png";
import mobileView from "assets/home/joinFamily/mobileView.jpg";
import arrow from "assets/home/joinFamily/arrow.svg";
import ApplicationProcess from "molecules/applicationPopup";

const JoinFamily = React.memo(() => {
  const data = [
    {
      title: "Donate",
      link: "/donate-us",
    },
    {
      title: "Become a Buddha Fellow",
      link: "https://application.thebuddhainstitute.org/signin",
    },
    {
      title: "Become a Mentor",
      link: "/contact-us",
    },
    {
      title: "Join our team",
      link: "/contact-us",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg bg-[#1A8482]">
      <section className="w-container gsap-fade-in">
        <div className="md:flex items-end justify-between border-b border-[#FFFFFF]">
          <h1 className="pb-3 font-lato-bold text-[#FFFFFF]">
            Join the family
          </h1>
        </div>

        <div className="text-white xl:mt-9 mt-4 lg:w-full">
          <h4 className="font-lato-regular">
            At The Buddha Institute, we are a closely-knit family of Fellows, Mentors, Anchors, and Donors. Inspired by a common vision and purpose, we are striving to enable India’s transformation.
          </h4>
          <h4 className="font-lato-bold text-[#D6DF20] mt-5">
            Come, join our family.
          </h4>
        </div>

        <div className="blade-top-margin-sm lg:block hidden">
          <img src={team} alt="Team of Buddha Institute" />
        </div>

        <div className="blade-top-margin-sm lg:hidden block">
          <img src={mobileView} alt="Team of Buddha Institute Mobile" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 blade-top-margin-sm">
          {data.map((elem, index) => {
            if (elem.title === "Become a Buddha Fellow") {
              return (
                <div
                  key={index}
                  onClick={() => setShowPopup(true)}
                  className="cursor-pointer h-[120px] hover:bg-[#D6DF20] bg-white transition-all duration-500 flex items-center justify-between font-lato-regular px-5"
                >
                  <h4 className="!font-medium">{elem.title}</h4>
                  <div>
                    <img src={arrow} alt="Arrow" />
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={elem.link}
                  target="_blank"
                  className="h-[120px] hover:bg-[#D6DF20] bg-white transition-all duration-500 flex items-center justify-between font-lato-regular px-5"
                >
                  <h4 className="!font-medium">{elem.title}</h4>
                  <div>
                    <img src={arrow} alt="Arrow" />
                  </div>
                </Link>
              );
            }
          })}
        </div>

        {showPopup && <ApplicationProcess onclose={() => setShowPopup(false)} />}
      </section>
    </section>
  );
});

export default JoinFamily;
