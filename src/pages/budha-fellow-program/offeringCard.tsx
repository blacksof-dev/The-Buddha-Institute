import React from "react";

type OfferingProps = {
  desc: string;
  revenue?: string;
  category?: string;
  image?: string;
};

export const OfferingCard = ({
  desc,
  revenue,
  category,
  image,
}: OfferingProps) => {
  return (
    <div
      className={` sm:w-[35%] ${
        category === "impact" ? "lg:w-[40%] sm:w-[30%]" : "lg:w-[25%]"
      }`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-sm bg-darkGreen">
        <img src={image || ""} alt="Offering Image"   />
      </div>
      {category === "impact" ? (
        <div className=" py-2">
          <h4 className="text-[#07393C] font-lato-bold">{desc}</h4>
          <h4 className="text-[#07393C] font-lato-regular">{revenue}</h4>
        </div>
      ) : (
        <div className="mt-4">
          <h5 className="text-black font-lato-regular">{desc}</h5>
          <h5 className="text-black font-lato-regular">{revenue}</h5>
        </div>
      )}
    </div>
  );
};
