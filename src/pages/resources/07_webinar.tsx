import React from 'react'

import DateAnimationCard from 'molecules/DateAnimationCard';
const Webinar = () => {
  return (
    <section className="">
    <div className="blade-top-padding-sm  xl:py-5 w-container-lg">
        <h1 className="font-lato-bold pb-2 md:pb-0 text-[#07393C]">Webinars</h1>
        <hr className="border border-[#1A84823B]"/>
    </div>
    <div className="blade-bottom-padding-lg lg:pl-14 pt-4">
       <DateAnimationCard data={fellowshipdata} />
   </div>
  </section>
  )
}
const fellowshipdata = {
  productArray: [
    {
      image: "/Resources/WebinarImg1.png",
      id: "1",
      title: "Digital: Healthcare Case",
      desc1: "Management and Worker",
      desc2: "Vetting"
    },
    {
      image: "/Resources/WebinarImg2.png",
      id: "2",
      title: "Digital: Healthcare Case",
      desc1: "Management and Worker",
      desc2: "Vetting"
    },
    {
      image: "/Resources/WebinarImg3.png",
      id: "3",
      title: "Digital: Healthcare Case",
      desc1: "Management and Worker",
      desc2: "Vetting"
    },
    {
      image: "/Resources/WebinarImg1.png",
      id: "4",
      title: "Digital: Healthcare Case",
      desc1: "Management and Worker",
      desc2: "Vetting"
    },
    
  ],
  };
export default Webinar
