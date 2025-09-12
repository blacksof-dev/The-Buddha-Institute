import ContributorsData from "pages/partners-support/contributors-array";
import React from "react";
import ContributorsDonationData from "./donation-carousal";

export default function Communities() {
  return (
    <section className="bg-[#FAF9F5] blade-top-padding-lg blade-bottom-padding-lg relative overflow-hidden">
      {/* <img
        src="/partnersAndSupport/donate-bgnew.png"
        className="absolute inset-0 -right-56 sm:block hidden 2xl:top-96 lg:top-64 xl:top-56 sm:top-48 left-auto"
        alt=""
      /> */}
      <div className="w-container-xl font-lato-regular gsap-fade-in ">
        <h1 className=" font-lato-bold text-[#07393C] text-left">
          Every donation fuels change
        </h1>
        <div className="border-b border-[#4F4F4F80] border-opacity-50 mt-2"></div>
        <h4 className="text-black/80 mt-6 lg:max-w-[80%]  text-left">
          Nurturing an entrepreneur into a Development Entrepreneur is an
          intensive process. Each Buddha Fellow’s journey costs INR 25 lakhs ($
          30,000) to the institute with 85% of it directly invested in building
          their capacity.
        </h4>
        <h4 className="text-black/80 mt-6 lg:max-w-[80%]  text-left">
          Please note that all contributions are tax-deductible in both India
          and the USA:
        </h4>
        <ul className="text-black/80 mt-6 lg:max-w-[80%]  text-left list-disc  sm:ml-8 ml-6">
          <li>
            <h4 className="inline leading-normal">
              The USA: Donations are eligible for tax exemption under IRS
              501(c)(3) through Friends of Buddha Fellowship (FOBF), Inc.
            </h4>
          </li>
          <li>
            <h4 className="inline leading-normal">
              India: The Education for Employability Foundation (E2F) has tax
              exemption under 80G and 12 A of the Income Tax Act of India.
            </h4>
          </li>
        </ul>
        <h4 className="text-black/80 mt-6 lg:max-w-[80%]  text-left">
          Albeit donations, you can support us through Tan (Time), Mann (Mind),
          and Dhan (Wealth). You can join us as a Mentor, Anchor, expert,
          volunteer or fundraiser. Please write to us at
          <a
            href="mailto:communications@thebuddhainstitute.org"
            className="text-darkCyan border-b-[1px] border-b-darkCyan"
          >
            {" "}
            communications@thebuddhainstitute.org{" "}
          </a>{" "}
          to find more ways of getting involved.
        </h4>
        {/* <h4 className="blade-top-margin-sm font-lato-regular text-black/80">
          Let’s build a future where every aspiration has the ability,
          opportunity, and means to flourish.
        </h4> */}
        {/* <div className=" text-36 text-[#07393C] font-lato-bold text-left blade-top-margin-sm border-b pb-2 border-[#4F4F4F80] border-opacity-50">
          Our Compassionate Contributors */}
        {/* <hr className="h-[1px] hidden border-b sm:block" /> */}
        {/* </div> */}
      </div>
      {/* <div className="gsap-fade-in">
        <ContributorsDonationData />
      </div> */}
    </section>
  );
}
