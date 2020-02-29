import React from "react";
import CompareSteps from "../../Components/CompareSteps/CompareSteps";
import { FormGroup, Label, Input } from "reactstrap";
import CSS from "./Results.module.css";
import Axios from "../../AxiosInstance";
import ResultCard from "./ResultCard/ResultCard";
import JubileeGeneral from "../../Images/jgi.png";
class Results extends React.PureComponent {
  state = { plans: null, sortBy: "Recommended" };
  componentDidMount() {
    console.log(this.props.location.state);
    Axios.get(this.props.location.state.link + ".json").then(response => {
      this.setState(state => {
        let arr = [];
        if (response.data) {
          response.data.map(item => arr.push(item.company_name));
        }
        arr = [...new Set(arr)];
        return {
          companies: [...arr],
          changedPlans: response.data,
          plans: response.data
        };
      });
    });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  sortBy = value => {
    this.setState(state => {
      let arr = state.plans.sort((left, right) => {
        return parseFloat(left[value]) - parseFloat(right[value]);
      });
      return {
        ...state,
        changedPlans: [...arr],
        sortBy: value
      };
    });
  };
  render() {
    return (
      <React.Fragment>
        <CompareSteps step={2} />
        <div className={CSS.main}>
          <div className={CSS.filters}>
            <div>
              <h6>Sort by</h6>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="sort"
                    value="priority"
                    checked={this.state.sortBy === "priority"}
                    onChange={() => this.sortBy("priority")}
                  />{" "}
                  Recommended
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="sort"
                    value="value"
                    checked={this.state.sortBy === "value"}
                    onChange={() => this.sortBy("value")}
                  />{" "}
                  Cheapest
                </Label>
              </FormGroup>
            </div>
            <div className={CSS.barrier} />
            <div>
              {this.state.companies && <h6>Filter</h6>}
              {this.state.companies &&
                this.state.companies.map((item, key) => (
                  <FormGroup check key={key}>
                    <Label check>
                      <Input type="checkbox" /> {item}
                    </Label>
                  </FormGroup>
                ))}
            </div>
          </div>
          <div className={CSS.resultcards}>
            {this.state.changedPlans &&
              this.state.changedPlans.map((item, key) => (
                <ResultCard data={item} key={key} />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Results;
