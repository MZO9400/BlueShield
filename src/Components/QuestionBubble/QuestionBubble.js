import React from "react";
import CSS from "./QuestionBubble.module.css";
export default props => (
  <div className={CSS.main}>
    <div className={CSS.bubble}>
      {props.title ? <h5>{props.title}</h5> : null}
      {props.text ? <p>{props.text}</p> : null}
      {props.children}
    </div>
  </div>
);
