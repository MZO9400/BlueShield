import React from "react";
import CSS from "./WhyUs.module.css";
import WhyUsBox from "./WhyUsBox/WhyUsBox";
export default props => (
  <div className={CSS.main}>
    {props.heading ? <h4>{props.heading}</h4> : null}
    <div className={CSS.whyUS}>
      {props.data.map((item, key) => (
        <WhyUsBox {...item} key={key} />
      ))}
    </div>
  </div>
);
