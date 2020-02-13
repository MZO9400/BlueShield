import React from "react";
import { Jumbotron, Media } from "reactstrap";
import EaseOfAccessCards from "../EaseOfAccessCards/EaseOfAccessCards";
import Uncle from "../../../Images/uncle-03.png";
import CSS from "./FourthJumbotron.module.css";
export default props => (
  <Jumbotron className={CSS.fourthJTron}>
    <h2>An easier way to get insured</h2>
    <h6 style={{ marginTop: "2em" }}>
      Compare life insurance, health insurance, auto insurance and travel
      insurance to select the best plan for you
    </h6>
    <div className={CSS.EaseOfAccess}>
      <div>
        <Media src={Uncle} />
      </div>
      <EaseOfAccessCards />
    </div>
  </Jumbotron>
);
