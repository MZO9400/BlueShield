import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import InsuranceCard from "../InsuranceCard/InsuranceCard";
import SymbolAuto from "../../../Images/symbol-auto.png";
import SymbolHealth from "../../../Images/symbol-health.png";
import SymbolLife from "../../../Images/symbol-life.png";
import SymbolTravel from "../../../Images/symbol-travel.png";
import CSS from "./FirstJumbotron.module.css";

export default withRouter(props => (
  <Jumbotron className={CSS.firstJTron}>
    <Container className={CSS.fJTIinnerContainer}>
      <h1>INSURANCE PLANS!</h1>
      <h6 className={CSS.fJTIText}>
        Compare & buy insurance plans online from the top companies of Pakistan
      </h6>

      <Button
        className={CSS.ComparePlanButton}
        onClick={() => props.history.push("/compare-plans")}
      >
        Compare Plans
      </Button>
    </Container>
    <div className={CSS.insuranceCards}>
      <InsuranceCard
        image={SymbolHealth}
        data="Health"
        click="/health-insurance"
      />
      <InsuranceCard image={SymbolAuto} data="Car" click="/car-insurance" />
      <InsuranceCard
        image={SymbolTravel}
        data="Travel"
        click="/travel-insurance"
      />
      <InsuranceCard image={SymbolLife} data="Life" click="/life-insurance" />

      <h6
        className={CSS.gplans}
        onClick={() => props.history.push("/group-insurance")}
      >
        Click here for group plans for your employees
      </h6>
    </div>
  </Jumbotron>
));
