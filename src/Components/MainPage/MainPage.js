import React from "react";
//import CSS from "./MainPage.module.css";
import { withRouter } from "react-router-dom";
import FirstJumbotron from "./FirstJumbotron/FirstJumbotron";
import SecondJumbotron from "./SecondJumbotron/SecondJumbotron";
import ThirdJumbotron from "./ThirdJumbotron/ThirdJumbotron";
import FourthJumbotron from "./FourthJumbotron/FourthJumbotron";
import FifthJumbotron from "./FifthJumbotron/FifthJumbotron";
import SixthJumbotron from "./SixthJumbotron/SixthJumbotron";
import CompareIcon from "../../Images/icon-compare.svg";
import OnlineIcon from "../../Images/icon-online.svg";
import RatesIcon from "../../Images/icon-rates.svg";
import Uncle from "../../Images/uncle-03.png";
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

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FirstJumbotron />
        <SecondJumbotron />
        <ThirdJumbotron />
        <FourthJumbotron
          data={data}
          heading="An easier way to get insured"
          text="
          Compare life insurance, health insurance, auto insurance and travel
          insurance to select the best plan for you"
          img={Uncle}
        />
        <FifthJumbotron />
        <SixthJumbotron
          ButtonText="Compare Plans"
          ButtonLink="/compare-plans"
        />
      </React.Fragment>
    );
  }
}
export default withRouter(MainPage);
