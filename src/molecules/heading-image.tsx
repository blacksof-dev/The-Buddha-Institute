import React from "react";

interface HeadinngImageProps {
  heading: string;
  highlight?: string;
  imageSrc: string;
  imageAlt: string;
  hrColor?: string;
  breakLine?: boolean;
}

const HeadingImage: React.FC<HeadinngImageProps> = ({
  heading,
  highlight,
  imageSrc,
  imageAlt,
  hrColor = "gray-400",
  breakLine = false,
}) => {
  return (
    <div>
      <h1 className="text-[#07393C] leading-tight font-lato-bold">
        {heading}
        {breakLine && <br className="hidden xl:block" />}
        <span className="text-green">{highlight}</span>
      </h1>
      <div className="mt-2">
        <hr className={`border-${hrColor} mb-4`} />
        <div className="blade-top-margin-sm">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingImage;
