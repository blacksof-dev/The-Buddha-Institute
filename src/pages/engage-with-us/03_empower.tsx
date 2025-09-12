import React from "react";
import Button from "atoms/button";
import HeadingImage from "molecules/heading-image";
import { Link } from "react-router-dom";
export default function Empower() {
  return (
    <>
      <section className="w-container-xl sm:blade-top-padding-lg blade-top-padding-xl gsap-fade-in">
        <HeadingImage
          heading="Enable one."
          highlight=" Empower many."
          imageSrc="/EngageWithUs/empower.jpeg"
          imageAlt="working ladies"
          hrColor="gray-400"
        />
        <div className="blade-top-margin-sm  flex flex-col justify-between gap-4 ">
          <div className="w-full  xl:w-[80%] 2xl:w-[68%]">
            <h4 className="text-black/80 font-lato-regular">
              At the Buddha Institute, our dedicated Mentors and Anchors bring a
              wealth of industry expertise, guidance, and strategic insights to
              our Buddha Fellows. Embodying our values, they guide each Fellow
              through a personalized, one-on-one approach supporting them with
              field visits, grants and pragmatic business advice towards
              enabling them to improve their financial sustainability and social
              equity.
            </h4>
          </div>
          <div className="w-full xl:w-[80%] 2xl:w-[68%]">
            <h4 className="text-black/80 font-lato-regular">
              If you bring the gust of experience, our Buddha Fellows bring the
              spark for change. Come, ignite transformation.
            </h4>
          </div>
        </div>
        <div className="blade-top-margin-sm justify-cente gap-2 sm:flex md:gap-12">
          <div className="mt-4 h-10 md:h-14 mx-auto md:mx-0 w-[300px]">
            <Link to="/contact-us">
              <Button text={"Become a Mentor"} />
            </Link>
          </div>
          <div className="mt-4 h-10 md:h-14  mx-auto md:mx-0 w-[300px]">
            <Link to="/contact-us">
              <Button text={"Become an Anchor"} border={true} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
