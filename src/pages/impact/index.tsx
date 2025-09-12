import React from "react";
import ImpactBanner from "./01_banner";
import Mapping from "./02_Mapping";

import Catalysing from "./03_catalysing";

import { Helmet } from "react-helmet-async";
import homeogImage from "../../assets/OG/homeOgImage.png";
import OurImpact from "./04_ourImpact";
import Voices from "./05_voices";



const Impact = () => {
  return (
    <div>
      <Helmet>
        <title>Impact | The Buddha Institute</title>
        <meta
          property="og:title"
          content="Impact | The Buddha Institute"
        />
        <meta
          name="og:description"
          content="Discover the transformative impact of The Buddha Institute—empowering development entrepreneurs to create jobs, uplift underserved communities, and drive inclusive socio-economic change across India"
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeogImage} />
        <meta property="og:image" content={homeogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impact | The Buddha Institute" />
        <meta
          name="twitter:description"
          content="Discover the transformative impact of The Buddha Institute—empowering development entrepreneurs to create jobs, uplift underserved communities, and drive inclusive socio-economic change across India"
        />
        <meta
          name="twitter:image"
          content="https://thebuddhainstitute.org/ogImage.png"
        />
        <link rel="canonical" href="https://thebuddhainstitute.org/impact" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ImpactBanner />
      <Mapping />
      <Catalysing />
      <OurImpact />
      <Voices />
    </div>
  );
};

export default Impact;
