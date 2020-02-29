import React from "react";
import PriceTag from "../../../Images/price-tag.png";
import { Button, Input, Label, Media } from "reactstrap";
import CSS from "./ResultCard.module.css";
export default props => (
  <div className={CSS.main}>
    <div className={CSS.infoBox}>
      <Media src={PriceTag} />
      <div>
        <p className={CSS.price}>
          <Media src={PriceTag} /> Rs. {props.data.value}
        </p>
        <p className={CSS.small}>for 1 year</p>
      </div>
    </div>
    <p className={CSS.small}>{props.data.company_name}</p>
    <p>{props.data.name}</p>
    <div className={CSS.infoBox}>
      <div>
        <p className={CSS.small}>Medical Coverage</p>
        <p>PKR. {props.data.hospitalization}</p>
      </div>
      <div>
        <p className={CSS.small}>Room Type</p>
        <p>{props.data.room_type}</p>
      </div>
    </div>
    <h6>Show all Features</h6>
    <div className={CSS.infoBox}>
      <Button className={CSS.button}>BUY PLAN</Button>
      <Label>
        <Input type="checkbox" /> COMPARE
      </Label>
    </div>
  </div>
);
