import React from "react";
import Banner from "./01_banner";

import Fellowship from "./03_fellowship";
import JoinUs from "./04_joinUs";
import useGSAP from "hooks/useGsap";
import Founder from "./06_founder";
import BuddhaFellowship from "./07_buddhaFellowship";
import Impact from "./09_impact";

import JoinFamily from "./11_joinFamily";


import homeogImage from "../../../public/final-logo-new.svg";
import kalyani from "assets/home/caseStudies/kalyani.jpg";
import sahrudaya from "assets/home/caseStudies/sahrudaya.png";
import suhas from "assets/home/caseStudies/suhas.jpg";
import doll from "assets/home/caseStudies/doll.png";

import Sector from "./sectors";
import { Helmet } from "react-helmet-async";
import Nurturing from "./02_about";
import Vision from "./05_vision";
import SuccessStories from "./08_successStories";
import CaseStudyHome from "molecules/caseStudiesHome";

import Supporters from "./10_supporters";
import Resources from "./12_resources";




const Home = () => {
  useGSAP(".home-wrapper");
  return (
    <>
      <Helmet>
        <title> The Buddha Institute</title>
        <meta
          name="description"
          content="The Buddha Institute is a field-building platform empowering development entrepreneurs to serve marginalized communities."
        />
        <meta
          name="keywords"
          content="Buddha Institute, development entrepreneurship, social impact, mentorship, Fellowship"
        />
        <meta name="author" content="The Buddha Institute" />
        <meta
          property="og:title"
          content="The Buddha Institute – Empowering Development Entrepreneurs"
        />
        <meta
          property="og:description"
          content="A platform supporting development entrepreneurs in creating social impact for marginalized communities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="./final-logo-new.svg" />
        <meta property="og:image" content="./final-logo-new.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Buddha Institute – Empowering Development Entrepreneurs"
        />
        <meta
          name="twitter:description"
          content="Support for social entrepreneurship—The Buddha Institute connects mentors, funding, and community to enable change."
        />
        <meta
          name="twitter:image"
         content="./final-logo-new.svg"
        />
         <link rel="canonical" href="https://thebuddhainstitute.org/" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="home-wrapper">
        <Banner />
        <Nurturing />
        <Fellowship />
        <JoinUs />
        <Vision />
        <Founder />
        <BuddhaFellowship />
        <Sector />
        <SuccessStories />

        <CaseStudyHome
          data={CaseStudies}
          title="Buddha Fellow highlights"
          buttonText="Become a Buddha Fellow"
          paragraphs={[
            "Our Buddha Fellows overcome on-the-ground challenges with immense passion and resilience. The result Increased dignity and labor force participation.",
            "Select cases of transformation being driven by our <b>Buddha Fellows.</b>",
          ]}
        />
        <Impact />

        <Resources />

        <JoinFamily />
        <Supporters />
       

      </div>
    </>
  );
};

export default Home;

const CaseStudies = [
  {
    id: "",
    img: kalyani,
    mobileimg: kalyani,
    alt: "A woman skillfully weaving fabric.",
    logo: sahrudaya,
    title: "Kalyani Chavali (Cohort 2022-24)",
    subTitle: "Founder, Sahrudaya",
    desc: "Kalyani started Sahrudaya with a resolve to revive her grandmother’s deliciously healthy snacks. With Sahrudaya, she was providing two rural women a shot at dignified and financially independent living. She wanted to scale the enterprise to change the lives of more rural women while giving customers the taste of healthy snacking.",
    cardColor: "bg-[#D6DF20]",
    impact: [
      {
        pre: "Employment",
        post: "12 women, up from 2.",
      },
      {
        pre: "Women empowerment",
        post: "Four sole breadwinners in the team, 160+ women trained",
      },
      {
        pre: "Annual earnings",
        post: "INR 72K/woman",
      },
    ],
    progress: [
      {
        pre: "Product",
        post: "Traditional Indian sweets and snacks.",
      },
      {
        pre: "Major areas of focus in two years:",
        post: "Process standardisation, branding and packaging, and developing sales channels.",
      },
      {
        pre: "Annual revenue growth",
        post: "INR 19L (USD 22K), up from INR 2 lacs (USD 2300).",
      },
      {
        pre: "Acquired 3000+ customers by introducing a subscription model.",
        post: "",
      },
    ],
  },
  {
    id: "",
    img: suhas,
    mobileimg: suhas,
    alt: "A group of women peeling custard apples together.",
    logo: doll,
    title: "Suhas and Sunita Ramegowda (Cohort 2022-24)",
    subTitle: "Founder, The Good Doll",
    desc: "The husband-wife duo left their corporate jobs and moved to the Nilgiris during the COVID pandemic. There, they found their purpose in empowering tribal women through dignified, home-based livelihoods. Initial experiments led them to start The Good Doll, a brand that employs local, rural and tribal women to make eco-friendly, handcrafted dolls and toys.",

    cardColor: "bg-[#87BD3C]",
    impact: [
      {
        pre: "Employment",
        post: "90 women (20 full-time, 70 part-time).",
      },
      {
        pre: "Upskilling",
        post: "200+ women.",
      },
      {
        pre: "Earnings",
        post: "INR 10K/month median (INR 17K/month highest).",
      },
      {
        pre: "Won grants of INR 20L.",
      },
    ],
    progress: [
      {
        pre: "Product",
        post: "Sustainable handcrafted dolls and toys.",
      },
      {
        pre: "Major areas of focus in two years:",
        post: "Narrowing product offerings, identifying best product-market fit, go-to-market strategy",
      },
      {
        pre: "Annual revenue growth",
        post: "INR 75L ($ 90K), up from INR 18L ($ 21.6K).",
      },
      {
        pre: "Retail presence",
        post: "60 stores today up from 5.",
      },
      {
        pre: "Raised INR 1.1 Cr via equity and convertible notes.",
      },
    ],
  },
];
