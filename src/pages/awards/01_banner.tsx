import Banner from 'molecules/banner'
import React from 'react'
import AwardsBanner from 'assets/awards/AwardsBanner.jpg'
const AwardBanner = () => {
  return (
    <>
      <Banner
        bannerImage={AwardsBanner} 
        />
    </>
  )
}

export default AwardBanner
