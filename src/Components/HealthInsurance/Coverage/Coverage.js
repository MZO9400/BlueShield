import React from "react";
import CSS from "./Coverage.module.css";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.main}>
    <div className={CSS.inner}>
      <h4>Top coverage features</h4>
      <p onClick={() => props.history.push("/compare/health")}>
        Hospitalization | Surgeries and diagnosis | Room entitlement | Cashless
        health card | Family Coverage | Online document | Card payment | Bank
        transfer
      </p>
    </div>
    <div className={CSS.inner}>
      <h4>Health insurance by type</h4>
      <p onClick={() => props.history.push("/compare/health")}>
        Individual plans | Family plans | Parents plans | Group health plans
      </p>
    </div>
  </div>
));
