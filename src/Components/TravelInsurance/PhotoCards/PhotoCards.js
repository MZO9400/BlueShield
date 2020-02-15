import React from "react";
import PhotoCard from "./PhotoCard/PhotoCard";
import CSS from "./PhotoCards.module.css";
export default props => (
  <div className={CSS.withHeading}>
    <h4>{props.heading}</h4>
    <div className={CSS.main}>
      {props.data.map((item, key) => (
        <PhotoCard {...item} />
      ))}
    </div>
  </div>
);
