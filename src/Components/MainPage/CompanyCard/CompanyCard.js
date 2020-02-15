import React from "react";
import { Media } from "reactstrap";
import CSS from "./CompanyCard.module.css";
export default props => (
  <div className={CSS.main}>
    <div className={CSS.imgdiv}>
      <Media src={props.image} className={CSS.image} />
    </div>
    {props.text ? <p>{props.text}</p> : null}
  </div>
);
