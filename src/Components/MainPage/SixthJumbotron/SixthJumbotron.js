import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import CSS from "./SixthJumbotron.module.css";
export default withRouter(props => (
  <div className={CSS.getCovered}>
    <h4>Get the right cover today!</h4>
    <Button
      className={CSS.ComparePlanButton}
      onClick={() => props.history.push(props.ButtonLink)}
    >
      {props.ButtonText}
    </Button>
  </div>
));
