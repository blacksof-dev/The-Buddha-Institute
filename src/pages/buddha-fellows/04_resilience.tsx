
import HighlightHeading from "./highlightHeading";

import EnterprisingSwiper from "./enterprisingCarousal";

export default function Resilience() {
  return (
    <>
      <section className="  blade-bottom-padding bg-[#FAF9F5]">
        <div className="">
          <div className="gsap-fade-in">
            {" "}
            <HighlightHeading heading="From enterprising resilience to resilient enterprises " />
          </div>
          <div className="gsap-fade-in">
           
            <EnterprisingSwiper />
       
          </div>
        </div>
      </section>
    </>
  );
}
