import React, {  useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FooterForm from "./footer-form";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FloatingWhatsapp from "./floatingWhatsapp";
import { Icon } from "./iconCommonent";
const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hideNavOnPaths = [
      "/forgot-password",
      "/admin",
      "/new-password",
      "/signin",
    ];
    const currentPath = window.location.pathname;
    // const navElement = document.querySelector(".App > nav");

    if (footerRef.current) {
      if (
        currentPath.includes("/admin") ||
        hideNavOnPaths.includes(currentPath)
      ) {
        footerRef.current.style.display = "none";
      } else {
        footerRef.current.style.display = "block";
      }
    }
  }, []);

  return (
    <footer ref={footerRef} className=" bg-teal text-white">
      <div className="px-4 sm:px-8 md:w-container">
        <div className=" flex flex-col md:flex-row blade-top-padding blade-bottom-padding-sm">
          <div className="w-full lg:w-[50%]">
            <div className="w-full md:w-[69%]  lg:w-[55%] font-lato-bold">
              <h1>Subscribe to our newsletter</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="">
              <FooterForm />
            </div>
          </div>
        </div>
        <hr className="border border-[#000F5540]" />
        <div className="flex md:flex-row flex-col blade-top-padding-sm blade-bottom-padding-sm">
          <div className="w-full sm:w-[50%]">
            <img
              src="/final-logo-new.svg"
              alt="The Buddha Institute Logo"
              className="w-[40%]"
            />
            <div className="flex gap-4 py-6 sm:blade-top-padding-sm  ">
              <a
                href="https://www.facebook.com/buddhafellowship/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                 <Icon icon={FaFacebookSquare} className="w-7 h-7" />
             
              </a>
              <a
                href="https://www.instagram.com/thebuddhainstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                 
                <Icon icon={FaInstagram} className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F33246261%2Fadmin%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                
                <Icon icon={FaLinkedinIn} className="w-7 h-7" />
                 

              </a>
              <a
                href="https://www.youtube.com/channel/UCI9GUskqoh8yn-5lgriWeIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
               
                <Icon icon={FaYoutube} className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-[50%] blade-top-padding-sm ">
            <div className=" grid-col-1  grid gap-x-8 gap-y-4 text-[14.5px] opacity-90 font-lato-regular sm:ml-0 sm:grid-cols-2 lg:gap-x-16 pb-5 sm:pb-0">
              <Link to="/" className=" text-base hover:text-pear">
                Home
              </Link>
              <Link to="/about-us" className="  text-base hover:text-pear">
                About Us
              </Link>
              <Link
                to="/budha-fellowship-program"
                className=" text-base hover:text-pear"
              >
                Buddha Fellowship Program
              </Link>
              <Link to="/buddha-fellows" className=" text-base hover:text-pear">
                Buddha Fellows
              </Link>
              <Link to="/impact" className=" text-base hover:text-pear">
                Impact
              </Link>
              <Link
                to="/partners-and-supporters"
                className=" text-base hover:text-pear"
              >
                Partners & Supporters
              </Link>
              <Link to="/engage-with-us" className=" text-base hover:text-pear">
                Engage with Us
              </Link>
              <Link to="/resources" className=" text-base hover:text-pear">
                Resources
              </Link>
              <Link to="/contact-us" className="text-base hover:text-pear">
                Contact Us
              </Link>
              <Link to="/awards" className=" text-base hover:text-pear">
                Awards
              </Link>
            </div>
          </div>
        </div>
        <hr className="border border-[#000F5540]" />
        <div className="text-white font-lato-regular py-6 flex justify-between gap-8 flex-wrap">
          <h6 className="xl:text-sm text-white/60">
            2024 The Buddha Institute. All rights reserved.
          </h6>
          <div className="flex flex-row gap-8">
            <h6 className="xl:text-sm  text-white/60">
              <a
                target="_blank"
                href="https://www.blacksof.com/"
                className="underline underline-offset-4"
              >
                Made by Blacksof
              </a>
            </h6>
            <div>
             
                <FloatingWhatsapp />
             

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
