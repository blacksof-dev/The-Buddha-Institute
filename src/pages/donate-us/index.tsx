import React from "react";
import Compassion from "./01_banner";
import Donation from "pages/engage-with-us/02_donation";
import Communities from "./03_donation";
import Faq from "./06_faq";
import TestingDonate from "./testing-donate";
import FrequentlyAsked from "./07_frequently_asked";
import useGSAP from "hooks/useGsap";

export default function DonateUs() {
  useGSAP(".donate-wrapper");
  return (
    <>
      <div className="donate-wrapper">
        <Compassion />
        <Communities />
        {/* <TestingDonate /> */}
        {/* <FrequentlyAsked /> */}
      </div>
    </>
  );
}
