import axios from "axios";
import Banner from "molecules/banner";
import React, { useEffect, useState } from "react";
interface ApiData {
  _id: string;
  bannerImage: string;
  heading: string;
  description: string;
}

export default function Transformation() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/banner-data/68dd23ef4dcf1467de30ca4a");
        const apiData: ApiData = response.data.data;
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
      <Banner
        bannerImage={data?.bannerImage}
        mainHeading={data?.heading}
        subHeading={data?.description}
        customClass="2xl:max-w-[52%] lg:max-w-[90%] xl:max-w-[70%]"
        buttonText="Become a Donor"
        buttonLink="/donate-us"
        buttonIcon="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
      />

    </>
  );
}
