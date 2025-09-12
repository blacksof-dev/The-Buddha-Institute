import FellowCard from "molecules/AllFellowCard";
import Button from "atoms/button";
import { Link } from "react-router-dom";
import arvind from "../../assets/BFP/Arvind.jpg";
import BelalAhmad from "../../assets/BFP/belal-ahmad.jpg";
import anupam from "../../assets/BFP/anupam-pandey.jpg";
import Srinivas from "../../assets/BFP/srinivas-rao.jpg";
import {  useEffect, useState } from "react";
import axios from "axios";
import React from "react";

type CardData={
  cover: string;
  fullName: string;
  linkedinLink: string;
  role: string;
  designation: string;
  address?: string;
  fulldesc?:string;
};

const Anchors = React.memo(() => {

  const [apidata, setapidata] = useState<CardData[]>([]);


  const fetchAllDeatails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_URL}/api/card/show/?role=anchorpool`
      );   
      // console.log(response.data.data);
      setapidata(response.data.data);
    } catch (error: any) {
      // console.log(error.message);
    }
  };

   useEffect(() => {
      
      fetchAllDeatails();
    },[]);

  return (
    <>
      <section className="blade-top-padding-xl bg-[#FAF9F5] blade-bottom-padding-xl  sm:px-10 md:px-0">
        <div className="w-container-xl text-center lg:text-start gsap-fade-in">
          <h1 className="font-lato-bold text-[#07393C] pb-2">
            Anchor — A go-to friend for Buddha Fellows
          </h1>
          <hr className="border-[#84848480] opacity-50" />
          <div className="flex flex-col lg:flex-row blade-top-padding-sm lg:gap-44">
            <div className=" w-full lg:w-[50%] ">
              <h4 className="text-black/80 font-lato-regular ">
                A prime pillar of the Fellowship framework, Anchors serve as a
                Fellow’s ongoing support system. With over a decade of
                experience in rural development, entrepreneurship, government
                liaising, and partnerships, they bring an invaluable
                understanding of the grassroots dynamics.
              </h4>
            </div>
            <div className=" w-full lg:w-[48%]  py-4 lg:py-0">
              <h4 className="text-black/80 font-lato-regular">
                Their role is to provide consistent support and help capitalize
                on opportunities throughout the Buddha Fellows’ entrepreneurial
                journey while ensuring alignment with the program’s goals.
              </h4>
            </div>
          </div>
        </div>
        <div className="w-container-xl blade-top-padding-lg">
          <h1 className="text-36 text-center lg:text-start font-lato-bold 2xl:pl-[2.5%] lg:pl-[4%]  text-[#07393C] pb-2 sm:border-l border-[#8CC1C0]">
            Our Anchor Pool
          </h1>
          {/* <hr className="border border-[#8CC1C0] pl-4 h-full d" /> */}
          <hr className="border-[#84848480]  lg:w-[28%]  md:block hidden" />
          <div className="sm:border-l border-[#84848480] ">
            <div className="  flex flex-row  flex-wrap gap-8 justify-center ">
          
              <FellowCard
                cardInfo={apidata}
                bgColor="#FFFFFF"
                borderColor="#FFFFFF"
                disablePopup={false}
              />
           
            </div>
          </div>
          <div className="pl-[2.5%] ">
            <div className="mt-4 h-10 md:blade-top-margin-sm md:h-14 w-fit   ">
              <Link to="/contact-us">
                <Button text={"Join our team"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});


export default Anchors;
