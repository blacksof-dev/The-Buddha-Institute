import React from "react";

const Sector = React.memo(() => {
  return (
    <section className="mt-6 lg:blade-top-margin-sm w-container blade-bottom-padding-lg">
      <div className="gsap-fade-in">
        <h3 className="text-[#07393C] text-36 font-lato-bold pb-2  ">
       Sectors of Operation
        </h3>
        
        <div className="md:block hidden  w-full ps-10">
          <img
            src="/BudhaFellowProgram/sectors.svg"
            alt=""
            className="w-full h-full"
            
          />
        </div>
        <div className="block md:hidden blade-top-margin-sm ">
          <div className="w-full">
            <img
              src="/BudhaFellowProgram/operation.svg"
              alt="Sector Touched Img"
              className="w-full h-full "
              
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Sector;