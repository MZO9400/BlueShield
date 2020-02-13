import React from "react";
import Card from "./Card/Card";
import CompareIcon from "../../../Images/icon-compare.svg";
import OnlineIcon from "../../../Images/icon-online.svg";
import RatesIcon from "../../../Images/icon-rates.svg";
export default props => (
  <div>
    <Card
      image={CompareIcon}
      title="Free comparison"
      text="Choose from the top insurers of Pakistan for the best rate and value"
    />
    <Card
      image={OnlineIcon}
      title="Online access"
      text="View your plan details & documents from anywhere, anytime from your profile"
    />
    <Card
      image={RatesIcon}
      title="Zero hassle"
      text="We offer a secure neutral platform without dealing with self-serving agents"
    />
    <Card
      image={CompareIcon}
      title="Free comparison"
      text="Choose from the top insurers of Pakistan for the best rate and value"
    />
    <Card
      image={OnlineIcon}
      title="Online access"
      text="View your plan details & documents from anywhere, anytime from your profile"
    />
    <Card
      image={RatesIcon}
      title="Zero hassle"
      text="We offer a secure neutral platform without dealing with self-serving agents"
    />
  </div>
);
