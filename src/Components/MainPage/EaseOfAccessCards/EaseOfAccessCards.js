import React from "react";
import Card from "./Card/Card";
export default props => (
  <div>
    {props.data.map((item, key) => (
      <Card {...item} key={key}/>
    ))}
  </div>
);
