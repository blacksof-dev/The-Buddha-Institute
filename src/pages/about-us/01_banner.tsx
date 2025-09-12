import Banner from "molecules/banner";
import React from "react";
import AboutUs_bg from "../../assets/about/AboutUs_bg.png";


export default function AboutUsBanner() {
  return (
    <>
      <Banner
        bannerImage="/Buddha-Fellows/budha-banner-Final.jpg"
        mainHeading="The Buddha Institute"
        subHeading="A nurturing ecosystem for Development Entrepreneurs where compassion enables empowerment, experience enables progress, and resilience enables transformation."
        customClass=" 2xl:max-w-[52%] lg:max-w-[90%] xl:max-w-[70%]"
      />
    </>
  );
}
