import React from "react";
import HeadingImage from "molecules/heading-image";
import partnerWithUs from "../../assets/partnersSupporters/partner-with-us.jpg";
import { Link } from "react-router-dom";
import Button from "atoms/button";
export default function Partners() {
  return (
    <>
      <section className=" bg-[#FAF9F5]">
        <div className="w-container-xl ">
          <HeadingImage
            heading="Partner with us"
            highlight=""
            imageSrc={partnerWithUs}
            imageAlt="working ladies"
            hrColor="gray-400"
          />

          <div className="blade-bottom-padding-lg md:flex  justify-between ">
            <div className="blade-top-padding-sm">
              <h2 className="text-green font-lato-bold 2xl:text-4xl">
                Want to become a part of the transformation?
              </h2>
              <h3 className="mt-3 font-lato-regular sm:mt-6 sm:max-w-[70%] blade-bottom-padding-sm">
                Come onboard and give wings to India’s socio-economic progress
                where it matters, for the ones who matter.
              </h3>
            </div>
            {/* <div className="lg:blade-top-margin lg:pt-0 sm:blade-top-padding-xl pt-0 ">
              <Link to="/donate-us">
                <h4 className="cursor-pointer lg:blade-bottom-margin-lg bg-pear hover:bg-teal hover:text-white whitespace-nowrap transition-all duration-500 px-6 py-3  text-black font-lato-bold  ">
                  Become a partner
                </h4>
              </Link>
            </div> */}
              <div className=" h-10 w-[16rem] sm:blade-top-margin-sm md:h-14 md:w-[23rem] ">
                  <Link to="/contact-us">
                    <Button text={"Become a Donor"} />
                  </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}
