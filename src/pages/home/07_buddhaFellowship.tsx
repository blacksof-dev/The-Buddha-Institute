import React, { useRef, useState } from "react";
import Button from "atoms/button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import plusIcon from "../../assets/home/plusIcon.svg";
import equalIcon from "../../assets/home/equal.svg";
import sharedPurpose from "../../assets/home/sharedPurpose.svg";
import ApplicationProcess from "molecules/applicationPopup";

const BuddhaFellowship = () => {
  const [showPopup, setshowPopup] = useState(false);

  return (
    <section className="blade-top-padding-lg  gsap-fade-in bg-[#FFF]">
      <div className="w-container">
        <div className="md:flex items-end justify-between border-b pb3 border-[#84848480]">
          <h1 className="pb-3 font-lato-bold text-[#07393C]">
            Our shared purpose — Creating sustainable{" "}
            <br className="block 2xl:hidden " />
            development enterprises
          </h1>
          {/* <h4 className='py-3 pr-10 md:pl-5 md:border-l text-[#848484] border-[#84848480] font-lato-regular'>Buddha Fellowship Program</h4> */}
        </div>
        <div className="blade-top-margin-sm w-full md:w-[90%]">
          <h4 className="font-lato-regular ">
            Buddha Fellowship, our flagship program, is a dedicated platform of
            entrepreneurism, mentorship and support for socio-economic
            transformation for entrepreneurs who are driven to change the social
            reality in India and other developing economies.
          </h4>
          <h4 className="font-lato-regular py-5">
            Through a highly respected eco-system support of Mentors, advisors,
            capital providers, government and media channels, these
            entrepreneurs enable progress to happen, and create measurable
            impact to build an inclusive society in the regions in which{" "}
            <br className="block 2xl:hidden" />
            they operate.
          </h4>
        </div>
        <div className="mt-4 h-10 w-52 md:mt-8 md:h-14 md:w-60  ">
          <div onClick={() => setshowPopup(true)} className="cursor-pointer ">
            <Button text={"Enroll now"} />
          </div>
          {showPopup && (
            <ApplicationProcess onclose={() => setshowPopup(false)} />
          )}
        </div>

        <div className=" mt-20">
          <h3 className="text-[#07393C] text-2xl sm:text-3xl lg:text-[36px] font-lato-bold pb-2 ">
            From selection to impact
          </h3>
        

         <div className="sm:hidden block pt-5 flex flex-wrap justify-center blade-top-margin-sm  gap-4">
            <div className="bg-darkCyan w-full sm:w-[20rem] p-6 relative text-white">
              <h3 className="font-lato-bold text-lg lg:text-xl mb-4">
                Select Development Enterprises
              </h3>
              <ul className="text-base font-lato-regular space-y-2 list-disc list-inside">
                <li>Psychometric tests</li>
                <li>In-person interview</li>
                <li>Due diligence visit</li>
              </ul>
            </div>
            <div className="block lg:hidden flex justify-center w-full sm:w-[20rem] mx-auto">
              <img src={plusIcon} className="w-12 h-12" alt="plus" />
            </div>

            <div className="bg-darkCyan w-full sm:w-[20rem] p-6 relative text-white">
              <h3 className="font-lato-bold text-lg lg:text-xl mb-4">
                Nurture into Profitable, INR 10 cr + ($1.2MN +) Enterprises
              </h3>
              <ul className="text-base font-lato-regular space-y-2 list-disc list-inside">
                <li>Individualized Mentorship and Anchorship</li>
                <li>Business knowledge building</li>
                <li>Returnable grant</li>
                <li>Access to government and impact capital</li>
              </ul>
            </div>
          <div className="block lg:hidden flex justify-center w-full sm:w-[20rem] mx-auto">
              <img src={equalIcon} className="w-12 h-12" alt="equals" />
            </div>

            <div className="bg-darkCyan w-full sm:w-[20rem] p-6  text-white">
              <h3 className="font-lato-bold text-lg lg:text-xl mb-4">
                Outcome
              </h3>
              <ul className="text-base font-lato-regular space-y-2 list-disc list-inside">
                <li>Cost: INR 25 lacs ($30,000)</li>
                <li>Uplifts: 25,000 poor</li>
                <li>Income Growth: INR 200 to INR 500 ($2.15 to $5)</li>
                <li>Creates 100 jobs</li>
              </ul>
            </div>

            <div className="bg-darkCyan w-full sm:w-[20rem] p-6  text-white">
              <h3 className="font-lato-bold text-lg lg:text-xl mb-4">
                Highly donor capital efficient poverty alleviation model
              </h3>
              <ul className="text-base font-lato-regular space-y-2 list-disc list-inside">
                <li> INR 210 ($2.43) per person uplifted </li>
                <li>INR 125 ($1.44) per person uplifted by 2030</li>
              </ul>
            </div>
          </div> 
          <div className="sm:block hidden blade-top-padding-sm">
              <img src={sharedPurpose} className="w-full h-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuddhaFellowship;
