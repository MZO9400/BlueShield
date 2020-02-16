import React from "react";
import { Button } from "reactstrap";
import CSS from "./Jtron1.module.css";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.container}>
    <div>
      <h1>Corporate health care plans</h1>
      <h6 style={{ maxWidth: "30em", marginTop: "3em" }}>
        Wish to give your employees the most meaningful of perks? Get them
        health insurance to ensure their well-being.
      </h6>
      <Button className={CSS.Plans} onClick={() => props.history.push("/")}>
        TALK TO AN EXPERT
      </Button>
    </div>
  </div>
));
