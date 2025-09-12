import React from "react";
import BudhhaFellowBanner from "./01_banner";
import ThreeFold from "./02_3Fold";
import FellowShip from "./05_fellowship";
import FrequentlyAsked from "./06_FrequentlyAsked";
import BudhaFellow from "./07_BudhaFellow";
import Synergy from "./08_Synergy";
import MainContainer from "./MainContainer";
import useGSAP from "hooks/useGsap";

import { Helmet } from "react-helmet-async";
import homeogImage from "../../../public/final-logo-new.svg";
import Mentors from "./03_mentors";
import Anchors from "./04_anchor";
import VoiceSubComp from "./fellowship_new";


const BudhaFellowProgram = () => {
  useGSAP(".BFP-animations");
  return (
    <>
      <div className="BFP-animations">
        <Helmet>
          <title>Buddha FellowShip Program | The Buddha Institute</title>
          <meta property="og:title" content="Buddha FellowShip Program | The Buddha Institute" />
          <meta
            name="og:description"
            content="A 24-month mentorship initiative by The Buddha Institute, empowering development entrepreneurs with funding, expert guidance, community linkages, and dedicated support to scale social impact."
          />

          <meta name="author" content="The Buddha Institute" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="./final-logo-new.svg" />
          <meta property="og:image" content="./final-logo-new.svg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Buddha FellowShip Program | The Buddha Institute" />
          <meta
            name="twitter:description"
            content="A 24-month mentorship initiative by The Buddha Institute, empowering development entrepreneurs with funding, expert guidance, community linkages, and dedicated support to scale social impact."
          />
          <meta
            name="twitter:image"
           content="./final-logo-new.svg"
          />
    <link rel="canonical" href="https://thebuddhainstitute.org/budha-fellowship-program" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <section>
          <BudhhaFellowBanner />
        </section>
        <section>
          <Synergy />
        </section>
        <section>
          <MainContainer />
        </section>
        <section>
          <ThreeFold />
        </section>
        <section>
          <Mentors />
        </section>
        <section>
          <Anchors />
        </section>
        <section>
          <BudhaFellow />
        </section>
        <section >
          <FellowShip />
        </section>
        <section>
          <VoiceSubComp />
        </section>
        <FrequentlyAsked />
      </div>
    </>
  );
};

export default BudhaFellowProgram;
