import React from 'react'
import ResourcesBanner from './01_banner'
import Moments from './02_moments'

import Tracking from './08_tracking'

import { Helmet } from "react-helmet-async";
import homeogImage from "../../assets/OG/homeOgImage.png";
import NewsMedia from './03_newsMedia';
import Brouches from './05_broches';
import Newsletter from './04_newsletter';


const Resources = () => {
  return (

    <div>
      <Helmet>
        <title>Resource| The Buddha Institute</title>
        <meta
          property="og:title"
          content="Resources | The Buddha Institute"
        />
        <meta
          name="og:description"
          content="Explore The Buddha Institute’s resources including the latest news, informative brochures, and in-depth case studies. Stay updated with our initiatives and gain insights into our work."
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={homeogImage} />
        <meta property="og:image" content={homeogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources | The Buddha Institute" />
        <meta
          name="twitter:description"
          content="Explore The Buddha Institute’s resources including the latest news, informative brochures, and in-depth case studies. Stay updated with our initiatives and gain insights into our work."
        />
        <meta
          name="twitter:image"
          content="https://thebuddhainstitute.org/ogImage.png"
        />
  <link rel="canonical" href="https://thebuddhainstitute.org/resources" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <ResourcesBanner />
      <Moments />
      <NewsMedia />
      <Brouches />
      <Newsletter title="Newsletter" />
      <Tracking />
    </div>
  )
}

export default Resources
