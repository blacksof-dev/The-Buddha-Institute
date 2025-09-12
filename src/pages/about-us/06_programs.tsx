import React, { useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Autoplay, Pagination } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Autoplay styles
import buddhaAnubhav from "../../assets/about/buddhaAnubhav.jpg";
import buddhaFellowshipImg from "../../assets/about/buddhaFellowshipImg.jpg";
import PopUpdetails from "./popUpdetails";

const Programs = () => {
  const [popupOpen, setpopupOpen] = useState<boolean>(false);
  const data = [
    {
      title: "Buddha Fellowship",
      description:
        "The Buddha Fellowship Program aims to nurture 1000 Development Entrepreneurs (Buddha Fellows, 50% women) by 2030, helping them scale their early-stage enterprises. Collectively, we expect these enterprises to create 100,000 full-time jobs, uplift 25 million poor, and add one billion USD to the rural economy by 2030.",
      img: buddhaFellowshipImg,
    },
    {
      title: "Buddha Anubhav",
      description:
        "Supported by the Ford Foundation, the Buddha Anubhav program nurtures changemakers of tomorrow. It exposes students to the development entrepreneurship ecosystem with internships (4-8 weeks) in our Fellows’ enterprises. The program cultivates commitment to society and inclusivity among students by enhancing their grassroots awareness, leadership, and foundational skills.",
      img: buddhaAnubhav,
      email: "anupam@thebuddhainstitute.org",
    },
  ];

  const handleClick = (title: string) => {
    if (title === "Buddha Anubhav") {
      setpopupOpen(true);
    } else {
      window.location.href = `${window.location.origin}/buddha-fellows`;
    }
  };
  return (
    <>
      <section className=" sm:w-container w-container-sm blade-bottom-padding-lg bg-[#FFFFFF]">
        <div className="md:flex items-end justify-between border-b  border-[#84848480]">
          <h1 className="pb-3 font-lato-bold text-[#07393C]">Our programs</h1>
        </div>
        <h5 className="font-lato-regular pt-6 xl:w-[85%] ">
          To tackle India's poverty, unemployment, and inequality through
          development entrepreneurship, The Buddha Institute runs two flagship
          programs. These empower Development Entrepreneurs – individuals who
          build profitable, social impact-first businesses to improve the lives
          of the poor.
        </h5>

        {/* Swiper for small screens */}
        {/* <div className="block md:hidden py-7 text-white ">
          <Swiper
            className="!pb-14"
            modules={[Autoplay, Pagination]}
            initialSlide={0}
            speed={5000}
            pagination={{
              clickable: true, // Enables click on bullets
            }}
          
          
            grabCursor
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((elem, idx) => (
              <SwiperSlide key={idx}>
                <div key={idx}>
                  <div className=" w-full">
                    <img
                      className="w-full object-cover object-center"
                      src={elem.img}
                      alt={elem.title}
                    />
                  </div>
                  <div className="h-[20rem] md:h-[30rem] xlg:h-[34rem] relative overflow-hidden bg-[#1A8482] blade-top-padding blade-bottom-paddinglg box-bottom">
                    <div className="w-container">
                      <h3 className="text-36 font-lato-bold">{elem.title}</h3>
                      <h4 className="font-lato-regular  blade-top-margin-sm w-full ">
                        {elem.description}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        {/* Grid layout for larger screens */}
        <div className=" grid blade-top-margin-sm  grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 text-white">
          {data.map((elem, idx) => (
            <div key={idx}>
              <div className="w-full">
                <img
                  className="w-full object-cover  object-bottom"
                  src={elem.img}
                  alt={elem.title}
                />
              </div>
              <div className=" lg:h-[30rem] relative overflow-hidden bg-[#1A8482] py-9 blade-bottom-paddinglg box-bottom">
                <div className="w-container">
                  <div>
                    <h3 className="  font-lato-bold ">{elem.title}</h3>
                    <h4 className="font-lato-regular  py-6 w-full ">
                      {elem.description}
                    </h4>
                    {elem.email && (
                      <a href={elem.email} className="text-lg md:text-2xl">
                       Share your queries at {elem.email}
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => handleClick(elem.title)}
                    className=" bg-pear px-4 py-1 font-lato-bold  text-black text-lg mt-4"
                  >
                    Know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {popupOpen && <PopUpdetails onclose={() => setpopupOpen(false)} />}
    </>
  );
};

export default Programs;
