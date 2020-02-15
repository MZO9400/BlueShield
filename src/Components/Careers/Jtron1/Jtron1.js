import React from "react";
import { Jumbotron, Button, Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import Uncle from "../../../Images/uncle-04.png";
import CSS from "./Jtron1.module.css";
export default withRouter(props => (
  <Jumbotron className={CSS.main}>
    <div className={CSS.innerLeft}>
      <h1>Be a part of our journey</h1>
      <h6>
        Join our down-to-earth team at easyinsurance. Experience first hand the
        process of running a startup.
      </h6>
      <Button
        onClick={() => props.history.push("/careers#jobs")}
        className={CSS.button}
      >
        SEE OPENINGS
      </Button>
    </div>
    <div className={CSS.innerRight}>
      <Media src={Uncle} />
    </div>
  </Jumbotron>
));
