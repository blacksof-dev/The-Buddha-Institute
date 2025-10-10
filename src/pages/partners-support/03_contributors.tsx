import React, { useEffect, useState } from "react";
import ContributorsData from "./contributors-array";
import ContributorsDonationData from "pages/donate-us/donation-carousal";
import axios from "axios";


export interface ApiResponse{
 heading:string;
 description:string;
}
export default function Contributors() {
   const [data, setData] = useState<ApiResponse| null>(null);
  
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/content/68e8eb33418c08bb2618dd0d"
          );
          const apiData:ApiResponse = response.data.data;
         
          setData(apiData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchDetails();
    }, []);
  
  return (
    <>
      <section className="blade-top-padding-lg  bg-[#FAF9F5] relative overflow-hidden">
        {/* <img
          src="/partnersAndSupport/donate-bgnew.png"
          className="absolute inset-0 2xl:top-96 left-auto sm:block hidden lg:top-40"
          alt=""
        /> */}
        <h1 className="sm:w-container-xl text-[#07393C] font-lato-bold sm:text-left text-center w-container">
         {data?.heading}
          <hr className="h-[1px] hidden border-b sm:block" />
          <h4 className=" text-black font-lato-regular mt-6 2xl:leading-[34.98px] sm:text-left text-center">
              {data?.description}
          </h4>
        </h1>
        <div className="blade-bottom-padding">
          <ContributorsDonationData />
        </div>
      </section>
    </>
  );
}
