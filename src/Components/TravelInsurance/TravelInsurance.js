import React from "react";
import CSS from "./TravelInsurance.module.css";
import Jtron1 from "./Jtron1/Jtron1";
import WhyUs from "../WhyUs/WhyUs";
import PhotoCards from "./PhotoCards/PhotoCards";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
import SecondJumbotron from "../MainPage/SecondJumbotron/SecondJumbotron";
import FourthJumbotron from "../MainPage/FourthJumbotron/FourthJumbotron";
import FifthJumbotron from "../MainPage/FifthJumbotron/FifthJumbotron";
import SixthJumbotron from "../MainPage/SixthJumbotron/SixthJumbotron";
import Coverage from "./Coverage/Coverage";
import US from "../../Images/USA.jpg";
import UK from "../../Images/UK.jpg";
import Turkey from "../../Images/turkey.jpg";
import Germany from "../../Images/germany.jpg";
import Schengen from "../../Images/schengen.jpg";
import Others from "../../Images/others.jpg";
import JubileeGI from "../../Images/jgi.png";
import AskariI from "../../Images/ai.png";
import Adamjeee from "../../Images/aji.png";
import TPLI from "../../Images/tpli.png";
import UICI from "../../Images/uici.png";
import TravelCat from "../../Images/category-travel.png";
import CompareIcon from "../../Images/icon-compare.svg";
const insurancecompanies = [
  { image: JubileeGI, text: "Jubilee General Insurance" },
  { image: AskariI, text: "Askari Insurance" },
  { image: Adamjeee, text: "Adamjee Insurance" },
  { image: TPLI, text: "TPL Insurance" },
  { image: UICI, text: "UIC Insurance" }
];
const PhotoCardsData = [
  { img: US, text: "Travel Insurance for USA", link: "/compare/travel" },
  { img: UK, text: "Travel Insurance for UK", link: "/compare/travel" },
  { img: Turkey, text: "Travel Insurance for Turkey", link: "/compare/travel" },
  {
    img: Schengen,
    text: "Travel Insurance for Schengen",
    link: "/compare/travel"
  },
  {
    img: Germany,
    text: "Travel Insurance for Germany",
    link: "/compare/travel"
  },
  { img: Others, text: "Others", link: "/compare/travel" }
];
const whyUsData = [
  {
    heading: "Why buy travel insurance",
    text:
      "Travel insurance bears the costs of unforeseen losses that might occur when travelling abroad from Pakistan. In countries like the US or Schengen states, medical emergency bills can easily run into thousands of dollars – you can protect yourself from such expenses at a tiny fraction of the cost."
  },
  {
    heading: "How to choose a plan",
    text:
      "At easyinsurance, you can compare plans from the top 9 travel insurance companies of Pakistan. Through us, you will know exactly what benefits are included in each plan; once you choose, you can purchase the plan online and receive verified policy documents in under 30 minutes."
  },
  {
    heading: "Why buy through us",
    text:
      "We are an authorized agency of the listed insurance companies. Our service is completely free and we have standard market prices. Your policy will be issued directly by the insurance company of your choice and all claims will be handled by them."
  }
];
const fJText = [
  { image: CompareIcon, text: "Accidental Death & Permanent Disability" },
  { image: CompareIcon, text: "Medical Expenses & Hospitalization Abroad" },
  { image: CompareIcon, text: "Trip Cancellation" },
  { image: CompareIcon, text: "Loss of Passport" },
  { image: CompareIcon, text: "Transport in case of illness or injury" },
  { image: CompareIcon, text: "Loss or theft of Checked-in baggage" }
];
export default props => (
  <div>
    <Jtron1 />
    <WhyUs data={whyUsData} />
    <PhotoCards data={PhotoCardsData} heading="Travel insurance by countries" />
    <InsuranceCompanies
      heading="Travel insurance Pakistan companies"
      data={insurancecompanies}
    />
    <Coverage />
    <FifthJumbotron />
    <SecondJumbotron />
    <FourthJumbotron
      data={fJText}
      heading="Why buy travel insurance?"
      text="Once you buy travel insurance, you are covered for these incidents"
      img={TravelCat}
    />
    <SixthJumbotron ButtonText="SEE PLANS" ButtonLink="/compare/travel" />
  </div>
);
