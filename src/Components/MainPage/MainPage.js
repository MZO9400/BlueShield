import React from "react";
import { Jumbotron, Container, Media, Button } from "reactstrap";
import CSS from "./MainPage.module.css";
import NavBar from "../../Containers/NavBar/NavBar";
import InsuranceCard from "./InsuranceCard/InsuranceCard";
import StepCard from "./StepCard/StepCard";
import CompanyCard from "./CompanyCard/CompanyCard";
import Uncle from "../../Images/uncle-04.png";
import Beta from "../../Images/beta-02.png";
import Beti from "../../Images/beti-02.png";
import Aunty from "../../Images/auntie-02.png";
import SymbolAuto from "../../Images/symbol-auto.png";
import SymbolHealth from "../../Images/symbol-health.png";
import SymbolLife from "../../Images/symbol-life.png";
import SymbolTravel from "../../Images/symbol-travel.png";
import ProcessBuy from "../../Images/process-buy_animated.svg";
import ProcessCompare from "../../Images/process-compare_animated.svg";
import ProcessInput from "../../Images/process-input_animated.svg";
import StateLifeInsurance from "../../Images/sli.png";
import JubileeLifeInsurance from "../../Images/jli.png";

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
        <div>
          <div className={CSS.animatedInsuranceDiv}>
            <StepCard
              svgFile={ProcessBuy}
              title="Enter details"
              text="Answer some basic questions so we can calculate quotes personalized for you"
            />
            <StepCard
              svgFile={ProcessCompare}
              title="Compare plans"
              text="View and compare quotes and choose the plan with best price and features"
            />
            <StepCard
              svgFile={ProcessInput}
              title="Buy online"
              text="Get insured from the company of your choice instantly through us"
            />
          </div>
          <Button className={CSS.ComparePlanButton}>Compare Plans</Button>
        </div>
      </Jumbotron>
    );
    const thirdJTron = (
      <Jumbotron className={CSS.thirdJTron}>
        <h4>We are working with the top insurance companies of Pakistan</h4>
        <CompanyCard image={StateLifeInsurance} text="State life Insurance" />
        <CompanyCard
          image={JubileeLifeInsurance}
          text="Jubilee General Insurance"
        />
      </Jumbotron>
    );
    const fourthJTron = (
      <Jumbotron className={CSS.fourthJTron}>
        <h2>An easier way to get insured</h2>
        <h6 style={{ marginTop: "2em" }}>
          Compare life insurance, health insurance, auto insurance and travel
          insurance to select the best plan for you
        </h6>
      </Jumbotron>
    );
    return (
      <React.Fragment>
        <NavBar />
        {firstJTron}
        {secondJTron}
        {thirdJTron}
        {fourthJTron}
      </React.Fragment>
    );
  }
}
