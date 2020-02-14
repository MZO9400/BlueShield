import React from "react";
import CSS from "./WhyUsBox.module.css";
export default props => (
  <div className={CSS.whyUs}>
    <p style={{ fontWeight: "bold" }}>{props.heading}</p>
    <p>{props.text}</p>
  </div>
);
