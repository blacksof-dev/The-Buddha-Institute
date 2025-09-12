import React from "react";

interface MyButtonProps {
  text: string;
  border?: boolean;
  textColor?: string;
  arrowColor?: string;
  classes?: string;
}

const button: React.FC<MyButtonProps> = (props) => {
  return (
    <button
      className={`group  w-full h-full ${props.classes} ${
        props.border ? "border-[1px] border-pear hover:border-none" : "bg-pear"
      } hover:bg-teal  transition-all duration-500  text-2xl flex justify-center items-center gap-2  px-4 py-3 font-lato-bold`}
    >
      <h4
        className={`${props.textColor} px-3 group-hover:-translate-x- transition-all duration-500 group-hover:text-white`}
      >
        {props.text}
      </h4>
      <svg
        className="sm:h-9 h-6  group-hover:translate-x- transition-all duration-500"
        width="8"
        height="15"
        viewBox="0 0 9 15"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${props.arrowColor} group-hover:fill-white transition-all duration-500 `}
          d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default button;
