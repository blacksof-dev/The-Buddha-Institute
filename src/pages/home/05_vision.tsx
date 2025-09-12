

import React from "react";
import VisionSwiper from "./vision_swiper";



const Vision = React.memo(() => {
  const data = [
    {
      logo: "/Home/vision/logo-1.png",
      title: "Vision",
      desc: "Shaping a progressive, inclusive India  and the world, through entrepreneurial  change-makers.",
    },
    {
      logo: "/Home/vision/logo-2.png",
      title: "Mission",
      desc: "Bring diverse stakeholders onto a single platform for nurturing ecosystems that add value for the greater good.",
    },
    {
      logo: "/Home/vision/logo-3.png",
      title: "Purpose",
      desc: "Build an institution of compassion and enlightenment that attracts enterprising men and women who are passionate about scripting social transformation.",
    },
  ];

  const goalData = [
    {
      id: "01",
      logo: "/Home/vision/goal-1.svg",
      desc: "Uplift 25 million lives (1/7th of India’s poorest).",
    },
    {
      id: "02",
      logo: "/Home/vision/goal-2.svg",
      desc: "Create 100,000 jobs.",
    },
    {
      id: "03",
      logo: "/Home/vision/goal-3.svg",
      desc: "Add USD 1 billion to the rural economy.",
    },
    {
      id: "04",
      logo: "/Home/vision/goal-4.svg",
      desc: "Reduce the carbon footprint of India substantially.",
    },
    {
      id: "05",
      logo: "/Home/vision/goal-5.svg",
      desc: "Nurture 1000 Development Entrepreneurs, with women entrepreneurs comprising a <br class='block'/> significant proportion.",
    },
  ];

  return (
    <section className="gsap-fade-in blade-top-padding-lg   bg-[#FFFBEF]">
      <section className="w-container">
        <h1 className="font-lato-bold text-[#07393C]">Vision and Mission</h1>
        <div className="w-full h-[1px] bg-[#84848480] mt-2" />
        <div className="grid grid-cols-1">
          <div className="">
           
              <VisionSwiper />
           
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-7 xl:gap-14 ">
            {data.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-5 blade-top-padding-sm   ${
                    index === 2
                      ? "border-r border-transparent"
                      : "md:border-r md:border-[#84848480] md:px-4"
                  }`}
                >
                  <h3 className=" font-lato-bold text-[#07393C]">
                    {elem.title}
                  </h3>
                  <h4
                    className="font-lato-regular "
                    dangerouslySetInnerHTML={{ __html: elem.desc }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className='w-full h-[1px] bg-[#84848480] blade-top-margin-sm ' /> */}
        <div className="pt-5 md:blade-top-margin-sm blade-bottom-padding-lg">
          <h3 className="2xl:text-4xl font-lato-bold text-[#07393C]">
            Our goals by 2030
          </h3>
          <div className="sm:blade-top-margin-sm blade-top-margin grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 !w-full ">
            {goalData.map((elem, index) => {
              return (
                <div
                  className="flex items-center gap-5 w-full sm:w-3/4 lg:w-full "
                  key={index}
                >
                  <div className="shrink-0">
                    <img src={elem.logo} alt="" />
                  </div>
                  <h4
                    className="font-lato-regular"
                    dangerouslySetInnerHTML={{ __html: elem.desc }}
                  />
                </div>
              );
            })}
          </div>
         
        </div>
      </section>
    </section>
  );
});

export default Vision;
