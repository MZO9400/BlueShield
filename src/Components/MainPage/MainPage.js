import React from "react";
//import CSS from "./MainPage.module.css";
import { withRouter } from "react-router-dom";
import FirstJumbotron from "./FirstJumbotron/FirstJumbotron";
import SecondJumbotron from "./SecondJumbotron/SecondJumbotron";
import ThirdJumbotron from "./ThirdJumbotron/ThirdJumbotron";
import FourthJumbotron from "./FourthJumbotron/FourthJumbotron";
import FifthJumbotron from "./FifthJumbotron/FifthJumbotron";
import SixthJumbotron from "./SixthJumbotron/SixthJumbotron";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FirstJumbotron />
        <SecondJumbotron />
        <ThirdJumbotron />
        <FourthJumbotron />
        <FifthJumbotron />
        <SixthJumbotron />
      </React.Fragment>
    );
  }
}
export default withRouter(MainPage);
