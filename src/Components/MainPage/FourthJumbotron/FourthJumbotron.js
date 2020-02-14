import React from "react";
import { Jumbotron, Media } from "reactstrap";
import EaseOfAccessCards from "../EaseOfAccessCards/EaseOfAccessCards";
import CSS from "./FourthJumbotron.module.css";
export default props => (
  <Jumbotron className={CSS.fourthJTron}>
    <h2>{props.heading}</h2>
    <h6 style={{ marginTop: "2em" }}>{props.text}</h6>
    <div className={CSS.EaseOfAccess}>
      <div>
        <Media src={props.img} />
      </div>
      <EaseOfAccessCards data={props.data} />
    </div>
  </Jumbotron>
);
