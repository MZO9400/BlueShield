import React from "react";
import CSS from "./Jtron1.module.css";
import { withRouter } from "react-router-dom";
import Cards from "./Cards/Cards";
export default withRouter(props => (
  <div className={CSS.container}>
    <h1>Digitizing access to insurance in Pakistan</h1>
    <Cards />
  </div>
));
