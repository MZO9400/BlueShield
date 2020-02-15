import React from "react";
import CSS from "./WhatWeOffer.module.css";
import OfferCard from "./OfferCard/OfferCard";
import IconQuote from "../../../Images/icon-quote.png";
import IconSelect from "../../../Images/icon-select.png";
import IconBullets from "../../../Images/icon-bullets.png";
export default props => (
  <div className={CSS.offer}>
    <h4>What We Offer</h4>
    <div className={CSS.offercards}>
      <OfferCard
        img={IconQuote}
        heading="Design Plans"
        text="Packages quotes from top insurance companies of Pakistan as per requirements"
      />
      <OfferCard
        img={IconSelect}
        heading="Advice"
        text="Give suggestions based on our experiences and help you take the right decision"
      />
      <OfferCard
        img={IconBullets}
        heading="Educate"
        text="Present and explain an indepth comparisons and terminologies between each quotation"
      />
    </div>
  </div>
);
