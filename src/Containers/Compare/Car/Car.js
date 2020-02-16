import React from "react";
import CSS from "./Car.module.css";
import {
  Media,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";
import QuestionBubble from "../../../Components/QuestionBubble/QuestionBubble";
import AnswerBubble from "../../../Components/AnswerBubble/AnswerBubble";
import CompareSteps from "../../../Components/CompareSteps/CompareSteps";
import SymbolAuto from "../../../Images/symbol-auto.png";
export default class extends React.Component {
  state = {
    Q1DropDownOpen: false,
    Q2DropDownOpen: false,
    Q3DropDownOpen: false,
    Q4DropDownOpen: false,
    Manufacturer: null,
    Model: null,
    Year: null,
    Value: 0,
    PhoneNumber: ""
  };
  Q1DropDownSwitch = () =>
    this.setState(state => {
      return { Q1DropDownOpen: !state.Q1DropDownOpen };
    });
  Q2DropDownSwitch = () =>
    this.setState(state => {
      return { Q2DropDownOpen: !state.Q2DropDownOpen };
    });
  Q3DropDownSwitch = () =>
    this.setState(state => {
      return { Q3DropDownOpen: !state.Q3DropDownOpen };
    });

  Q4DropDownSwitch = () =>
    this.setState(state => {
      return { Q4DropDownOpen: !state.Q4DropDownOpen };
    });
  carModel = props => this.setState({ Model: props, Year: null, Value: 0 });
  carYear = props => this.setState({ Year: props, Value: 0 });
  carManufacturer = props =>
    this.setState({
      Manufacturer: props,
      Model: null,
      Year: null,
      Value: 0
    });
  changeValue = event => this.setState({ Value: event });
  findPlans = () => {
    console.log(this.state);
  };
  ManufacturerList = ["TOYOTA", "HONDA", "SUZUKI", "FAW", "IMPORTED"];
  ModelList = {
    TOYOTA: [
      "Corolla XLi",
      "Corolla GLi",
      "Corolla Altis",
      "Corolla Altis Grande",
      "Hilux Vigo Champ",
      "Fortuner",
      "Revo"
    ],
    HONDA: ["City", "Civic", "BRV"],
    SUZUKI: [
      "Cultus",
      "Ciaz",
      "Swift",
      "Wagon R",
      "Mehran",
      "Bolan",
      "Ravi",
      "Vitara",
      "Alto"
    ],
    FAW: ["V2", "XPV"],
    IMPORTED: [
      "Toyota Vitz",
      "Toyota Passo",
      "Daihatsu Mira",
      "Daihatsu Move",
      "Toyota Prius",
      "Toyota Aqua",
      "Toyota Axio",
      "Toyota Belta",
      "Toyota Fielder",
      "Toyota Land Cruiser",
      "Toyota Prado",
      "Toyota Hilux Vigo",
      "Toyota Harrier",
      "Toyota Grand Cruiser",
      "Toyota Lexus",
      "Suzuki Every",
      "Suzuki Hustler",
      "Suzuki Jimny",
      "Honda Vezel",
      "Honda Fit",
      "Honda Freed",
      "Honda Insight",
      "Honda Life",
      "Honda NBox",
      "Honda Zest",
      "Other Saloons",
      "Other 4x4 Vehicles"
    ]
  };

  render() {
    let question1 = null,
      question2 = null,
      question3 = null,
      question4 = null,
      question5 = null,
      accept = null;

    if (this.state.Value !== 0) {
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

    if (this.state.Year != null) {
      question4 = (
        <React.Fragment>
          <QuestionBubble
            title="What is the current market value of your car?"
            text="You can give an estimate value. Please note that if you provide a low value, you may get under insured."
          />
          <AnswerBubble>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>PKR</InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Type value here"
                value={this.state.Value}
                onChange={event => this.changeValue(event.target.value)}
              />
            </InputGroup>
          </AnswerBubble>
        </React.Fragment>
      );
    }
    if (this.state.Model != null) {
      const Years = [parseInt(new Date().getFullYear())];
      for (let i = 1; i < 20; i++) {
        Years.push(Years[Years.length - 1] - 1);
      }
      const YearSelect =
        this.state.Year != null ? `${this.state.Year}` : "SELECT YEAR";
      question3 = (
        <React.Fragment>
          <QuestionBubble text="What is the year of manufacturing of your car?" />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q3DropDownOpen}
              toggle={this.Q3DropDownSwitch}
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
                <DropdownItem header>SELECT YEAR</DropdownItem>
                <DropdownItem divider />
                {Years.map((item, key) => (
                  <DropdownItem onClick={() => this.carYear(item)}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </ButtonDropdown>
          </AnswerBubble>
        </React.Fragment>
      );
    }
    const dropDownItems = [];
    for (let i = 1; i !== 60; i++)
      dropDownItems.push(
        <DropdownItem onClick={() => this.PlanAge(i)}>{i} Years</DropdownItem>
      );
    const makeSelect =
      this.state.Manufacturer != null
        ? `${this.state.Manufacturer}`
        : "SELECT MAKE";

    const modelSelect =
      this.state.Model != null ? `${this.state.Model}` : "SELECT MODEL";
    if (this.state.Manufacturer)
      question2 = (
        <React.Fragment>
          <QuestionBubble text="What is the model of your car?" />
          <AnswerBubble>
            <ButtonDropdown
              isOpen={this.state.Q2DropDownOpen}
              toggle={this.Q2DropDownSwitch}
            >
              <DropdownToggle className={CSS.button}>
                {modelSelect}
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
                <DropdownItem header>SELECT MAKE</DropdownItem>
                <DropdownItem divider />
                {this.ModelList[this.state.Manufacturer].map((item, key) => (
                  <DropdownItem onClick={() => this.carModel(item)}>
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
        <QuestionBubble text="Who is the manufacturer of your car?" />
        <AnswerBubble>
          <ButtonDropdown
            isOpen={this.state.Q1DropDownOpen}
            toggle={this.Q1DropDownSwitch}
          >
            <DropdownToggle className={CSS.button}>{makeSelect}</DropdownToggle>
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
              <DropdownItem header>SELECT MAKE</DropdownItem>
              <DropdownItem divider />
              {this.ManufacturerList.map((item, key) => (
                <DropdownItem onClick={() => this.carManufacturer(item)}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </ButtonDropdown>
        </AnswerBubble>
      </React.Fragment>
    );
    return (
      <div>
        <CompareSteps step={1} />
        <div className={CSS.main}>
          <div className={CSS.image}>
            <Media src={SymbolAuto} />
            <div className={CSS.vertLine}></div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <h4>Auto insurance finder</h4>
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
