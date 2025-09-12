import React from "react";
import threePronged from "../../assets/BFP/Three-pronged.png";
import { Link } from "react-router-dom";
const ThreeFold = React.memo(() => {
  return (
   
    <> 
      
      <section className="blade-top-padding-lg blade-bottom-padding-lg  bg-[#FFFBEF]">
        <div className="w-container-xl gsap-fade-in">
          <h1 className="font-lato-bold text-[#07393C] pb-3">
            Three-pronged model to enable social impact
          </h1>
          <hr className="border-[#848484] opacity-40" />
          <div className="flex flex-col lg:flex-row lg:gap-40 xl:gap-36 2xl:gap-64">
            <div className="w-full  lg:w-[50%] xl:w-[70%]  pt-8 lg:pt-16 xl:pt-28">
              <h4 className="font-lato-regular text-black/80">
                Each Buddha Fellow benefits from a dual support system
                comprising an experienced industry Mentor with over 30 years of
                experience and an Anchor, who is a dedicated member of The
                Buddha Institute team. This triad of Fellow, Mentor, and Anchor
                collaborates for 24 months to build a sustainable development
                enterprise — multiplying both business and social impact
                manifold.
              </h4>
              <h4 className="font-lato-regular text-black/80 pt-4 md:pt-6 xl:pt-14 lg:pt-12">
                In addition to providing individualized support, the two
                custodians (Mentor and Anchor) of The Buddha Institute assist
                the Fellow in collaborating with all relevant players in their
                ecosystem, helping Fellows engage with opportunities that can
                accelerate their entrepreneurial journey.
              </h4>
            </div>
            <div className="w-full  lg:w-[50%] xl:w-[70%] pt-5 2xl:pt-9 xl:pt-14 lg:pt-9 pb-4">
              <img src={threePronged} alt="Three Fold Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default ThreeFold;
