import React from "react";
import CSS from "./Journey.module.css";
import JourneyCard from "./JourneyCard/JourneyCard";
export default props => (
  <div className={CSS.main}>
    <JourneyCard
      heading="Contract signing with EFU Life Insurance"
      text="easyinsurance signed the official contact with EFU Life Insurance to be their authorized agency."
      seeMore="https://www.efulife.com/efu-life-partners-easy-insurance-distribute-digital-insurance-products/"
    />
    <JourneyCard
      heading="Exclusive group health deal for P@SHA member companies"
      text="easyinsurance is proud to announce its exclusive collaboration with Pakistan Software Houses Association, better known as P@SHA. We will be providing P@SHA members group health insurance at discounted rates and highly favourable terms and conditions."
      seeMore="https://easyinsurance.com.pk/P@SHA"
    />
    <JourneyCard
      heading="easyinsurance wins the regional stage of 1776 Challenge Cup by Invest2Innovate"
      text="The 1776 Challenge Cup takes place in 75 cities around the world. One startup is selected from each city to participate in the Global Finals."
      seeMore="https://www.techjuice.pk/easy-insurance-pakistan-wins-1776-challenge-cup-invest2innovate/"
    />
  </div>
);
