// import { Button } from "@headlessui/react";
import CommonCard from "molecules/commonCardSlider";
import Button from "atoms/button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { Icon } from "organisms/iconCommonent";
import { getToken } from "../auth/authenticationFunction";


const ApplicationProcess = ({ onclose }: { onclose: () => void }) => {

  const navigate = useNavigate();


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleEnrollNow = () => {
    const token = getToken()
    console.log("Token:", token);
    if (token) {
      window.location.href = "https://application.thebuddhainstitute.org/demo_file_step1/";
    }
    else {
      navigate("/login")
      onclose();
    }
  }

  return (
    <>
      <Portal>
        <section className="fixed inset-0 flex items-center justify-center bg-black/70   z-[9999]">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl  relative md:m-4 m-2">
            <button
              onClick={onclose}
              className="scale-90 sm:scale-100 absolute top-4 right-4 h-10 w-10 bg-pink border border-darkBrown text-black rounded-full flex justify-center items-center text-xl cursor-pointer z-50"
            >
              <Icon icon={RxCross2} />

            </button>
            <div className="relative w-full ">
              <section
                className="blade-top-padding-sm blade-bottom-padding-sm px-6"
                id="buddha-fellow-section"
              >
                <div className=" gsap-fade-in">
                  <div className="">
                    <div className="">
                      <div className="   ">
                        <div>
                          <h6 className="text-36 text-darkGreen font-lato-bold  pb-2 lg:pb-3 ">
                            The four-stage admission process
                          </h6>
                        </div>

                        <div className="flex flex-col lg:flex-row 2xl:gap-36 lg:gap-24">
                          <div className="    w-full">
                            {fellowshipdata.productArray.map((item, index) => (
                              <div key={item.id} className="py-2 ">
                                <h3 className="font-lato-bold text-black/70 transition-all duration-500 ease-in">
                                  {item.title}
                                </h3>
                                <h6 className="py-2 font-lato-regular text-black/80 transition-all duration-500 ease-in">
                                  {item.desc1}
                                </h6>
                                <div className=""></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className=" justify-center sm:justify-start flex mt-4">
                        <div className=" w-fit ">
                          <button
                            type="button"
                            onClick={handleEnrollNow}
                            className="bg-pear text-black font-lato-bold px-8 py-4 rounded-lg  cursor-pointer transition"
                          >
                            Enroll now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </Portal>
    </>
  );
};

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};

const fellowshipdata = {
  productArray: [
    {
      image: "/BudhaFellowProgram/outreach-mobile.jpg",
      id: "1",
      title: "Outreach",
      desc1:
        "We conduct an extensive outreach to identify and invite promising development enterprises to apply. The applications are shortlisted based on certain pre-defined criteria.",
    },
    {
      image: "/BudhaFellowProgram/online-interview-mobile.jpg",
      id: "2",
      title: "Online interview",
      desc1:
        "The shortlisted candidates are interviewed online by a panel comprising members from the Buddha Institute team and Fellows from previous years.",
    },
    {
      image: "/BudhaFellowProgram/in-person-mobile.jpg",
      id: "3",
      title: "In-person assessment",
      desc1:
        "Selected candidates are invited to an in-person interview with experienced jury members.",
    },
    {
      image: "/BudhaFellowProgram/dilligence-mobile.jpg",
      id: "4",
      title: "Due diligence field visit",
      desc1:
        "The Buddha Institute team conducts due-diligence visits to the enterprise of the shortlisted candidate as a final step in the selection process.",
    },
  ],
};
export default ApplicationProcess;
