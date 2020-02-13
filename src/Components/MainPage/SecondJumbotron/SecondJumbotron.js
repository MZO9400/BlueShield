import React from "react";
import { Jumbotron, Button } from "reactstrap";
import StepCard from "../StepCard/StepCard";
import ProcessBuy from "../../../Images/process-buy_animated.svg";
import ProcessCompare from "../../../Images/process-compare_animated.svg";
import ProcessInput from "../../../Images/process-input_animated.svg";
import CSS from "./SecondJumbotron.module.css";

export default props => (
  <Jumbotron className={CSS.secondJTron}>
    <h1>Get insured in just 3 steps</h1>
    <div>
      <div className={CSS.animatedInsuranceDiv}>
        <StepCard
          svgFile={ProcessBuy}
          title="Enter details"
          text="Answer some basic questions so we can calculate quotes personalized for you"
        />
        <StepCard
          svgFile={ProcessCompare}
          title="Compare plans"
          text="View and compare quotes and choose the plan with best price and features"
        />
        <StepCard
          svgFile={ProcessInput}
          title="Buy online"
          text="Get insured from the company of your choice instantly through us"
        />
      </div>
      <Button className={CSS.ComparePlanButton}>Compare Plans</Button>
    </div>
  </Jumbotron>
);
