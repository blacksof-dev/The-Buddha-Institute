import React from 'react'
import CommonCard from 'molecules/commonCardSlider'
const Reports = () => {
  return (
    <section className="">
    <div className="blade-top-padding-sm  xl:py-5 w-container-lg">
        <h1 className="font-lato-bold pb-2 md:pb-0 text-[#07393C]">Reports</h1>
        <hr className="border border-[#1A84823B]"/>
    </div>
    <div className="pt-5 blade-bottom-padding-sm">
       <CommonCard data={fellowshipdata} section="resources"/>
   </div>
  </section>
  )
}
const fellowshipdata = {
    productArray: [
      {
        image: "/Resources/NewsImg1.png",
        id: "1",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg2.png",
        id: "2",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg1.png",
        id: "1",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg2.png",
        id: "2",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg1.png",
        id: "1",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg2.png",
        id: "2",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg1.png",
        id: "1",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      {
        image: "/Resources/NewsImg2.png",
        id: "2",
        title: "Digital: Healthcare Case",
        desc1: "Management and Worker",
        desc2: "Vetting"
      },
      
    ],
  };
export default Reports
