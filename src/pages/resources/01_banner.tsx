import Banner from "molecules/banner";
import React from "react";
const ResourcesBanner = () => {
  return (
    <>
      <Banner
        bannerImage="/Resources/Resources-bg.jpg"
        mainHeading="Resources"
        subHeading="Knowledge, insights, news, and stories from the grassroots at your fingertips."
        buttonText=""
        category="resources"
        customClass="pb-5"
      />
    </>
  );
};

export default ResourcesBanner;
