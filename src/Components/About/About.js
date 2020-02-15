import React from "react";
import CSS from "./About.module.css";
import Jtron1 from "./Jtron1/Jtron1";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
import FifthJumbotron from "../MainPage/FifthJumbotron/FifthJumbotron";
import WhyUs from "../WhyUs/WhyUs";
import Journey from "./Journey/Journey";
import Team from "./Team/Team";
import NIC from "../../Images/NIC.png";
import PASHA from "../../Images/pasha.png";
import i2i from "../../Images/i2i.png";
import Jazz from "../../Images/logo-jazz.png";
import UKAID from "../../Images/UKAID.png";
import Bill from "../../Images/Bill.png";
import Karandaz from "../../Images/Karandaz.png";
import MinistryIT from "../../Images/ministry-IT.png";
import SLI from "../../Images/sli.png";
import JGI from "../../Images/jgi.png";
import AEI from "../../Images/aei.png";
import AI from "../../Images/ai.png";
import Adamjee from "../../Images/aji.png";
import EFU from "../../Images/eli.png";
import CI from "../../Images/ci.jpg";
import JLI from "../../Images/jli.png";
const insurancedata = [
  { image: NIC },
  { image: PASHA },
  { image: i2i },
  { image: Jazz },
  { image: UKAID },
  { image: Bill },
  { image: Karandaz },
  { image: MinistryIT }
];
const insuranceCompanies = [
  { image: SLI, text: "State Life Insurance" },
  { image: JGI, text: "Jubilee General Insurance" },
  { image: AEI, text: "Allianz EFU Insurance" },
  { image: AI, text: "Askari Insurance" },
  { image: Adamjee, text: "Adamjee Insurance" },
  { image: EFU, text: "EFU Insurance" },
  { image: CI, text: "Century Insurance" },
  { image: JLI, text: "Jubilee Life Insurance" }
];
const FAQ = [
  {
    heading: "How much do we charge for our service?",
    text:
      "Nothing. Our service is completely free for our customers. We get paid a percentage by the insurance company."
  },
  {
    heading: "Are our rates more than the market price?",
    text:
      "All plans are standard market plans, meaning that they cost the same as buying straight from the insurance company."
  },
  {
    heading: "Is purchasing through us safe and reliable?",
    text:
      "All payment transactions are done directly with the insurance company so your money never gets in the wrong hands."
  }
];
export default props => (
  <React.Fragment>
    <Jtron1 />
    <InsuranceCompanies
      heading="Our supporters and collaborators"
      data={insurancedata}
    />
    <InsuranceCompanies
      heading="We are working with the top insurance companies of Pakistan"
      data={insuranceCompanies}
    />
    <FifthJumbotron />
    <Journey />
    <Team />
    <WhyUs data={FAQ} heading="Some commonly asked questions" />
  </React.Fragment>
);
