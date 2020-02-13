import React from "react";
//import CSS from "./MainPage.module.css";
import NavBar from "../../Containers/NavBar/NavBar";
import FirstJumbotron from "./FirstJumbotron/FirstJumbotron";
import SecondJumbotron from "./SecondJumbotron/SecondJumbotron";
import ThirdJumbotron from "./ThirdJumbotron/ThirdJumbotron";
import FourthJumbotron from "./FourthJumbotron/FourthJumbotron";

export default class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <FirstJumbotron />
        <SecondJumbotron />
        <ThirdJumbotron />
        <FourthJumbotron />
      </React.Fragment>
    );
  }
}
