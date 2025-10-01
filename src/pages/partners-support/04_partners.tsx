import React, { useEffect, useState } from "react";
import HeadingImage from "molecules/heading-image";
import partnerWithUs from "../../assets/partnersSupporters/partner-with-us.jpg";
import { Link } from "react-router-dom";
import Button from "atoms/button";
import axios from "axios";

interface ApiResponse {
  image:string;
  heading:string;
  subheading:string;
  description:string;
}

export default function Partners() {
   const [data, setData] = useState< ApiResponse | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/common-layout");
        const apiData:  ApiResponse = response.data.data;
        console.log("Fetched API Data:", apiData);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, []);
  return (
    <>
      <section className=" bg-[#FAF9F5]">
        <div className="w-container-xl ">
          <HeadingImage
            heading={data?.heading ?? ""}
            highlight=""
            imageSrc={data?.image ?? ""}
            imageAlt="working ladies"
            hrColor="gray-400"
          />

          <div className="blade-bottom-padding-lg md:flex  justify-between ">
            <div className="blade-top-padding-sm">
              <h2 className="text-green font-lato-bold 2xl:text-4xl">
                {data?.subheading}
              </h2>
              <h3 className="mt-3 font-lato-regular sm:mt-6 sm:max-w-[70%] blade-bottom-padding-sm">
               {data?.description}
              </h3>
            </div>
            
              <div className=" h-10 w-[16rem] sm:blade-top-margin-sm md:h-14 md:w-[23rem] ">
                  <Link to="/contact-us">
                    <Button text={"Become a Donor"} />
                  </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}
