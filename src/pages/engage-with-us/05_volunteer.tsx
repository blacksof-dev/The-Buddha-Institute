import Button from "atoms/button";
import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <section className="w-container-xl blade-top-padding-xl sm:blade-top-padding-lg gsap-fade-in">
      <div>
        <h1 className="text-[#07393C] font-lato-bold">
          See the change.
          <span className="text-green"> Be the change.</span>
        </h1>
        <hr className="border-b border-[#1A84823B] opacity-[23%] mt-4" />
        <div className="absolute  2xl:top-[87px] xl:top-[85px] bottom-0 left-1/2 w-[1px] bg-[#1A84823B]  hidden md:block"></div>
      </div>

      {/* Wrapper to position the border correctly */}
      <div className="relative blade-top-margin-sm flex flex-col gap-4 sm:gap-10 md:flex-row md:gap-20 lg:gap-48">
        {/* Vertical Border */}
        <div className="w-full md:w-1/2">
          <h4 className="text-black/80 font-lato-regular sm:mb-0 blade-bottom-margin-sm">
            Immerse yourself in scripting India’s transformation as a volunteer.
            Engage at the grassroots level, witness on-ground realities and
            evolve into an agent of change while making a difference.
          </h4>
          <div className="hidden h-10 md:mt-10 md:block md:h-14 md:w-80">
            <Link to='mailto:admissions@thebuddhainstitute.org'>
              <Button text={"Become a volunteer"} />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <div className="flex justify-center gap-8 md:gap-10 lg:gap-16">
            <div>
              <h4 className="text-pear bg-teal px-4 py-2 w-fit 2xl:text-2xl font-lato-bold">
                01
              </h4>
              <div className="sm:mt-6 mt-4">
                <h5 className="text-black/80 font-lato-regular">
                  On-going interactions with the Mentors, Anchors, and Buddha
                  Fellows.
                </h5>
              </div>
            </div>
            <div className="min-w-[45%]">
              <h4 className="text-pear bg-teal px-4 py-2 w-fit 2xl:text-2xl font-lato-bold">
                02
              </h4>
              <div className="sm:mt-6 mt-4">
                <h5 className="text-black/80 font-lato-regular">
                  On-ground exposure to development entrepreneurship.
                </h5>
              </div>
            </div>
          </div>
          <div className="blade-top-margin-sm flex justify-center gap-8 md:gap-10 lg:gap-16">
            <div>
              <h4 className="text-pear bg-teal w-fit px-4 py-2 2xl:text-2xl font-lato-bold">
                03
              </h4>
              <div className="sm:mt-6 mt-4">
                <h5 className="text-black/80 font-lato-regular">
                  Training and immersion into the day-to-day workings of a development enterprise.
                </h5>
              </div>
            </div>
            <div className="min-w-[45%]">
              <h4 className="text-pear bg-teal w-fit px-4 py-2 2xl:text-2xl font-lato-bold">
                04
              </h4>
              <div className="sm:mt-6 mt-4">
                <h5 className="text-black/80 font-lato-regular">
                  Sector-specific internship with certificate.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto mt-4 h-10 mx-auto w-[300px] md:m-0 md:mt-10 md:hidden md:h-14">
        <Button text={"Become a volunteer"} />
      </div>
    </section>
  );
}
