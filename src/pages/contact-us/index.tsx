import React from "react";
import ContactForm from "./01_banner";
import ContactUs from "./01_banner";

import Lotus from "./03_lotus";
// import DetailingForm from "./lg_screen";
import DetailedForm from "./headless";

export default function Contact() {
  return (
    <>
      <div className="">
        <ContactUs />
        <Lotus />
        {/* <DetailingForm />
        <DetailedForm /> */}
      </div>
    </>
  );
}
