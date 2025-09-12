import React from "react";
import MOU from "../../assets/partnersSupporters/mou-new.jpg";
import MouAwards from "../../assets/partnersSupporters/mou-awards.jpg";
import Moumobile from "../../assets/partnersSupporters/mou-mobile.png";
export default function MouGovernment() {
  return (
    <>
      <section className="lg:bg-teal bg-white blade-top-padding-lg blade-bottom-padding-lg">
        <div className="w-container-xl">
          <div>
            <h1 className="font-lato-bold lg:text-white text-darkGreen">
              MoU with the Government of India
            </h1>
          </div>
          <hr className="border-b border-white border-opacity-[28%]" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3  mt-8">
            <div className="lg:col-span-1">
              <img
                className="h-full lg:block hidden  w-full object-cover object-center"
                src={MOU}
                alt="founder"
              />
            </div>
            <div className="lg:col-span-3">
              <img
                className="h-full w-full object-cover"
                src={MouAwards}
                alt="founder"
              />
            </div>
            <div className="lg:hidden sm:mt-4 block">
              <img src={Moumobile} className="h-full w-[40%]" alt="" />
            </div>
          </div>
          <h4 className="font-lato-regular lg:blade-top-margin-sm blade-top-margin lg:text-white text-black/80 sm:max-w-[90%] opacity-80">
            The Buddha Institute signed an MoU with the Ministry of Rural
            Development, Government of India in August 2023. The MoU provides
            Buddha Fellows access to a large base of 10 crore women members of
            self-help groups, access to rural community infrastructure, as well
            as access to government loans, subsidies, and interest subversion.
          </h4>
        </div>
      </section>
    </>
  );
}
