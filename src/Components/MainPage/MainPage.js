import React from "react";
import { Jumbotron, Container, Media } from "reactstrap";
import CSS from "./MainPage.module.css";
import NavBar from "../../Containers/NavBar/NavBar";
import InsuranceCard from "./InsuranceCard/InsuranceCard";
import Uncle from "../../Images/uncle-04.png";
import Beta from "../../Images/beta-02.png";
import Beti from "../../Images/beti-02.png";
import Aunty from "../../Images/auntie-02.png";
import SymbolAuto from "../../Images/symbol-auto.png";
import SymbolHealth from "../../Images/symbol-health.png";
import SymbolLife from "../../Images/symbol-life.png";
import SymbolTravel from "../../Images/symbol-travel.png";

export default class MainPage extends React.Component {
  render() {
    const firstJTron = (
      <Jumbotron className={CSS.firstJTron}>
        <Container className={CSS.fJTIinnerContainer}>
          <h1>find behtareen insurance plans!</h1>
          <h6 className={CSS.fJTIText}>
            Compare & buy insurance plans online from the top companies of
            Pakistan
          </h6>
        </Container>
        <Container className={CSS.fJTIPeople}>
          <Media src={Beti} />
          <Media src={Uncle} />
          <div style={{ marginLeft: "2em", marginRight: "2em" }}>
            <div>
              <InsuranceCard image={SymbolHealth} data="Health" />
              <InsuranceCard image={SymbolAuto} data="Car" />
            </div>
            <div>
              <InsuranceCard image={SymbolTravel} data="Travel" />
              <InsuranceCard image={SymbolLife} data="Life" />
            </div>
          </div>
          <Media src={Aunty} style={{ transform: "scaleX(-1)" }} />
          <Media src={Beta} style={{ transform: "scaleX(-1)" }} />
        </Container>
        <h6 className={CSS.gplans}>
          Click here for group plans for your employees
        </h6>
      </Jumbotron>
    );
    const secondJTron = (
      <Jumbotron className={CSS.secondJTron}>
        <h1>Get insured in just 3 steps</h1>
      </Jumbotron>
    );
    return (
      <React.Fragment>
        <NavBar />
        {firstJTron}
        {secondJTron}
      </React.Fragment>
    );
  }
}
