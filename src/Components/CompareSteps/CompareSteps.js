import React from "react";
import { Progress } from "reactstrap";
import CSS from "./CompareSteps.module.css";
const prog = {
  1: 0,
  2: 50,
  3: 100
};
export default props => (
  <div className={CSS.main}>
    <div className={CSS.basicStepsBar}>
      <div
        className={[
          CSS.dot,
          CSS.dot1,
          props.step >= 1 ? CSS.dotfilled : ""
        ].join(" ")}
      ></div>
      <div
        className={[
          CSS.dot,
          CSS.dot2,
          props.step >= 2 ? CSS.dotfilled : ""
        ].join(" ")}
      ></div>
      <div
        className={[
          CSS.dot,
          CSS.dot3,
          props.step >= 3 ? CSS.dotfilled : ""
        ].join(" ")}
      ></div>

      <Progress value={prog[props.step]} className={CSS.prog} />
    </div>
    <div className={CSS.basicSteps}>
      <div>
        <li className={[props.step >= 1 ? CSS.detail : ""].join(" ")}>
          Enter Details
        </li>
      </div>
      <div>
        <li className={[props.step >= 2 ? CSS.detail : ""].join(" ")}>
          Compare Plans
        </li>
      </div>
      <div>
        <li className={[props.step >= 3 ? CSS.detail : ""].join(" ")}>
          Buy Online
        </li>
      </div>
    </div>
  </div>
);
