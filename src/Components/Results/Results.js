import React from "react";
import CompareSteps from "../../Components/CompareSteps/CompareSteps";
import { FormGroup, Label, Input } from "reactstrap";
import CSS from "./Results.module.css";
import Axios from "../../AxiosInstance";
import {Medical, Auto} from "./ResultCard/ResultCard";

const auto = [
  {
    company_id: 1,
    company_name: "UIC",
    value: 0.024
  },
  {
    company_id: 2,
    company_name: "Jubilee",
    value: 0.025
  },
  {
    company_id: 3,
    company_name: "Askari",
    value: 0.0275
  },
]
const getDepreciation = (year) => {
  let yearCount = new Date().getFullYear() - year;
  if (yearCount > 6)
    yearCount = 6;
  return yearCount * 10;
}
class Results extends React.PureComponent {
  state = { plans: [], sortBy: null, SelectedCompanies: [], changedPlans: [] };
  componentDidMount = () => {
    if (this.props.location.state.link.indexOf("auto") !== -1) {
       let _auto = auto.map(i => {
        let value = this.props.location.state.Value * i.value;
        let depreciation = getDepreciation(this.props.location.state.Year);
        return {
          ...i,
          value,
          depreciation
        }
      })
      this.setState({
        plans: _auto,
        changedPlans: _auto
      })
    } else
      Axios.get(this.props.location.state.link + ".json").then(response => {
        this.setState(() => {
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
    let Component;
    let type = this.props.location.state.link.split("/")[2];
    switch (type) {
      case "auto":
        Component = Auto;
        break;
      case "health":
        Component = Medical;
        break;
      default:
        Component = <div/>;
    }
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
                  return <Component data={item} key={key} />;
                } else {
                  if (
                    this.state.SelectedCompanies.indexOf(item.company_name) !==
                    -1
                  ) {
                    return <Component data={item} key={key} />;
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
