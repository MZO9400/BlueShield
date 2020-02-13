import React from "react";
import { Button } from "reactstrap";
import CSS from "./SixthJumbotron.module.css";
export default props => (
  <div className={CSS.getCovered}>
    <h4>Get the right cover today!</h4>
    <Button className={CSS.ComparePlanButton}>Compare Plans</Button>
  </div>
);
