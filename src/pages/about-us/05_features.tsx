import React, { useRef, useState } from "react";

// import { CSSTransition, SwitchTransition } from 'react-transition-group'

const data = [
  {
    id: 0,
    title: "Awards and recognition",
    para: "Our commitment to technical excellence extends to our partnerships with distributors. We provide comprehensive technical expertise to help distributors fully grasp the breadth of our solutions, including product diversity, technical specifications, and unique advantages.",
    img: "",
  },
  {
    id: 1,
    title: "Membership in Policy Making Bodies",
    para: "Our solution implementation service empowers you to deploy cutting-edge cardiovascular solutions in a sustainable manner. Our services encompass installation, application training, and educational support to ensure successful integration.",
    content: [
      {
        img: "/Home/vision/01.png",
        desc: "Member, Advisory Committee, Promotion of Producers Enterprises, <b>Ministry of Rural Development,</b> Government of India (2017-ongoing).",
      },
      {
        img: "/Home/vision/02.png",
        desc: "Member, <b>Steering Committee</b> on Rural Development and Rural Governance, <b>Planning Commission</b> (January 2011–March 2012).",
      },
      {
        img: "/Home/vision/03.png",
        desc: "Member, Working Group to the <b>National Advisory Council</b> , September 2012-July 2013.",
      },
    ],
  },
  {
    id: 2,
    title: "Membership, Selection Committees",
    para: "Our dedicated team offers expert guidance to enhance process efficiency and optimize cardiovascular technology, resulting in improved overall performance.",
    content: [
      {
        img: "/Home/vision/01.png",
        desc: "Chairman, National Selection Committee, Hubert Humphrey North South Fellowship, 2016.",
      },
      {
        img: "/Home/vision/02.png",
        desc: "Member, National Selection Committee, Ford Foundation International Fellowship, 2010.",
      },
      {
        img: "/Home/vision/03.png",
        desc: "Member, National Selection Committee, Ashoka Fellowship (2011 and 2012).",
      },
    ],
  },
  {
    id: 3,
    title:
      "Board Membership, Academic Institutions and Non-Governmental Organizations",
    para: "While our solutions are renowned for their reliability, our dedicated team conducts routine inspections to ensure they consistently meet your clinical requirements and performance expectations.",
    content: [
      {
        img: "/Home/vision/01.png",
        desc: "Member, Academic Council, Indian School of Development Management (ISDM), New Delhi.",
      },
      {
        img: "/Home/vision/02.png",
        desc: "Member, Strategic Advisory Board, XIM University, Bhubaneswar.",
      },
      {
        img: "/Home/vision/03.png",
        desc: "Member, Governing Board, Mobile Crèches, Delhi",
      },
    ],
  },
  {
    id: 4,
    title: "Publications",
    para: "We're committed to keeping your cardiovascular technology current and up-to-date. Our team collaborates with you to identify the most suitable and advanced technology suite tailored to your specific cardiovascular solution needs.",
    content: [
      {
        img: "/Home/vision/01.png",
        desc: "Human Resource Strategies to Build Pro-Poor Institutions (co-authored, published by McGraw Hill Education).",
      },
      {
        img: "/Home/vision/02.png",
        desc: "Book of Aspiration: Inspirational Memoirs from Social Leaders (co-authored, published by Notion Press).",
      },
      {
        img: "/Home/vision/03.png",
        desc: "Book of Aspiration (Vol 2): Reflections from Changemakers from Contemporary India.",
      },
    ],
  },
];

const Features = () => {
  const [selected, setSelected] = useState<number>(-1);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section className="services-section w-full lg:w4/5 bg-lightgray">
      <div className="w-container blade-bottom-padding-lg  ">
        <div className="bggreen  flex-col lg:flex-row items-start gap-x-20 lg:gap-x-10 xl:gap-x-16 min-[1440px]:gap-x-28 gap-y-6 md:gapy-12 relative lg:w-full">
          <div className="grid w-full bggreen  lg:wfit gap-y-7 flex-col lg:h[850px]  sm:px-4 lg:px-0">
            {data.map((item, index) => (
              <div
                className={` ${
                  selected === index
                    ? "bg-white "
                    : "bg-trasnparent"
                } transition-all duration-300 lg:duration-500`}
                key={index}
              >
                <div
                  onClick={() => {
                    setSelected(selected === index ? -1 : index);
                  }}
                  className={` flex w-full py-4 md:py-10 xl:py-12 items-center justify-between cursor-pointer `}
                >
                  <div className=" flex items-center flex-row ">
                    <h3
                      className={` ${
                        selected === index ? "text-[#07393C]" : "text-[#07393C]"
                      } font-lato-bold text-36 text-left xl:px-0  max-w-6xl transition-all duration-300 lg:duration-500`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Side icons : +/- */}
                  <span
                    className={` ${
                      selected === index ? "text-black" : "text-green"
                    } `}
                  >
                    <svg
                      className={`${
                        selected === index ? "rotate-180" : "rotate-0"
                      }`}
                      width="24"
                      height="15"
                      viewBox="0 0 24 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9842 2.63794L12.26 12.3621L2.53589 2.63794"
                        stroke="#22574D"
                        stroke-width="4"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* open part */}

                <div
                  className={`text-black  grid lg:gap-8 gap-3 transition-all duration-300 lg:duration-500 overflow-hidden border-b border-gray-200
                  ${
                    selected === index
                      ? "max-h-[600px] lg:max-h-[700px] "
                      : "max-h-0"
                  } grid-cols-1 ${
                    item.content ? "md:grid-cols-3" : "md:grid-cols-1"
                  }`}
                >
                  {item.content ? (
                    item.content.map((elem, idx) => (
                      <div
                        key={idx}
                        className="overflow-hidden  pb-6 xl:pb-12"
                      >
                        <img
                          className="lg:w-20 w-10 object-contain "
                          src={elem.img}
                          alt=""
                        />
                        <h4
                          className="font-lato-regular mt-3"
                          dangerouslySetInnerHTML={{ __html: elem.desc }}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="overflow-hidden   pb-6 xl:pb-12">
                      <div className="">
                        <h3 className="text-[#8DC63F] font-lato-bold">
                          Recognized among Social Entrepreneurs and Innovators
                          of the Year
                          <span className="text-darkGreen"> 2025 </span>
                          by Schwab Foundation under the Collective Social
                          Innovator Category.
                        </h3>
                        <br />
                        <h3 className="text-[#8DC63F] font-lato-bold">
                          In <span className="text-darkGreen">2018</span>,
                          Business Standard chose Ved as a Social Entrepreneur
                          of the Year.
                        </h3>
                        <br />
                        <h3 className="text-[#8DC63F] font-lato-bold">
                          In <span className="text-darkGreen">2020</span>, he
                          received the Distinguished Alumnus Award from IIT
                          Kanpur.
                        </h3>
                        <br />
                        <h3 className="text-[#8DC63F] font-lato-bold">
                          Ved is a Hubert Humphrey Fellow{" "}
                          <span className="text-darkGreen">(1990-91)</span>,
                          United Nations Environment Program Fellow{" "}
                          <span className="text-darkGreen">(1991)</span>, Ashoka
                          Fellow <span className="text-darkGreen">(2008)</span>,
                          and Aspire Fellow{" "}
                          <span className="text-darkGreen">(2015)</span>.
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
