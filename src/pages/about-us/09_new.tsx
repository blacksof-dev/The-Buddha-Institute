import React from "react";
import NewCarousel from "./newCarousel";
import whatsNew1 from '../../assets/about/whatsNew1.png'
import whatsNew2 from '../../assets/about/whatsNew2.jpg'
import whatsNew3 from '../../assets/about/whatsNew3.jpg'
import whatsNew4 from '../../assets/about/whatsNew4.jpg'
import whatsNew5 from '../../assets/about/whatsNew5.jpeg'
import whatsNew6 from '../../assets/about/whatsNew6.png'
const New = () => {
  const data = [
    {
      id: 5,
      img: whatsNew6,
      title: "Angel Investor and Mentor Sanjay Guha shares his mentorship experience so far",
      desig: "",
      Link:"https://www.linkedin.com/feed/update/urn:li:activity:7330880989281353728/"
    },
     {
      id: 6,
      img: whatsNew5,
      title: "The unfoldings from the latest Buddha Entrepreneurship Clinic (BEC) in Delhi",
      desig: "",
      Link:"https://www.linkedin.com/feed/update/urn:li:activity:7318505806511910913/"
    },
    {
      id: 1,
      img: whatsNew1,
      title: "We’re Hiring: Head of Fundraising and Partnerships – The Buddha Institute",
      desig: "",
      Link:"https://www.linkedin.com/posts/buddhafellowship_fundraising-partnerships-leadership-activity-7284614941251149824-zflZ/?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 2,
      img: whatsNew2,
      title: "Real-World Inspiration and Strategic...",
      desig: "",
      Link:"https://www.linkedin.com/posts/buddhafellowship_buddhaentrepreneurshipclinic-entrepreneurship-activity-7280813885786411009-zxYI/?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 3,
      img: whatsNew3,
      title: "Who in India doesn’t celebrate Lakshmibai the Queen of Jhansi...",
      desig: "",
      Link:"https://www.linkedin.com/posts/buddhafellowship_who-in-india-doesnt-celebrate-lakshmibai-activity-7172467164451463168-FG4c/?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 4,
      img: whatsNew4,
      title: "Business Support: Regional Experiential Tourism Programme",
      desig: "",
      Link:"https://www.linkedin.com/posts/buddhafellowship_thebuddhainstitute-mentorship-socialimpact-activity-7258015931895881729-Zgms/?utm_source=share&utm_medium=member_desktop"
    },
     
 
  ];
  return (
    <section className="gsap-fade-in sm:w-container w-container-sm blade-top-padding-lg blade-bottom-padding-lg bg-[#FFFFFF]">
      <div className=" md:flex items-end justify-between border-b pb3 border-[#84848480]">
        <h1 className="pb-3 font-lato-bold text-[#07393C]">
          What’s new at The Buddha Institute
        </h1>
      </div>
      <div>
        <NewCarousel cardData={data} />
      </div>
    </section>
  );
};

export default New;
