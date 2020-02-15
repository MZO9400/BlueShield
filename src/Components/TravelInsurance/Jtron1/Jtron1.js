import React from "react";
import { Button, Media } from "reactstrap";
import CSS from "./Jtron1.module.css";
import TravelCat from "../../../Images/category-travel.png";
import VISA from "../../../Images/visa-logo.png";
import MASTERCARD from "../../../Images/mastercard-logo.png";
import JAZZCASH from "../../../Images/jazzcash.png";
import BG from "../../../Images/travel-bg.svg";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.container}>
    <div className={CSS.maindiv}>
      <h1>
        Behtareen travel insurance from{" "}
        <span style={{ color: "#14B866" }}> Pakistan</span>
      </h1>
      <h6 style={{ maxWidth: "30em", marginTop: "3em" }}>
        Compare travel medical insurance from top 7 companies and buy completely
        online in just 3 easy steps
      </h6>
      <div className={CSS.ease}>
        <p>Pay online and get your health card delivered at home</p>
        <p>Individual, family or parents health care policies</p>
        <p>Top plans with satisfaction guarantee</p>
      </div>
      <Button
        className={CSS.autoPlans}
        onClick={() => props.history.push("/compare/travel")}
      >
        SEE TRAVEL PLANS
      </Button>
    </div>
    <div className={CSS.img}>
      <div className={CSS.imgInside}>
        <Media src={BG} className={CSS.BG} />
        <div>
          <Media src={TravelCat} />
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
