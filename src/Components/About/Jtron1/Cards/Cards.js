import React from "react";
import CSS from "./Cards.module.css";
import Card from "./Card/Card";
import Life from "../../../../Images/symbol-life.png";
import Auto from "../../../../Images/symbol-auto.png";
import Travel from "../../../../Images/symbol-travel.png";
import Health from "../../../../Images/symbol-health.png";

import IG from "../../../../Images/icon-instagram.png";
import FB from "../../../../Images/icon-facebook.png";
import LN from "../../../../Images/icon-linkedin.png";
import TW from "../../../../Images/icon-twitter.png";
const buttons = [
  { image: Life, link: "/life-insurance" },
  { image: Auto, link: "/car-insurance" },
  { image: Travel, link: "/travel-insurance" },
  { image: Health, link: "/health-insurance" }
];
const socialbuttons = [
  { image: IG, link: "/" },
  { image: FB, link: "/" },
  { image: LN, link: "/" },
  { image: TW, link: "/" }
];
const data = [
  { one: "1000+", two: "people insured" },
  { one: "10,000+", two: "comparisons done" }
];
export default props => (
  <div className={CSS.main}>
    <Card
      lastRow={buttons}
      heading="What we do"
      text="We make insurance easier to understand and help you make the right decision when choosing an insurance plan suited for your needs"
      withButtons
    />
    <Card
      lastRow={socialbuttons}
      heading="Who we are"
      text="easyinsurance is an entrepreneurial venture that aims to digitize access to insurance by integrating technology with existing systems"
      withButtons
    />
    <Card
      lastRow={data}
      heading="Our journey"
      text="We are based in Technology Incubation Centre NUST and were a part of NIC Islamabad and Invest2Innovate Accelerator Program"
    />
  </div>
);
