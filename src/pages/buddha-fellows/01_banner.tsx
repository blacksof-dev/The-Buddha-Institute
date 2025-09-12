import Banner from "molecules/banner";
import React from "react";
import AboutUs_bg from "../../assets/about/AboutUs_bg.png";
export default function BuddhaFellowsBanner() {
  return (
    <>
      <section>
        <Banner
          bannerImage={AboutUs_bg}
          mainHeading="Buddha Fellows"
          subHeading="Drivers of change, levers of empowerment."
          category="Buddha Fellows"
          customClass=""
        />
      </section>
    </>
  );
}
