import React from "react";
import ComparisonCard from "./ComparisonCard/ComparisonCard";
import Life from "../../Images/category-life.png";
import Health from "../../Images/category-health.png";
import Travel from "../../Images/category-travel.png";
import Auto from "../../Images/category-auto.png";
import CSS from "./Compare.module.css";
export default props => (
  <div className={CSS.maindiv}>
    <ComparisonCard
      img={Life}
      heading="Life insurance"
      text="Anxious about your family’s financial well being? Be covered in case something happens to you."
      planLink="/compare/life"
      learnMoreLink="/life-insurance"
    />
    <ComparisonCard
      img={Health}
      heading="Health insurance"
      text="Going abroad or planning to travel for vacation? Be covered for any accidents or mishaps."
      planLink="/compare/health"
      learnMoreLink="/health-insurance"
    />
    <ComparisonCard
      img={Auto}
      heading="Auto insurance"
      text="Anxious about your family’s financial well being? Be covered in case something happens to you."
      planLink="/compare/car"
      learnMoreLink="/car-insurance"
    />
    <ComparisonCard
      img={Travel}
      heading="Travel insurance"
      text="A proud car owner? Be covered for any car damages, accidents or theft on the road"
      planLink="/compare/travel"
      learnMoreLink="/travel-insurance"
    />
  </div>
);
