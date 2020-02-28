import React from "react";
import CompareSteps from "../../Components/CompareSteps/CompareSteps";
import { FormGroup, Label, Input } from "reactstrap";
import CSS from "./Results.module.css";
import Axios from "../../AxiosInstance";
import JubileeGeneral from "../../Images/jgi.png";
class Results extends React.PureComponent {
  state = { plans: null };
  componentDidMount() {
    console.log(this.props.location.state);
    Axios.get(this.props.location.state.link + ".json").then(response =>
      this.setState({ plans: response.data })
    );
  }
  componentDidUpdate() {
    console.log(this.state);
  }
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
                  <Input type="radio" name="radio1" /> Recommended
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Cheapest
                </Label>
              </FormGroup>
            </div>
            <div className={CSS.barrier} />
            <div>
              <h6>Filter</h6>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Jubilee Insurance
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Allianz EFU Insurance
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> TPL Life Insurance
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> UIC Takaful Insurance
                </Label>
              </FormGroup>
            </div>
          </div>
          <div className={CSS.resultcards}></div>
        </div>
      </React.Fragment>
    );
  }
}
export default Results;
