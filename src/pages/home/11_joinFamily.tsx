import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import arrow from "assets/home/joinFamily/arrow.svg";
import ApplicationProcess from "molecules/applicationPopup";

type JoinFamilyData = {
  _id: string;
  heading: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
};

const JoinFamily = React.memo(() => {
  const [joinData, setJoinData] = useState<JoinFamilyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const data = [
    { title: "Donate", link: "/donate-us" },
    {
      title: "Become a Buddha Fellow",
      link: "https://application.thebuddhainstitute.org/signin",
    },
    { title: "Become a Mentor", link: "/contact-us" },
    { title: "Join our team", link: "/contact-us" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/joinFamily/alldetails");
        if (res.data.status === "success" && res.data.message.length > 0) {
          setJoinData(res.data.message[0]);
        }
      } catch (error) {
        console.error("Error fetching Join Family data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="blade-top-padding-lg blade-bottom-padding-lg bg-[#1A8482]">
        <div className="w-container text-white text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg bg-[#1A8482]">
      <section className="w-container gsap-fade-in">
        <div className="md:flex items-end justify-between border-b border-[#FFFFFF]">
          <h1 className="pb-3 font-lato-bold text-[#FFFFFF]">
            {joinData?.heading || "Join the family"}
          </h1>
        </div>

        <div className="text-white xl:mt-9 mt-4 lg:w-full">
          {joinData?.description ? (
            <div
             ><h5  className="font-lato-regular"  dangerouslySetInnerHTML={{ __html: joinData.description }}/></div>
          ) : ""
    }
        </div>

        {/* Desktop Image */}
        {joinData?.desktopImage && (
          <div className="blade-top-margin-sm lg:block hidden">
            <img
              src={`http://localhost:3000/${joinData.desktopImage.replace(/\\/g, "/")}`}
              alt="Team of Buddha Institute"
            />
          </div>
        )}

        {/* Mobile Image */}
        {joinData?.mobileImage && (
          <div className="blade-top-margin-sm lg:hidden block">
            <img
              src={`http://localhost:3000/${joinData.mobileImage.replace(/\\/g, "/")}`}
              alt="Team of Buddha Institute Mobile"
            />
          </div>
        )}

        {/* Grid Links */}
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
