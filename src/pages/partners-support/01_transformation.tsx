import Banner from "molecules/banner";
import React from "react";

export default function Transformation() {
  return (
    <>
      <Banner
        bannerImage="/partnersAndSupport/partners-banner.png"
        mainHeading="‘Together’ is how transformation begins"
        subHeading="Every journey is enriched by the company we keep. Our goals gain strength from the unwavering faith and support of our valued partners, supporters, and allies."
        customClass=" 2xl:max-w-[52%] lg:max-w-[90%] xl:max-w-[70%]"
        buttonText="Become a Donor"
        buttonLink="/donate-us"
        buttonIcon="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
        // buttonOnClick={() => console.log("Button Clicked!")}
      />
    </>
  );
}
