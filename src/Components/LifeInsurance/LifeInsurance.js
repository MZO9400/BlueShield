import React from "react";
import CSS from "./LifeInsurance.module.css";
import Jtron1 from "./Jtron1/Jtron1";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
import FourthJumbotron from "../MainPage/FourthJumbotron/FourthJumbotron";
import SixthJumbotron from "../MainPage/SixthJumbotron/SixthJumbotron";
import JubileeGeneral from "../../Images/jgi.png";
import Allianz from "../../Images/aei.png";
import TPL from "../../Images/tpli.png";
import UIC from "../../Images/uici.png";
import CompareIcon from "../../Images/icon-compare.svg";
import OnlineIcon from "../../Images/icon-online.svg";
import RatesIcon from "../../Images/icon-rates.svg";
import Uncle from "../../Images/uncle-03.png";
import Life from "../../Images/category-life.png";
const data = [
  {
    image: CompareIcon,
    title: "Free comparison",
    text: "Choose from the top insurers of Pakistan for the best rate and value"
  },
  {
    image: OnlineIcon,
    title: "Online access",
    text:
      "View your plan details & documents from anywhere, anytime from your profile"
  },

  {
    image: RatesIcon,
    title: "Zero hassle",
    text:
      "We offer a secure neutral platform without dealing with self-serving agents"
  },

  {
    image: CompareIcon,
    title: "Free comparison",
    text: "Choose from the top insurers of Pakistan for the best rate and value"
  },

  {
    image: OnlineIcon,
    title: "Online access",
    text:
      "View your plan details & documents from anywhere, anytime from your profile"
  },

  {
    image: RatesIcon,
    title: "Zero hassle",
    text:
      "We offer a secure neutral platform without dealing with self-serving agents"
  }
];
const features = [
  { image: CompareIcon, text: "Family coverage in case of death" },
  { image: CompareIcon, text: "Investment & savings during plan" },
  { image: CompareIcon, text: "Savings for child' university education" },
  { image: CompareIcon, text: "Islamic Takaful options" },
  { image: CompareIcon, text: "Stable yearly returns" }
];
const insurancedata = [
  { image: JubileeGeneral, text: "Jubilee General Insurance" },
  { image: Allianz, text: "Allianz EFU Insurance" },
  { image: TPL, text: "TPL Life Insurance" },
  { image: UIC, text: "UIC Takaful" }
];
export default props => (
  <div>
    <Jtron1 />
    <InsuranceCompanies
      heading="Companies on our comparison list"
      data={insurancedata}
    />
    <FourthJumbotron
      data={data}
      heading="An easier way to get insured"
      text="
      Compare life insurance, health insurance, auto insurance and travel
      insurance to select the best plan for you"
      img={Uncle}
    />
    <FourthJumbotron
      heading="features of life insurance"
      text="Once you buy life insurance, you get the following benefits"
      img={Life}
      data={features}
    />
    <SixthJumbotron ButtonText="SEE PLANS" ButtonLink="/compare/life" />
  </div>
);
