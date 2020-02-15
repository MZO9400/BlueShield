import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import CSS from "./GroupHealthInsurance.module.css";
import BlogPost from "./BlogPost/BlogPost";
import Jtron1 from "./Jtron1/Jtron1";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import FifthJumbotron from "../MainPage/FifthJumbotron/FifthJumbotron";
import FourthJumbotron from "../MainPage/FourthJumbotron/FourthJumbotron";
import SixthJumbotron from "../MainPage/SixthJumbotron/SixthJumbotron";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
import CompareIcon from "../../Images/icon-compare.svg";
import JGI from "../../Images/jgi.png";
import PQT from "../../Images/pqt.png";
import AJI from "../../Images/aji.png";
import AEI from "../../Images/aei.png";
import PashaDeal from "../../Images/pasha-deal.png";
const easeofAccessCards = [
  {
    image: CompareIcon,
    text:
      "Health insurance is by far the most sought out benefit employees can receive from their company"
  },
  {
    image: CompareIcon,
    text:
      "Takes responsibility of your employees’ health concerns. Build a happier, better team!"
  },
  {
    image: CompareIcon,
    text:
      "Get access to more doctors and hospitals. Group insurance panel hospitals are the best in the country"
  },
  {
    image: CompareIcon,
    text:
      "It’s economical! Get your employees insured for as low as PKR 4,000 per year per employee"
  }
];
const companies = [
  { image: JGI, text: "Jubilee Insurance" },
  { image: PQT, text: "Pak Qatar Takaful" },
  { image: AJI, text: "AdamJee Insurance" },
  { image: AEI, text: "Allianz EFU Insurance" }
];
export default withRouter(props => (
  <div>
    <Jtron1 />
    <WhatWeOffer />
    <FifthJumbotron />
    <FourthJumbotron
      heading="Why get corporate health insurance?"
      data={easeofAccessCards}
    />
    <InsuranceCompanies
      data={companies}
      heading="Companies on our comparison list"
      text="We have got the top insurane companies of Pakistan on our website for you to compare plans between"
    />
    <div className={CSS.aboutDiv}>
      <Button
        className={CSS.about}
        onClick={() => props.history.push("/about")}
      >
        ABOUT US
      </Button>
    </div>
    <BlogPost
      heading="Exclusive group health deal for P@SHA member companies"
      text="easyinsurance is proud to announce its exclusive collaboration with Pakistan Software Houses Association, better known as P@SHA. We will be providing P@SHA members group health insurance at discounted rates and highly favourable terms and conditions."
      image={PashaDeal}
    />
    <SixthJumbotron ButtonText="TALK TO AN EXPERT" ButtonLink="/" />
  </div>
));
