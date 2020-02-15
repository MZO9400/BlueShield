import React from "react";
import CSS from "./Coverage.module.css";
import { withRouter } from "react-router-dom";
export default withRouter(props => (
  <div className={CSS.main}>
    <h4>Top coverage features</h4>
    <p onClick={() => props.history.push("/compare/travel")}>
      Medical coverage | Baggage loss | Family Coverage | Trip Cancellation |
      Repatriation | Emergency Return Home | Tuition fee coverage | Online
      document | Card payment | Bank transfer
    </p>
  </div>
));
