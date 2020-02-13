import React from "react";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";
import CSS from "./InsuranceCard.module.css";

export default props => (
  <div className={CSS.Card}>
    <Link to={props.click}>
      <Media src={props.image} alt={props.data} />
      <div className={CSS.text}>
        <p>{props.data.toUpperCase()}</p>
        <p>INSURANCE</p>
      </div>
    </Link>
  </div>
);
