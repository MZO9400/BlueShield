import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import Disclaimers from "./Components/Disclaimers/Disclaimers";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import NavBar from "./Containers/NavBar/NavBar";
import Footer from "./Containers/Footer/Footer";

class RouterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/disclaimer" exact component={Disclaimers} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default RouterContainer;
