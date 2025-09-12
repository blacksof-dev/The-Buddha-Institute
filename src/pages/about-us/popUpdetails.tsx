import { Icon } from "organisms/iconCommonent";
import React from "react";
import { MdClose } from "react-icons/md";

const PopUpdetails = ({ onclose }: { onclose: () => void }) => {
  return (
    <div className="fixed inset-0  flex items-cente  justify-center bg-black/70 backdrop-blur-sm px-2 py-10 z-[9999]">
      <div className="relative bg-white rounded-md  max-w-[800px]  h-full my-auto flex flex-col">
        {/* Header with close button */}
        <div className="flex items-center justify-between px-2 py-2 sm:px-6 sm:py-4 ">
          <button
            onClick={onclose}
            className="bg-darkCyan cursor-pointer rounded-full p-1 text-white text-2xl ml-auto focus:outline-none"
          >
        
            <Icon icon={MdClose}  />
          </button>
        </div>
      
        <div className="overflow-scroll">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-lato-bold">
              Buddha Anubhav Program
            </h3>
            <h5 className="text-black font-lato-regular">
              Supported by the Ford Foundation
            </h5>
          </div>

          <div className="px-2 sm:px-6 pt-2 sm:pt-8">
            <p className="font-lato-regular text-black">
              The Buddha Anubhav Program is an immersive initiative designed to
              raise social awareness and nurture grassroots sensibilities among
              students from India's leading institutions. Supported by the Ford
              Foundation, the program connects the next generation of
              changemakers with real-world development challenges, anchoring
              their academic learning in lived rural realities.
            </p>

            <h5 className="text-black font-lato-bold py-4">Key Stakeholders:</h5>
            <ul className="font-lato-regular list-inside list-disc text-black space-y-2">
              <li>
                Ford Foundation: Strategic supporter and funder of the program,
                enabling outreach, coordination, and fellow-intern engagement.
              </li>
              <li>
                The Buddha Institute: Program anchor and national coordinator,
                facilitating linkages between grassroots enterprises and student
                participants.
              </li>
              <li>
                Fellows of the Buddha Fellowship Program: Social entrepreneurs
                across India who host and mentor interns in their enterprises,
                exposing them to challenges in agriculture, rural livelihoods,
                education, health, and enterprise building.
              </li>
              <li>
                Students from Elite and Regional Institutions: Undergraduates
                and postgraduates from institutes such as IIMs, BHU, AU and
                others, from regional institutes who engage directly with field
                enterprises to apply their academic learning to grassroots
                innovation.
              </li>
            </ul>

            <h5 className="text-black font-lato-bold py-4">Internship Component:</h5>
            <p className="text-black">
              At the heart of the Buddha Anubhav Program is a structured 4 to
              8-week internship. Students are placed with Buddha Fellows working
              in diverse geographies and sectors. Through this hands-on
              experience, they:
            </p>
            <ul className="font-lato-regular list-inside list-disc text-black space-y-2">
              <li>
                Gain first-hand exposure to rural and semi-urban development
                challenges.
              </li>
              <li>
                Contribute to meaningful enterprise-level projects, including
                marketing, supply chain, financial planning, and community
                outreach.
              </li>
              <li>
                Develop leadership skills, empathy, and a deeper understanding
                of inclusive development.
              </li>
              <li>
                This internship acts as a powerful bridge between India’s
                academic elite and its grassroots innovators—planting the seeds
                of long-term social commitment and cross-sectoral learning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpdetails;
