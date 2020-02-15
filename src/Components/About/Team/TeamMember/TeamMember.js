import React from "react";
import { Media } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import CSS from "./TeamMember.module.css";
export default props => (
  <div className={CSS.main}>
    <Media src={props.img} className={CSS.img} />
    <div>
      <h6>{props.Name}</h6>
      <p>{props.Desg}</p>
      <div className={CSS.contact}>
        <Media
          className={CSS.cont}
          src={props.cont}
          onClick={() => (window.location.href = props.contLink)}
        />
        <FontAwesomeIcon
          icon={faMailBulk}
          onClick={() => (window.location.href = `mailto:${props.email}`)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  </div>
);
