import React from "react";
import { Jumbotron } from "reactstrap";
import CompanyCard from "../CompanyCard/CompanyCard";
import StateLifeInsurance from "../../../Images/sli.png";
import JubileeLifeInsurance from "../../../Images/jli.png";
import CSS from "./ThirdJumbotron.module.css";

export default props => (
  <Jumbotron className={CSS.thirdJTron}>
    <h4>We are working with the top insurance companies of Pakistan</h4>
    <CompanyCard image={StateLifeInsurance} text="State life Insurance" />
    <CompanyCard
      image={JubileeLifeInsurance}
      text="Jubilee General Insurance"
    />
  </Jumbotron>
);
