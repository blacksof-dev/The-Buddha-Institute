import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleAccordion = (tabName: string) => {
    setOpenTab(openTab === tabName ? null : tabName); // Toggle tab state
  };
  return (
    //  <nav className="xl:block hidden sticky top-0 z-50">
    <nav className="xl:block hidden sticky top-0 z-[999]">
      <div className="flex justify-end gap-8 text-white text-sm bg-darkCyan">
        <h6 className=" flex font-lato-regular py-5 2xl:text-[16px] gap-x-12">
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/">Become a Buddha Fellow</Link>
        </h6>
          <h6>Subscribe Oue newsletter</h6>
        <h4 className="bg-pear py-2 px-2 font-lato-bold">
          <button className=" text-black px-8 py-2 ">Donate</button>
        </h4>
      </div>
      <div className="backdrop-blur-sm  bg-darkGreen">
        <div className="flex w-container 2xl:justify-between items-center px-6 py-3  text-white text-sm ">
          <div className="flex items-center">
            <img
              src="/new-footer.svg"
              alt="Buddha Institute"
              className="w-[45%]"
            />
          </div>

          <ul className="flex gap-6 2xl:text-[16px]">
            <li className="group relative">
              <button className=" flex font-lato-regular 2xl:text-[16px] opacity-90 items-center gap-2">
                About Us
                <svg
                  className="h-5 fill-blue"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button className="font-lato-regular gap-2 flex opacity-90 2xl:text-[16px]">
                Buddha Fellowship Program
                <svg
                  className="h-5 fill-blue"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button className="font-lato-regular opacity-90 gap-2 flex 2xl:text-[16px]">
                Buddha Fellows
                <svg
                  className="h-5 fill-blue"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
            </li>
            <li className="group relative">
              <button className="flex font-lato-regular opacity-90 2xl:text-[16px] items-center gap-2">
                Impact
                <svg
                  className="h-5 fill-blue"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button className="font-lato-regular opacity-90 gap-2 flex 2xl:text-[16px]">
                Partners & Supporters
                <svg
                  className="h-5 fill-blue "
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </button>
            </li>

            <li>
              <button className="font-lato-regular opacity-90 2xl:text-[16px]">
                Resources
              </button>
            </li>
            <li>
              <button className="font-lato-regular opacity-90 2xl:text-[16px]">
                Awards
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
