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
import Profile from "./Components/Profile/Profile";
import Login from "./Containers/Login/Login";
import Results from "./Components/Results/Results";
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword";
import { connect } from "react-redux";
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
          <Route
            path="/Login/forgot-password"
            exact
            component={ForgotPassword}
          />
          <Route path="/Login/LinkedInPopUp" exact component={LinkedInPopUp} />
          <Route path="/results" exact component={Results} />
          <Route path="/compare/car" exact component={CompareCar} />
          <Route path="/compare/health" exact component={CompareHealth} />
          <Route path="/compare/life" exact component={CompareLife} />
          <Route path="/compare/travel" exact component={CompareTravel} />
          <Route path="/disclaimer" exact component={Disclaimers} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/about" exact component={About} />
          <Route path="/learn-more" exact component={LearnMore} />

          {this.props.loggedIn ? (
            <React.Fragment>
              <Route path="/profile" exact component={Profile} />
              <Redirect from="/Login" to="/profile" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route path="/Login" exact component={Login} />
              <Redirect from="/profile" to="/Login" />
            </React.Fragment>
          )}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});
export default connect(mapStateToProps)(RouterContainer);
