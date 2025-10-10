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
            src={
              imageSrc
                ? `http://localhost:3000/${String(imageSrc).replace(
                    /\\/g,
                    "/"
                  )}`
                : ""
            }
            alt="Partners and Supporters"
            className="h-[300px] sm:h-full w-full object-cover"
           loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingImage;
