import React from "react";
import CSS from "./Life.module.css";
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
import SymbolLife from "../../../Images/symbol-life.png";
export default class extends React.Component {
  state = {
    PlanType: null,
    Age: {
      Year: null,
      Month: null,
      Day: null
    },
    Salary: null,
    Q2DropDownOpenDay: false,
    Q2DropDownOpenMonth: false,
    Q2DropDownOpenYear: false,
    Q3DropDownOpen: false,
    PhoneNumber: ""
  };
  Q2DropDownSwitchDay = () =>
    this.setState(state => {
      return { Q2DropDownOpenDay: !state.Q2DropDownOpenDay };
    });
  Q2DropDownSwitchMonth = () =>
    this.setState(state => {
      return { Q2DropDownOpenMonth: !state.Q2DropDownOpenMonth };
    });
  Q2DropDownSwitchYear = () =>
    this.setState(state => {
      return { Q2DropDownOpenYear: !state.Q2DropDownOpenYear };
    });
  Q3DropDownSwitch = () =>
    this.setState(state => {
      return { Q3DropDownOpen: !state.Q3DropDownOpen };
    });
  PlanHandler = props => this.setState({ PlanType: props });
  PlanAge = props => this.setState({ PlanAge: props });
  PhoneChangeHandler = event => this.setState({ PhoneNumber: event });
  SalaryHandler = event => this.setState({ Salary: event });
  findPlans = () => {
    console.log(this.state);
  };
  render() {
    let question1 = null,
      question2 = null,
      question3 = null,
      question4 = null,
      accept = null;

    if (this.state.Salary != null) {
      question4 = (
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

    const SalarySelect = this.state.Salary
      ? `${this.state.Salary.low} - ${this.state.Salary.high}`
      : "SELECT";
    const dropDownItemsSalary = [
      { low: 10000, high: 40000 },
      { low: 40000, high: 80000 },
      { low: 80000, high: 120000 },
      { low: 120000, high: 160000 },
      { low: 160000, high: 200000 },
      { low: 200000, high: 280000 },
      { low: 280000, high: 360000 },
      { low: 360000, high: 440000 },
      { low: 440000, high: 520000 }
    ];
    if (this.state.Age.Day && this.state.Age.Month && this.state.Age.Year) {
      question3 = (
        <React.Fragment>
          <QuestionBubble text="Life Insurance is a long-term financial commitment. It is important that you are comfortably able to afford your insurance payments. For this select your monthly income." />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q3DropDownOpen}
              toggle={this.Q3DropDownSwitch}
            >
              <DropdownToggle className={CSS.button}>
                {SalarySelect}
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
                <DropdownItem header>Salary</DropdownItem>
                <DropdownItem divider />
                {dropDownItemsSalary.map((item, key) => (
                  <DropdownItem
                    onClick={() => this.setState({ Salary: item })}
                    key={key}
                  >
                    {item.low} to {item.high}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </AnswerBubble>
        </React.Fragment>
      );
    }
    if (this.state.Income != null) {
      question4 = (
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
    const dropDownItemsDay = [];
    for (let i = 1; i <= 31; i++)
      dropDownItemsDay.push(
        <DropdownItem
          onClick={() =>
            this.setState(state => {
              return {
                ...state,
                Age: { ...state.Age, Day: i }
              };
            })
          }
          key={i}
        >
          {i}
        </DropdownItem>
      );
    const dropDownItemsMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const dropDownItemsYear = [];
    for (let i = 1962; i <= 1996; i++) dropDownItemsYear.push(i);
    const DaySelect =
      this.state.Age.Day !== null ? `${this.state.Age.Day}` : "DAY";

    const MonthSelect =
      this.state.Age.Month !== null ? `${this.state.Age.Month}` : "MONTH";

    const YearSelect =
      this.state.Age.Year !== null ? `${this.state.Age.Year}` : "YEAR";

    if (this.state.PlanType)
      question2 = (
        <React.Fragment>
          <QuestionBubble text="Your life insurance plan is calculated based on your age. Tell us your date of birth." />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpenDay}
              toggle={this.Q2DropDownSwitchDay}
            >
              <DropdownToggle className={CSS.button}>
                {DaySelect}
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
                {dropDownItemsDay}
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpenMonth}
              toggle={this.Q2DropDownSwitchMonth}
            >
              <DropdownToggle className={CSS.button}>
                {MonthSelect}
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
                {dropDownItemsMonth.map((item, key) => (
                  <DropdownItem
                    onClick={() =>
                      this.setState(state => {
                        return {
                          ...state,
                          Age: { ...state.Age, Month: item }
                        };
                      })
                    }
                    key={key}
                  >
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpenYear}
              toggle={this.Q2DropDownSwitchYear}
            >
              <DropdownToggle className={CSS.button}>
                {YearSelect}
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
                {dropDownItemsYear.map((item, key) => (
                  <DropdownItem
                    onClick={() =>
                      this.setState(state => {
                        return {
                          ...state,
                          Age: { ...state.Age, Year: item }
                        };
                      })
                    }
                    key={key}
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
        <QuestionBubble text="Life insurance is a good idea if:" />
        <QuestionBubble text=" You are looking for long term savings" />
        <QuestionBubble text="You worry about what might happen to your family in case you die" />
        <QuestionBubble text="So, what are you interested in?" />
        <AnswerBubble>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("LONGTERM")}
          >
            Long Term financial savings
          </Button>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("DEATHCOVERAGE")}
          >
            Death Coverage
          </Button>
          <Button
            className={CSS.button}
            onClick={() => this.PlanHandler("BOTH")}
          >
            Both
          </Button>
        </AnswerBubble>
      </React.Fragment>
    );
    return (
      <div>
        <CompareSteps step={1} />
        <div className={CSS.main}>
          <div className={CSS.image}>
            <Media src={SymbolLife} />
            <div className={CSS.vertLine}></div>
          </div>
          <div>
            <div>
              <h4>Life insurance finder</h4>
              <p>Answer below for relevant plans</p>
            </div>
            {question1}
            {question2}
            {question3}
            {question4}
            {accept}
          </div>
        </div>
      </div>
    );
  }
}
