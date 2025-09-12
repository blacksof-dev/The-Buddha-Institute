import React from "react";
import BuddhaFellowsBanner from "./01_banner";


import BecomeFellow from "./05_buddha-fellow";
import Spotlight from "./06_spotlight";

import BeamingConfidence from "./08_beaming-confidence";

import useGSAP from "hooks/useGsap";
import { Helmet } from "react-helmet-async";
import homeogImage from "../../../public/final-logo-new.svg";
import Nurturing from "./02_nurturing";
import Sustained from "./03_sustained";
import Resilience from "./04_resilience";
import News from "./07_news";





export default function BuddhaFellows() {
  useGSAP(".fellows-wrapper");
  return (
    <div className="fellows-wrapper">
      <Helmet>
        <title>Buddha Fellow | The Buddha Institute</title>
        <meta property="og:title" content="Buddha Fellow | The Buddha Institute" />
        <meta
          name="og:description"
          content="Visionary development entrepreneurs nurtured by The Buddha Institute through mentoring, funding, and ecosystem support to drive inclusive impact and uplift marginalized communities."
        />

        <meta name="author" content="The Buddha Institute" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="./final-logo-new.svg" />
        <meta property="og:image" content="./final-logo-new.svg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buddha Fellow | The Buddha Institute" />
        <meta
          name="twitter:description"
          content="Visionary development entrepreneurs nurtured by The Buddha Institute through mentoring, funding, and ecosystem support to drive inclusive impact and uplift marginalized communities."
        />
        <meta
          name="twitter:image"
          content="./final-logo-new.svg"
        />
 <link rel="canonical" href="https://thebuddhainstitute.org/buddha-fellows" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <BuddhaFellowsBanner />
      <Nurturing />
      <Sustained />
      <Resilience />
      <BecomeFellow />
      <Spotlight />
      <News data={NewsCarouselData} />
      <BeamingConfidence />
    </div>
  );
}

const NewsCarouselData = {
  productArray: [
    {
      image: "/Buddha-Fellows/uttarakhand-trio.png",
      id: "1",
      title:
        "Uttarakhand trio builds Rs 2.5-cr cold-pressed oil biz in Rajasthan; empowers farmers",
      link: "https://30stades.com/enterprise/uttarakhand-trio-build-rs-25-cr-cold-pressed-oil-business-foreka-rajasthan-empowers-farmers-7576000",
    },

    {
      image: "/Buddha-Fellows/forest-post.png",
      id: "3",
      title:
        "How Forest Post empowers Kerala's indigenous communities through handmade products",
      link: "https://30stades.com/enterprise/forest-post-empowers-keralas-indigenous-communities-with-handmade-products-beeswax-soaps-oils-4439191",
    },
    {
      image: "/Buddha-Fellows/forest-fork.png",
      id: "4",
      title:
        "Forest to fork: Chhattisgarh entrepreneur takes natural food products...",
      link: "https://30stades.com/enterprise/chhattisgarh-satendrasingh-lilhare-bastar-se-bazaar-tak-takes-natural-forest-food-products-to-markets-empowers-tribal-women-1706764",
    },
    {
      image: "/Buddha-Fellows/chemical-engineer.png",
      id: "5",
      title:
        "Chemical engineer's healthy food startup finds global buyers, empowers rural women",
      link: "https://30stades.com/enterprise/chemical-engineer-kalyani-chavali-healthy-food-startup-sahrudaya-global-buyers-empowers-rural-women-1515205",
    },
    {
      image: "/Buddha-Fellows/waste-cloth.png",
      id: "6",
      title:
        "‘We Turned 8000 Kg Waste Cloth to Indian Barbies’: Couple Earns Rs 75 Lakh...",
      link: "https://thebetterindia.com/354515/the-good-gift-fabric-rag-dolls-using-textile-waste-jobs-for-rural-tribal-women-in-nilgiris-sunita-suhas-ramegowda/",
    },
    {
      image: "/Buddha-Fellows/earning.png",
      id: "7",
      title:
        "Earning Rs 1 Cr, Bastar Man’s Forest-To-Fork ‘Bazaar’ Transforms Tribal Lives",
      link: "https://thebetterindia.com/336599/chhattisgarh-man-forest-to-fork-business-help-tribal-women-bastar-crore/#google_vignette",
    },
    {
      image: "/Buddha-Fellows/agri.png",
      id: "8",
      title:
        "Agri-drones manufactured in Kerala to enhance crop yields in UK and Canada......",
      link: "https://english.mathrubhumi.com/news/kerala/kerala-manufactured-drones-to-enhance-crop-yields-in-uk-and-canada-1.9678907",
    },
    {
      image: "/Buddha-Fellows/brains-new.png",
      id: "9",
      title:
        "Meet The Brains Behind ECOWRAP, The Firm That Helps You Keep Clean",
      link: "https://www.outlooktraveller.com/editors-picks/celebrating-people/meet-the-brains-behind-ecowrap-the-firm-that-helps-you-keep-clean",
    },
    {
      image: "/Buddha-Fellows/startup-new.png",
      id: "10",
      title: "Startup Mantra: No more toiling the soil",
      link: "https://www.hindustantimes.com/cities/pune-news/startup-mantra-no-more-toiling-the-soil-101720812046699.html",
    },
  ],
};
