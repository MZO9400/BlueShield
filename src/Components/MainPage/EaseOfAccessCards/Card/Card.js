import React from "react";
import { Media } from "reactstrap";
import CSS from "./Card.module.css";

export default props => (
  <div className={CSS.maindiv}>
    <div className={CSS.imagediv}>
      <Media src={props.image} className={CSS.image} />
    </div>
    <div>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  </div>
);
