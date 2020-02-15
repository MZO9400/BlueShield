import React from "react";
import { Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import CSS from "./Card.module.css";
export default withRouter(props => (
  <div className={CSS.main}>
    <h6>{props.heading}</h6>
    <p>{props.text}</p>
    {props.withButtons ? (
      <div className={CSS.images}>
        {props.lastRow.map((item, key) => (
          <Media
            src={item.image}
            onClick={() => props.history.push(item.link)}
            className={CSS.image}
          />
        ))}
      </div>
    ) : (
      <div className={CSS.textFlex}>
        {props.lastRow.map((item, key) => (
          <div>
            <h6>{item.one}</h6>
            <p>{item.two}</p>
          </div>
        ))}
      </div>
    )}
  </div>
));
