

import AwardBanner from './01_banner'
import { Helmet } from "react-helmet-async";
import homeogImage from "../../../public/final-logo-new.svg";
import React from 'react';
import AwardsSection from './02_awardSec';


const Awards = () => {
  return (
    <div>
       <Helmet>
        <title>Awards | The Buddha Institute</title>
        <meta
          property="og:title"
          content="Awards & Recognition | The Buddha Institute"
        />
        <meta
          name="og:description"
          content="Explore the Awards & Recognition received by The Buddha Institute—honoring social entrepreneurship, impactful development leaders, and transformative innovation."
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="./final-logo-new.svg"  />
        <meta property="og:image" content="./final-logo-new.svg"  />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Awards | The Buddha Institute" />
        <meta
          name="twitter:description"
          content="Explore the Awards & Recognition received by The Buddha Institute—honoring social entrepreneurship, impactful development leaders, and transformative innovation."
        />
        <meta
          name="twitter:image"
         content="./final-logo-new.svg" 
        />
        <link rel="canonical" href="https://thebuddhainstitute.org/awards" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <AwardBanner/>
      <AwardsSection/>
    </div>
  )
}

export default Awards 
