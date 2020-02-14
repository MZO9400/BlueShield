import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Media } from "reactstrap";
import CSS from "./ComparisonCard.module.css";

export default withRouter(props => (
  <div className={CSS.maindiv}>
    <Media src={props.img} />
    <div>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
      <div className={CSS.infoDiv}>
        <Button
          className={CSS.SeePlansButton}
          onClick={() => props.history.push(props.planLink)}
        >
          SEE PLANS
        </Button>
        <h6
          className={CSS.learnMore}
          onClick={() => props.history.push(props.learnMoreLink)}
        >
          LEARN MORE
        </h6>
      </div>
    </div>
  </div>
));
