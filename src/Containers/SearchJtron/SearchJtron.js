import React from "react";
import CSS from "./SearchJtron.module.css";
import {
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

export default class extends React.Component {
  state = {
    SearchVal: ""
  };
  changeValue = event => {
    this.setState({ SearchVal: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Jumbotron className={CSS.main}>
        <h1>See what's new in the insurance world</h1>
        <Form className={CSS.searchBox}>
          <FormGroup>
            <Label for="SearchBox" hidden>
              Search
            </Label>
            <InputGroup>
              <Input
                type="text"
                id="SearchBox"
                placeholder="Type here"
                value={this.state.SearchVal}
                onChange={this.changeValue}
              />
              <InputGroupAddon addonType="append">
                <Button className={CSS.Button} onClick={this.onSubmit}>
                  SEARCH!
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </Jumbotron>
    );
  }
}
