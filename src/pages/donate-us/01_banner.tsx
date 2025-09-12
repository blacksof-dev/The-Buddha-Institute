import Banner from "molecules/banner";
import React from "react";

export default function Compassion() {
  return (
    <>
      <Banner
        bannerImage="/DonateUs/donate-updated.png"
        mainHeading="Compassion is the currency of transformation"
        subHeading=" Small acts of generosity lead to monumental change. By donating
              today, you’re joining a cause that aspires to free India from
              unemployment, poverty, and urban migration."
        buttonText="Donate from the USA"
        buttonLink="/donate-usa"
        overlayVideo="bg-gradient-to-t from-teal to-transparent absolute inset-x-0 h-[50%] bottom-0 sm:block hidden"
        customClass="2xl:max-w-[55%] xl:max-w-[75%] lg:max-w-[94%] "
        buttonIcon="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
    
        buttonTextTwo="Donate from India"
        buttonIconNew="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
        buttonLinkTwo="/donate-india"
       
      />
    </>
  );
}
