import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "molecules/animatedCard";
import { useEffect, useState } from "react";
import PopUp from "molecules/PopUp";
import { Icon } from "organisms/iconCommonent";

export default function Purpose() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [popupType, setPopupType] = useState<"write" | "subscribe" | null>(
    null
  );

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen]);

  const handlePopup = (type: "write" | "subscribe" | null) => {
    setPopupType(type);
    setIsPopupOpen((val) => !val);
  };

  return (
    <>
      <section className="blade-top-margin-lg  blade-top-padding gsap-fade-in bg-[#FFFBEF]">
        <div className="w-container-lg mx-auto blade-bottom-padding-xl">
          <div>
            <h1 className="text-[#07393C] font-lato-bold">Stay in touch</h1>
          </div>
          <div className=" ">
            <hr className=" border-[#84848480] opacity-50 border-b" />
          </div>
          <div className="blade-top-margin-sm">
            <h4 className="w-full text-black/80 font-lato-regular md:w-1/2 lg:w-[60%] xl:text-balance sm:ml-1">
              The Buddha Institute is a fraternity of believers and agents of
              change. Become a part of our family and stay up-to-date with the
              state of play.
            </h4>
          </div>

          <div className="mt-6 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center place-items-center max-w-screen-xl gap-8 xl:gap-4 overflow-hidden">
            <Card bgColor="bg-lightGreen">
              <div className="p-10">
                <h4 className="mt-5 font-lato-bold">Social media</h4>
                <div className="mt-5 flex flex-col gap-4 font-lato-regular">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.youtube.com/channel/UCI9GUskqoh8yn-5lgriWeIQ"
                      target="_blank"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl text-lightGreen">
                     
                        <Icon icon={AiOutlineYoutube}  />
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/thebuddhainstitute/"
                      target="_blank"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl text-lightGreen">
                        <Icon icon={IoLogoInstagram}  />
                       
                      </span>
                    </a>
                    <a
                      href="https://www.facebook.com/buddhafellowship/"
                      target="_blank"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl text-lightGreen">
                       
                        <Icon icon={GrFacebookOption}  />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F33246261%2Fadmin%2F"
                      target="_blank"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl text-lightGreen">
                      
                         <Icon icon={FaLinkedinIn}  />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card bgColor="bg-pear">
              <div className="p-10">
                <h4 className="mt-5 font-lato-bold">Write to us</h4>
                <div
                  className="mt-36 w-fit"
                  onClick={() => handlePopup("write")}
                >
                  <Link to="/contact-us">
                    <Button text={"Write"} />
                  </Link>
                </div>
              </div>
            </Card>

            <Card bgColor="bg-lightGreen">
              <div className="p-10">
                <h4 className="mt-5 font-lato-bold">
                  Subscribe to quarterly newsletters
                </h4>
                <div
                  className="mt-36 w-fit"
                  onClick={() => handlePopup("subscribe")}
                >
                  <Button text={"Subscribe"} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {isPopupOpen && popupType === "subscribe" && (
        <PopUp handleClose={() => handlePopup(null)} />
      )}
    </>
  );
}

const Button = ({ text }: { text: string }) => {
  return (
    <button className=" cursor-pointer group">
      <div className="flex">
        <div className="font-lato-regular  border-black -hover:bg-darkCyan -hover:border-white  border-[1px] pl-2 pr-2 transition-all duration-700">
          <h4 className="transition-all duration-700 -hover:text-white leading-none py-2">
            {text}
          </h4>{" "}
        </div>
        <h4 className="pl-1 pr-1  flex items-center  border-black -hover:bg-darkCyan -hover:border-white  border-l-0 border-[1px] transition-all duration-700">
          <svg
            className="h-6 -hover:fill-white transition-all duration-700"
            width="8"
            height="15"
            viewBox="0 0 9 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" "
              d="M1.82558 14.2318L8.9415 7.11592L1.82558 0L0.0625 1.76308L5.41534 7.11592L0.0625 12.4688L1.82558 14.2318Z"
              fill=""
            />
          </svg>
        </h4>
      </div>
    </button>
  );
};
