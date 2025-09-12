import React from "react";
import Button from "atoms/button";
import HeadingImage from "molecules/heading-image";
import { Link } from "react-router-dom";
export default function Enroll() {
  return (
    <section className="w-container-xl blade-top-padding-xl sm:blade-top-padding-lg gsap-fade-in">
      <HeadingImage
        heading="Be the force of empowerment."
        highlight=" Lead the change."
        imageSrc="/EngageWithUs/enroll.jpg"
        imageAlt="working ladies"
        hrColor="gray-400"
      />
      <div className="mt-8 gap-12 font-lato-regular sm:flex-row xl:gap-28 ">
        <div className="mt-2 w-full xl:w-[80%] 2xl:w-[68%]">
          <h4 className="text-black/80 ">
            If you see opportunities for transformation in the adversities of
            rural India, and, if you are choosing grassroots, we see a potential
            Development Entrepreneur in you — a Buddha Fellow.
          </h4>
        </div>
        <div className="mt-2  w-full xl:w-[80%] 2xl:w-[68%]">
          <div>
            <h4 className="text-black/80 ">
              You will be part of a privileged cohort of changemakers selected
              to receive The Buddha Institute’s support and resources in helping
              build a self-reliant, dynamic, and equitable economy.
            </h4>
          </div>
          <div className="mt-3">
            <h4 className="font-lato-bold">Enroll now to lead the change.</h4>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-10 h-10 md:h-14 w-[295px] mx-auto md:mx-0 sm:w-[400px]">
        <Link to='mailto:admissions@thebuddhainstitute.org'>
          <Button text={"Become a Budhha Fellow"} />
        </Link>
      </div>
    </section>
  );
}
