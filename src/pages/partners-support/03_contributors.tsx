import React from "react";
import ContributorsData from "./contributors-array";
import ContributorsDonationData from "pages/donate-us/donation-carousal";

export default function Contributors() {
  return (
    <>
      <section className="blade-top-padding-lg  bg-[#FAF9F5] relative overflow-hidden">
        {/* <img
          src="/partnersAndSupport/donate-bgnew.png"
          className="absolute inset-0 2xl:top-96 left-auto sm:block hidden lg:top-40"
          alt=""
        /> */}
        <h1 className="sm:w-container-xl text-[#07393C] font-lato-bold sm:text-left text-center w-container">
          Compassionate Contributors
          <hr className="h-[1px] hidden border-b sm:block" />
          <h4 className=" text-black font-lato-regular mt-6 2xl:leading-[34.98px] sm:text-left text-center">
            Humanity uplifts humanity. Our compassionate contributors help us
            transform the <br className="hidden sm:block" /> grassroots and
            empower the marginalized with their independent donations.
          </h4>
        </h1>
        <div className="blade-bottom-padding">
          <ContributorsDonationData />
        </div>
      </section>
    </>
  );
}
