import React from 'react'
import buddhaFellowCohort from '../../assets/about/buddhaFellowCohort.png'
import buddha_Fellow_Cohort from '../../assets/about/buddha_Fellow_Cohort.jpg'
import AboutUsBannerImg from "assets/about/AboutUsBannerImg.jpg"

const About = () => {
  return (
    <section className='gsap-fade-in sm:w-container w-container-sm blade-top-padding-lg blade-bottom-padding-lg bg-[#FFFFFF]'>
        <div className=' md:flex items-end justify-between border-b pb3 border-[#84848480]'>
          <h1 className='pb-3 font-lato-bold text-[#07393C]'>About us</h1>
         
        </div>
        <div className='blade-top-margin-sm blade-bottom-margin-sm relative   '>
          <div className="sm:block hidden">
             <img src={buddha_Fellow_Cohort} alt="About Us" className="h-[17rem] md:h-full object-cover" />  
          </div>
          <div className="sm:hidden block">
             <img src={AboutUsBannerImg} alt="About Us" className="" />  
          </div>
           
            <div className="absolute bottom-0 sm:bottom-7 left-3 sm:left-14 right-8 text-center md:block hidden">
              <h3 className="text-white font-lato-regular">Buddha Fellows Cohort of 2023-25 along with <br/>The Buddha Institute team</h3>
            </div>
            <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-14 right-8 text-center md:hidden block">
              <h5 className="text-white font-lato-regular ">Buddha Fellows Cohort of 2023-25 along with The Buddha Institute team</h5>
            </div>
        </div>

        {/* <div className='blade-top-margin-sm blade-bottom-margin-sm relative lg:hidden block '>
            <img src={buddha_Fellow_Cohort} alt="" />  
            <div className="absolute bottom-0 sm:bottom-2 left-3 sm:left-14 right-8 text-center ">
              <h6 className="text-white font-lato-regular">Buddha Fellows Cohort of 2023-25 along with The Buddha Institute team</h6>
            </div>
        </div> */}
        <div className='font-lato-regular'>
            <h4>The Buddha Institute (BI) is hosted under Education for Employability Foundation (E2F), and registered as a public charitable trust. The Buddha Institute supports grassroots for-profit businesses focused on social transformation to become profitable, sustainable, and ever-growing. Our range of certifications and registrations essential for our operations, including 12A and 80G certifications, which confer tax-exempt status to donations under Indian law.</h4> <br/>
            <h4>Additionally, we hold Foreign Contribution Regulation Act (FCRA) registration, allowing us to receive international donations. Our entity is also registered under the Corporate Social Responsibility (CSR) Act and the Darpan portal of Niti Aayog, ensuring transparency and compliance with Indian government regulations.</h4>
        </div>
    </section>
  )
}

export default About