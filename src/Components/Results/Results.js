import React from "react";
import CompareSteps from "../../Components/CompareSteps/CompareSteps";
import { FormGroup, Label, Input } from "reactstrap";
import CSS from "./Results.module.css";
import Axios from "../../AxiosInstance";
import ResultCard from "./ResultCard/ResultCard";
import JubileeGeneral from "../../Images/jgi.png";
class Results extends React.PureComponent {
  state = { plans: [], sortBy: null, SelectedCompanies: [], changedPlans: [] };
  componentDidMount() {
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
  toggleCompany = value => {
    let index = this.state.SelectedCompanies.indexOf(value);
    const SelectedCompanies = [...this.state.SelectedCompanies];
    if (index === -1) {
      SelectedCompanies.push(value);
    } else {
      SelectedCompanies.splice(index, 1);
    }
    this.setState({ SelectedCompanies });
  };
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
                      <Input
                        type="checkbox"
                        value={item}
                        checked={
                          this.state.SelectedCompanies.indexOf(item) !== -1
                        }
                        onChange={() => this.toggleCompany(item)}
                      />{" "}
                      {item}
                    </Label>
                  </FormGroup>
                ))}
            </div>
          </div>
          <div className={CSS.resultcards}>
            {this.state.changedPlans &&
              this.state.changedPlans.map((item, key) => {
                if (!this.state.SelectedCompanies.length) {
                  return <ResultCard data={item} key={key} />;
                } else {
                  if (
                    this.state.SelectedCompanies.indexOf(item.company_name) !==
                    -1
                  ) {
                    return <ResultCard data={item} key={key} />;
                  } else {
                    return null;
                  }
                }
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Results;
