import React from "react";
import Banner from "molecules/banner";
import video from "./bg.mp4";

export default function HomeBanner() {


  return (
    <>
      <Banner
        videoSrc={video}
        mainHeading="Transformation through <br/> Development Entrepreneurship"
        overlayVideo="bg-black/50 absolute inset-0  sm:block hidden "
        subHeading=""
      />
                              
    </>
  );
}
