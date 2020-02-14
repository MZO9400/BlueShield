import React from "react";
import { Jumbotron } from "reactstrap";
import CompanyCard from "../CompanyCard/CompanyCard";
import InsuranceCompanies from "../../InsuranceCompanies/InsuranceCompanies";
import StateLifeInsurance from "../../../Images/sli.png";
import JubileeLifeInsurance from "../../../Images/jli.png";
import CSS from "./ThirdJumbotron.module.css";
const insurancedata = [
  { image: StateLifeInsurance, text: "State Life Insurance" },
  { image: JubileeLifeInsurance, text: "Jubilee Life Insurance" }
];
export default props => (
  <Jumbotron className={CSS.thirdJTron}>
    <InsuranceCompanies
      heading="We are working with the top insurance companies of Pakistan"
      data={insurancedata}
    />
  </Jumbotron>
);
