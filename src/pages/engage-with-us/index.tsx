import React from "react";
// import useGSAP from "../../hooks/useGsap";
import Banner from "./01_banner";
import Donation from "./02_donation";
import Empower from "./03_empower";
import Enroll from "./04_enroll";
import Volunteer from "./05_volunteer";
import Purpose from "./06_purpose";
import useGSAP from "hooks/useGsap";
import { Helmet } from "react-helmet-async";
import homeogImage from "../../assets/OG/homeOgImage.png";

export default function Engage() {
  useGSAP(".engage-wrapper");
  return (
    <>
     <Helmet>
            <title>Engage with Us | The Buddha Institute</title>
            <meta
              property="og:title"
              content="Engage with Us | The Buddha Institute"
            />
            <meta
              name="og:description"
              content="Explore the various ways to engage with The Buddha Institute—through donations, empowerment programs, enrollment opportunities, and volunteer initiatives."
            />
    
            <meta name="author" content="The Buddha Institute" />
    
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homeogImage} />
            <meta property="og:image" content={homeogImage} />
    
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Engage with Us | The Buddha Institute" />
            <meta
              name="twitter:description"
              content="Explore the various ways to engage with The Buddha Institute—through donations, empowerment programs, enrollment opportunities, and volunteer initiatives."
            />
            <meta
              name="twitter:image"
              content="https://thebuddhainstitute.org/ogImage.png"
            />
     <link rel="canonical" href="https://thebuddhainstitute.org/engage-with-us" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Helmet>
      <div className="engage-wrapper">
        <Banner />
        <Donation />
        <Empower />
        <Enroll />
        <Volunteer />
        <Purpose />
      </div>
    </>
  );
}
