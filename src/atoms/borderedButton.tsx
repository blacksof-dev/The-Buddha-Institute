interface MyButtonProps {
  text: string;
}
const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <button className=" cursor-pointer hover:scale-95 transition-all duration-500">
      <div className="flex group">
        <div className="font-lato-regular border-black   border-[1px] pl-2 pr-2 transition-all duration-700">
          <h4 className="transition-all duration-700  leading-none py-2">
            {props.text}
          </h4>{" "}
        </div>
        <h4 className="pl-1 pr-1  flex items-center  border-black   border-l-0 border-[1px] transition-all duration-700">
          {/* <img src="/EngageWithUs/right-arrow.svg" alt="arrow"></img> */}
          <svg
            className="h-6 group-hover:fill-whit transition-all duration-700"
            width="8"
            height="15"
            viewBox="0 0 9 15"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" "
              d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
              fill=""
            />
          </svg>
        </h4>
      </div>
    </button>
  );
};

export default MyButton;
