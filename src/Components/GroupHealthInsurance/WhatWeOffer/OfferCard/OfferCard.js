import React from "react";
import { Media } from "reactstrap";
import CSS from "./OfferCard.module.css";
export default props => (
  <div className={CSS.main}>
    <div className={CSS.heading}>
      <Media src={props.img} />
      <h6>{props.heading}</h6>
    </div>
    <div>{props.text}</div>
  </div>
);
