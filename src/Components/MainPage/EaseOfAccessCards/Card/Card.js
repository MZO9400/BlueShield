import React from "react";
import { Media } from "reactstrap";
import CSS from "./Card.module.css";

export default props => (
  <div className={CSS.maindiv}>
    <div
      className={[CSS.imagediv, props.title ? "" : CSS.imagediv_notitle].join(
        " "
      )}
    >
      <Media
        src={props.image}
        className={[CSS.image, props.title ? "" : CSS.image_notitle].join(" ")}
      />
    </div>
    <div>
      {props.title ? <h5>{props.title}</h5> : null}
      <p style={{ textAlign: "left" }}>{props.text}</p>
    </div>
  </div>
);
