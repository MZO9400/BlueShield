import React from "react";
import { Jumbotron, Media, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import CatLife from "../../../Images/category-life.png";
import CSS from "./Jtron1.module.css";
export default withRouter(props => (
  <Jumbotron className={CSS.main}>
    <div className={CSS.left}>
      <h3>Compare behtareen life insurance plans in Pakistan</h3>
      <h6 style={{ marginTop: "2em" }}>
        Care about your family’s future and well being? Be covered in case
        something happens to you.
      </h6>
      <Button
        className={CSS.btn}
        onClick={() => props.history.push("/compare/life")}
      >
        SEE PLANS
      </Button>
    </div>
    <div className={CSS.media}>
      <Media src={CatLife} />
    </div>
  </Jumbotron>
));
