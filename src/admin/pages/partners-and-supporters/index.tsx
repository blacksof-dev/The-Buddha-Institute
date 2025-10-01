import { useState } from "react";

// import ContactFormPop from "../../component/contactFormPopUp/ContactFormPop";

import CardSection from "../budha-fellowship-program/cardSection";
import PartnersAndSupporters from "./partners-and-supporters";
import Banner from "./patnersbanner";



interface userDataPropes {
  _id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  industry: string;
  howDidYouGetToKnowUs: string;
  queryRelatedTo: string;
  query: string;
}
const PartnersAndSupportersAdmin = () => {

  const [formOpen, setFormOpen] = useState(false);
  const [activeBtn, setActivebtn] = useState<string>("Government and institutions");
  const [type, setType] = useState<string>('');

  const formClickOpens = () => {
    setFormOpen(true);
  };

  const handleFromOpen = () => {
    setFormOpen(false);
  };

  const handleActivebtn = (btn: string) => {
    setActivebtn(btn);
  };
  const handleFrom = () => {
    if (activeBtn === "Government and institutions") {
      setType('institution')
    }
    else if (activeBtn === "Foundations and CSR Partners") {
      setType("Foundations")
    }
    else {
      setType("CSO")
    }
    setFormOpen(true);
  }


  return (
    <>
      <div className=" blade-top-padding-lg p-4 pt-10">
        <Banner section="01" sectionTitle="Banner"/>
        <PartnersAndSupporters section="02" />
      </div>
      <CardSection section="03" sectionTitle="Compassionate Contributors" role="compassionate" note='Note: Changes made to this section will be reflected across all pages where this section is used. (eg. Partners & Supporters And Donate Us)' />
    </>
  );
};

export default PartnersAndSupportersAdmin;
