import React from "react";
import IndiaDonation from "./01_india-donation";
import TestingApproach from "./02_approach";
import FrequentlyAskedIndia from "./03_faqIndia";
import useGSAP from "hooks/useGsap";

export default function DonationFromIndia() {
  useGSAP(".donation-india");
  return (
    <>
      <div className="xl:blade-top-padding-lg donation-india">
        <IndiaDonation />
        <TestingApproach />
        <FrequentlyAskedIndia />
      </div>
    </>
  );
}
