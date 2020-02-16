import React from "react";
import CSS from "./Travel.module.css";
import Countries from "./Countries";
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
import SymbolTravel from "../../../Images/symbol-travel.png";
export default class extends React.Component {
  state = {
    PlanType: "",
    Q2DropDownOpen: false,
    Q4DropDownOpen: false,
    country: null,
    medical: null,
    stay: null,
    PhoneNumber: ""
  };
  Q2DropDownSwitch = () =>
    this.setState(state => {
      return { Q2DropDownOpen: !state.Q2DropDownOpen };
    });

  Q4DropDownSwitch = () =>
    this.setState(state => {
      return { Q4DropDownOpen: !state.Q4DropDownOpen };
    });
  PlanHandler = props => this.setState({ PlanType: props });
  PhoneChangeHandler = event => this.setState({ PhoneNumber: event });
  findPlans = () => {
    console.log(this.state);
  };
  render() {
    let question1 = null,
      question2 = null,
      question3 = null,
      question4 = null,
      question5 = null,
      accept = null;
    if (this.state.stay !== null) {
      question5 = (
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
    if (this.state.medical !== null) {
      const staySelect =
        this.state.stay !== null ? `${this.state.stay} Months` : "SELECT";
      question4 = (
        <React.Fragment>
          <QuestionBubble
            text="Your plan will start from the date of your departure. Check your visa requirements for minimum duration."
            title="How long will your travel last?"
          />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q4DropDownOpen}
              toggle={this.Q4DropDownSwitch}
            >
              <DropdownToggle className={CSS.button}>
                {staySelect}
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
                <DropdownItem header>Duration</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.setState({ stay: 6 })}>
                  6 Months
                </DropdownItem>

                <DropdownItem onClick={() => this.setState({ stay: 12 })}>
                  12 Months
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </AnswerBubble>
        </React.Fragment>
      );
    }
    if (this.state.country !== null)
      question3 = (
        <React.Fragment>
          <QuestionBubble
            title="Do you require travel medical insurance for your Visa application?"
            text="Your embassy might ask for a £30,000 health coverage for your application."
          />
          <AnswerBubble>
            <Button
              className={CSS.button}
              onClick={() => this.setState({ medical: true })}
            >
              YES
            </Button>
            <Button
              className={CSS.button}
              onClick={() => this.setState({ medical: false })}
            >
              NO
            </Button>
          </AnswerBubble>
        </React.Fragment>
      );

    const countrySelect =
      this.state.country !== null ? `${this.state.country}` : "SELECT";
    if (this.state.PlanType)
      question2 = (
        <React.Fragment>
          <QuestionBubble
            title="Where are you traveling to?"
            text="In case of multiple countries, select the first destination."
          />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpen}
              toggle={this.Q2DropDownSwitch}
            >
              <DropdownToggle className={CSS.button}>
                {countrySelect}
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
                <DropdownItem header>Country</DropdownItem>
                <DropdownItem divider />
                {Countries.map((item, key) => (
                  <DropdownItem
                    onClick={() => this.setState({ country: item })}
                  >
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </AnswerBubble>
        </React.Fragment>
      );
    question1 = (
      <React.Fragment>
        <QuestionBubble text="Purpose of your travels?" />
        <AnswerBubble>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("VISIT")}
          >
            VISIT
          </Button>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("STUDENT")}
          >
            STUDENT
          </Button>
        </AnswerBubble>
      </React.Fragment>
    );
    return (
      <div>
        <CompareSteps step={1} />
        <div className={CSS.main}>
          <div className={CSS.image}>
            <Media src={SymbolTravel} />
            <div className={CSS.vertLine}></div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <h4>Travel insurance finder</h4>
              <p>Answer below for relevant plans</p>
            </div>
            {question1}
            {question2}
            {question3}
            {question4}
            {question5}
            {accept}
          </div>
        </div>
      </div>
    );
  }
}
