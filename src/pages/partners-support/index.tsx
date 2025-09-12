import React from "react";
import Transformation from "./01_transformation";
import Contributors from "./03_contributors";
import ContributorsData from "./contributors-array";
import Partners from "./04_partners";
import Supporters from "./02_supporters";
import useGSAP from "hooks/useGsap";
import MouGovernment from "./05_mou-government";
import { Helmet } from "react-helmet-async";

import homeogImage from "../../assets/OG/homeOgImage.png";


export default function PartnersAndSupporters() {
  useGSAP(".partners-wrapper");
  return (
    <>
     <Helmet>
        <title>Partners & Supporters | The Buddha Institute</title>
        <meta
          property="og:description"
          content="Meet our institutional partners, Indian and overseas supporters, and donors enabling our mission of empowering development entrepreneurs across marginalized communities."
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeogImage} />
        <meta property="og:image" content={homeogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Partners & Supporters | The Buddha Institute"
        />
        <meta
          name="twitter:description"
          content="Meet our institutional partners, Indian and overseas supporters, and donors enabling our mission of empowering development entrepreneurs across marginalized communities."
        />
        <meta
          name="twitter:image"
          content="https://thebuddhainstitute.org/ogImage.png"
        />

      <link rel="canonical" href="https://thebuddhainstitute.org/partners-and-supporters" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="partners-wrapper">
        <Transformation />
        <Supporters />
        <MouGovernment />
        <Contributors />
        <Partners />
        {/* <ContributorsData /> */}
      </div>
    </>
  );
}
