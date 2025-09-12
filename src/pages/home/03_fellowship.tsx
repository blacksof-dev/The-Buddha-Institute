import React from "react";

const Fellowship = React.memo(() => {
  const data = [
    {
      icon: "/Home/arrow.png",
      cardBgClass: "bg-[#D7DF23]",
      title: "Stubborn poverty",
      titleClass: "text-[#07393C]",
      desc1: "165M",
      desc2: "Poor earning < INR 200/day",
      descClasses: "text-black",
    },
    {
      icon: "/Home/arrow.png",
      cardBgClass: "bg-[#D7DF23]",
      title: "Demographic reality",
      titleClass: "text-[#07393C]",
      desc1: "70%",
      desc2: "16-64 year underemployed",
      descClasses: "text-black",
    },
    {
      icon: "/Home/arrow.png",
      cardBgClass: "bg-[#D7DF23]",
      title: "People leaving villages",
      titleClass: "text-[#07393C]",
      desc1: "50%",
      desc2: "52M tribals migrating to cities",
      descClasses: "text-black",
    },
    {
      icon: "/Home/arrow.png",
      cardBgClass: "bg-[#22574D]",
      title: "Our catalysts for change",
      titleClass: "text-[#D7DF23]",
      // desc1: '165M',
      desc2:
        "Development Entrepreneurs having revenue less than INR 1 crore, having the potential to impact 25,000 poor",
      descClasses: "text-white",
    },
  ];

  return (
    <section className="gsap-fade-in w-container  bg-[#FFFFFF]">
      <div className="md:flex items-end justify-between border-b border-[#84848480] border-opacity-50">
        <h1 className="pb-3 font-lato-bold text-[#07393C]">
          The Buddha Institute – Shaping change-makers, enabling change
        </h1>
        {/* <h4 className='py-3 pr-10 md:pl-5 md:border-l text-[#848484] border-[#84848480] font-lato-regular'>Buddha Fellowship</h4> */}
      </div>
      <h4 className="font-lato-regular md:w-[90%]  xl:my-8 my-4">
        According to the <b>World Bank,</b> India is home to 165 million poor
        earning less than $2.15 (INR 200) per day. Two-third (70%) of India’s
        working-age population earns less than INR 10,000 per month. The rapid
        rise in urban migration of the rural and tribal communities is slowing
        India’s path to inclusive growth. While an entrepreneurship boom spreads
        through India, it is largely limited to urban entrepreneurs
      </h4>
      <h4 className="font-lato-regular md:w-[90%]  blade-bottom-margin-sm">
        The Buddha Institute, via its flagship Buddha Fellowship Program,
        nurtures Development Entrepreneurs, helping them scale their{" "}
        <b>
          {" "}
          businesses that treat rural India as “centers of value addition”, not
          merely as sources of raw material.{" "}
        </b>{" "}
        These businesses help reduce poverty, provide employment opportunities
        to the poor, and discourage migration, thereby enabling villages to
        become self-sufficient, prosperous and happy.
      </h4>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:pr-10">
        {data.map((elem, index) => {
          return (
            <div
              key={index}
              className={`${elem.cardBgClass} h-52 sm:h-[277px] py-5 flex flex-col justify-between`}
            >
              <div
                className={`w-container-sm sm:w-container flex items-center gap-x-2 font-lato-bold ${elem.titleClass}`}
              >
                {/* <img src="/Home/arrow.png" alt="" /> */}
                <h4>{elem.title}</h4>
              </div>
              <div
                className={`w-container-sm sm:w-container font-lato-bold ${elem.descClasses}`}
              >
                <h3 className="text-36">{elem.desc1}</h3>
                <h4 className=" 2xl:w-full xl:w-[90%]">{elem.desc2}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Fellowship;
