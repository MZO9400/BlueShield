import React from "react";
import { Form, Label, Input, Button } from "reactstrap";
import CSS from "./ForgotPassword.module.css";
export default class extends React.Component {
  state = {
    Email: ""
  };

  isEmailValid = () => {
    const arr = this.state.Email.split("@");
    if (arr.length < 2) return false;
    else if (arr[0].length && arr[1].length) return true;
    return false;
  };
  render() {
    return (
      <div className={CSS.main}>
        <Form className={CSS.form}>
          <Label for="email">
            <h6>E-Mail Address</h6>
          </Label>
          <Input
            id="email"
            type="email"
            value={this.state.Email}
            onChange={e => this.setState({ Email: e.target.value })}
          />
        </Form>
        <div className={CSS.buttonDiv}>
          <Button className={CSS.button} disabled={!this.isEmailValid()}>
            SEND PASSWORD RESET LINK
          </Button>
        </div>
      </div>
    );
  }
}
