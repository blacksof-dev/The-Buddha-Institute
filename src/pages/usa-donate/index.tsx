import React from "react";
import DonationUsa from "./01_donation";
import FrequentlyAskedUSA from "./02_frequently-us";
import useGSAP from "hooks/useGsap";
import { Helmet } from "react-helmet-async";
import homeogImage from "../../assets/OG/homeOgImage.png";


export default function DonationFromUSA() {
  useGSAP(".donation-usa");
  return (
    <>
      <Helmet>
            <title>Donate | The Buddha Institute</title>
           <meta name="og:description" content="Contribute to The Buddha Institute and help empower development entrepreneurs working for marginalized communities. Your donation supports education, innovation, and social impact initiatives." />

    
            <meta name="author" content="The Buddha Institute" />
    
            <meta property="og:type" content="website" />
            <meta property="og:url" content="./final-logo-new.svg" />
            <meta property="og:image" content="./final-logo-new.svg" />
    
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Donate | The Buddha Institute"
            />
            <meta
              name="twitter:description"
              content="Contribute to The Buddha Institute and help empower development entrepreneurs working for marginalized communities. Your donation supports education, innovation, and social impact initiatives."
            />
            <meta
              name="twitter:image"
              content="https://thebuddhainstitute.org/ogImage.png"
            />
     
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
      <div className="xl:blade-top-padding-lg donation-usa">
        <DonationUsa />
        <FrequentlyAskedUSA />
      </div>
    </>
  );
}
