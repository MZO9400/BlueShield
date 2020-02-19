import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Disclaimers from "./Components/Disclaimers/Disclaimers";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import About from "./Components/About/About";
import LearnMore from "./Components/LearnMore/LearnMore";
import Careers from "./Components/Careers/Careers";
import CarInsurance from "./Components/CarInsurance/CarInsurance";
import Compare from "./Components/Compare/Compare";
import GroupHealthInsurance from "./Components/GroupHealthInsurance/GroupHealthInsurance";
import HealthInsurance from "./Components/HealthInsurance/HealthInsurance";
import LifeInsurance from "./Components/LifeInsurance/LifeInsurance";
import TravelInsurance from "./Components/TravelInsurance/TravelInsurance";
import CompareCar from "./Containers/Compare/Car/Car.js";
import CompareHealth from "./Containers/Compare/Health/Health.js";
import CompareLife from "./Containers/Compare/Life/Life.js";
import CompareTravel from "./Containers/Compare/Travel/Travel.js";
import Login from "./Containers/Login/Login";
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword";
import NavBar from "./Containers/NavBar/NavBar";
import Footer from "./Containers/Footer/Footer";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";

class RouterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/careers" exact component={Careers} />
          <Route path="/compare-plans" exact component={Compare} />
          <Route path="/car-insurance" exact component={CarInsurance} />
          <Route path="/health-insurance" exact component={HealthInsurance} />
          <Route path="/life-insurance" exact component={LifeInsurance} />
          <Route path="/travel-insurance" exact component={TravelInsurance} />
          <Route
            path="/group-insurance"
            exact
            component={GroupHealthInsurance}
          />
          <Route path="/Login" exact component={Login} />
          <Route
            path="/Login/forgot-password"
            exact
            component={ForgotPassword}
          />
          <Route path="/Login/LinkedInPopUp" exact component={LinkedInPopUp} />
          <Route path="/compare/car" exact component={CompareCar} />
          <Route path="/compare/health" exact component={CompareHealth} />
          <Route path="/compare/life" exact component={CompareLife} />
          <Route path="/compare/travel" exact component={CompareTravel} />
          <Route path="/disclaimer" exact component={Disclaimers} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/about" exact component={About} />
          <Route path="/learn-more" exact component={LearnMore} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default RouterContainer;
