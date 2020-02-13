import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";

class RouterContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default RouterContainer;
