import React from "react";
import Offering from "./09_Offering";
import Sector from "./10_Sector";

const MainContainer = () => {
  return (
    <div className="bg-[#FAF9F5]">
      <div className="lg:ms-16 xl:ms-24 2xl:ms-36 3xl:ms-40 border-l lg:border-[#84848480] border-transparent">
        <Offering />
        <Sector />
      </div>
    </div>
  );
};

export default MainContainer;
