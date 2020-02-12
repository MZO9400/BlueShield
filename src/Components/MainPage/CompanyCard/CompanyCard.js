import React from "react";
import { Media } from "reactstrap";
import CSS from "./CompanyCard.module.css";
export default props => (
  <div className={CSS.main}>
    <Media src={props.image} className={CSS.image} />
    <p>{props.text}</p>
  </div>
);
