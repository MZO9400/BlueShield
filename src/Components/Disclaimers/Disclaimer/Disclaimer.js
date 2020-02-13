import React from "react";
import CSS from "./Disclaimer.module.css";
export default props => (
  <div className={CSS.disclaimer}>
    <h6>{props.heading}</h6>
    <p>{props.text}</p>
  </div>
);
