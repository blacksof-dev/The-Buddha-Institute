import React from "react";

interface HighlightHeadingProps {
  heading: string;
  spanText?: string;
  className?: string;
  spanClassName?: string;
}

const HighlightHeading: React.FC<HighlightHeadingProps> = ({
  heading,
  spanText,
  className = "",
  spanClassName = "",
}) => {
  return (
    <div className=" w-container-xl ">
      <h1 className={`text-[#07393C] font-lato-bold  ${className}`}>
        {heading}
        <span className={`text-[#39B54A] ${spanClassName}`}>{spanText}</span>
      </h1>
      <div className="border-b border-[#848484] border-opacity-50 lg:mt-0 mt-3"></div>
    </div>
  );
};

export default HighlightHeading;
