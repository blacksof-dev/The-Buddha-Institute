import useGSAP from "hooks/useGsap";
import React from "react";
import Banner from "./01_banner";
import About from "./02_aboutUs";
import Vision from "pages/home/05_vision";
import Founder from "./04_founder";
import Features from "./05_features";
import Programs from "./06_programs";
import Trustee from "./07_trustee";
import Campus from "./08_campus";
import New from "./09_new";

import { Helmet } from "react-helmet-async";
import homeogImage from "../../assets/OG/homeOgImage.png";



const AboutUs = () => {
  useGSAP(".about-us-wrapper");
  return (
    <div className="about-us-wrapper">
      <Helmet>
        <title>About Us | The Buddha Institute</title>
        <meta property="og:title" content="About Us | The Buddha Institute" />
        <meta
          name="og:description"
          content="Learn about the mission, vision, and values of The Buddha Institute, and meet the team dedicated to making a difference."
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeogImage} />
        <meta property="og:image" content={homeogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | The Buddha Institute" />
        <meta
          name="twitter:description"
          content="Learn about the mission, vision, and values of The Buddha Institute, and meet the team dedicated to making a difference."
        />
        <meta
          name="twitter:image"
          content="https://thebuddhainstitute.org/ogImage.png"
        />
        <link rel="canonical" href="https://thebuddhainstitute.org/about-us" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Banner />
      <About />
      <Vision />
      <Founder />
      <Features />
      <Programs />
      <Trustee />
      <Campus />
      <New />
    </div>
  );
};

export default AboutUs;
