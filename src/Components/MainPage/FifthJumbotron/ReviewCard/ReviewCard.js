import React from "react";
import { Media } from "reactstrap";
import CSS from "./ReviewCard.module.css";
export default props => (
  <div>
    <div className={CSS.review}>{props.text}</div>
    <div className={CSS.reviewer}>
      <div style={{ marginRight: "20px" }}>
        <Media src={props.reviewerPicture} />
      </div>
      <div>
        <h6>{props.reviewerName}</h6>
        <h6 className={CSS.reviewerMisc}>{props.reviewerMisc}</h6>
      </div>
    </div>
  </div>
);
