import React from "react";
import CSS from "./PhotoCard.module.css";
import { Media } from "reactstrap";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.main} onClick={() => props.history.push(props.link)}>
    <div className={CSS.imgdiv}>
      <Media src={props.img} />
    </div>
    <p>{props.text}</p>
  </div>
));
