import React from "react";
import CSS from "./Login.module.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Button, Form, Label, Input, Media } from "reactstrap";
import Family from "../../Images/family.png";
import Facebook from "../../Images/icon-facebook.png";
import Google from "../../Images/icon-google.png";
import LinkedIn from "../../Images/icon-linkedin.png";
import { connect } from "react-redux";
import Modal from "../../Components/Modal/Modal";
import * as actions from "../../Redux/actions";
const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(actions.logIn()),
    logOut: () => dispatch(actions.logOut()),
    loginFacebook: () => dispatch(actions.loginFacebook()),
    loginGoogle: () => dispatch(actions.loginGoogle()),
    signInEmail: (user, pass) => dispatch(actions.signInEmail(user, pass)),
    signUpEmail: (user, pass) => dispatch(actions.signUpEmail(user, pass)),
    resetError: () => dispatch(actions.resetErrorCode())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    class extends React.PureComponent {
      state = {
        SignUp: false,
        firstName: "",
        MobileNumber: "",
        password: "",
        confirmPassword: "",
        Email: ""
      };
      LoginHandler = () => {
        this.props.signInEmail(this.state.Email, this.state.password);
      };
      SignUpHandler = () => {
        this.props.signUpEmail(this.state.Email, this.state.password);
      };
      isEmailValid = () => {
        const arr = this.state.Email.split("@");
        if (arr.length < 2) return false;
        else if (arr[0].length && arr[1].length) return true;
        return false;
      };
      render() {
        const signUpPage = (
          <React.Fragment>
            <div className={CSS.form}>
              <div className={CSS.connectApp}>
                <p>Start through a social media account</p>
                <div className={CSS.connectIcons}>
                  <Media
                    src={Facebook}
                    className={CSS.socialIcons}
                    onClick={this.props.loginFacebook}
                  />
                  <Media
                    src={Google}
                    className={CSS.socialIcons}
                    onClick={this.props.loginGoogle}
                  />
                  <Media
                    src={LinkedIn}
                    className={CSS.socialIcons}
                    onClick={() =>
                      this.props.history.push("/Login/LinkedInPopUp")
                    }
                  />
                </div>
              </div>
              <Form className={CSS.innerForm}>
                <div style={{ width: "70%" }}>
                  <Label for="email">
                    <h6>Email Address</h6>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email here"
                    value={this.state.Email}
                    onChange={event =>
                      this.setState({ Email: event.target.value })
                    }
                  />
                </div>
                <div>
                  <Label for="firstName">
                    <h6>First Name</h6>
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={this.state.firstName}
                    onChange={event =>
                      this.setState({ firstName: event.target.value })
                    }
                  />
                </div>
              </Form>
              <Form className={CSS.innerForm}>
                <div>
                  <Label for="password">
                    <h6>Password</h6>
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    autoComplete="on"
                    id="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>
                <div>
                  <Label for="confirm_password">
                    <h6>Confirm Password</h6>
                  </Label>
                  <Input
                    type="password"
                    name="confirm_password"
                    autoComplete="on"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={event =>
                      this.setState({ confirmPassword: event.target.value })
                    }
                  />
                </div>
              </Form>
              <Form className={CSS.innerForm}>
                <div>
                  <Label for="number">
                    <h6>Phone Number</h6>
                  </Label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Enter phone number"
                    value={this.state.MobileNumber}
                    onChange={event =>
                      this.setState({ MobileNumber: event.target.value })
                    }
                  />
                </div>
              </Form>
              <div className={CSS.buttonDiv}>
                <Button
                  className={CSS.button}
                  disabled={
                    !(
                      this.isEmailValid() &&
                      this.state.firstName &&
                      this.state.MobileNumber &&
                      this.state.password.length > 6 &&
                      this.state.password === this.state.confirmPassword
                    )
                  }
                  onClick={this.SignUpHandler}
                >
                  {this.state.password.length <= 6
                    ? "Password too weak"
                    : this.state.confirmPassword.length === 0
                    ? "Confirm Password"
                    : this.state.password !== this.state.confirmPassword
                    ? "Passwords do not match"
                    : "Sign up"}
                </Button>
              </div>
            </div>
          </React.Fragment>
        );
        const loginPage = (
          <React.Fragment>
            <div className={CSS.form}>
              <div className={CSS.connectApp}>
                <p>Sign in through a social media account</p>
                <div className={CSS.connectIcons}>
                  <Media
                    src={Facebook}
                    className={CSS.socialIcons}
                    onClick={this.props.loginFacebook}
                  />
                  <Media
                    src={Google}
                    className={CSS.socialIcons}
                    onClick={this.props.loginGoogle}
                  />
                  <Media
                    src={LinkedIn}
                    className={CSS.socialIcons}
                    onClick={() =>
                      this.props.history.push("/Login/LinkedInPopUp")
                    }
                  />
                </div>
              </div>
              <Form className={CSS.innerForm}>
                <div style={{ width: "70%" }}>
                  <Label for="email">
                    <h6>Email Address</h6>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email here"
                    value={this.state.Email}
                    onChange={event =>
                      this.setState({ Email: event.target.value })
                    }
                  />
                </div>
                <div>
                  <Label for="password">
                    <h6>Password</h6>
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    autoComplete="on"
                    id="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>
              </Form>
              <div className={CSS.buttonDiv}>
                <Button
                  className={CSS.button}
                  disabled={!(this.isEmailValid() && this.state.password)}
                  onClick={this.LoginHandler}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className={CSS.forgotPass}>
              <p
                onClick={() =>
                  this.props.history.push("/Login/forgot-password")
                }
              >
                Forgot your password?
              </p>
            </div>
          </React.Fragment>
        );
        const left = (
          <div className={CSS.left}>
            <h3>Start your application form</h3>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> Online documents of any
              insurnance company through our secure platform
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> Get personalized help
              with claims and any issue from our dedicated team
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> We handle all the hassle,
              no need to deal with an insurance company representative
            </p>
            <Media src={Family} className={CSS.image} />
          </div>
        );
        const right = (
          <div className={CSS.right}>
            <div className={CSS.header}>
              <h6
                className={this.state.SignUp ? null : CSS.selectedColor}
                onClick={() => this.setState({ SignUp: false })}
              >
                EXISTING CUSTOMER
              </h6>
              <h6
                className={this.state.SignUp ? CSS.selectedColor : null}
                onClick={() => this.setState({ SignUp: true })}
              >
                NEW CUSTOMER
              </h6>
            </div>
            {this.state.SignUp ? signUpPage : loginPage}
          </div>
        );
        return (
          <div className={CSS.main}>
            <Modal />
            {left}
            {right}
          </div>
        );
      }
    }
  )
);
