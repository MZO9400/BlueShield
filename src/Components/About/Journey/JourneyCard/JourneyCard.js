import React from "react";
import CSS from "./JourneyCard.module.css";
export default props => (
  <div className={CSS.main}>
    <div className={CSS.ninty}>
      <h6>{props.heading}</h6>
      <p>{props.text}</p>
    </div>
    <p
      onClick={() => (window.location.href = props.seeMore)}
      className={CSS.link}
    >
      SEE MORE
    </p>
  </div>
);
