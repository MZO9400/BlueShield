import React from "react";
import CSS from "./Health.module.css";
import {
  Media,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";
import QuestionBubble from "../../../Components/QuestionBubble/QuestionBubble";
import AnswerBubble from "../../../Components/AnswerBubble/AnswerBubble";
import CompareSteps from "../../../Components/CompareSteps/CompareSteps";
import SymbolHealth from "../../../Images/symbol-health.png";
export default class extends React.Component {
  state = {
    PlanType: "",
    Q2DropDownOpen: false,
    PlanAge: null,
    PhoneNumber: ""
  };
  Q2DropDownSwitch = () =>
    this.setState(state => {
      return { Q2DropDownOpen: !state.Q2DropDownOpen };
    });
  PlanHandler = props => this.setState({ PlanType: props });
  PlanAge = props => this.setState({ PlanAge: props });
  PhoneChangeHandler = event => this.setState({ PhoneNumber: event });
  findPlans = () => {
    console.log(this.state);
  };
  render() {
    let question1 = null,
      question2 = null,
      question3 = null,
      accept = null;

    if (this.state.PlanAge != null) {
      question3 = (
        <React.Fragment>
          <QuestionBubble text="Leave your number to get a callback from us later." />
          <AnswerBubble>
            <Input
              value={this.state.PhoneNumber}
              onChange={event => this.PhoneChangeHandler(event.target.value)}
              type="number"
            />
          </AnswerBubble>
        </React.Fragment>
      );
      accept = (
        <div className={CSS.acceptButton}>
          <Button className={CSS.button} onClick={this.findPlans}>
            SEE PLANS
          </Button>
        </div>
      );
    }
    const dropDownItems = [];
    for (let i = 1; i != 60; i++)
      dropDownItems.push(
        <DropdownItem onClick={() => this.PlanAge(i)}>{i} Years</DropdownItem>
      );
    const ageSelect =
      this.state.PlanAge != null
        ? this.state.PlanAge == 0
          ? `3-11 Months`
          : `${this.state.PlanAge} YEARS`
        : "SELECT";
    if (this.state.PlanType)
      question2 = (
        <React.Fragment>
          <QuestionBubble
            title="What is the age of the person getting insured?"
            text="Minimum age to get health insurance for an individual is 3 months and maximum age is 59 years. For ages above 59, consider instead a 'Parent / Elder' plan from above."
          />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpen}
              toggle={this.Q2DropDownSwitch}
            >
              <DropdownToggle className={CSS.button}>
                {ageSelect}
              </DropdownToggle>
              <DropdownMenu
                modifiers={{
                  setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: data => {
                      return {
                        ...data,
                        styles: {
                          ...data.styles,
                          overflow: "auto",
                          maxHeight: "15em"
                        }
                      };
                    }
                  }
                }}
              >
                <DropdownItem header>AGE</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.PlanAge(0)}>
                  3-11 Months
                </DropdownItem>
                {dropDownItems}
              </DropdownMenu>
            </ButtonDropdown>
          </AnswerBubble>
        </React.Fragment>
      );
    question1 = (
      <React.Fragment>
        <QuestionBubble text="Answer below a few questions to generate behtareen health care plans from the top insurers of Pakistan." />
        <QuestionBubble
          title="Who are you looking to insure?"
          text="Family plans covers parents upto the age of 59 and 4 children upto the age of 25"
        />
        <AnswerBubble>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("INDIVIDUAL")}
          >
            INDIVIDUAL
          </Button>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("PARENT")}
          >
            PARENT
          </Button>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("FAMILY")}
          >
            FAMILY
          </Button>
        </AnswerBubble>
      </React.Fragment>
    );
    return (
      <div>
        <CompareSteps step={1} />
        <div className={CSS.main}>
          <div className={CSS.image}>
            <Media src={SymbolHealth} />
            <div className={CSS.vertLine}></div>
          </div>
          <div>
            <div>
              <h4>Health insurance finder</h4>
              <p>Answer below for relevant plans</p>
            </div>
            {question1}
            {question2}
            {question3}
            {accept}
          </div>
        </div>
      </div>
    );
  }
}
