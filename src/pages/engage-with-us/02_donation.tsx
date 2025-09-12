import React from "react";
import Button from "atoms/button";
import HeadingImage from "molecules/heading-image";
import { Link } from "react-router-dom";
export default function Donation() {
  return (
    <>
      <section className="w-container-xl blade-top-margin-lg gsap-fade-in">
        <HeadingImage
          heading="Join hands for a noble cause "
          // highlight="resilience and purpose."
          imageSrc="/EngageWithUs/donation-page.jpeg"
          imageAlt="working ladies"
          hrColor="gray-400"
          breakLine={true}
        />
        <div className="blade-top-margin-sm xl:flex flex-col gap-4 font-lato-regular md:flex-row xl:gap-12 md:gap-4">
          <div className="flex  flex-col justify-between w-full xl:w-[50%] ">
            <h4 className="text-black/80">
              Ours is a highly donor capital efficient model to alleviate
              poverty. Based on our performance to date, we confidently project
              that by 2030 uplifting one poor person will take just  INR 100 of
              our donors’ capital. Your contribution will enable us to
              cumulatively support 1000 Buddha Fellows, generate 100,000 jobs,
              and uplift 1 mn poor by 2030.
            </h4>
          </div>

          <div className="flex  flex-col justify-between w-full xl:w-[50%]">
            <h4 className="text-black/80 lg:mt-0 mt-5 ">
              Join the endeavor and see your contribution enable employment
              generation, poverty alleviation and rural prosperity in the long
              haul.
            </h4>
          </div>

        </div>
        <div className="blade-top-margin h-10 w-52  md:mt-8 md:h-14 md:w-64">
          <Link to="/donate-us">
            <Button text={"Donate now"} />
          </Link>
        </div>
      </section>
    </>
  );
}
