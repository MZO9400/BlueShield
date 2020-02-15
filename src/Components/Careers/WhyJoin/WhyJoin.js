import React from "react";
import CSS from "./WhyJoin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron } from "reactstrap";
const data = [
  "Experience a highly engaging environment with exponential learning",
  "You get to wear multiple hats and learn things out of your comfort zone",
  "Learn how a startup grows and scales by working efficiently and quickly",
  "We are located at TIC NUST Islamabad which offers great facilities and a secure environment"
];
export default props => (
  <Jumbotron className={CSS.main}>
    <div className={CSS.header}>
      <h5>Why join us?</h5>
      <p>
        We aim to disrupt a very slow-to-change industry with a lot of
        potential. We believe that digital is the future and we want to make
        insurance completely online.
      </p>
    </div>
    <div className={CSS.whyMain}>
      {data.map((item, key) => (
        <div className={CSS.why}>
          <FontAwesomeIcon icon={faCheck} size="1.2x" className={CSS.FA} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  </Jumbotron>
);
