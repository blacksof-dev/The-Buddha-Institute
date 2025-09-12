import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1A8482] text-white py-10">
     
      <div className="mx-auto px-6 gap-4 md:flex justify-between items-center">
        <div>
          <h1 className="font-lato-bold max-w-[78%] leading-tight w-container">Subscribe to our newsletter</h1>
        </div>
        <div className="mt-4 ml-auto  md:mt-0">
          <label htmlFor="email" className="block text-sm mb-2">
            Your email address (required)
          </label>
          <div className="flex">
            <input
              type="email"
              id="email"
              placeholder=""
              className="p-2 bg-transparent border border-white text-white placeholder-white rounded-l-md w-96 md:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <h6 className="bg-[#D7DF23] text-black px-4 py-2 rounded-r-md hover:bg-yellow-500">
              Become a subscriber
            </h6>
          </div>
          <h6 className="font-lato-regular opacity-70 max-w-[84%] mt-2">
            By submitting your email address, you agree to our Privacy Policy and Terms of Service. You can unsubscribe anytime via the link in your email.
          </h6>
        </div>
      </div>

   
      <hr className="my-8 border-[#1A8482]" />

     
      <div className="container w-container mx-auto px-6 md:flex justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img
            src="/ContactUs/logo.png" 
            alt="The Buddha Institute Logo"
            className=" mx-auto md:mx-0"
          />
          
        </div>
        <h6 className="grid sm:grid-cols-2 grid-col-1 gap-y-4 gap-x-9">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Buddha Fellowship Program
          </a>
          <a href="#" className="hover:underline">
            Buddha Fellows
          </a>
          <a href="#" className="hover:underline">
            Impact
          </a>
          <a href="#" className="hover:underline">
            Partners & Supporters
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </h6>
      </div>
      
      <hr className="my-8 border-[#1A8482]" />
      {/* Social Media Links */}
      <div className="container w-container  px-9 mt-8 flex space-x-4">
        <a href="#" className="hover:opacity-80 ">
          <img src="/ContactUs/facebook.png" alt="Facebook" className="w-4" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src="/ContactUs/instagram.png" alt="Instagram" className="w-6" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src="/ContactUs/linkedin.png" alt="LinkedIn" className="w-6" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src="/ContactUs/youtube.png" alt="YouTube" className="w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
