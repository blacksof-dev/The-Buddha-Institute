import React from "react";
import Banner from "molecules/banner";
import bannerImage from "assets/Impact/Impact-bg.png";

const ImpactBanner = () => {
  return (
    <div>
      <Banner
        bannerImage={bannerImage}
        mainHeading="From aspirations to achievements"
        subHeading="Tracing the journey of change"
        buttonText="Join the family"
        buttonLink="/contact-us"
        overlayVideo="bg-gradient-to-t from-teal to-transparent absolute inset-x-0 h-[50%] bottom-0 sm:block hidden"
        customClass="2xl:max-w-[55%] xl:max-w-[75%] lg:max-w-[94%] "
        buttonIcon="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
        // buttonOnClick={() => console.log("Button Clicked!")}
        buttonTextTwo="Donate"
        buttonIconNew="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
        buttonLinkTwo="/donate-us"
        // buttonOnClickNew={() => console.log("Button Clicked!")}
      />
    </div>
  );
};

export default ImpactBanner;
