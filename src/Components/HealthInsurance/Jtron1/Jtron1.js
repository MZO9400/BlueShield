import React from "react";
import { Button, Media } from "reactstrap";
import CSS from "./Jtron1.module.css";
import HealthCat from "../../../Images/category-health.png";
import VISA from "../../../Images/visa-logo.png";
import MASTERCARD from "../../../Images/mastercard-logo.png";
import JAZZCASH from "../../../Images/jazzcash.png";
import BG from "../../../Images/landing-bg.svg";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.container}>
    <div className={CSS.maindiv}>
      <h1>
        Buy behtareen health insurance from{" "}
        <span style={{ color: "#14B866" }}> Pakistan</span>
      </h1>
      <h6 style={{ maxWidth: "30em", marginTop: "3em" }}>
        Compare health insurance from top{" "}
        <span className={CSS.spanlink}>4 companies</span> and buy completely
        online in just <span className={CSS.spanlink}>3 easy steps</span>
      </h6>
      <div className={CSS.ease}>
        <p>Pay online and get your health card delivered at home</p>
        <p>Individual, family or parents health care policies</p>
        <p>Top plans with satisfaction guarantee</p>
      </div>
      <Button
        className={CSS.healthPlans}
        onClick={() => props.history.push("/compare/health")}
      >
        SEE HEALTH PLANS
      </Button>
      <p
        className={CSS.link}
        onClick={() => props.history.push("/group-insurance")}
      >
        Click here for group plans for your employees
      </p>
    </div>
    <div className={CSS.img}>
      <div className={CSS.imgInside}>
        <Media src={BG} className={CSS.BG} />
        <div>
          <Media src={HealthCat} />
        </div>
        <div className={CSS.trust}>
          <p>Trusted Agency</p>
          <p>4.9/5 Ratings</p>
          <Media src={VISA} className={CSS.icon} />
          <Media src={MASTERCARD} className={CSS.icon} />
          <Media src={JAZZCASH} className={CSS.icon} />
        </div>
      </div>
    </div>
  </div>
));
