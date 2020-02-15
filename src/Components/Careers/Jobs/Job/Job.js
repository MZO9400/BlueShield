import React from "react";
import { Media, Button } from "reactstrap";
import CSS from "./Job.module.css";

export default props => (
  <div className={CSS.main}>
    <div className={CSS.image} style={{ backgroundColor: props.color }}>
      <Media src={props.image} />
    </div>
    <div>
      <div className={CSS.text}>
        <h6>{props.JobTitle}</h6>
        <p className={CSS.pSmall}>{props.TimeLoc}</p>
      </div>
      <div className={CSS.text}>
        <p>{props.Description}</p>
      </div>
    </div>
    <Button
      className={CSS.button}
      onClick={() => (window.location.href = props.ApplicationLink)}
    >
      APPLY
    </Button>
  </div>
);
