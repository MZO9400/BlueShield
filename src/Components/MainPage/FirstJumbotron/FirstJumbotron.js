import React from "react";
import { Jumbotron, Container, Media } from "reactstrap";
import { withRouter } from "react-router-dom";
import InsuranceCard from "../InsuranceCard/InsuranceCard";
import Uncle from "../../../Images/uncle-04.png";
import Beta from "../../../Images/beta-02.png";
import Beti from "../../../Images/beti-02.png";
import Aunty from "../../../Images/auntie-02.png";
import SymbolAuto from "../../../Images/symbol-auto.png";
import SymbolHealth from "../../../Images/symbol-health.png";
import SymbolLife from "../../../Images/symbol-life.png";
import SymbolTravel from "../../../Images/symbol-travel.png";
import CSS from "./FirstJumbotron.module.css";

export default withRouter(props => (
  <Jumbotron className={CSS.firstJTron}>
    <Container className={CSS.fJTIinnerContainer}>
      <h1>find behtareen insurance plans!</h1>
      <h6 className={CSS.fJTIText}>
        Compare & buy insurance plans online from the top companies of Pakistan
      </h6>
    </Container>
    <Container className={CSS.fJTIPeople}>
      <Media src={Beti} />
      <Media src={Uncle} />
      <div style={{ marginLeft: "2em", marginRight: "2em" }}>
        <div>
          <InsuranceCard
            image={SymbolHealth}
            data="Health"
            click="/health-insurance"
          />
          <InsuranceCard image={SymbolAuto} data="Car" click="/car-insurance" />
        </div>
        <div>
          <InsuranceCard
            image={SymbolTravel}
            data="Travel"
            click="/travel-insurance"
          />
          <InsuranceCard
            image={SymbolLife}
            data="Life"
            click="/group-insurance"
          />
        </div>
      </div>
      <Media src={Aunty} style={{ transform: "scaleX(-1)" }} />
      <Media src={Beta} style={{ transform: "scaleX(-1)" }} />
    </Container>
    <h6
      className={CSS.gplans}
      onClick={() => props.history.push("/group-insurance")}
    >
      Click here for group plans for your employees
    </h6>
  </Jumbotron>
));
