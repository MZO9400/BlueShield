import React from "react";
import CSS from "./InsuranceCompanies.module.css";
import CompanyCard from "../MainPage/CompanyCard/CompanyCard";
export default props => (
  <div className={CSS.main}>
    <div>
      <h4>{props.heading}</h4>
      {props.data.map((item, key) => (
        <CompanyCard {...item} />
      ))}
    </div>
  </div>
);
