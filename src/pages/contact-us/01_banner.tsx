import React from "react";

import { Link } from "react-router-dom";
import ContactInfo from "./contact_details";
import DetailedForm from "./headless";

export default function ContactUs() {
  return (
    <>
      <section className="bg-[#FFFBEF]">
        <div className="w-container-xl blade-top-padding-sm  blade-bottom-padding-sm">
          <h1 className="mega xl:blade-top-padding-lg blade-bottom-margin-sm  text-darkGreen font-lato-regular">
            Contact us
          </h1>
          <div className="flex flex-col-reverse flex-wrap gap-2 md:gap-4 border-gray-300 md:flex-row sm:flex-nowrap sm:border-t-2 xl:gap-9 2xl:gap-0">
            <div className=" mt-2 w-full sm:mt-9 md:max-w-[45%] 2xl:max-w-[40%]">
              <div className="h-[300px]  2xl:max-w-[85%]">

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32211.097529612707!2d77.19425896479117!3d28.534503661556545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f01f9b693d%3A0x7882dffbfb262376!2sAnupam%20Apartments!5e0!3m2!1sen!2sin!4v1752643027341!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen  referrerPolicy="no-referrer-when-downgrade"  
                className="h-full w-full rounded-sm"></iframe>


              </div>
              <div className="sm:mt-4">
                <ContactInfo
                  name="Arvind Kumar"
                  location="Location: Delhi"
                  email="arvind@thebuddhainstitute.org"
                  linkedinUrl="https://in.linkedin.com/in/arvind-kumar-4a6a6b8"
                  locationUrl="https://maps.app.goo.gl/y82pyJgVr8yTqB3K9"
                  emailUrl={`mailto:arvind@thebuddhainstitute.org`}
                  locationIcon={<svg />}
                  emailIcon={<svg />}
                />
              </div>
              <div className="sm:mt-4">
                <ContactInfo
                  name="Anupam Pandey"
                  location="Location: Jaipur, Rajasthan"
                  email="anupam@thebuddhainstitute.org"
                  linkedinUrl="https://www.linkedin.com/in/anupam-k-pandey/?originalSubdomain=in"
                 locationUrl="https://maps.app.goo.gl/yzMpBmnre4VDFAbu6"
                  emailUrl={`mailto:anupam@thebuddhainstitute.org`}
                  locationIcon={<svg />}
                  emailIcon={<svg />}
                />
              </div>
              <div className="sm:mt-4">
                <ContactInfo
                  name="Borra Srinivas Rao"
                  location="Location: Hyderabad, Telangana"
                  email="srinivasrao@thebuddhainstitute.org"
                  linkedinUrl="https://www.linkedin.com"
                  locationUrl="https://maps.app.goo.gl/4vM14nrqvh38xcnU6"
                  emailUrl={`mailto:srinivasrao@thebuddhainstitute.org`}
                  locationIcon={<svg />}
                  emailIcon={<svg />}
                />
              </div>
              <div className="sm:mt-4">
                <ContactInfo
                  name="Ananya Srivastava"
                  location="Location: Pune, Maharashtra"
                  email="ananya@thebuddhainstitute.org"
                  linkedinUrl="https://www.linkedin.com/in/ananya-srivastava-468747173/"
                  locationUrl="https://maps.app.goo.gl/n3mtv2zqFh2YSh346"
                  emailUrl={`mailto:ananya@thebuddhainstitute.org`}
                  locationIcon={<svg />}
                  emailIcon={<svg />}
                />
              </div>
            </div>
            <div className="hidden border-r border-gray-300 sm:block"></div>

            <div className="mt-2 w-full sm:mt-8 md:max-w-[66%] 2xl:max-w-[60%]">
              <div className="2xl:w-container">
                <h3 className="ml-1 text-darkGreen font-lato-bold sm:ml-0 2xl:ml-4 2xl:text-4xl">
                  Have questions? We are right here.
                </h3>
                <h4 className="ml-1 mt-4 font-lato-regular sm:mt-7 2xl:ml-4 2xl:max-w-[75%]">
                  Curiosity is one of the denominations of success at The Buddha
                  Institute. We’d love to answer your queries.
                </h4>
                <h4 className=" my-6 ml-1 font-lato-regular sm:ml-0 2xl:ml-4">
                  Please fill out the form below.
                  <div className="mt-4">
                    <DetailedForm />
                  </div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
