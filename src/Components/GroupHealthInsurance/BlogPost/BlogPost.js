import React from "react";
import { Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import CSS from "./BlogPost.module.css";

export default withRouter(props => (
  <div className={CSS.main}>
    <div className={CSS.left}>
      <Media src={props.image} />
    </div>
    <div className={CSS.right}>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <p className={CSS.seeMore} onClick={() => props.history.push("/")}>
        SEE MORE
      </p>
    </div>
  </div>
));
