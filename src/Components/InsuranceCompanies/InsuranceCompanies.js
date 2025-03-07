import React from "react";
import CSS from "./InsuranceCompanies.module.css";
import CompanyCard from "../MainPage/CompanyCard/CompanyCard";
export default props => (
  <div className={CSS.main}>
    <div>
      <div>
        <h4>{props.heading}</h4>
        {props.text ? <h6>{props.text}</h6> : null}
      </div>
      {props.data.map((item, key) => (
        <CompanyCard {...item} key={key}/>
      ))}
    </div>
  </div>
);
